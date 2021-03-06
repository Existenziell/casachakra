import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY)

const sendMail = async (req, res) => {
  const { name, email, message } = req.body

  // Goes to me
  const notificationMsg = {
    to: process.env.NEXT_PUBLIC_MAIL_TO,
    from: process.env.NEXT_PUBLIC_MAIL_FROM,
    subject: `Notification: Inquiry from ${name} - ${email}`,
    text: message,
    html: message
  }

  // Goes to the user
  const confirmationMsg = {
    to: email,
    from: process.env.NEXT_PUBLIC_MAIL_FROM,
    subject: `Confirmation | casachakras.org`,
    text: `Hello ${name},\n\nThis is a confirmation, that your message to casachakras.org has been received successfully.\nWe'll come back to you as soon as possible.\n\nThank you so much.\nCasaChakras`
  }

  try {
    await sgMail.send(notificationMsg)
    await sgMail.send(confirmationMsg)
    res.status(200).json({ message: `Emails have been sent.` })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail
