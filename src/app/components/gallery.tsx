const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
   "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
    "/images/image15.jpg",
    "/images/image16.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg",
    "/images/image23.jpg",
    "/images/image24.jpg",
    "/images/image25.jpg",
  ];
  
  export default function ImageGallery() {
    return (
      <div className="overflow-hidden whitespace-nowrap py-4 bg-black">
        <div className="flex animate-scroll gap-4 h-[500px] items-center">
          {/* Duplicate the images for seamless infinite loop */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="h-full min-w-max w-auto object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    );
  }
  