import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function validateConfig() {
  const missing = [
    !serviceId && 'VITE_EMAILJS_SERVICE_ID',
    !templateId && 'VITE_EMAILJS_TEMPLATE_ID',
    !publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
  ].filter(Boolean)

  if (missing.length > 0) {
    throw new Error(`EmailJS is not configured. Set ${missing.join(', ')} in your .env file.`)
  }

  return { serviceId, templateId, publicKey }
}

export async function sendEmail(templateParams) {
  const { serviceId, templateId, publicKey } = validateConfig()
  return emailjs.send(serviceId, templateId, templateParams, publicKey)
}
