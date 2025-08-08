
import PaintingEffect from './components/PaintingEffect';
import BackgroundVideo from './components/BackgroundVideo';
import FoodAnimation from './components/FoodAnimation';


export default function Home() {
  return (
    
    <div style={{backgroundColor: 'black', color: 'white', minHeight: '100vh'}}>
      {/* Navigation Bar */}
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2.5rem 2.25rem 1.5rem 2.25rem', marginLeft: '130px', marginRight: '130px', fontFamily: 'Lora, serif'}}>
        {/* Logo - Left */}
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          
          {/* Option 2: Image Logo (Active) */}
          <img 
            src="/images/logo.png" 
            alt="Blackbird Logo" 
            style={{height: '7rem', width: 'auto'}}
          />
          
        </div>
        
        {/* Menu Links - Center */}
        <div style={{display: 'flex', alignItems: 'center', gap: '5rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
          <a href="#info" style={{color: 'white', fontSize: '1.5rem'}}>Info</a>
          <a href="#whats-on" style={{color: 'white', fontSize: '1.5rem'}}>What's on</a>
          <a href="#menu" style={{color: 'white', fontSize: '1.5rem'}}>Menu</a>
          <a href="#contact" style={{color: 'white', fontSize: '1.5rem'}}>Contact</a>
        </div>
        
        {/* Button - Right */}
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button style={{padding: '0.5rem 2rem', border: '1px solid white', color: 'white', backgroundColor: 'transparent', fontSize: '1.5rem', fontFamily: 'Lora, serif'}}>
            Book A Table
          </button>
        </div>
      </nav>

      {/* Hero Section with Hover Animation */}
      
      <PaintingEffect  size={32}>
          <section style={{padding: '16rem 1.5rem 5rem 1.5rem', textAlign: 'center', position: 'relative'}}>
            <h1 style={{fontSize: '8rem', fontWeight: 'bold', marginBottom: '0.2rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>BLACKBIRD</h1>
            <p style={{fontSize: '2rem', marginBottom: '5rem', color: 'white', fontFamily: 'Lora, serif', letterSpacing: '0.3em'}}>Live Music Bar & Restaurant</p>
            
            {/* Hero Image */}
            <div style={{margin: '0 auto 0 auto'}}>
              <img 
                src="/images/hero.png" 
                alt="Blackbird Hero Image" 
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </section>
          </PaintingEffect>
        <BackgroundVideo />

      {/* Quote Section */}
              <section style={{
          padding: '4rem 1.5rem',
          backgroundColor: 'black',
        }}>
          <div style={{
            maxWidth: '64rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
            {/* Quote */}
            <blockquote style={{
              fontSize: '1.7rem',
              fontStyle: 'italic',
              color: 'white',
              fontFamily: 'Lora, serif',
              flex: '1',
            }}>
              “music so loud I can't hear my thoughts.”
            </blockquote>

            {/* Image */}
            <img
              src="/images/img1.png"
              alt="Bird Sketch"
              style={{
                width: 'auto',
                height: '20rem',
                objectFit: 'cover',
                backgroundColor: '#374151',
              }}
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'stretch' // important for vertical alignment
          }}>

            {/* Left Column */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              
              overflow: 'hidden'
            }}>
              <img
                src="/images/events.png"
                alt="Main Event"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  
                }}
              />
              
            </div>

            {/* Right Column */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {['1event.png', '2event.png', '3event.png', '4event.png'].map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#4B5563',
                    
                    overflow: 'hidden',
                    aspectRatio: '1 / 1.25' // makes sure all 4 blocks are square
                  }}
                >
                  <img
                    src={`/images/${img}`}
                    alt={`Event ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button style={{display: 'block', margin: '0 auto',padding: '0.75rem 2rem', marginBlock:'3rem 0rem ', border: '2px solid white', color: 'white', backgroundColor: 'transparent', marginBottom: '2rem', fontFamily: 'Lora, serif'}}>
            See Full Schedule
          </button>
      </section>



      {/* Food & Drinks Section */}
      <FoodAnimation  size={48}>
      <section style={{padding: '4rem 1.5rem', backgroundColor: '#F3F4F6', color: 'black'}}>
        <div style={{maxWidth: '72rem', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: 'black', fontFamily: 'BL-Melody, serif'}}>Food & Drinks</h2>
          <img 
                src="/images/menuimg.png" 
                alt="Blackbird Hero Image" 
                style={{width: '100%', height: 'auto'}}
              />
          <div style={{textAlign: 'center',padding:'3rem 0rem 0rem 0rem '}}>
            <button style={{padding: '0.75rem 2.5rem ', border: '2px solid black', color: 'white', backgroundColor: 'black', fontFamily: 'Lora, serif'}}>
              See menu
            </button>
          </div>
        </div>
      </section>
      </FoodAnimation>
      {/* Contact Section */}
      <section style={{
          padding: '4rem 1.5rem',
          backgroundColor: 'black',
        }}>
          <div style={{
            maxWidth: '64rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}>
             <img
              src="/images/contactimg.png"
              alt="Bird Sketch"
              style={{
                width: '10rem',
                height: '24rem',
                objectFit: 'cover',
                backgroundColor: '#374151',
                flex: '1',
              }}
            />
           
            <div>
            <h3 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Contact Us</h3>
            {/* Quote */}
            <blockquote style={{
              fontSize: '1.7rem',
              fontStyle: 'italic',
              color: 'white',
              fontFamily: 'Lora, serif'
              
            }}>
              “The trees can hear you if you talk with them.”
            </blockquote>
            <div style={{display: 'flex', gap: '1rem', margin:'2rem 0rem 0rem 0rem'}}>
              <div style={{width: '2.5rem', height: '2.5rem', backgroundColor: '#4B5563', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>f</div>
              <div style={{width: '2.5rem', height: '2.5rem', backgroundColor: '#4B5563', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>□</div>
              <div style={{width: '2.5rem', height: '2.5rem', backgroundColor: '#4B5563', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>💬</div>
            </div>

            </div>
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
    </div>
  );
}
