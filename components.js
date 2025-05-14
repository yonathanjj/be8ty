// NAVBAR COMPONENT
class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.attachShadow({ mode: 'open' });

    // Define styles
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        --bg-color: #EDE7E3;
        --text-color: #333;
        --brand-color: #000;
        --max-width: 1400px;
      }

      .navbar {
        background-color: var(--bg-color);
        padding: 1.5rem 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }

      .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: var(--max-width);
        margin: 0 auto;
        width: 100%;
      }

      .brand .logo {
        height: 60px;
        width: auto;
        transition: transform 0.3s ease;
      }

      .brand:hover .logo {
        transform: scale(1.05);
      }

      .navbar-links {
        display: flex;
        gap: 2.5rem;
      }

      .navbar-links a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        transition: all 0.3s ease;
        position: relative;
        padding: 0.5rem 0;
      }

      .navbar-links a:hover {
        color: var(--brand-color);
      }

      .navbar-links a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: var(--brand-color);
        transition: width 0.3s ease;
      }

      .navbar-links a:hover::after {
        width: 100%;
      }

      .navbar-icons {
        display: flex;
        align-items: center;
        gap: 1.8rem;
      }

      .cart-icon {
        position: relative;
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.1rem;
        transition: transform 0.3s ease;
      }

      .cart-icon:hover {
        transform: scale(1.1);
      }

      .cart-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: var(--brand-color);
        color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
        font-weight: 600;
      }

      /* Hamburger Menu - Hidden by default */
      .hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        flex-direction: column;
        justify-content: space-between;
        width: 24px;
        height: 18px;
      }

      .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--text-color);
        transition: all 0.3s;
      }

      /* Mobile Styles */
      @media (max-width: 1024px) {
        .navbar {
          padding: 1.2rem 1.5rem;
        }

        .navbar-links {
          gap: 1.8rem;
        }
      }

      @media (max-width: 768px) {
        .navbar-container {
          padding: 0;
        }

        .navbar-links {
          position: fixed;
          top: 70px;
          left: -100%;
          width: 100%;
          height: calc(100vh - 70px);
          background-color: var(--bg-color);
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
          gap: 2rem;
          transition: left 0.3s ease;
          z-index: 1000;
        }

        .navbar-links a {
          font-size: 1rem;
          padding: 0.8rem 0;
        }

        .navbar-links.active {
          left: 0;
        }

        .hamburger {
          display: flex;
        }

        .hamburger.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    `;

    // Define HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <nav class="navbar">
        <div class="navbar-container">
          <a href="index.html" class="brand">
            <img src="logo.png" alt="BeCity Logo" class="logo">
          </a>

          <div class="navbar-links">
            <a href="home.html">Home</a>
            <a href="shop.html">Shop</a>
            <a href="about.html">About</a>
            <a href="collections.html">Collections</a>
            <a href="lookbook.html">Lookbook</a>
            <a href="contact.html">Contact</a>
          </div>

          <div class="navbar-icons">
            <a href="cart.html" class="cart-icon">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-count">0</span>
            </a>
            <button class="hamburger" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    `;

    // Append to shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Add functionality
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const navLinks = this.shadowRoot.querySelector('.navbar-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    this.shadowRoot.querySelectorAll('.navbar-links a').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    });
  }
}

// FOOTER COMPONENT
class FooterComponent extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.attachShadow({ mode: 'open' });

    // Define styles
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        --max-width: 1400px;
      }

      .footer {
        background-color: #111;
        color: #EDE7E3;
        padding: 4rem 2rem 2rem;
        font-family: 'Inter', sans-serif;
      }

      .footer-container {
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid #333;
      }

      .footer-brand {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .footer-logo {
        font-family: 'Nexa Light', sans-serif;
        font-size: 2.5rem;
        letter-spacing: 2px;
        margin: 0;
        background: linear-gradient(to right, #EDE7E3 50%, #aaa 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline-block;
      }

      .footer-tagline {
        font-size: 0.9rem;
        opacity: 0.7;
        line-height: 1.6;
      }

      .footer-socials {
        display: flex;
        gap: 1.5rem;
      }

      .footer-socials a {
        color: #EDE7E3;
        font-size: 1.2rem;
        transition: transform 0.3s, color 0.3s;
      }

      .footer-socials a:hover {
        color: #fff;
        transform: translateY(-3px);
      }

      .footer-links h3 {
        font-family: 'Nexa Light', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        letter-spacing: 1px;
        position: relative;
        display: inline-block;
      }

      .footer-links h3::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 1px;
        background-color: #EDE7E3;
      }

      .footer-links ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }

      .footer-links a {
        color: #EDE7E3;
        text-decoration: none;
        font-size: 0.9rem;
        opacity: 0.7;
        transition: opacity 0.3s, padding-left 0.3s;
      }

      .footer-links a:hover {
        opacity: 1;
        padding-left: 5px;
      }

      .footer-newsletter h3 {
        font-family: 'Nexa Light', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        letter-spacing: 1px;
      }

      .footer-newsletter p {
        font-size: 0.9rem;
        opacity: 0.7;
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }

      .newsletter-form {
        display: flex;
        border-bottom: 1px solid #EDE7E3;
        padding-bottom: 5px;
      }

      .newsletter-form input {
        background: transparent;
        border: none;
        color: #EDE7E3;
        font-family: 'Inter', sans-serif;
        width: 100%;
        padding: 0.5rem 0;
        outline: none;
      }

      .newsletter-form input::placeholder {
        color: #999;
      }

      .newsletter-form button {
        background: none;
        border: none;
        color: #EDE7E3;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.3s;
      }

      .newsletter-form button:hover {
        transform: translateX(3px);
      }

      .footer-bottom {
        max-width: var(--max-width);
        margin: 2rem auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        font-size: 0.8rem;
        opacity: 0.6;
      }

      .footer-legal {
        display: flex;
        gap: 1.5rem;
      }

      .footer-legal a {
        color: #EDE7E3;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .footer-legal a:hover {
        opacity: 1;
      }

      /* Responsive Footer */
      @media (max-width: 768px) {
        .footer-container {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
    `;

    // Define HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-brand">
            <h2 class="footer-logo">Be8ty</h2>
            <p class="footer-tagline">Weaving DNA into every thread since 2015.</p>
            <div class="footer-socials">
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
            </div>
          </div>

          <div class="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="shop.html">New Arrivals</a></li>
              <li><a href="collections.html">Limited Editions</a></li>
              <li><a href="lookbook.html">Style Guide</a></li>
              <li><a href="about.html">Our Craft</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Care Instructions</a></li>
            </ul>
          </div>

          <div class="footer-newsletter">
            <h3>Stay Connected</h3>
            <p>Subscribe for exclusives and early access.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your email" required>
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} BeCity. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    `;

    // Append to shadow DOM
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Add functionality
    this.shadowRoot.querySelector('.newsletter-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input').value;
      // Handle newsletter subscription
      console.log('Subscribed with:', email);
      e.target.querySelector('input').value = '';
    });
  }
}

// Register the custom elements
customElements.define('navbar-component', NavbarComponent);
customElements.define('footer-component', FooterComponent);
