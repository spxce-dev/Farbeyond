import { motion } from 'framer-motion';

const brands = [
  { name: 'Armani Exchange', abbrev: 'A|X', subtitle: 'ARMANI EXCHANGE' },
  { name: 'Dolce & Gabbana', abbrev: 'D&G', subtitle: 'DOLCE & GABBANA' },
  { name: 'Burberry', abbrev: 'BURBERRY', subtitle: '' },
  { name: 'Nike', abbrev: 'NIKE', subtitle: '' },
  { name: 'Gucci', abbrev: 'GUCCI', subtitle: '' },
  { name: 'Prada', abbrev: 'PRADA', subtitle: '' },
];

export default function BrandCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 md:px-12 min-w-max md:justify-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-full border border-neutral-200 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-400 transition-all duration-300"
            >
              <span className="text-lg md:text-xl font-semibold tracking-wide text-neutral-800">
                {brand.abbrev}
              </span>
              {brand.subtitle && (
                <span className="text-[8px] tracking-widest text-neutral-500 mt-1">
                  {brand.subtitle}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-3 border border-neutral-300 text-sm tracking-[0.2em] text-neutral-700 hover:bg-neutral-50 transition-colors"
        >
          VIEW ALL
        </motion.button>
      </div>
    </section>
  );
}