function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section .container');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-content');
        }
      });
    }, {
      threshold: 0.3
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  