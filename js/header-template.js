class MyHeader extends HTMLElement {
  connectedCallback() {
    console.log("MyHeader connected"); // Debugging statement
    this.innerHTML = this.getHeaderHTML();
    this.setActiveClass();
  }

  getHeaderHTML() {
    return `
        <header class="top-header">
          <nav class="navbar header-nav navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html"><img src="images/index/LTH-full-logo-black.png" alt="image"></a>
              <a class="contact_bt request-support" href="seniorapplication.html">Request Support</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-twd"
                aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div style="margin-right: 15px;" class="collapse navbar-collapse justify-content-end" id="navbar-twd">
                <ul class="navbar-nav">
                  <li><a class="nav-link" href="index.html">Home</a></li>
                  <li><a class="nav-link" href="about.html">About us</a></li>
                  <li><a class="nav-link" href="services.html">Services</a></li>
                  <li><a class="nav-link" href="teensapplication.html">Teens Apply</a></li>
                  <li><a class="nav-link" href="volunteering.html">Volunteering</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      `;
  }

  setActiveClass() {
    const activePage = this.getAttribute("data-active");
    if (activePage) {
      const navLinks = this.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === activePage) {
          link.classList.add("active");
        }
      });
    }
  }
}

customElements.define("my-header", MyHeader);
