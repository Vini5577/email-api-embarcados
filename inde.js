const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const config = {
      headers: {
        'ThingSpeak-Alerts-API-Key': 'TAKL9lOzq5BLTwWmkwc',
        'Content-Type': 'application/json',
      },
    };

    const data = {
      subject: 'Projeto IOT - Alteração Realizada',
      body: 'Identificada Alteração no Status da Cela',
    };

    const response = await axios.post('https://api.thingspeak.com/alerts/send', data, config);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorThingSpeak: error.response.statusText  });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});