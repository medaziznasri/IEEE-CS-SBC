// EmailJS form submission handler
(function() {
  // Initialize EmailJS with your public key
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    const formSuccess = document.querySelector('.form-success');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin submit-icon"></i>';
        
        // Prepare the template parameters
        const templateParams = {
          from_name: document.getElementById('name').value,
          from_email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value,
          to_email: 'aziznasri11082003@gmail.com'
        };
        
        // Send the email using EmailJS
        emailjs.send('service_id', 'template_id', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Hide the form and show success message
            contactForm.style.display = 'none';
            if (formSuccess) {
              formSuccess.style.display = 'flex';
            }
          }, function(error) {
            console.log('FAILED...', error);
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane submit-icon"></i>';
            alert('Failed to send message. Please try again later.');
          });
      });
    }
  });
})();
