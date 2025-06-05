const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  // For now, just log the message
  console.log('Contact form submission:', { name, email, message });

  // Uncomment and configure the following to send email using nodemailer
  /*
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
      },
    });

    await transporter.sendMail({
      from: '"Portfolio Contact" <your_email@example.com>',
      to: 'your_email@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
  */

  // Since email sending is commented out, respond success
  res.json({ message: 'Message received (not sent)' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
