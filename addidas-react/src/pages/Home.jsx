import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'MEN', image: '/assets/men_97b6b610ef.avif' },
    { name: 'WOMEN', image: '/assets/women_a91ffe1432.avif' },
    { name: 'KIDS', image: '/assets/kids_86993da818.avif' },
    { name: 'FIRST TIME ON DISCOUNT', image: '/assets/m_ftod_e322ec8d5c.avif' },
    { name: 'LAST SIZES LEFT', image: '/assets/last_size_c08d161a79.avif' },
  ];

  const products = [
    {
      name: 'Firebird Loose Track Pants',
      price: '3 959.50',
      originalPrice: '6 599.00',
      discount: '-40%',
      category: 'Women originals',
      image: '/assets/firebird-loose-track-pants.avif',
      colors: '2 colours'
    },
    {
      name: 'Galaxy 6 Shoes',
      price: '2 999.50',
      originalPrice: '5 999.00',
      discount: '-50%',
      category: 'Women Running',
      image: '/assets/galaxy-6-shoes.avif',
      noExchange: true
    },
    {
      name: 'CLEAR FACTOR SHOES',
      price: '2 159.50',
      originalPrice: '3 599.00',
      discount: '-40%',
      category: 'Men Running',
      image: '/assets/clear-factor-shoes.avif',
      colors: '3 colours'
    },
    {
      name: 'PRIZMO SHOES',
      price: '2 799.50',
      originalPrice: '3 999.00',
      discount: '-30%',
      category: 'Men Walking',
      image: '/assets/prizmo-shoes.avif'
    },
    {
      name: 'Adilette Shower Slides',
      price: '1 799.50',
      originalPrice: '2 999.00',
      discount: '-40%',
      category: 'Sportswear',
      image: '/assets/adilette-shower-slides.avif',
      colors: '10 colours'
    },
    {
      name: 'adidas Sportswear Jersey Tee',
      price: '1 079.50',
      originalPrice: '1 799.00',
      discount: '-40%',
      category: 'Men Training',
      image: '/assets/adidas-sportswear-jersey-tee.avif',
      colors: '3 colours'
    },
    {
      name: 'Manchester United 24/25 Home Jersey',
      price: '3 599.50',
      originalPrice: '5 999.00',
      discount: '-40%',
      category: 'Men Football',
      image: '/assets/manchester-united-24-25-home-jersey.avif'
    },
    {
      name: 'Tennis Barricade Graphic Tee',
      price: '1 079.50',
      originalPrice: '1 799.00',
      discount: '-40%',
      category: 'Men Tennis',
      image: '/assets/tennis-barricade-graphic-tee.avif'
    }
  ];

  const subCategories = [
    "Men's Eoss Sale", "Kids's Eoss Sale", "Superstar Eoss Sale", "Eoss Clothing Sale", "Eoss Running Shoes", "Men's Last Size",
    "Women's Eoss Sale", "Originals Eoss Sale", "Eoss Shoes Sale", "Eoss Jackets Sale", "Eoss Football Shoes", "Women's Last Size"
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      <Breadcrumb items={[{ label: 'Home', link: '/' }, { label: 'EOSS' }]} />

      <main>
        <div className="px-5 md:px-10 py-10">
          <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-4 uppercase">
            END OF SEASON SALE (EOSS) - FLAT 40% OFF + EXTRA 15% ON 4499
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-5 md:px-10 mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-[-100px] text-[120px] font-black text-gray-100 opacity-20 whitespace-nowrap -translate-y-1/2 pointer-events-none uppercase tracking-[20px]">
            END OF SEASON
          </div>
          {categories.map((cat, i) => (
            <div key={i} className="relative cursor-pointer group overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-5">
                <h3 className="text-sm font-bold underline uppercase">{cat.name}</h3>
              </div>
            </div>
          ))}
          <div className="absolute top-1/2 right-[-100px] text-[120px] font-black text-gray-100 opacity-20 whitespace-nowrap -translate-y-1/2 pointer-events-none uppercase tracking-[20px]">
            END OF SEASON
          </div>
        </div>

        <section className="px-5 md:px-10 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod, i) => (
              <ProductCard key={i} product={prod} />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 px-5 md:px-10 py-12 md:py-16 mb-16">
          <h2 className="text-2xl font-black italic mb-8 uppercase">OUR CLOTHING AND SHOE CATEGORIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-10">
            {subCategories.map((sub, i) => (
              <Link key={i} to="#" className="text-sm hover:underline font-semibold leading-none">{sub}</Link>
            ))}
          </div>
        </section>

        <section className="bg-emerald-600 px-5 md:px-10 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
          <h2 className="text-white text-2xl md:text-3xl font-black italic uppercase tracking-wider text-center md:text-left">
            JOIN ADIDAS AND GET 10% OFF
          </h2>
          <button className="bg-white text-black px-8 py-4 font-bold flex items-center gap-4 hover:bg-gray-200 transition-colors uppercase text-sm">
            SIGN UP FOR FREE <span>→</span>
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
