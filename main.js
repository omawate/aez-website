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
    let images = Array.from(track.children);
    const imgCount = images.length;
    const visibleCount = 1; // always one image centered
    const cloneCount = 2; // for smooth infinite loop

    // Remove any previous clones
    images.forEach(img => {
      if (img.classList.contains('clone')) img.remove();
    });
    images = Array.from(track.children);

    // Clone last N and first N images for infinite effect
    for (let i = 0; i < cloneCount; i++) {
      const firstClone = images[i].cloneNode(true);
      firstClone.classList.add('clone');
      track.appendChild(firstClone);
      const lastClone = images[images.length - 1 - i].cloneNode(true);
      lastClone.classList.add('clone');
      track.insertBefore(lastClone, track.firstChild);
    }

    images = Array.from(track.children);
    const total = images.length;
    const imgWidth = images[cloneCount].offsetWidth + parseInt(getComputedStyle(track).gap) || 0;

    // Set initial scroll position to the first real image centered
    let currentIndex = cloneCount;
    function scrollToIndex(index, behavior = 'auto') {
      const container = track.parentElement;
      const containerWidth = container.offsetWidth;
      const scrollLeft = index * imgWidth - (containerWidth - imgWidth) / 2;
      track.scrollTo({ left: scrollLeft, behavior });
    }
    scrollToIndex(currentIndex);

    leftBtn.addEventListener('click', () => {
      currentIndex--;
      scrollToIndex(currentIndex, 'smooth');
      setTimeout(() => {
        if (currentIndex < cloneCount) {
          currentIndex = imgCount + cloneCount - 1;
          scrollToIndex(currentIndex);
        }
      }, 400);
    });
    rightBtn.addEventListener('click', () => {
      currentIndex++;
      scrollToIndex(currentIndex, 'smooth');
      setTimeout(() => {
        if (currentIndex >= imgCount + cloneCount) {
          currentIndex = cloneCount;
          scrollToIndex(currentIndex);
        }
      }, 400);
    });

    // Center the carousel on resize
    window.addEventListener('resize', () => scrollToIndex(currentIndex));
  }
});

document.addEventListener('DOMContentLoaded', animateCountersOnView);

// Slideshow functionality
let currentSlide = 1; // Start at the first real image
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slideshow-track');

function showSlide(n) {
  // Only allow n from 1 to slides.length-2 (real images)
  if (n <= 0) {
    currentSlide = slides.length - 2;
  } else if (n >= slides.length - 1) {
    currentSlide = 1;
  } else {
    currentSlide = n;
  }

  // Calculate gap in percent
  const container = document.querySelector('.slideshow-container');
  const containerWidth = container ? container.offsetWidth : window.innerWidth;
  const gapPx = containerWidth * 0.02; // 2vw in px
  const gapPercent = (gapPx / containerWidth) * 100;
  const slideWidth = 38;
  const totalSlide = slideWidth + gapPercent;
  // Center the current slide
  const translateX = 50 - (currentSlide * totalSlide + slideWidth / 2);

  if (track) {
    track.style.transform = `translateX(${translateX}%)`;
  }

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', function() {
  if (slides.length > 0) {
    showSlide(1);
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (e.key === 'ArrowRight') {
    changeSlide(1);
  }
}); 