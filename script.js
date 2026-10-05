* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --yellow: #f5c400;
  --yellow-light: #fff1a8;
  --black: #111111;
  --gray: #666666;
  --light: #f8f6ef;
  --white: #ffffff;
  --border: #e8e4d8;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #fffdf7;
  color: var(--black);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 92%;
  max-width: 1160px;
  margin: auto;
}

/* HEADER */

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255,253,247,.95);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--border);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.logo-box {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: var(--yellow);
  border: 2px solid var(--black);
  border-radius: 10px;
  font-size: 12px;
  font-weight: 900;
  box-shadow: 4px 4px 0 var(--black);
}

.logo strong {
  font-weight: 900;
}

nav {
  margin-left: auto;
  display: flex;
  gap: 25px;
}

nav a {
  font-size: 14px;
  font-weight: 600;
}

nav a:hover {
  color: #8a7000;
}

.nav-button {
  background: var(--black);
  color: white;
  padding: 12px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 800;
}

.menu-button {
  display: none;
  border: 0;
  background: transparent;
  font-size: 26px;
}

/* HERO */

.hero {
  padding: 90px 0;
  background:
    radial-gradient(
      circle at 80% 20%,
      #fff0a3,
      transparent 40%
    );
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;
}

.eyebrow {
  color: #806d00;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.hero h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.05;
}

.hero h1 {
  font-size: clamp(55px, 7vw, 86px);
  letter-spacing: -4px;
}

.hero h1 span {
  display: inline;
  background: var(--yellow);
  padding: 0 12px;
}

.hero-content > p {
  max-width: 620px;
  color: #555;
  font-size: 18px;
  margin: 28px 0;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px 24px;
  border: 2px solid var(--black);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  transition: .2s;
}

.button:hover {
  transform: translateY(-2px);
}

.primary {
  background: var(--yellow);
  box-shadow: 4px 4px 0 var(--black);
}

.secondary {
  background: white;
}

.dark {
  background: var(--black);
  color: white;
}

.small {
  padding: 11px 18px;
  font-size: 12px;
}

.trust {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 28px;
  color: #666;
  font-size: 12px;
  font-weight: 600;
}

/* BOOK */

.hero-books {
  min-height: 480px;
  display: grid;
  place-items: center;
  position: relative;
}

.book {
  width: 290px;
  height: 390px;
  background: var(--yellow);
  border: 2px solid var(--black);
  border-radius: 8px 18px 18px 8px;
  box-shadow: 15px 18px 0 var(--black);
  transform: rotate(-5deg);
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.book-small {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
}

.book-number {
  font-size: 20px;
  font-weight: 900;
  margin-top: 18px;
}

.book-title {
  font-size: 53px;
  font-weight: 900;
  line-height: .85;
  margin: 10px 0;
}

.book-subtitle {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
}

.floating-card {
  position: absolute;
  background: white;
  border: 2px solid var(--black);
  border-radius: 17px;
  padding: 17px;
  box-shadow: 7px 8px 0 rgba(0,0,0,.12);
  z-index: 2;
}

.floating-card small {
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}

.floating-card strong {
  display: block;
  font-family: Georgia, serif;
  font-size: 21px;
  line-height: 1;
  margin: 7px 0;
}

.floating-card span {
  font-size: 10px;
  color: #777;
}

.card-left {
  top: 50px;
  left: 0;
  transform: rotate(-5deg);
}

.card-right {
  right: 0;
  bottom: 50px;
  transform: rotate(5deg);
}

/* STATS */

.stats {
  background: var(--black);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stats-grid div {
  padding: 28px;
  border-right: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.stats-grid strong {
  color: var(--yellow);
  font-size: 28px;
}

.stats-grid span {
  color: #aaa;
  font-size: 12px;
  font-weight: 600;
}

/* SECTION */

.section {
  padding: 100px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  margin-bottom: 45px;
}

h2 {
  font-size: clamp(40px, 5vw, 60px);
}

.section-heading > p {
  max-width: 420px;
  color: var(--gray);
}

/* PRODUCTS */

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.product {
  background: white;
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  transition: .25s;
}

.product:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 50px rgba(0,0,0,.1);
}

.cover {
  height: 340px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border);
}

.cover small {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}

.cover h3 {
  font-family: Georgia, serif;
  font-size: 45px;
  line-height: .9;
  margin-top: auto;
  margin-bottom: 15px;
}

.cover span {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1px;
}

.cover b {
  margin-top: 12px;
  font-size: 11px;
}

.yellow-cover {
  background: var(--yellow);
}

.dark-cover {
  background: #171717;
  color: white;
}

.purple-cover {
  background: #ded5ff;
}

.product-content {
  padding: 24px;
}

.product-content label,
.printable-info label {
  display: inline-block;
  background: #f0ede3;
  border-radius: 30px;
  padding: 6px 10px;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}

.product-content h3 {
  margin: 15px 0 8px;
  font-size: 19px;
  line-height: 1.25;
}

.product-content p {
  color: var(--gray);
  font-size: 13px;
  min-height: 65px;
}

.price {
  font-size: 25px;
  font-weight: 900;
  margin: 18px 0;
}

.price del {
  color: #999;
  font-size: 13px;
  font-weight: 500;
  margin-left: 6px;
}

.product-buttons {
  display: flex;
  align-items: center;
  gap: 18px;
}

.preview {
  font-size: 12px;
  font-weight: 800;
}

/* BANNER */

.yellow-banner {
  background: var(--yellow);
  padding: 65px 0;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.banner-content h2 {
  font-size: 48px;
}

.banner-content p {
  margin-top: 10px;
}

/* PRINTABLE */

.printable-section {
  background: #f6f3ea;
}

.printable-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border: 1px solid var(--border);
  border-radius: 28px;
  overflow: hidden;
}

.worksheet {
  min-height: 520px;
  background: #e8dfcd;
  display: grid;
  place-items: center;
  padding: 50px;
}

.paper {
  width: 280px;
  min-height: 380px;
  background: white;
  border: 2px solid var(--black);
  box-shadow: 12px 13px 0 var(--black);
  padding: 25px;
  transform: rotate(-3deg);
}

.paper small {
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}

.paper h3 {
  font-family: Georgia, serif;
  font-size: 44px;
  line-height: .9;
  margin: 45px 0;
}

.dots {
  letter-spacing: 8px;
}

.paper p {
  font-size: 9px;
  font-weight: 900;
  margin-top: 35px;
}

.printable-info {
  padding: 60px;
}

.printable-info h3 {
  font-family: Georgia, serif;
  font-size: 40px;
  line-height: 1.05;
  margin: 18px 0;
}

.printable-info p {
  color: var(--gray);
}

.printable-info ul {
  list-style: none;
  padding: 0;
  margin: 25px 0;
  line-height: 2.2;
  font-size: 13px;
  font-weight: 600;
}

/* ABOUT */

.about {
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 80px;
}

.about-text {
  font-size: 18px;
  color: #555;
}

.features {
  margin-top: 30px;
}

.features div {
  display: flex;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}

.features b {
  color: #8a7500;
}

.features span {
  color: #666;
  font-size: 13px;
}

.features strong {
  color: #111;
}

/* FAQ */

.narrow {
  max-width: 820px;
}

.center-heading {
  text-align: center;
  margin-bottom: 45px;
}

.faq details {
  border-bottom: 1px solid var(--border);
  padding: 22px 0;
}

.faq summary {
  cursor: pointer;
  font-weight: 800;
  list-style: none;
}

.faq summary::after {
  content: "+";
  float: right;
}

.faq details[open] summary::after {
  content: "−";
}

.faq details p {
  color: var(--gray);
  font-size: 14px;
  max-width: 700px;
  margin-top: 12px;
}

/* CTA */

.final-cta {
  text-align: center;
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    #fff0a2,
    #fffdf7
  );
}

.final-cta h2 {
  margin-bottom: 30px;
}

/* FOOTER */

footer {
  background: #111;
  color: white;
  padding: 55px 0 20px;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.footer-logo {
  color: white;
}

footer p {
  color: #888;
  font-size: 12px;
  margin-top: 10px;
}

.footer-links {
  display: flex;
  gap: 22px;
  align-items: center;
}

.footer-links a {
  color: #bbb;
  font-size: 12px;
}

.copyright {
  border-top: 1px solid #292929;
  margin-top: 35px;
  padding-top: 20px;
  color: #777;
  font-size: 11px;
}

/* MOBILE */

@media (max-width: 900px) {

  nav,
  .nav-button {
    display: none;
  }

  .menu-button {
    display: block;
    margin-left: auto;
  }

  nav.mobile-open {
    display: flex;
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    background: #fffdf7;
    padding: 20px;
    flex-direction: column;
    border-bottom: 1px solid var(--border);
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .products {
    grid-template-columns: 1fr 1fr;
  }

  .printable-product,
  .about-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 620px) {

  .nav {
    min-height: 68px;
  }

  .hero {
    padding: 60px 0;
  }

  .hero h1 {
    font-size: 55px;
  }

  .hero-content > p {
    font-size: 16px;
  }

  .hero-books {
    transform: scale(.82);
    margin: -25px 0;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stats-grid div {
    border-bottom: 1px solid #333;
  }

  .products {
    grid-template-columns: 1fr;
  }

  .section-heading {
    flex-direction: column;
    align-items: start;
  }

  .banner-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .printable-info {
    padding: 35px 25px;
  }

  .printable-info h3 {
    font-size: 34px;
  }

  .footer-grid {
    flex-direction: column;
  }

  .footer-links {
    flex-wrap: wrap;
  }

}
