import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Shoes = () => {
  const products = [
    { name: 'Galaxy 6 Shoes', price: '4 599.00', category: 'Running', image: '/assets/galaxy-6-shoes.avif' },
    { name: 'Duramo SL 2.0 Shoes', price: '3 999.00', category: 'Running', image: '/assets/duramo-sl-2-shoes.avif' },
    { name: 'Prizmo Shoes', price: '2 799.00', category: 'Lifestyle', image: '/assets/prizmo-shoes.avif' },
    { name: 'Foot Strike Shoes', price: '5 299.00', category: 'Training', image: '/assets/foot-strike-shoes.avif' },
    { name: 'Comfortz 1.0 Shoes', price: '6 999.00', category: 'Originals', image: '/assets/comfortz-1.0-shoes.avif' },
    { name: 'Adilette Slides', price: '2 299.00', category: 'Essentials', image: '/assets/adilette-slides.avif' },
    { name: 'Base Switch M Shoes', price: '3 599.00', category: 'Running', image: '/assets/base-switch-m-shoes.avif' },
    { name: 'Clear Factor Shoes', price: '4 299.00', category: 'Training', image: '/assets/clear-factor-shoes.avif' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Shoes' }]} />

      <main className="px-5 md:px-10 py-10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">FOOTWEAR COLLECTION</h1>
          <p className="text-gray-500 mt-2 text-lg">Step into style with the legendary Adidas footwear</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((prod, i) => (
            <ProductCard key={i} product={prod} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shoes;
