import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Cozy cafe interiors with warm lighting", label: "Interiors" },
  { src: gallery2, alt: "Premium bar counter with craft cocktails", label: "The Bar" },
  { src: gallery3, alt: "Artfully crafted cocktails and mocktails", label: "Drinks" },
  { src: gallery4, alt: "Night ambiance with candlelit tables", label: "Ambiance" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-elegant text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Visual Journey
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          The <span className="gradient-gold-text">Experience</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="font-elegant text-lg tracking-wider text-gold">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
