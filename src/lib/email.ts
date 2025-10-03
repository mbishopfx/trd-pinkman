import nodemailer from 'nodemailer'
import { Lead } from './supabase'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// Email template for contact form submissions
export const createContactEmailTemplate = (lead: Lead) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #374151;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 1px solid #e5e7eb;
        }
        .logo {
          max-width: 200px;
          height: auto;
          margin-bottom: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: -0.025em;
        }
        .header p {
          margin: 8px 0 0 0;
          font-size: 16px;
          color: #6b7280;
        }
        .content {
          padding: 40px 30px;
        }
        .lead-info {
          background-color: #f9fafb;
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
          border-left: 4px solid #d1d5db;
        }
        .info-row {
          display: flex;
          margin-bottom: 12px;
          align-items: flex-start;
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-label {
          font-weight: 600;
          color: #374151;
          min-width: 120px;
          margin-right: 16px;
        }
        .info-value {
          color: #6b7280;
          flex: 1;
        }
        .description-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }
        .description-section h3 {
          margin: 0 0 12px 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }
        .description {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 16px;
          color: #374151;
          line-height: 1.6;
        }
        .services-section {
          margin-top: 20px;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .service-tag {
          background-color: #dbeafe;
          color: #1e40af;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 500;
        }
        .footer {
          background-color: #1f2937;
          color: #ffffff;
          padding: 24px 30px;
          text-align: center;
        }
        .footer p {
          margin: 0;
          font-size: 14px;
          color: #d1d5db;
        }
        .cta-section {
          background-color: #f3f4f6;
          padding: 24px;
          text-align: center;
          margin: 24px 0;
          border-radius: 8px;
        }
        .cta-button {
          display: inline-block;
          background-color: #1f2937;
          color: #ffffff;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin: 0 8px;
        }
        @media (max-width: 600px) {
          .container {
            margin: 0;
            border-radius: 0;
          }
          .content {
            padding: 24px 20px;
          }
          .header {
            padding: 24px 20px;
          }
          .info-row {
            flex-direction: column;
          }
          .info-label {
            margin-bottom: 4px;
            min-width: auto;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="cid:bannerlogo" alt="The Pink Guy" class="logo" />
          <h1>New Contact Form Submission</h1>
          <p>Received on ${currentDate}</p>
        </div>
        
        <div class="content">
          <div class="lead-info">
            <div class="info-row">
              <div class="info-label">Name:</div>
              <div class="info-value">${lead.first_name} ${lead.last_name}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Email:</div>
              <div class="info-value">
                <a href="mailto:${lead.email}" style="color: #2563eb; text-decoration: none;">${lead.email}</a>
              </div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone:</div>
              <div class="info-value">
                <a href="tel:${lead.phone}" style="color: #2563eb; text-decoration: none;">${lead.phone}</a>
              </div>
            </div>
            ${lead.project_type ? `
            <div class="info-row">
              <div class="info-label">Project Type:</div>
              <div class="info-value">${lead.project_type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
            </div>
            ` : ''}
            ${lead.location ? `
            <div class="info-row">
              <div class="info-label">Location:</div>
              <div class="info-value">${lead.location}</div>
            </div>
            ` : ''}
            ${lead.timeline ? `
            <div class="info-row">
              <div class="info-label">Timeline:</div>
              <div class="info-value">${lead.timeline}</div>
            </div>
            ` : ''}
            ${lead.budget ? `
            <div class="info-row">
              <div class="info-label">Budget:</div>
              <div class="info-value">${lead.budget}</div>
            </div>
            ` : ''}
            <div class="info-row">
              <div class="info-label">Source:</div>
              <div class="info-value">${lead.source_page || 'Unknown'} (${lead.form_type || 'contact-form'})</div>
            </div>
            ${lead.referral ? `
            <div class="info-row">
              <div class="info-label">Referral:</div>
              <div class="info-value">${lead.referral}</div>
            </div>
            ` : ''}
          </div>

          ${lead.services && lead.services.length > 0 ? `
          <div class="services-section">
            <h3>Services Requested:</h3>
            <div class="services-list">
              ${lead.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
            </div>
          </div>
          ` : ''}

          <div class="description-section">
            <h3>Project Description:</h3>
            <div class="description">
              ${lead.description.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div class="cta-section">
            <p style="margin-bottom: 16px; color: #374151; font-weight: 600;">Quick Actions:</p>
            <a href="mailto:${lead.email}" class="cta-button">Reply via Email</a>
            <a href="tel:${lead.phone}" class="cta-button">Call Now</a>
          </div>
        </div>

        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} The Pink Guy. All rights reserved.</p>
          <p>This email was automatically generated from your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Send email function
export const sendContactEmail = async (lead: Lead) => {
  try {
    const htmlContent = createContactEmailTemplate(lead)
    
    const mailOptions = {
      from: `"The Pink Guy Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New ${lead.form_type === 'project-management-inquiry' ? 'Project Management' : 'Contact'} Inquiry from ${lead.first_name} ${lead.last_name}`,
      html: htmlContent,
      attachments: [
        {
          filename: 'bannerlogo.png',
          path: './public/bannerlogo.png',
          cid: 'bannerlogo'
        }
      ]
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify()
    console.log('Email configuration is valid')
    return true
  } catch (error) {
    console.error('Email configuration error:', error)
    return false
  }
}
