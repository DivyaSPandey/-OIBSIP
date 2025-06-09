// eslint-disable-next-line no-unused-vars
import React from "react";

function GallerySection() {
  const gallery = [
    "/public/img1.webp",
    "/public/img3.jpg",
    "/public/img5.jpg",
    "/public/img2.jpg",
    "/public/img4.jpg",
    "/public/img6.jpg",
    "/public/img7.jpg",
    "/public/img8.jpg",
  ];

  return (
    <>
      <section className="gallery">
        <h1>Gallery</h1>
        <div className="images">
          <div>
            {gallery.slice(0, 3).map((element, index) => (
              <img key={index} src={element} alt="galleryImage" />
            ))}
          </div>
          <div>
            {gallery.slice(3, 6).map((element, index) => (
              <img key={index} src={element} alt="galleryImage" />
            ))}
          </div>
          <div>
            {gallery.slice(6, 9).map((element, index) => (
              <img key={index} src={element} alt="galleryImage" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySection;
