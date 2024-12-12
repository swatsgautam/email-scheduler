const nodemailer = require('nodemailer');
const Email = require('../models/Email');
const cron = require('node-cron');
require('dotenv').config();

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Send an email function
const sendEmail = async (email) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Your email address (e.g., Gmail)
        to: email.recipient,  // Recipient email
        subject: email.subject,  // Email subject
        text: email.body,  // Email body
    };

    try {
        console.log(`Sending email to: ${email.recipient}`);
        
        const info = await transporter.sendMail(mailOptions);
        
        // Log email sent successfully
        console.log('Email sent successfully: ', info.response);
        
        // Update the status to "sent" after email is successfully sent
        email.status = 'sent';
        await email.save(); // Save status to database
    } catch (error) {
        console.error('Error sending email:', error);

        // Update status to failed if email fails
        email.status = 'failed';
        await email.save(); // Save failed status to database
    }
};


// Schedule emails
const scheduleEmails = () => {
    cron.schedule('* * * * *', async () => { // Runs every minute
        console.log('Checking for emails to send...');
        
        // Find all emails that are 'pending' and have sendAt time <= current time
        const emails = await Email.find({
            status: 'pending',
            sendAt: { $lte: new Date() }
        });

        // Loop through each email and attempt to send
        emails.forEach(async (email) => {
            console.log(`Scheduling email to ${email.recipient} at ${email.sendAt}`);
            await sendEmail(email);  // Send the email
        });
    });
};


module.exports = { scheduleEmails };
