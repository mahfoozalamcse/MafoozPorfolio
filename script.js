function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); 
  }
  
  // Optional: Handle contact form submission
  document.querySelector("form").addEventListener("submit", function (e) { 
    e.preventDefault();
    alert("Thank you for your message, Mahfooz will get back to you!");
  });
  
