import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Mens = () => {
  const products = [
    { name: 'Firebird Track Jacket', price: '5 999.00', category: 'Originals', image: '/assets/adicolor-classics-loose-firebird-track-top.avif' },
    { name: 'Aeroready Training Tee', price: '1 999.00', category: 'Training', image: '/assets/adidas-sportswear-jersey-tee.avif' },
    { name: 'Manchester United Jersey', price: '4 999.00', category: 'Football', image: '/assets/manchester-united-24-25-home-jersey.avif' },
    { name: 'Graphic Tennis Tee', price: '2 299.00', category: 'Tennis', image: '/assets/tennis-barricade-graphic-tee.avif' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'Men' }]} />

      <main className="px-5 md:px-10 py-10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">MEN'S COLLECTION</h1>
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

export default Mens;
