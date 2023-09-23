const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client();

// Set up an event listener to handle the QR code
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Set up an event listener for when the client is ready
client.on('ready', () => {
  // The client is now ready to send messages

  // Replace '393331234561@c.us' with the recipient's phone number
  const recipient = '393331234561@c.us';

  // Replace 'Hello World!' with the message you want to send
  const message = 'Hello World!';

  // Send the message
  client.sendMessage(recipient, message)
    .then((response) => {
      console.log('Message sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
});

// Initialize the WhatsApp client
client.initialize();
