console.log('AEZ Website plain JS loaded.'); 

function animateCounter(element, target, prefix = '', suffix = '', duration = 1000) {
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

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-arrow.left');
  const rightBtn = document.querySelector('.carousel-arrow.right');
  if (track && leftBtn && rightBtn) {
    const images = Array.from(track.children);
    const imgCount = images.length;
    const imgWidth = images[0].offsetWidth + parseInt(getComputedStyle(track).gap) || 0;

    // Clone first and last images for infinite effect
    images.slice(0, 2).forEach(img => track.appendChild(img.cloneNode(true)));
    images.slice(-2).forEach(img => track.insertBefore(img.cloneNode(true), track.firstChild));

    // Set initial scroll position to the first real image
    let currentIndex = 2;
    function scrollToIndex(index, behavior = 'auto') {
      const scrollLeft = index * imgWidth;
      track.scrollTo({ left: scrollLeft, behavior });
    }
    scrollToIndex(currentIndex);

    leftBtn.addEventListener('click', () => {
      currentIndex--;
      scrollToIndex(currentIndex, 'smooth');
      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = imgCount;
          scrollToIndex(currentIndex);
        }, 350);
      }
    });
    rightBtn.addEventListener('click', () => {
      currentIndex++;
      scrollToIndex(currentIndex, 'smooth');
      if (currentIndex === imgCount + 1) {
        setTimeout(() => {
          currentIndex = 1;
          scrollToIndex(currentIndex);
        }, 350);
      }
    });

    // Center the carousel on resize
    window.addEventListener('resize', () => scrollToIndex(currentIndex));
  }
});

document.addEventListener('DOMContentLoaded', animateCountersOnView); 