import { useState } from 'react'
import logo from './assets/Nia\'s Heart Logo.jpg'
import heroImage from './assets/cozy modern room 2.avif'
import kitchenImage from './assets/set dinning table.webp'
import decorImage from './assets/ceramic vase flowers.avif'
import storageImage from './assets/storage basket.avif'
import bathImage from './assets/bathroom organization.avif'
import bedroomImage from './assets/throw pillow sofa.avif'
import lightingImage from './assets/bulb.avif'
import storyImage from './assets/African family kitchen.avif'
import featuredTable from './assets/family table 1.avif'
import featuredRoom from './assets/cozy modern room 4.avif'
import featuredBasket from './assets/storage basket 2.avif'
import featuredVase from './assets/ceramic vase flowers 2.avif'
import './App.css'

const collections = [
  { name: 'Kitchen & dining', image: kitchenImage, className: 'collection-wide' },
  { name: 'Home décor', image: decorImage, className: '' },
  { name: 'Storage & organization', image: storageImage, className: '' },
  { name: 'Bedroom & bath', image: bathImage, className: 'collection-wide' },
  { name: 'Soft furnishings', image: bedroomImage, className: '' },
  { name: 'Everyday living', image: lightingImage, className: '' },
]

const edits = [
  { name: 'Gather around', image: featuredTable, category: 'Kitchen & dining' },
  { name: 'A softer landing', image: featuredRoom, category: 'Comfort & living' },
  { name: 'A place for everything', image: featuredBasket, category: 'Storage & organization' },
  { name: 'Little finishing touches', image: featuredVase, category: 'Home décor' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15.4 15.4 4.1 4.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5.5 8.5h13l1 11h-15l1-11Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [bagOpen, setBagOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const filteredEdits = edits.filter((edit) =>
    `${edit.name} ${edit.category}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  function submitNewsletter(event) {
    event.preventDefault()
    setNewsletterMessage(
      email.trim()
        ? 'Thanks for your interest — newsletter sign-up is coming soon.'
        : 'Enter your email address to continue.',
    )
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="announcement">
        <p>A considered home starts here <span aria-hidden="true">✳</span> Curated for the modern family</p>
        <a href="#collections">Discover the edit <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nia’s Hearty Home — home">
          <img src={logo} alt="Nia’s Hearty Home" />
        </a>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#featured" onClick={closeMenu}>The edit</a>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#footer" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button
            className={`icon-button search-toggle${searchOpen ? ' is-active' : ''}`}
            type="button"
            aria-label={searchOpen ? 'Close search' : 'Search'}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <SearchIcon />
          </button>
          <button
            className="icon-button bag-toggle"
            type="button"
            aria-label="Open shopping bag"
            onClick={() => setBagOpen(true)}
          >
            <BagIcon />
            <span className="bag-count" aria-label="0 items">0</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="search-panel">
          <label htmlFor="site-search">What are you looking for?</label>
          <div className="search-field">
            <SearchIcon />
            <input
              autoFocus
              id="site-search"
              type="search"
              placeholder="Try “storage” or “dining”"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}
            />
            <button
              type="button"
              onClick={() => {
                setSearchOpen(false)
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View matches
            </button>
          </div>
          <p>Search our home edits and collections</p>
        </div>
      )}

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> THOUGHTFUL THINGS, FOR EVERYDAY LIVING</p>
            <h1>Make every house<br />feel more like <em>home.</em></h1>
            <p className="hero-description">
              Discover thoughtfully selected essentials that bring comfort, beauty, and
              convenience into your everyday living.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collections">Shop the collection <ArrowIcon /></a>
              <a className="text-link" href="#story">Discover our story <span>↗</span></a>
            </div>
            <div className="hero-note">
              <span className="note-mark">N.</span>
              <span>Comfort in the details.<br /><strong>Home in the feeling.</strong></span>
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src={heroImage} alt="A warm, sunlit living room styled for comfortable family life" />
            <div className="hero-stamp" aria-label="A home, made with heart">
              <span>MADE FOR</span>
              <span>THE MOMENTS</span>
              <span>THAT MATTER</span>
              <span className="stamp-heart">♡</span>
            </div>
            <div className="image-caption"><span>01 / 04</span><span>THE EVERYDAY HOME EDIT</span></div>
          </div>
          <a className="scroll-cue" href="#collections"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="collections section-wrap" id="collections">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> FIND YOUR EVERYDAY</p>
              <h2>Explore our <em>collections.</em></h2>
            </div>
            <p className="section-intro">
              Everything you need to make your space more comfortable, organized, and beautiful.
            </p>
          </div>
          <div className="collection-grid">
            {collections.map((collection, index) => (
              <a
                className={`collection-card ${collection.className}`}
                href="#featured"
                key={collection.name}
              >
                <img src={collection.image} alt="" loading="lazy" />
                <span className="collection-number">0{index + 1}</span>
                <span className="collection-label">{collection.name}<ArrowIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="featured section-wrap" id="featured">
          <div className="section-heading featured-heading">
            <div>
              <p className="eyebrow"><span /> A FEW THINGS WE LOVE</p>
              <h2>Thoughtfully chosen<br />for <em>your home.</em></h2>
            </div>
            <div className="featured-aside">
              <p>Little details, useful finds, and finishing touches to make a space feel like yours.</p>
              <a className="text-link" href="#collections">Explore all collections <span>↗</span></a>
            </div>
          </div>
          <div className="product-grid">
            {filteredEdits.map((edit, index) => (
              <a className="product-card" href="#collections" key={edit.name}>
                <div className="product-image">
                  <img src={edit.image} alt="" loading="lazy" />
                  <span className="product-index">0{index + 1}</span>
                  <span className="product-arrow"><ArrowIcon /></span>
                </div>
                <p className="product-category">{edit.category}</p>
                <h3>{edit.name}</h3>
              </a>
            ))}
            {filteredEdits.length === 0 && (
              <p className="no-results">No edits match “{searchTerm}”. Try another search.</p>
            )}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-image-wrap">
            <img src={storyImage} alt="A family sharing a warm moment in the kitchen" loading="lazy" />
            <span className="story-image-note">A HOME IS MADE<br />IN THE EVERYDAY.</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow"><span /> OUR HEART, YOUR HOME</p>
            <h2>A little more comfort.<br />A lot more <em>home.</em></h2>
            <p>
              We believe the little things make a house feel special. From practical everyday
              essentials to thoughtful finishing touches, we bring together finds that make
              your space more comfortable, organized, and welcoming.
            </p>
            <a className="button button-outline" href="#footer">A little about us <ArrowIcon /></a>
            <span className="story-signoff">With heart, Nia <span>♡</span></span>
          </div>
        </section>

        <section className="promise section-wrap">
          <div className="promise-heading">
            <p className="eyebrow"><span /> THE NIA DIFFERENCE</p>
            <h2>The little things<br />that make shopping <em>better.</em></h2>
          </div>
          <div className="promise-list">
            {[
              ['01', 'Quality selection', 'Thoughtfully selected essentials for the way you live.'],
              ['02', 'Affordable living', 'Considered pieces, chosen to feel right at home.'],
              ['03', 'Convenient delivery', 'A simpler way to bring a little more home to you.'],
              ['04', 'Customer care', 'A real, thoughtful team here to help along the way.'],
            ].map(([number, title, description]) => (
              <article className="promise-item" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="promise-star" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="newsletter-copy">
            <p className="eyebrow"><span /> NOTES FROM HOME</p>
            <h2>A little more home<br />in your <em>inbox.</em></h2>
            <p>New finds, thoughtful ideas, and the occasional note from us.</p>
          </div>
          <form className="newsletter-form" onSubmit={submitNewsletter}>
            <label htmlFor="newsletter-email">Your email address</label>
            <div className="newsletter-input">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setNewsletterMessage('')
                }}
                required
              />
              <button type="submit" aria-label="Sign up for the newsletter"><ArrowIcon /></button>
            </div>
            <p className="newsletter-privacy">By signing up, you agree to receive occasional updates from Nia’s Hearty Home.</p>
            <p className="newsletter-status" aria-live="polite">{newsletterMessage}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label="Nia’s Hearty Home — back to top">
              <img src={logo} alt="Nia’s Hearty Home" />
            </a>
            <p>Thoughtful essentials for a home that feels like yours.</p>
            <a className="footer-social" href="#newsletter">Notes from home <span>↗</span></a>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <a href="#collections">All collections</a>
            <a href="#featured">The home edit</a>
            <a href="#story">Our story</a>
          </div>
          <div className="footer-column">
            <h2>Customer care</h2>
            <p>Delivery and contact information will be shared here soon.</p>
          </div>
          <div className="footer-note">
            <span>CURATED FOR THE MODERN FAMILY</span>
            <p>Make yourself<br /><em>at home.</em></p>
            <a href="#home" aria-label="Back to top">↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nia’s Hearty Home</span>
          <span>Made with heart, for home.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {bagOpen && (
        <div className="drawer-backdrop" onClick={() => setBagOpen(false)}>
          <aside
            className="bag-drawer"
            aria-label="Shopping bag"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-heading">
              <h2>Your bag <span>(0)</span></h2>
              <button type="button" onClick={() => setBagOpen(false)} aria-label="Close shopping bag">×</button>
            </div>
            <div className="bag-empty">
              <BagIcon />
              <h3>A little room for something lovely.</h3>
              <p>Your bag is waiting for its first find.</p>
              <button className="button button-dark" type="button" onClick={() => setBagOpen(false)}>
                Explore the collections <ArrowIcon />
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default App
