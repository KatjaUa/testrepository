// Add smooth scrolling for the anchor links
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
});

// Кнопка "WeHelp"
document.getElementById("homeButton").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Project/index.html";
});

// Кнопки навігації
document.getElementById("aboutBtn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Project/about/index.html";
});

document.getElementById("contactBtn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Project/contactUS/index.html";
});

document.getElementById("bookBtn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/Project/book/index.html";
});


// Обробка форми у контактах
const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупинити стандартну відправку форми
    thankYouMessage.style.display = "block"; // Показати повідомлення
    form.reset(); // Очистити форму
});