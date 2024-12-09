const navbar = document.querySelector('.navbar');
let previousScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (previousScrollPosition > currentScrollPosition) {
    // Scrolling up: fade in
    navbar.style.opacity = "1";
    navbar.style.pointerEvents = "auto";
    console.log("Scrolling up - Navbar visible");
  } else {
    // Scrolling down: fade out
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
    console.log("Scrolling down - Navbar hidden");
  }

  previousScrollPosition = currentScrollPosition;
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const animationDuration = 2000; // Total time for the animation in milliseconds
  
    counters.forEach((counter, index) => {
      const target = +counter.getAttribute('data-target'); // Convert target to a number
      const startTime = performance.now(); // Record the animation start time
  
      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Normalize progress (0 to 1)
  
        // Use an easing function to slow down the animation as it approaches the target
        const easeOutQuad = (t) => t * (2 - t); // Easing function
        const easedProgress = easeOutQuad(progress);
  
        // Calculate the current value based on eased progress
        const currentValue = Math.floor(target * easedProgress);
  
        // Append % for the first counter and + for the second
        if (index === 0) {
          counter.innerText = `${currentValue}%`;
        } else {
          counter.innerText = `${currentValue}+`;
        }
  
        if (progress < 1) {
          requestAnimationFrame(updateCounter); // Continue the animation
        } else {
          // Ensure the final value is correctly formatted with + or %
          if (index === 0) {
            counter.innerText = `${target}%`;
          } else {
            counter.innerText = `${target}+`;
          }
        }
      };
  
      requestAnimationFrame(updateCounter);
    });
  });
  
// ASSISTED WITH GENERATIVE AI ^^^^



