// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length > 0) {
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) {
        testimonial.classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  setInterval(nextTestimonial, 5000);
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('#newsletter-form input').value;
    alert(`Thank you for subscribing, ${email}!`);
    document.querySelector('#newsletter-form input').value = ''; // Clear input
  });
}

// Modal Functionality
const modals = document.querySelectorAll('.modal');
const learnMoreButtons = document.querySelectorAll('.learn-more');
const closeButtons = document.querySelectorAll('.close');
const contactUsButtons = document.querySelectorAll('.contact-us');

if (learnMoreButtons.length > 0) {
  learnMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.style.display = 'flex';
    });
  });
}

if (closeButtons.length > 0) {
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });
}

if (contactUsButtons.length > 0) {
  contactUsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });
}

if (modals.length > 0) {
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
}

// Dark Mode Toggle Button
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDarkMode
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });
}