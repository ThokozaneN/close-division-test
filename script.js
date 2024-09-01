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
  const serviceIcons = document.querySelectorAll('.service-icon');
  const body = document.body;

  darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      // Switch hero section images based on mode
      if (body.classList.contains('dark-mode')) {
          heroSection.style.backgroundImage = "url('laptop-with-blank-screen-table-dark-office-with-night-city-view.jpg')";
          darkModeToggle.querySelector('img').src = 'moon-unscreen.gif'; // Dark mode GIF
      } else {
          heroSection.style.backgroundImage = "url('workplace-with-computer-coffee-cup-modern-office-3d-rendering.jpg')";
          darkModeToggle.querySelector('img').src = 'sun-unscreen.gif'; // Light mode GIF
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

      // Switch service icons based on mode
      switchIconsToDarkMode(body.classList.contains('dark-mode'));
  });

  // Function to switch icon images
  function switchIconsToDarkMode(isDarkMode) {
      serviceIcons.forEach(icon => {
          if (isDarkMode) {
              // Change to dark mode icon
              icon.src = icon.getAttribute("data-dark");
          } else {
              // Revert to light mode icon
              icon.src = icon.getAttribute("data-light");
          }
      });
  }

  // Price toggle between monthly and once-off fees
  const feeToggle = document.getElementById('feeTypeToggle');
    const prices = document.querySelectorAll('.price');

    feeToggle.addEventListener('change', function () {
        prices.forEach(price => {
            if (feeToggle.checked) {
                price.textContent = ` ${price.getAttribute('data-monthly')}`; // Monthly price
            } else {
                price.textContent = ` ${price.getAttribute('data-once')}`; // Once-off price
            }
        });
    });
});
