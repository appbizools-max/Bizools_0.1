function Herosection() {
  const HerosectionElement = document.getElementById("Herosection");
  HerosectionElement.className = "home-hero-elite-v2 home-neural-dots-bg";

  const Container = document.createElement("div");
  Container.classList.add("container");

  Container.innerHTML = `
  <div class="row align-items-center g-5 elite-hero-row">
    <!-- TEXT CONTENT -->
    <div class="col-lg-6 hero-text-col">
      <h1 class="display-1 fw-900 elite-main-title mb-4">
        Build Powerful <span class="text-coral">Mobile Apps</span> That Drive Business Growth
      </h1>
      <p class="lead-elite text-muted mb-5">
       We specialize in crafting high-performance mobile applications that help businesses grow, scale, and stay ahead in today’s competitive digital landscape.
      </p>
      <div class="d-flex gap-3 elite-hero-btns">
        <a href="#CTA" class="btn btn-primary-elite px-5 py-3">Start Your Project</a>
        <a href="#Features" class="btn btn-outline-elite px-4 py-3">Our Services</a>
      </div>
    </div>
    <!-- VISUAL CONTENT -->
    <div class="col-lg-6 hero-visual-col">
      <div class="elite-visual-wrapper">
        <img src="./Images/Hero.png" 
             alt="Elite Engineering" 
             class="img-fluid elite-visual-main">
        <div class="floating-card-elite stat-card-1">
          <span class="stat-num">98%</span>
          <span class="stat-txt">Success Rate</span>
        </div>
        <div class="floating-card-elite stat-card-2">
          <span class="stat-num">200+</span>
          <span class="stat-txt">Global Apps</span>
        </div>
      </div>
    </div>
  </div>
  `;

  HerosectionElement.innerHTML = '';
  HerosectionElement.appendChild(Container);
}
Herosection();
