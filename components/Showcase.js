function Showcase() {
  const ShowcaseElement = document.getElementById("AppShowcase");
  const Container = document.createElement("div");
  Container.classList.add("showcase-wrapper");

  // Looping 8 unique assets twice for seamless scroll
  const images = [
    "1.png", "2.png", "3.png", "4.png",
    "5.png", "6.png", "7.png", "8.png",
    "1.png", "2.png", "3.png", "4.png",
    "5.png", "6.png", "7.png", "8.png"
  ];

  Container.innerHTML = `
    <div class="container mx-auto p-0 m-0">
      <div class="row m-0">
        <div class="col-12 text-center p-0">
          <h2 class="fw-extrabold m-0" style="font-size: 42px; letter-spacing: -0.05em;">Our Projects</h2>
          <p class="lead mx-auto mt-1 mb-0" style="max-width: 750px; color: #666;">
            Explore our diverse portfolio of high-performance digital solutions and 
            award-winning applications designed for global excellence.
          </p>
        </div>
      </div>
    </div>
    <div class="showcase-container">
      <div class="showcase-track">
        ${images.map(img => `
          <div class="showcase-item">
            <img src="./App Images/Scroll Image/${img}" alt="App Screen" />
          </div>
        `).join("")}
      </div>
    </div>
  `;

  ShowcaseElement.appendChild(Container);

  // Dynamic 3D Curved Animation Logic
  const track = Container.querySelector('.showcase-track');
  const items = Container.querySelectorAll('.showcase-item');
  const container = Container.querySelector('.showcase-container');

  function update3DCurve() {
    // Zero-Jank Mobile Fix: Disable complex JS math on handheld devices
    // This prevents layout thrashing and ensures smooth 60FPS CSS scrolling
    if (window.innerWidth < 992) {
      items.forEach(item => {
        item.style.transform = 'none';
        item.style.opacity = '1';
      });
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const midX = containerRect.left + containerRect.width / 2;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemMidX = rect.left + rect.width / 2;

      // Calculate relative distance from center (-1 to 1)
      let dist = (itemMidX - midX) / (containerRect.width / 2);

      // Clamp dist to [-1.5, 1.5] for smooth transitions outside viewport
      dist = Math.max(-1.5, Math.min(1.5, dist));

      // U-shape logic: 
      // - Rotate towards the center
      // - Recess the center (negative translateZ)
      const rotation = dist * 50; // Max 50 degree rotation at edges
      const depth = Math.abs(dist) * 400 - 400; // Center is -400px, edges are 0px (closer)

      // Apply 3D transform
      item.style.transform = `rotateY(${-rotation}deg) translateZ(${depth}px)`;

      // Adjust opacity for depth feel
      const opacity = 1 - Math.abs(dist) * 0.3;
      item.style.opacity = Math.max(0.7, opacity);
    });

    requestAnimationFrame(update3DCurve);
  }

  // Start the 3D calculation loop
  update3DCurve();
}
Showcase();
