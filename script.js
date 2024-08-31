document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const heroSection = document.querySelector('.hero');
    const packageItems = document.querySelectorAll('.package-item');
    const body = document.body;
  
    darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
  
      // Switch hero section images based on mode
      if (body.classList.contains('dark-mode')) {
        heroSection.style.backgroundImage = "url('laptop-with-blank-screen-table-dark-office-with-night-city-view.jpg')";
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
      } else {
        heroSection.style.backgroundImage = "url('workplace-with-computer-coffee-cup-modern-office-3d-rendering.jpg')";
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
      }
  
      // Switch package items' styles based on mode
      packageItems.forEach(item => {
        if (body.classList.contains('dark-mode')) {
          item.style.backgroundColor = '#333333';
          item.style.color = '#ffffff';
        } else {
          item.style.backgroundColor = '#ffffff';
          item.style.color = '#333333';
        }
      });
    });
  
    // Price toggle between monthly and once-off fees
    const priceToggle = document.getElementById('price-toggle');
    const prices = document.querySelectorAll('.price');
  
    priceToggle.addEventListener('change', function () {
      prices.forEach(price => {
        if (priceToggle.checked) {
          price.textContent = `R ${price.getAttribute('data-monthly')}`; // Monthly price
        } else {
          price.textContent = `R ${price.getAttribute('data-once')}`; // Once-off price
        }
      });
    });
  });
  