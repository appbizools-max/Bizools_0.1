function Metrics() {
  const MetricsElement = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-3">
        <h2 class="fw-extrabold" style="font-size: 42px; letter-spacing: -0.05em; display: inline-block;">
          <span class="typewriter-container">Build your apps for <span style="color: var(--secondary-color);">any platform</span></span>
        </h2>
        <p class="mt-3 lead mx-auto" style="max-width: 750px; color: #666;">
          We use the latest technologies to ensure your product is scalable, secure, and performant. 
          Our elite engineering team leverages best-in-class stacks for digital excellence.
        </p>
      </div>
      <div class="col-12 col-lg-11">
        <ul class="nav nav-pills mb-2 flex-nowrap justify-content-lg-center" id="tech-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-mobile" type="button" role="tab"><i class="bi bi-phone me-1"></i><span>Mobile</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-frontend" type="button" role="tab"><i class="bi bi-window-sidebar me-1"></i><span>Front End</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="database-tab" data-bs-toggle="pill" data-bs-target="#pills-database" type="button" role="tab"><i class="bi bi-database-fill me-1"></i><span>Database</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="backend-tab" data-bs-toggle="pill" data-bs-target="#pills-backend" type="button" role="tab"><i class="bi bi-terminal-fill me-1"></i><span>Backend</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="cms-tab" data-bs-toggle="pill" data-bs-target="#pills-cms" type="button" role="tab"><i class="bi bi-file-earmark-medical-fill me-1"></i><span>CMS</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="infra-tab" data-bs-toggle="pill" data-bs-target="#pills-infra" type="button" role="tab"><i class="bi bi-cloud-arrow-up-fill me-1"></i><span>Infra & DevOps</span></button>
          </li>
        </ul>
        <div class="tab-content m-0 p-0" id="pills-tabContent">
          <!-- Mobile Tab -->
          <div class="tab-pane fade show active" id="pills-mobile" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-android-plain colored"></i><span>Android</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-apple-original colored"></i><span>iOS</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-react-original colored"></i><span>React Native</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-flutter-plain colored"></i><span>Flutter</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-ionic-original colored"></i><span>Ionic</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-kotlin-plain colored"></i><span>Kotlin</span></div></div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-frontend" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-react-original colored"></i><span>React</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-vuejs-plain colored"></i><span>Vue.js</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-angularjs-plain colored"></i><span>Angular</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-nextjs-original text-dark"></i><span>Next.js</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-html5-plain colored"></i><span>HTML5</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-css3-plain colored"></i><span>CSS3</span></div></div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-database" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-mongodb-plain colored"></i><span>MongoDB</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-mysql-plain colored"></i><span>MySQL</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-postgresql-plain colored"></i><span>PostgreSQL</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-firebase-plain colored"></i><span>Firebase</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-redis-plain colored"></i><span>Redis</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-oracle-original colored"></i><span>Oracle</span></div></div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-backend" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-nodejs-plain colored"></i><span>Node.js</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-python-plain colored"></i><span>Python</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-php-plain colored"></i><span>PHP</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-java-plain colored"></i><span>Java</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-go-original-wordmark colored"></i><span>Golang</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-dotnetcore-plain colored"></i><span>.NET Core</span></div></div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-cms" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-wordpress-plain colored"></i><span>WordPress</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-magento-original colored"></i><span>Magento</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-shopify-plain colored"></i><span>Shopify</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="bi bi-file-earmark-code text-primary" style="font-size:56px"></i><span>Contentful</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-strapi-plain colored"></i><span>Strapi</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-drupal-plain colored"></i><span>Drupal</span></div></div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-infra" role="tabpanel">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2">
              <div class="col"><div class="tech-item-pure"><i class="devicon-amazonwebservices-original colored"></i><span>AWS</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-googlecloud-plain colored"></i><span>GCP</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-azure-plain colored"></i><span>Azure</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-docker-plain colored"></i><span>Docker</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-kubernetes-plain colored"></i><span>Kubernetes</span></div></div>
              <div class="col"><div class="tech-item-pure"><i class="devicon-jenkins-plain colored"></i><span>Jenkins</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  MetricsElement.appendChild(Container);
}
Metrics();
