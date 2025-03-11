// EmailJS configuration file

// EmailJS service details for sending emails
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_539xqrp',  // Your EmailJS service ID
  TEMPLATE_ID: 'template_5e19yoi', // Your EmailJS template ID
  PUBLIC_KEY: 'g73QYuwnRBvVgzuja', // Your EmailJS public key
  TO_EMAIL: 'aziznasri11082003@gmail.com' // Recipient email address
};

// Test function to verify EmailJS configuration
export const testEmailService = async () => {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: EMAILJS_CONFIG.SERVICE_ID,
        template_id: EMAILJS_CONFIG.TEMPLATE_ID,
        user_id: EMAILJS_CONFIG.PUBLIC_KEY,
        template_params: {
          from_name: 'Test User',
          from_email: 'test@example.com',
          subject: 'EmailJS Test',
          message: 'This is a test email sent from the IEEE-CIS website.',
          to_email: EMAILJS_CONFIG.TO_EMAIL
        }
      })
    });
    
    console.log('EmailJS test response status:', response.status);
    
    if (response.ok) {
      return { success: true, message: 'Test email sent successfully!' };
    } else {
      const errorData = await response.json();
      console.error('EmailJS API error:', errorData);
      return { success: false, message: `Error: ${errorData.error || 'Unknown error'}` };
    }
  } catch (error) {
    console.error('EmailJS test error:', error);
    return { success: false, message: `Network error: ${error.message}` };
  }
};
