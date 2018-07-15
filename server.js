const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

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

// Middleware
app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
app.use(express.static(path.resolve(__dirname, 'build')));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  let error = '';
  if (!email) error = 'Email field must be populated.';
  else if (!name) error = 'Name must be populated.';
  else if (!message) error = 'Message must be populated.';
  else if (!process.env.SENDGRID_API_KEY) error = 'SENDGRID_API_KEY not found';
  if (error) {
    res.send({ success: false, error });
  } else {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'adamripley@gmail.com',
      from: email,
      subject: `Email through personal site from ${name}`,
      text: message,
    };
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
