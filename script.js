
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY >= window.innerHeight) {
        navbar.classList.add("fixed");
  
    } else {
        navbar.classList.remove("fixed");
    }
});


let lastScroll = 0;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const currentScroll = window.scrollY;

    if (currentScroll > window.innerHeight) {
        if (currentScroll > lastScroll) {
            // Scrolling down - hide navbar
            navbar.classList.add("hidden");
            navbar.classList.remove("fixed");
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove("hidden");
            navbar.classList.add("fixed");
        }
    } else {
        // Before 100vh, reset to absolute positioning
        navbar.classList.remove("hidden", "fixed");
    }

    lastScroll = currentScroll;
});


      // Smooth scroll function
      function smoothScroll(target, duration) {
        const targetPosition = document.querySelector(target).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOut(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Ease in out function for smoother animation
        function easeInOut(t, b, c, d) {
          let x = t / (d / 2);
          if (x < 1) return (c / 2) * x * x + b;
          x--;
          return (-c / 2) * (x * (x - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
      }

      // Event listener for all anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = this.getAttribute("href");
          smoothScroll(target, 1000); // 1000ms = 1 second duration
        });
      });

