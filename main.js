console.log('AEZ Website plain JS loaded.'); 

function animateCounter(element, target, prefix = '', suffix = '', duration = 1800) {
  let start = 0;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (target - start) + start);
    element.textContent = prefix + value + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = prefix + target + suffix;
    }
  };
  window.requestAnimationFrame(step);
}

function animateCountersOnView() {
  const counters = document.querySelectorAll('.counter-number');
  let animated = false;
  function onScroll() {
    const section = document.querySelector('.counters-section');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && !animated) {
      animated = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        if (counter.textContent.includes('$')) {
          animateCounter(counter, target, '$', 'M+');
        } else if (counter.textContent.includes('%')) {
          animateCounter(counter, target, '', '%');
        } else {
          animateCounter(counter, target);
        }
      });
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
}

document.addEventListener('DOMContentLoaded', animateCountersOnView); 