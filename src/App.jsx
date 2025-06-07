import { motion } from 'framer-motion';
import { useMemo } from 'react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const staggerFade = (delay = 0.2) => ({
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

const glow = `bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 shadow-md shadow-orange-500/30`;

// Generate Bitcoin rain icons only once for performance
const useBitcoinRainIcons = (count = 12) => {
  return useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 12 + 18, // 18px to 30px
      delay: Math.random() * 4,
      duration: 7 + Math.random() * 4,
    }));
  }, []);
};

const BitcoinRain = () => {
  const icons = useBitcoinRainIcons();

  return (
    <>
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src="/bitcoin.svg"
          alt="BTC"
          loading="lazy"
          className="absolute pointer-events-none opacity-10 sm:opacity-20 blur-[1px] z-0"
          style={{
            left: `${icon.left}%`,
            top: `-40px`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            willChange: 'transform',
          }}
          initial={{ y: 0 }}
          animate={{ y: '110vh' }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-bitcoin-black overflow-hidden">
    <BitcoinRain />
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] bg-bitcoin-orange opacity-10 blur-[200px] rounded-full z-0" />

    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="font-display z-10 text-4xl sm:text-5xl md:text-7xl font-extrabold text-bitcoin-orange drop-shadow-xl mb-4"
    >
      SatoshiVaultCapital
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.3 }}
      className="z-10 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl text-bitcoin-white mb-8 leading-relaxed"
    >
      The ultimate brand for Bitcoin-native custody, capital formation, and sovereign digital wealth.
    </motion.p>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="#contact"
      className={`z-10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-bitcoin-black rounded-full ${glow} transition duration-300`}
    >
      Inquire to Purchase
    </motion.a>
  </section>
);

const Features = () => (
  <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-bitcoin-black to-zinc-900 text-center">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold text-bitcoin-orange mb-10 sm:mb-12"
    >
      Why This Domain?
    </motion.h2>

    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
      {[
        "✔ Satoshi = Bitcoin's origin, Vault = security, Capital = wealth",
        "✔ Perfect for Bitcoin custody, VC, DAOs, sovereign wealth platforms",
        "✔ Rare .com domain — global credibility and trust at first glance",
      ].map((text, index) => (
        <motion.div
          key={index}
          variants={staggerFade(0.2 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-zinc-800 text-bitcoin-white p-5 sm:p-6 rounded-xl shadow-md"
        >
          <p className="text-base sm:text-lg leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="py-20 sm:py-24 px-4 sm:px-6 text-center bg-bitcoin-orange text-bitcoin-black"
  >
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold mb-6"
    >
      Own SatoshiVaultCapital.com
    </motion.h2>

    <p className="text-base sm:text-lg max-w-xl mx-auto mb-6">
      This premium domain is now available. Perfect for launching a Bitcoin-native capital firm, custody provider, or digital wealth platform.
    </p>

    <motion.a
      href="mailto:sparshgahlot0398@gmail.com"
      whileHover={{ scale: 1.05 }}
      className="inline-block px-6 py-3 sm:px-8 sm:py-4 font-bold rounded-full bg-bitcoin-black text-bitcoin-orange border-2 border-bitcoin-black hover:bg-bitcoin-orange hover:text-bitcoin-black transition"
    >
      Contact to Buy
    </motion.a>

    <p className="mt-4 text-sm opacity-70">
      Secure domain transfer available • Serious offers only
    </p>
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
