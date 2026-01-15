// Service to handle message operations and WhatsApp integration

export const sendMessageWithWhatsApp = async (data) => {
  try {
    // Save message to MongoDB database
    const dbResponse = await fetch('/api/visitormessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!dbResponse.ok) {
      throw new Error('Failed to save message to database')
    }

    // Send to WhatsApp via Twilio
    const whatsappResponse = await fetch('/api/whatsapp/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const whatsappResult = await whatsappResponse.json()

    if (!whatsappResponse.ok) {
      throw new Error(whatsappResult.error || 'Failed to send to WhatsApp')
    }

    return {
      success: true,
      message: 'Message saved to database and sent to WhatsApp successfully',
      dbSaved: true,
      whatsappSent: true
    }
  } catch (error) {
    console.error('Error in message service:', error)
    return {
      success: false,
      message: error.message,
      dbSaved: false,
      whatsappSent: false
    }
  }
}
