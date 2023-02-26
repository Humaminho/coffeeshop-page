export default function menu() {
  const content = document.getElementById('content');
  content.innerHTML = '';
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

    <main class="menu">
      <p id="chill-color">
        MENU
      </p>

      <div id="our-menu">
        <section class="drink">
          <div class="title" id="chill-color">ESPRESSO</div>
          <div class="drinks">
            <div class="drink-names">
              Normal<br>Talian<br>Nss Nss<br>Special<br>Americano<br>Cappuccino<br>Macchiato<br>Chocolate milk
            </div>
            <div class="prices">
              7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title" id="chill-color">ICE BLENDED</div>
          <div class="drinks">
            <div class="drink-names">
              Caramel<br>Coffee Jelly<br>Cookies and Cream<br>Hazelnut Mocha<br>Matcha Cream<br>Mint Chocolate<br>Strawberry Cream<br>Vanilla Bean
            </div>
            <div class="prices">
              7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>7.00<br>
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title" id="chill-color">TEA</div>
          <div class="drinks">
            <div class="drink-names">
              Mint Flavored Tea<br>Green Tea<br>Northern Tea<br>Herbal Tea
            </div>
            <div class="prices">
              8.00<br>8.00<br>8.00<br>8.00
            </div>
          </div>
        </section>
        <section class="drink">
          <div class="title" id="chill-color">BAKERY</div>
          <div class="drinks">
            <div class="drink-names">
              Pastries<br>Bagels<br>Muffins<br>Biscotto
            </div>
            <div class="prices">
              3.00<br>5.00<br>4.00<br>2.00
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer>
      <p>created by Humaminho</p>
    </footer>`;

  content.classList.remove('home-background');
  content.classList.remove('about-background');
  content.classList.add('menu-background');
}