// Mobile Touch Interactions & Gestures
document.addEventListener('DOMContentLoaded', function() {
  
  // Check if mobile device
  const isMobile = window.innerWidth <= 767;
  
  if (!isMobile) return;
  
  // Add swipe hint for navigation
  const swipeHint = document.createElement('div');
  swipeHint.className = 'swipe-hint';
  swipeHint.innerHTML = '<i class="bi bi-chevron-right"></i>';
  document.body.appendChild(swipeHint);
  
  // Hide swipe hint after first interaction
  setTimeout(() => {
    swipeHint.style.opacity = '0';
    setTimeout(() => swipeHint.remove(), 300);
  }, 5000);
  
  // Add scroll indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.innerHTML = '<i class="bi bi-chevron-down"></i>';
  document.body.appendChild(scrollIndicator);
  
  // Hide scroll indicator after scrolling
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    document.body.classList.add('scrolled');
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (window.scrollY < 100) {
        document.body.classList.remove('scrolled');
      }
    }, 150);
  });
  
  // Add pull-to-refresh functionality
  let startY = 0;
  let isPulling = false;
  const pullToRefresh = document.createElement('div');
  pullToRefresh.className = 'pull-to-refresh';
  pullToRefresh.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Pull to refresh';
  document.body.appendChild(pullToRefresh);
  
  document.addEventListener('touchstart', function(e) {
    if (window.scrollY === 0) {
      startY = e.touches[0].clientY;
      isPulling = true;
    }
  });
  
  document.addEventListener('touchmove', function(e) {
    if (!isPulling || window.scrollY > 0) return;
    
    const currentY = e.touches[0].clientY;
    const pullDistance = currentY - startY;
    
    if (pullDistance > 0 && pullDistance < 150) {
      pullToRefresh.style.transform = `translateX(-50%) translateY(${pullDistance - 60}px)`;
      pullToRefresh.classList.add('show');
      
      if (pullDistance > 100) {
        pullToRefresh.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Release to refresh';
      } else {
        pullToRefresh.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Pull to refresh';
      }
    }
  });
  
  document.addEventListener('touchend', function() {
    if (isPulling) {
      const pullDistance = parseInt(pullToRefresh.style.transform.match(/translateY\(([^)]+)\)/)?.[1] || 0);
      
      if (pullDistance > 100) {
        // Refresh the page
        window.location.reload();
      } else {
        pullToRefresh.classList.remove('show');
        pullToRefresh.style.transform = 'translateX(-50%) translateY(-60px)';
      }
      
      isPulling = false;
    }
  });
  
  // Add ripple effect to buttons
  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // Add ripple class to mobile buttons
  const buttons = document.querySelectorAll('.btn, button, .mobile-fab');
  buttons.forEach(button => {
    button.classList.add('btn-mobile-ripple');
    button.addEventListener('click', createRipple);
  });
  
  // Add haptic feedback simulation
  const hapticElements = document.querySelectorAll('.luminous-card, .mobile-fab, .btn');
  hapticElements.forEach(element => {
    element.classList.add('haptic-feedback');
  });
  
  // Swipe gesture for mobile menu
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    // Swipe from left edge to open menu
    if (touchStartX < 50 && diff < -swipeThreshold) {
      const offcanvas = document.getElementById('offcanvasNav');
      if (offcanvas && !offcanvas.classList.contains('show')) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
        bsOffcanvas.show();
      }
    }
    
    // Swipe from right to left to close menu
    if (touchStartX > window.innerWidth - 50 && diff > swipeThreshold) {
      const offcanvas = document.getElementById('offcanvasNav');
      if (offcanvas && offcanvas.classList.contains('show')) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if (bsOffcanvas) bsOffcanvas.hide();
      }
    }
  }
  
  // Prevent zoom on double tap for buttons
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  // Add smooth scroll behavior for mobile
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Optimize images for mobile
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.loading = 'lazy';
  });
  
  console.log('Mobile touch interactions initialized');
});
