import React, { useState } from 'react';
import { testEmailService, EMAILJS_CONFIG } from '../utils/emailConfig';

const EmailTest = () => {
  const [testStatus, setTestStatus] = useState({ 
    performed: false,
    success: false, 
    message: '' 
  });
  const [loading, setLoading] = useState(false);

  const runEmailTest = async () => {
    setLoading(true);
    const result = await testEmailService();
    setTestStatus({
      performed: true,
      success: result.success,
      message: result.message
    });
    setLoading(false);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '50px auto',
      backgroundColor: 'rgba(30, 41, 59, 0.75)',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      color: 'white'
    }}>
      <h2>EmailJS Configuration Test</h2>
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Service ID:</strong> {EMAILJS_CONFIG.SERVICE_ID}</p>
        <p><strong>Template ID:</strong> {EMAILJS_CONFIG.TEMPLATE_ID}</p>
        <p><strong>Target Email:</strong> {EMAILJS_CONFIG.TO_EMAIL}</p>
      </div>
      
      <button 
        onClick={runEmailTest}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#555' : '#3a7bd5',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Sending Test Email...' : 'Run Email Test'}
      </button>
      
      {testStatus.performed && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: testStatus.success ? 'rgba(0, 200, 83, 0.2)' : 'rgba(255, 0, 0, 0.2)',
          borderRadius: '6px'
        }}>
          <h3>{testStatus.success ? 'Test Successful!' : 'Test Failed'}</h3>
          <p>{testStatus.message}</p>
          {testStatus.success && (
            <p>Check <strong>{EMAILJS_CONFIG.TO_EMAIL}</strong> to confirm receipt of the test email.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailTest;
