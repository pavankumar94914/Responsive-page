// script.js

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      // Add active class to selected link
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });