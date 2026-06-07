import { sendEmail } from './emailjs'

export async function sendContactMessage({ name, email, subject, message }) {
  const templateParams = {
    from_name: name,
    from_email: email,
    subject,
    message,
  }

  try {
    const response = await sendEmail(templateParams)

    if (!response || response.status !== 200) {
      throw new Error('Failed to send message via EmailJS')
    }

    return response
  } catch (error) {
    throw new Error(error.text || error.message || 'Failed to send message')
  }
}
