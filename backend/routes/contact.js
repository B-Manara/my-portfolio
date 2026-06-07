import { Router } from 'express'

const router = Router()

function validateContact({ name, email, message }) {
  const errors = []
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required')
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters')
  return errors
}

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  const errors = validateContact({ name, email, message })
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors })
  }

  // In production: configure nodemailer with your SMTP credentials in .env
  // and send to manar.boulahouanet@gmail.com
  console.log('Contact form submission:', { name, email, message: message.substring(0, 50) })

  res.json({
    success: true,
    message: 'Message received. Manar will get back to you soon!'
  })
})

export default router
