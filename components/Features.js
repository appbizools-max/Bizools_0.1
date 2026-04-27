function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container-fluid"); // Using fluid for wider horizontal reach
  Container.style.padding = "0 4%";
  Container.innerHTML = `
  <div class="text-body text-center d-flex flex-column align-items-center mb-4">
    <h2 class="title fw-bold" style="font-size: 48px; letter-spacing: -0.05em;"> DIGITAL SOLUTIONS <span style="color: var(--secondary-color);">TO GROW YOUR BUSINESS.</span></h2>
    <p class="mt-2 lead" style="max-width: 800px;">
      We provide comprehensive technology services to help your business scale and succeed in the digital era.
    </p>
  </div>
  <div class="luminous-grid">
    <!-- Web Development -->
    <div class="luminous-card bg-indigo-luminous">
      <div class="card-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" rx="4" stroke="white" stroke-width="6"/>
          <path d="M10 35H90" stroke="white" stroke-width="3"/>
          <circle cx="20" cy="27" r="3" fill="#e05a47"/>
          <circle cx="30" cy="27" r="3" fill="white"/>
          <path d="M40 55L50 65L65 45" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>Web development</h3>
      <p>Responsive and dynamic websites that strengthen your online presence and engage your users.</p>
      <a href="./services/website-development.html" class="luminous-more">Read More <i class="bi bi-arrow-right"></i></a>
    </div>

    <!-- Mobile Development -->
    <div class="luminous-card bg-coral-luminous">
      <div class="card-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="10" width="40" height="80" rx="8" stroke="white" stroke-width="6"/>
          <path d="M45 80H55" stroke="white" stroke-width="6" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Mobile development</h3>
      <p>Create intuitive mobile apps for iOS/Android or go cross-platform with our expert team.</p>
      <a href="./services/mobile-app-development.html" class="luminous-more">Read More <i class="bi bi-arrow-right"></i></a>
    </div>

    <!-- Digital Marketing -->
    <div class="luminous-card bg-indigo-luminous">
      <div class="card-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80L40 50L60 65L90 20" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M70 20H90V40" stroke="#e05a47" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3>Digital marketing</h3>
      <p>Strategic digital plans to help you promote your business online and reach your audience effectively.</p>
      <a href="./services/digital-marketing.html" class="luminous-more">Read More <i class="bi bi-arrow-right"></i></a>
    </div>

    <!-- E-commerce & CMS -->
    <div class="luminous-card bg-coral-luminous">
      <div class="card-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 30H80L85 80H15L20 30Z" stroke="white" stroke-width="6" stroke-linejoin="round"/>
          <path d="M35 30C35 15 65 15 65 30" stroke="white" stroke-width="6" stroke-linecap="round"/>
          <rect x="40" y="45" width="20" height="15" rx="2" fill="white" fill-opacity="0.3"/>
        </svg>
      </div>
      <h3>E-commerce & CMS</h3>
      <p>End-to-end Magento, Shopify, and WordPress solutions using best-in-class techniques.</p>
      <a href="./services/website-development.html" class="luminous-more">Read More <i class="bi bi-arrow-right"></i></a>
    </div>
  </div>
    `;
  Features.appendChild(Container);
}
Features();
