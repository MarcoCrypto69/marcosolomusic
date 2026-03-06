module.exports = async function handler(req, res) {
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
        to: ['patriote521@gmail.com'],
        reply_to: email,
        subject: `Demande de booking — ${nom}`,
        html: `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;overflow:hidden;border:1px solid rgba(245,166,35,0.3);">
        <tr><td align="center" style="background:#0a0a0a;padding:24px 0 16px;">
          <img src="https://marcosolomusic.ca/logohero.png" width="200" alt="Marco Solo Music" style="display:block;">
        </td></tr>
        <tr><td style="padding:8px 0;background:#f5a623;"></td></tr>
        <tr><td style="padding:32px 40px;">
          <h2 style="color:#f5a623;font-size:20px;margin:0 0 24px;">🎸 Nouvelle demande de booking</h2>
          <table width="100%" cellpadding="8" cellspacing="0">
            <tr><td style="color:#999;font-size:13px;width:130px;">Nom</td><td style="color:#fff;font-size:15px;">${nom}</td></tr>
            <tr><td style="color:#999;font-size:13px;">Courriel</td><td style="color:#fff;font-size:15px;"><a href="mailto:${email}" style="color:#f5a623;">${email}</a></td></tr>
            <tr><td style="color:#999;font-size:13px;">Téléphone</td><td style="color:#fff;font-size:15px;">${telephone || '—'}</td></tr>
            <tr><td style="color:#999;font-size:13px;">Type</td><td style="color:#fff;font-size:15px;">${type || '—'}</td></tr>
            <tr><td style="color:#999;font-size:13px;">Date</td><td style="color:#fff;font-size:15px;">${date || '—'}</td></tr>
            <tr><td style="color:#999;font-size:13px;">Lieu</td><td style="color:#fff;font-size:15px;">${lieu || '—'}</td></tr>
            <tr><td style="color:#999;font-size:13px;vertical-align:top;">Message</td><td style="color:#fff;font-size:15px;">${message || '—'}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 40px;background:#0a0a0a;text-align:center;">
          <p style="color:#555;font-size:12px;margin:0;">marcosolomusic.ca</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
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
