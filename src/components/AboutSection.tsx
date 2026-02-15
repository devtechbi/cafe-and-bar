import { motion } from "framer-motion";
import aboutImg from "@/assets/about-img.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative"
      >
        <div className="gold-border-glow rounded-sm overflow-hidden">
          <img
            src={aboutImg}
            alt="Handcrafted latte art at Café & Bar"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-sm" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <p className="font-elegant text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Our Story
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Crafted for the <span className="gradient-gold-text">Connoisseur</span>
        </h2>
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>
            Nestled in the heart of New Delhi, our café-bar is a sanctuary where the art of
            specialty coffee meets the sophistication of curated cocktails. By morning, lose
            yourself in the aroma of single-origin beans, artfully poured by our master baristas.
          </p>
          <p>
            As twilight descends, the space transforms — warm amber lights, vinyl melodies, and
            handcrafted cocktails set the stage for an unforgettable evening. Every detail, from
            our plush interiors to our seasonal ingredients, is chosen to deliver a premium,
            Instagram-worthy experience.
          </p>
        </div>
        <div className="mt-8 flex gap-8">
          {[
            { num: "50+", label: "Signature Drinks" },
            { num: "5★", label: "Rated Experience" },
            { num: "2K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-gold">{stat.num}</p>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
