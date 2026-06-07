const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export async function sendContactMessage({ name, email, message }) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.errors?.join(', ') || 'Failed to send message')
  }

  return data
}

export async function checkHealth() {
  const res = await fetch(`${BASE_URL}/health`)
  return res.json()
}
