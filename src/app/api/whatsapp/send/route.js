// WhatsApp API integration route using Twilio
// File: src/app/api/whatsapp/send/route.js

import twilio from 'twilio'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, skill, message } = body

    // Format message for WhatsApp
    const formattedMessage = `*New Contact Form Submission*\n\n` +
      `📝 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `💼 *Skill:* ${skill}\n` +
      `💬 *Message:* ${message}`

    // Initialize Twilio client
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )

    // Send WhatsApp message via Twilio
    await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${process.env.WHATSAPP_NUMBER}`,
      body: formattedMessage
    })

    return Response.json(
      { success: true, message: 'Message sent to WhatsApp successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('WhatsApp send error:', error)
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
