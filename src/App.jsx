import { motion } from 'framer-motion';
import { useEffect } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const glow =
  'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 shadow-lg shadow-orange-500/50';

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-bitcoin-black overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-bitcoin-orange opacity-20 blur-[200px] rounded-full z-0" />

    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="z-10 text-5xl md:text-7xl font-extrabold text-bitcoin-orange drop-shadow-lg mb-4"
    >
      SatoshiVaultCapital
    </motion.h1>
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.3 }}
      className="z-10 text-xl md:text-2xl max-w-2xl text-bitcoin-white mb-8"
    >
      A premium brand for Bitcoin-native custody, capital formation, and sovereign digital wealth.
    </motion.p>
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href="#contact"
      className={`z-10 mt-2 px-10 py-4 rounded-full text-lg font-bold text-bitcoin-black ${glow} transition-all duration-300`}
    >
      Inquire to Buy Domain
    </motion.a>
  </section>
);

const Features = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-bitcoin-black to-zinc-900 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-bitcoin-orange mb-12"
    >
      Why This Domain?
    </motion.h2>

    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      {[
        "✔ Satoshi = Bitcoin's origin, Vault = security, Capital = wealth",
        "✔ Perfect for Bitcoin custody, VC, DAOs, sovereign wealth funds",
        "✔ Rare .com domain — immediate trust and authority",
      ].map((text, index) => (
        <motion.div
          key={index}
          className="bg-zinc-800 text-bitcoin-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 * index, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">{text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 text-center bg-bitcoin-orange text-bitcoin-black">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold mb-4"
    >
      Interested in Purchasing?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-xl mb-6"
    >
      Reach out directly:
    </motion.p>
    <motion.a
      href="mailto:contact@satoshivaultcapital.com"
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-semibold underline"
    >
      contact@satoshivaultcapital.com
    </motion.a>
  </section>
);

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
