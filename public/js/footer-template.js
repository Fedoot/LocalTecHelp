class MyFooter extends HTMLElement {
  connectedCallback() {
    // console.log("MyFooter connected"); // Debugging statement
    this.innerHTML = `
        <div class="footer-final">
            <div href="#" class="col-lg-4 col-md-12 col-sm-12">San Diego, California</div>
            <div class="col-lg-4 col-md-12 col-sm-12"> <a href="tel:8587762892">(858) 776-2892</a></div>
            <div class="col-lg-4 col-md-12 col-sm-12"> <a href="mailto:palceholder@email.com">palceholder@email.com</a>
            </div>
        </div>


        <div class="footer_bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="crp">© 2024 Business . All Rights Reserved.</p>
                        <ul class="bottom_menu">
                            <li><a href="creative commons.html">Creative Commons</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("my-footer", MyFooter);
