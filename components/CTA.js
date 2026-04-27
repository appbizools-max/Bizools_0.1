function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="text-body col py-5">
    <h2 class="title fw-800 text-white" style="letter-spacing: -2px;">
      Ready to Turn Your <span class="text-white">App Idea</span> Into Reality?
    </h2>
    <p class="mt-4 lead-elite text-white-50">
      Have an idea for a mobile app? Let’s bring it to life with powerful design, seamless functionality, and scalable technology. 
      Our team is here to guide you through every step—from concept and development to launch and beyond—ensuring your app 
      not only looks great but delivers real results.
    </p>
    <div class="mt-5">
      <a href="./contact.html" class="btn btn-primary-elite px-5 py-3 shadow-lg">Get in touch today</a>
      <p class="small text-white-50 mt-3">Take the first step toward building something impactful.</p>
    </div>
  </div>
  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./Images/mockup-mobiles.png" alt="" />
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
