const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const dev = app.get('env') !== 'production';

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
} else {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  let error = '';
  // Error check for empty fields
  if (!email) error = 'Email field must be populated.';
  else if (!name) error = 'Name must be populated.';
  else if (!message) error = 'Message must be populated.';
  else if (!process.env.SENDGRID_API_KEY) error = 'SENDGRID_API_KEY not found';
  if (error) {
    res.send({ success: false, error });
  } else {
    // Create message
    const msg = {
      to: 'adamripley@gmail.com',
      from: req.body.email,
      subject: 'Hi there!',
      text: req.body.message,
    };

    // Send message
    sgMail.send(msg)
      .then(() => res.send({ success: true }))
      .catch((sendgridError) => {
        res.send({ success: false, error: sendgridError.message });
      });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server started!');
});
