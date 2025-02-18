"use client"

import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../../content/homepage/photo";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function App() {
  return (
    <div className="h-60 gap-12 flex flex-col items-center justify-start">
      <h1 className="mb-5 text-[4rem] text-yellow-500">Gallerie</h1>
      <Gallery images={images} enableImageSelection={true} />
    </div>
  );
}