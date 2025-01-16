document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const responseMessage = document.getElementById('responseMessage');
    
    // Update the text and make it visible
    responseMessage.textContent = 'Message sent successfully!';
    responseMessage.classList.remove('hidden');
    responseMessage.classList.add('visible');
    
    // Optionally, clear the form fields after submission
    this.reset();
});
