import { motion } from 'framer-motion';
import Newsletter from '@/components/home/Newsletter';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl tracking-[0.3em] font-light mb-4">
            OUR STORY
          </h1>
          <p className="text-sm tracking-[0.2em] text-white/80">
            CURATED LUXURY SINCE 2020
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl tracking-[0.15em] font-light mb-6">
              BEYOND ORDINARY
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              FARBEYOND was born from a passion for exceptional craftsmanship and timeless design. 
              We curate the finest luxury and streetwear pieces from around the world, bringing together 
              established heritage brands and emerging designers under one roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-neutral-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
                  alt="Quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg tracking-wider font-medium mb-3">QUALITY FIRST</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every piece in our collection is carefully selected for its exceptional quality, 
                craftsmanship, and design. We believe in investing in pieces that last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-square bg-neutral-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Authenticity"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg tracking-wider font-medium mb-3">100% AUTHENTIC</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Authenticity is non-negotiable. Every item is verified and comes with a guarantee 
                of authenticity. Shop with confidence knowing you're getting the real deal.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12 border-y border-neutral-200"
          >
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-light mb-2">50+</p>
                <p className="text-xs tracking-wider text-neutral-500">PREMIUM BRANDS</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light mb-2">10K+</p>
                <p className="text-xs tracking-wider text-neutral-500">HAPPY CUSTOMERS</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light mb-2">100%</p>
                <p className="text-xs tracking-wider text-neutral-500">AUTHENTIC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}