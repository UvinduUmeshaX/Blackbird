"use client";
import { useState,useRef  } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import PaintingEffect from './components/PaintingEffect';
import BackgroundVideo from './components/BackgroundVideo';
import FoodAnimation from './components/FoodAnimation';
import ImageGallery from "./components/ImageGallery";
import EventGallery3D from './components/EventGallery3D';
import ParallaxImage from "./components/ParallaxImage";
import HeroTextAnimation from "./components/HeroTextAnimation";

export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    <div style={{backgroundColor: 'black', color: 'white', minHeight: '100vh'}}>
      {/* Navigation Bar */}
      <nav className="bb-nav" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2.5rem 2.25rem 1.5rem 2.25rem', fontFamily: 'Lora, serif'}}>
        {/* Logo - Left */}

          <img
            className="logo-img"
            src="/images/logo.png"
            alt="Blackbird Logo"
            style={{ height: '7rem', width: 'auto' }}
          />
          
        
        
        {/* Menu Links - Center */}
        <div className="desktop-nav-links" style={{display: 'flex', alignItems: 'center', gap: '5rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
          <a href="#info" style={{color: 'white', fontSize: '1.5rem'}}>Info</a>
          <a href="#whats-on" style={{color: 'white', fontSize: '1.5rem'}}>What's on</a>
          <a href="#menu" style={{color: 'white', fontSize: '1.5rem'}}>Menu</a>
          <a href="#contact" style={{color: 'white', fontSize: '1.5rem'}}>Contact</a>
        </div>
        
        {/* Button - Right */}
        <div className="nav-cta" style={{display: 'flex', alignItems: 'center'}}>
          <button style={{padding: '0.5rem 2rem', border: '1px solid white', color: 'white', backgroundColor: 'transparent', fontSize: '1.5rem', fontFamily: 'Lora, serif'}}>
            Book A Table
          </button>
        </div> 
        {/* Hamburger - Mobile */}
        <button aria-label="Open menu" className="hamburger" onClick={() => setIsMenuOpen(true)}>☰</button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button aria-label="Close menu" className="close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
          <a href="#info" onClick={() => setIsMenuOpen(false)}>Info</a>
          <a href="#whats-on" onClick={() => setIsMenuOpen(false)}>What's on</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="mobile-cta" onClick={() => setIsMenuOpen(false)}>Book A Table</button>
        </div>
      )}


      {/* Hero Section with Hover Animation */}
      
      <PaintingEffect  size={32}>
                <section className="hero">
                 <h1 className='hero-h1'>BLACKBIRD</h1>
                  <p className='hero-p'>Live Music Bar & Restaurant</p>
            {/* Hero Image */}
            
              <img 
                className="hero-img"
                src="/images/hero.png" 
                alt="Blackbird Hero Image" 
                style={{width: '100%', height: 'auto'}}
              />
          </section>
          </PaintingEffect>

        <BackgroundVideo />

      {/* Quote Section */}
            <section className="quote-section">
        <div className="quote-container">
          {/* Quote */}
          <blockquote className="quote-text">
            “music so loud I can't hear my thoughts.”
          </blockquote>

          {/* Image */}
          <img
            src="/images/img1.png"
            alt="Bird Sketch"
            className="quote-image"
          />
        </div>
        </section>



      {/* Events Section */}
            <section style={{ padding: '4rem 1.5rem', backgroundColor: '#111827', backgroundImage: `url('/images/eventimg.png')`, backgroundSize: 'cover',
    backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white',
            fontFamily: 'BL-Melody, serif'
          }}>
            Events
          </h2>

          {/* Two-column grid layout */}
          <EventGallery3D />
        </div>
        <button style={{display: 'block', margin: '0 auto',padding: '0.75rem 2rem', marginBlock:'3rem 0rem ', border: '2px solid white', color: 'white', backgroundColor: 'transparent', marginBottom: '2rem', fontFamily: 'Lora, serif'}}>
            See Full Schedule
          </button>
          
      </section>



      {/* Food & Drinks Section */}
      <FoodAnimation  size={48}> 

            <section style={{
              padding: '4rem 1.5rem', 
              backgroundColor: '#F3F4F6', 
              color: 'black',
              position: 'relative'
            }}>
              {/* Background Animation */}
              
              {/* Your original content with higher z-index */}
              <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
            color: "black",
            fontFamily: "BL-Melody, serif",
          }}
        >
          Food & Drinks
        </h2>

        <ParallaxImage
          src="/images/menuimg.png"
          alt="Parallax Example"
          height="700x" // adjust this for how tall you want it
        />

        <div style={{ textAlign: "center", padding: "3rem 0rem 0rem 0rem" }}>
          <button
            style={{
              padding: "0.75rem 2.5rem",
              border: "2px solid black",
              color: "white",
              backgroundColor: "black",
              fontFamily: "Lora, serif",
            }}
          >
            See menu
          </button>
        </div>
      </div>
      </section>

      </FoodAnimation>

      {/* Contact Section */}
                <section className="contact-section">
            <div className="contact-container">
              {/* Image */}
              <img
                src="/images/contactimg.png"
                alt="Contact Illustration"
                className="contact-image"
              />

              {/* Text + Quote + Icons */}
              <div className="contact-text-container">
                <h3 className="contact-title">Contact Us</h3>

                <blockquote className="contact-quote">
                  “The trees can hear you if you talk with them.”
                </blockquote>

                <div className="contact-icons">
                  <div className="contact-icon">f</div>
                  <div className="contact-icon">□</div>
                  <div className="contact-icon">💬</div>
                </div>
              </div>
            </div>

            {/* Gallery below */}
            <div className="gallery-wrapper">
              <ImageGallery />
            </div>
          </section>



      {/* Reservations Section */}
      <section style={{padding: '4rem 1.5rem', backgroundColor: 'black', color: 'white', position: 'relative'}}>
        <div style={{position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.05', pointerEvents: 'none'}}>
         
        </div>
        <div style={{position: 'relative', zIndex: '10', maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Reservations</h2>
          <button style={{padding: '0.75rem 2rem', border: '2px solid white', color: 'white', backgroundColor: 'transparent', marginBottom: '2rem', fontFamily: 'Lora, serif'}}>
            Book A Table
          </button>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Location</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>8 Lock Rd,Singapore<br />108936</p>
            </div>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Opening Hours</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>5 pm–12 am<br />(Closed on Mon)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'black', textAlign: 'center',backgroundImage: `url('/images/footerimg.png')`, backgroundSize: 'cover',
    backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height:'10rem'}}>
     
      </footer>
      {/* Responsive styles */}
      <style jsx>{`
        .bb-nav { margin-left: 130px; margin-right: 130px; position: relative; display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap; }
        .logo-img { display: block; height: 7rem; width: auto; }
        .hamburger { display: none; background: transparent; color: white; border: 1px solid white; padding: 0.25rem 0.5rem; font-size: 1.5rem; }
        .mobile-menu { position: fixed; top: 0; left: 0; right: 0; background: black; padding: 1rem 1rem 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center; z-index: 1000; border-bottom: 1px solid #333; }
        .mobile-menu a { color: white; font-size: 1.25rem; }
        .mobile-cta { padding: 0.5rem 1.5rem; border: 2px solid white; background: transparent; color: white; font-family: Lora, serif; }
        .close-btn { align-self: flex-end; background: transparent; color: white; border: 1px solid white; padding: 0.25rem 0.5rem; font-size: 1.25rem; }
        .hero{padding: 16rem 1.5rem 5rem 1.5rem; text-align: center; position:relative;}
        .hero-h1{font-size: 8rem; color: white; margin-bottom: 0.2rem; font-weight: bold; font-family: 'BL-Melody', serif;}
        .hero-p{font-size: 2rem; margin-bottom: 5rem; color:white; font-family: Lora, serif;letter-spacing:0.3em;}
        .quote-section {
      padding: 4rem 1.5rem;
      background-color: black;
    }

    .quote-section {
      padding: 4rem 1.5rem;
      background-color: black;
    }

    /* Desktop default: side-by-side, quote left, image right */
    .quote-container {
      max-width: 64rem;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .quote-image {
      width: auto;
      height: 20rem;
      object-fit: cover;
      background-color: #374151;
    }

    .quote-text {
      font-size: 2rem;
      font-style: italic;
      color: white;
      font-family: 'Lora', serif;
      text-align: left;
      flex: 1;
    }

      .contact-section {
      padding: 4rem 1.5rem;
      background-color: black;
    }

    /* Desktop Default: Image left, text right */
    .contact-container {
      max-width: 64rem;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .contact-image {
      width: 22rem;
      height: 24rem;
      object-fit: cover;
      background-color: #374151;
      flex-shrink: 0;
    }

    .contact-text-container {
      flex: 1;
    }

    .contact-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: white;
      font-family: 'BL-Melody', serif;
    }

    .contact-quote {
      font-size: 2rem;
      font-style: italic;
      color: white;
      font-family: 'Lora', serif;
    }

    .contact-icons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .contact-icon {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #4b5563;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
        
        @media (max-width: 1400px) {
          .desktop-nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: block; }
        }

        @media (max-width: 1024px)
         { .bb-nav { margin-left: 60px; margin-right: 60px; } }

        @media (max-width: 768px) {
          .bb-nav { margin-left: 0; margin-right: 0; padding: 1.5rem 1rem; flex-direction: row; gap: 0; justify-content: space-between; align-items: center; }
          .desktop-nav-links { display: none !important; }
          .hamburger { display: block; align-self: auto; }
          .logo-img { height: 6.5rem !important; }
          .hero { padding: 2rem 1.5rem 5rem 1.5rem; }
          .hero-h1 { font-size: 3.4rem; }
          .hero-p{font-size: 1rem; margin-bottom: 2rem; color:white; font-family: Lora, serif;letter-spacing:0.1em;}

       .quote-container {
        flex-direction: column;
        align-items: center;
      }
      /* Reverse order so image is first */
      .quote-image {
        order: -1;
      }
      .quote-text {
        font-size: 1.3rem;
        text-align: center;
      }
         .contact-container {
        flex-direction: column;
        align-items: center;
      }
      .contact-text-container {
        text-align: center;
      }
      .contact-icons {
        justify-content: center;
      }
         .contact-quote{
       font-size: 1.3rem;
      }
    }
     
    .gallery-wrapper {
      display: flex;
      margin-top: 5rem;
    }
        }
      `}</style>
    </div>
  );
}
