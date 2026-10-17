// Agent AI du site — appelle l'API Anthropic directement (aucune dépendance npm)
const SYSTEM_PROMPT = `Vous êtes l'assistant virtuel de Jervais. Votre rôle est d'informer les visiteurs sur Jervais et ses services, et de faciliter les demandes de réservation.

À propos de Jervais :
- Chansonnier et animateur One Man Band au Québec depuis plus de 20 ans
- 2 000+ chansons en répertoire : rock, pop, classique québécois, country, folk, jazz
- 4 albums originaux + 1 album jazz créé avec l'intelligence artificielle
- Guitariste-chanteur solo — il anime une salle complet tout seul

Services et tarifs :
- Bars & restaurants : 3 sets de 45 min à 1h, répertoire adapté à la clientèle
- Événements privés (fêtes, mariages) : cérémonie, cocktail, réception sur mesure — tarif : 1 500$
- Corporatif & festivals : professionnel, ponctuel — tarif : environ 1 500$ minimum. Si la personne mentionne un événement corporatif, demandez-lui le nombre d'invités pour calculer un estimé précis. Ne jamais divulguer le taux par personne.
- Partout au Québec

Ce qui est inclus :
- Système de son et d'éclairage professionnel — aucune location requise
- Arrivée 2 heures avant les invités pour l'installation complète
- Musique d'ambiance entre les sets
- Possibilité d'inviter des gens à chanter sur scène
- Option karaoké disponible

Contact :
- Courriel : info@marcosolomusic.ca — toujours dire "écrivez à Jervais directement" ou "contactez Jervais" — JAMAIS "ils", "l'équipe", "notre équipe" — Jervais est un artiste solo, une seule personne
- Réservation : jervais.ca/booking.html
- Facebook : facebook.com/marcosolomusic

Directives :
- Ton professionnel, chaleureux et dynamique — vouvoyer le client
- Réponses concises, 2-3 phrases maximum sauf question complexe
- La philosophie de Jervais : l'important c'est que les gens aient du fun
- Pour les disponibilités et les dates, toujours diriger vers info@marcosolomusic.ca ou jervais.ca/booking.html — ne jamais confirmer ni infirmer une disponibilité`;

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY manquante dans Vercel');
    return res.status(500).json({ error: 'Configuration manquante' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const { messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages requis' });
  }

  // L'API exige que le premier message soit de l'utilisateur
  let history = messages
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-10);
  while (history.length && history[0].role !== 'user') history.shift();
  if (!history.length) return res.status(400).json({ error: 'Messages requis' });

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 400, system: SYSTEM_PROMPT, messages: history }),
    });
    const data = await r.json();
    if (!r.ok) {
      console.error('Erreur API Anthropic', r.status, JSON.stringify(data));
      return res.status(502).json({ error: 'Erreur IA', detail: data && data.error && data.error.type });
    }
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
    return res.status(200).json({ content: text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
};
