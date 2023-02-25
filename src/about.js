export default function about() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = `<header>
      <a id="logo">
        <img src="coffee-beans.png" alt="Home" width="30px" height="30px">
        <span>ARGANTINA.</span>
      </a>
      <nav class="header-nav">
        <ul class="header-ul">
          <li class="header-nav-list"><a id="home" class="header-nav-link">Home</a></li>
          <li class="header-nav-list"><a id="menu"class="header-nav-link">Menu</a></li>
          <li class="header-nav-list"><a id="about" class="header-nav-link">About</a></li>
        </ul>
      </nav>
    </header>

    <main class="about">
      <img id="illustration1" src="work.svg" alt="group drinking coffee">
      <img id="illustration2" src="friends.svg" alt="friends chatting">
      <p id="chill-color">
        ABOUT
      </p>
      <section class="about-section">
        Welcome to our coffee shop located in Tiflet City, Dalia! We are passionate about 
        serving <span>high-quality coffee</span> that is both delicious and ethically sourced. Our 
        beans are carefully selected and roasted to <span>perfection</span> to ensure a consistently 
        flavorful cup of coffee every time.
      </section>
      <section class="about-section">
        In addition to great coffee, we offer <span>high-speed wifi</span>, making our coffee shop 
        the perfect place to work or study. Our friendly and knowledgeable staff are 
        always happy to help you choose the perfect coffee to suit your tastes. We also 
        provide a 24/7 service of <span>cigarettes</span> for our loyal <span>nicotine addicts</span>.
      </section>
      <section class="about-section">
        At our coffee shop, we believe in building a community around our shared <span>love</span> 
        of great coffee. We are dedicated to creating a <span>space</span> where people can come 
        together and enjoy a <span>delicious</span> cup of coffee. We look forward 
        to welcoming you to our coffee shop and providing you with the best service 
        possible.
      </section>
      <p id="chill-color" class="contact-us">
        CONTACT US
      </p>
      <div class="contact-info">
        <div class="contact-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <p>1800 Dalia Ave. Tiflet City, Morocco</p>
        </div>
        <div class="contact-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>
          <p>Monday to Thursday: 7am-11pm</p>
        </div>
        <div class="contact-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <p>(+212) 639 013 151</p>
        </div>
      </div>
    </main>
    <footer>
      <p>created by Humaminho</p>
    </footer>`;
    content.classList.remove('menu-background');
    content.classList.remove('home-background');
    content.classList.add('about-background');
}