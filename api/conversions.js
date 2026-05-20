export default async function handler(req, res) {
  // Apenas aceita requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  const { eventName, eventUrl, userAgent, clientIp, fbp, fbc } = req.body;

  // Lendo as variáveis de ambiente configuradas na Vercel
  const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
  const META_PIXEL_ID = process.env.META_PIXEL_ID;

  if (!META_ACCESS_TOKEN || !META_PIXEL_ID) {
    return res.status(500).json({ error: 'Variáveis META_ACCESS_TOKEN ou META_PIXEL_ID ausentes na Vercel.' });
  }

  const currentTimestamp = Math.floor(Date.now() / 1000);

  const payload = {
    data: [
      {
        event_name: eventName || 'Lead',
        event_time: currentTimestamp,
        action_source: 'website',
        event_source_url: eventUrl,
        user_data: {
          client_user_agent: userAgent,
          client_ip_address: clientIp || req.headers['x-forwarded-for'] || req.socket.remoteAddress,
          fbp: fbp,
          fbc: fbc
        }
      }
    ]
  };

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('Erro na Meta Conversions API:', data.error);
      return res.status(400).json({ error: data.error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Falha ao se comunicar com a Meta:', error);
    return res.status(500).json({ error: 'Falha interna do servidor.' });
  }
}
