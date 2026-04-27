function Navbar() {
  const navbarElement = document.getElementById("Navbar");

  // Calculate relative path prefix (Robust for Windows/Web)
  const getPrefix = () => {
    const p = window.location.pathname.toLowerCase();
    // More robust check for subdirectory depth
    if (p.includes("/services/") || p.includes("/apps/") || p.includes("\\services\\") || p.includes("\\apps\\")) {
      return "../";
    }
    return "./";
  };
  const prefix = getPrefix();

  // Reset navbarElement to avoid duplication
  navbarElement.innerHTML = "";

  // Ensure solid background and shadow initially
  navbarElement.classList.add("bg-white", "nav-scrolled");
  navbarElement.classList.remove("bg-transparent");

  const NavHTML = `
    <div class="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
      
      <!-- LOGO (Left) -->
      <a class="navbar-brand" href="${prefix}index.html" style="z-index: 10;">
        <img class="BrandLogo" src="${prefix}Images/logo.png" alt="Bizools" style="height: 58px;"/>
      </a>

      <!-- NAVIGATION LINKS (Center - Desktop Only) -->
      <div class="d-none d-lg-flex flex-grow-1 justify-content-center">
        <ul class="navbar-nav flex-row align-items-center gap-2">
          <li class="nav-item"><a class="nav-link px-3" href="${prefix}index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link px-3" href="${prefix}about.html">About us</a></li>
          <li class="nav-item"><a class="nav-link px-3" href="${prefix}blogs.html">Blogs</a></li>
          <li class="nav-item mega-drop" style="position: relative;">
            <a class="nav-link dropdown-toggle px-3" href="#">Services</a>
            <div class="mega-menu services-mega shadow-lg" style="left: 50%; transform: translateX(-50%);">
              <div class="mega-column text-center">
                <ul class="mega-list">
                  <li><a href="${prefix}services/website-development.html">Website Development</a></li>
                  <li><a href="${prefix}services/mobile-app-development.html">Mobile App Development</a></li>
                  <li><a href="${prefix}services/graphic-designing.html">Graphic Designing</a></li>
                  <li><a href="${prefix}services/digital-marketing.html">Digital Marketing</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li class="nav-item mega-drop">
            <a class="nav-link dropdown-toggle px-3" href="#">Our Apps</a>
            <div class="mega-menu shadow-lg">
              <div class="mega-column">
                <h6 class="mega-col-title">Core Solutions</h6>
                <ul class="mega-list">
                  <li><a href="${prefix}apps/food-delivery.html">Food Delivery App</a></li>
                  <li><a href="${prefix}apps/taxi-booking.html">Taxi Booking App</a></li>
                  <li><a href="${prefix}apps/grocery-delivery.html">Grocery Delivery App</a></li>
                  <li><a href="${prefix}apps/hotel-booking.html">Hotel Booking App</a></li>
                  <li><a href="${prefix}apps/real-estate.html">Real Estate App</a></li>
                  <li><a href="${prefix}apps/logistics.html">Logistics App</a></li>
                </ul>
              </div>
              <div class="mega-column">
                <h6 class="mega-col-title">Business & Social</h6>
                <ul class="mega-list">
                  <li><a href="${prefix}apps/doctor-healthcare.html">Doctor & Healthcare App</a></li>
                  <li><a href="${prefix}apps/ott-platform.html">OTT App Development</a></li>
                  <li><a href="${prefix}apps/social-media.html">Social Media App</a></li>
                  <li><a href="${prefix}apps/multi-vendor-ecommerce.html">Multi Vendor Ecommerce</a></li>
                  <li><a href="${prefix}apps/single-vendor-ecommerce.html">Single Vendor Ecommerce</a></li>
                  <li><a href="${prefix}apps/delivery-app.html">Delivery App Development</a></li>
                </ul>
              </div>
              <div class="mega-column">
                <h6 class="mega-col-title">Specialized</h6>
                <ul class="mega-list">
                  <li><a href="${prefix}apps/e-learning.html">E-Learning App</a></li>
                  <li><a href="${prefix}apps/loan-lending.html">Loan Lending App</a></li>
                  <li><a href="${prefix}apps/beauty-salon.html">Beauty & Salon App</a></li>
                  <li><a href="${prefix}apps/short-video.html">Short Video Sharing App</a></li>
                  <li><a href="${prefix}apps/home-service.html">Home Service App</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link px-3" href="${prefix}contact.html">Contact</a></li>
        </ul>
      </div>

      <!-- RIGHT SIDE -->
      <div class="d-flex align-items-center gap-3" style="z-index: 10;">
        <button class="btn btn-coral d-none d-lg-block px-4 py-2 fw-bold" style="border-radius: 12px;" onclick="window.showLeadPopup()">Get a Quote</button>
        <button class="navbar-toggler d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>

    <!-- MOBILE NAV (Offcanvas) -->
    <div class="offcanvas offcanvas-end d-lg-none" id="offcanvasNav">
      <div class="offcanvas-header p-4">
        <img src="${prefix}Images/logo.png" style="height: 40px;"/>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body p-4">
        <ul class="navbar-nav w-100">
          <li class="nav-item mb-2"><a class="nav-link fs-5 fw-bold" href="${prefix}index.html">Home</a></li>
          <li class="nav-item mb-2"><a class="nav-link fs-5 fw-bold" href="${prefix}about.html">About us</a></li>
          <li class="nav-item mb-2"><a class="nav-link fs-5 fw-bold" href="${prefix}blogs.html">Blogs</a></li>
          
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#servicesSubmenu">
              Services <i class="bi bi-chevron-down ms-2"></i>
            </a>
            <div class="collapse" id="servicesSubmenu">
              <ul class="navbar-nav ms-3">
                <li><a class="nav-link py-2" href="${prefix}services/website-development.html">Website Development</a></li>
                <li><a class="nav-link py-2" href="${prefix}services/mobile-app-development.html">Mobile App Development</a></li>
                <li><a class="nav-link py-2" href="${prefix}services/graphic-designing.html">Graphic Designing</a></li>
                <li><a class="nav-link py-2" href="${prefix}services/digital-marketing.html">Digital Marketing</a></li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link fs-5 fw-bold dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#appsSubmenu">
              Our Apps <i class="bi bi-chevron-down ms-2"></i>
            </a>
            <div class="collapse" id="appsSubmenu">
              <ul class="navbar-nav ms-3">
                <li class="nav-item mt-3 mb-2">
                  <span class="text-uppercase fw-900 text-muted small letter-spacing-1">Core Solutions</span>
                </li>
                <li><a class="nav-link py-2" href="${prefix}apps/food-delivery.html">Food Delivery App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/taxi-booking.html">Taxi Booking App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/grocery-delivery.html">Grocery Delivery App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/hotel-booking.html">Hotel Booking App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/real-estate.html">Real Estate App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/logistics.html">Logistics App</a></li>
                
                <li class="nav-item mt-4 mb-2">
                  <span class="text-uppercase fw-900 text-muted small letter-spacing-1">Business & Social</span>
                </li>
                <li><a class="nav-link py-2" href="${prefix}apps/doctor-healthcare.html">Doctor & Healthcare App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/ott-platform.html">OTT App Development</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/social-media.html">Social Media App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/multi-vendor-ecommerce.html">Multi Vendor Ecommerce</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/single-vendor-ecommerce.html">Single Vendor Ecommerce</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/delivery-app.html">Delivery App Development</a></li>
                
                <li class="nav-item mt-4 mb-2">
                  <span class="text-uppercase fw-900 text-muted small letter-spacing-1">Specialized</span>
                </li>
                <li><a class="nav-link py-2" href="${prefix}apps/e-learning.html">E-Learning App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/loan-lending.html">Loan Lending App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/beauty-salon.html">Beauty & Salon App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/short-video.html">Short Video Sharing App</a></li>
                <li><a class="nav-link py-2" href="${prefix}apps/home-service.html">Home Service App</a></li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item mb-2 mt-4"><a class="nav-link fs-5 fw-bold" href="${prefix}contact.html">Contact</a></li>
          <li class="nav-item mt-5"><button class="btn btn-coral w-100 py-3 fw-bold" onclick="window.showLeadPopup()">Get a Quote</button></li>
        </ul>
      </div>
    </div>
  `;

  navbarElement.innerHTML = NavHTML;

  // No scroll logic needed for solid navbar
}
Navbar();
