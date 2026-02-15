import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Wine, GlassWater, UtensilsCrossed, ChefHat } from "lucide-react";

const categories = [
  {
    name: "Signature Coffees",
    icon: Coffee,
    items: [
      { name: "Golden Espresso", desc: "Single-origin, caramel notes", price: "₹249" },
      { name: "Velvet Latte", desc: "Oat milk, vanilla bean, gold dust", price: "₹299" },
      { name: "Cold Brew Noir", desc: "24hr slow drip, dark chocolate", price: "₹279" },
      { name: "Turkish Delight", desc: "Cardamom, rose, traditional brew", price: "₹269" },
    ],
  },
  {
    name: "Mocktails",
    icon: GlassWater,
    items: [
      { name: "Sunset Boulevard", desc: "Mango, passionfruit, citrus", price: "₹329" },
      { name: "Virgin Mojito Royale", desc: "Mint, lime, sparkling water", price: "₹299" },
      { name: "Berry Bliss", desc: "Mixed berries, basil, tonic", price: "₹349" },
      { name: "Tropical Storm", desc: "Pineapple, coconut, ginger", price: "₹319" },
    ],
  },
  {
    name: "Cocktails",
    icon: Wine,
    items: [
      { name: "Delhi Sour", desc: "Whiskey, lemon, aam panna", price: "₹549" },
      { name: "Golden Negroni", desc: "Gin, vermouth, saffron bitter", price: "₹599" },
      { name: "Espresso Martini", desc: "Vodka, cold brew, Kahlúa", price: "₹579" },
      { name: "Amber Old Fashioned", desc: "Bourbon, smoked maple, bitters", price: "₹629" },
    ],
  },
  {
    name: "Small Plates",
    icon: UtensilsCrossed,
    items: [
      { name: "Truffle Fries", desc: "Parmesan, truffle oil, herbs", price: "₹399" },
      { name: "Mezze Platter", desc: "Hummus, pita, olives, feta", price: "₹449" },
      { name: "Bruschetta Trio", desc: "Tomato, mushroom, avocado", price: "₹379" },
      { name: "Spiced Lamb Sliders", desc: "Mint yogurt, pickled onion", price: "₹479" },
    ],
  },
  {
    name: "Chef's Specials",
    icon: ChefHat,
    items: [
      { name: "Wagyu Burger", desc: "Truffle aioli, aged cheddar", price: "₹799" },
      { name: "Lobster Mac & Cheese", desc: "Gruyère, herb breadcrumb", price: "₹899" },
      { name: "Pan-Seared Sea Bass", desc: "Saffron risotto, lemon butter", price: "₹949" },
      { name: "Dessert Board", desc: "Seasonal selection for two", price: "₹649" },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our <span className="gradient-gold-text">Menu</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-body tracking-wider uppercase transition-all duration-300 border ${
                  active === i
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{c.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {cat.items.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-start p-5 rounded-sm border border-border/50 bg-card/50 hover:border-gold/30 hover:gold-glow transition-all duration-300"
            >
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{item.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <span className="font-display text-lg font-semibold text-gold whitespace-nowrap ml-4">
                {item.price}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
