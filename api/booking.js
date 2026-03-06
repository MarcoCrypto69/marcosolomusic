export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nom, email, telephone, type, date, lieu, message } = req.body;

  if (!nom || !email) return res.status(400).json({ error: 'Champs requis manquants' });

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Booking <booking@marcosolomusic.ca>',
        to: ['info@marcosolomusic.ca'],
        reply_to: email,
        subject: `Demande de booking — ${nom}`,
        html: `
          <h2>Nouvelle demande de booking</h2>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Courriel:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone || '—'}</p>
          <p><strong>Type d'événement:</strong> ${type || '—'}</p>
          <p><strong>Date:</strong> ${date || '—'}</p>
          <p><strong>Lieu:</strong> ${lieu || '—'}</p>
          <p><strong>Message:</strong> ${message || '—'}</p>
        `,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return res.status(500).json({ error: err });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
