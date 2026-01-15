# Twilio WhatsApp Setup Instructions

## Step 1: Get Twilio Credentials

1. Go to https://www.twilio.com/console
2. Sign up or log in
3. Copy your **Account SID** and **Auth Token** from the dashboard

## Step 2: Set Up WhatsApp Sandbox (or Production)

### For Testing (Sandbox):
1. Go to https://www.twilio.com/console/sms/whatsapp/sandbox
2. You'll see a WhatsApp sandbox number like `+14155552671`
3. Follow the instructions to join the sandbox:
   - Save the sandbox number to your contacts
   - Send the message they provide to that number
   - Receive a confirmation

### For Production:
- Apply for WhatsApp Business API integration
- Submit your business details to Meta/Facebook
- Get approved (usually takes 5-7 days)

## Step 3: Add to .env.local

Create or update `.env.local` in your project root:

```env
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_FROM=+14155552671
WHATSAPP_NUMBER=+919999999999
```

Replace:
- `your_account_sid_here` - Your Twilio Account SID
- `your_auth_token_here` - Your Twilio Auth Token
- `+14155552671` - Your Twilio WhatsApp sandbox/production number
- `+919999999999` - Your personal WhatsApp number (with country code)

## Step 4: Restart Your App

```bash
npm run dev
```

## Step 5: Test

1. Go to your Contact page
2. Fill out the form with test data
3. Submit
4. Check your WhatsApp - you should receive the message!

---

## Example WhatsApp Message Format:

```
*New Contact Form Submission*

📝 *Name:* John Doe
📧 *Email:* john@example.com
💼 *Skill:* Frontend Developer
💬 *Message:* I'm interested in working with you
```

---

## Troubleshooting:

- **Message not sending?** Check that `WHATSAPP_NUMBER` includes country code (e.g., +91 for India)
- **Auth error?** Verify Account SID and Auth Token are correct
- **Sandbox expired?** Rejoin the sandbox (valid for 72 hours)
- **Check logs:** Look at terminal/console for error messages

---

## Pricing:

- **Twilio Sandbox:** FREE for testing
- **Twilio Production:** ~$0.01 per message (rates vary by country)
- **Meta WhatsApp API:** Message-based pricing

Start with the sandbox to test!
