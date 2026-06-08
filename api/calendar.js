// === Calendrier des shows — proxy serveur iCloud ===
// Récupère le calendrier Apple publié côté serveur (pas de problème CORS)
// et le renvoie en texte iCal avec mise en cache au niveau du edge Vercel.
// Remplace la dépendance aux proxies publics gratuits (codetabs/allorigins)
// qui tombaient régulièrement (503) et faisaient disparaître les shows.

const ICAL_URL = 'https://p108-caldav.icloud.com/published/2/MTkxNzE3MzUwMDE5MTcxN64lgGj6HKmXYeZ4asUyHiuKiXQuuFCGj6teGAq8w7vS';

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);

    const r = await fetch(ICAL_URL, {
      signal: ctrl.signal,
      headers: {
        // iCloud sert le .ics ; certains edges veulent un User-Agent
        'User-Agent': 'MarcoSoloMusic-Calendar/1.0',
        'Accept': 'text/calendar, text/plain, */*',
      },
    });
    clearTimeout(timer);

    if (!r.ok) {
      return res.status(502).json({ error: 'iCloud indisponible', status: r.status });
    }

    const text = await r.text();

    if (!text.includes('BEGIN:VCALENDAR')) {
      return res.status(502).json({ error: 'Réponse iCloud invalide' });
    }

    // Cache edge Vercel : 10 min frais, puis sert le vieux pendant 1h
    // le temps de rafraîchir en arrière-plan -> jamais de page vide.
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(text);
  } catch (e) {
    return res.status(504).json({ error: 'Timeout ou erreur réseau', detail: String(e) });
  }
};
