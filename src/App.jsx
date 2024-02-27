import Nav from './components/Nav';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections';
import { motion } from 'framer-motion';

const App = () => (
  <main className="relative">
    <Nav />
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="xl:padding-l wide:padding-r padding-b"
    >
      <Hero />
    </motion.section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
