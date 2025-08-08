// components/BackgroundVideo.tsx
export default function BackgroundVideo() {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <img
            src="/images/videotxt.png"
            alt="video text"
            className="max-w-full h-auto w-64 md:w-96"
            style={{height: '23rem', width: 'auto'}}
         />
        
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Location</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>226, Backer street<br />Singapore</p>
            </div>
            <div style={{color: 'white'}}>
              <h4 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white', fontFamily: 'BL-Melody, serif'}}>Open at</h4>
              <p style={{color: 'white', fontFamily: 'Lora, serif'}}>9.00 a.m. - 1.00 a.m.<br />Everyday</p>
            </div>
          </div>
        
  
        {/* Optional dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>
      </div>
    );
  }
  