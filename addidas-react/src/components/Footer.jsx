import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 md:px-10 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-10 md:mb-16">
        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">PRODUCTS</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">Footwear</Link></li>
            <li><Link to="#" className="hover:underline">Clothing</Link></li>
            <li><Link to="#" className="hover:underline">Accessories</Link></li>
            <li><Link to="#" className="hover:underline">Outlet-Sale</Link></li>
            <li><Link to="#" className="hover:underline">New Arrivals</Link></li>
            <li><Link to="#" className="hover:underline text-red-500">Flat 50% Off!</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">SPORTS</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">Running</Link></li>
            <li><Link to="#" className="hover:underline">Football</Link></li>
            <li><Link to="#" className="hover:underline">Cricket</Link></li>
            <li><Link to="#" className="hover:underline">Gym/Training</Link></li>
            <li><Link to="#" className="hover:underline">Tennis</Link></li>
            <li><Link to="#" className="hover:underline">Hiking & Outdoor</Link></li>
            <li><Link to="#" className="hover:underline">Basketball</Link></li>
            <li><Link to="#" className="hover:underline">Swimming</Link></li>
            <li><Link to="#" className="hover:underline">Skateboarding</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">COLLECTIONS</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">Ultraboost</Link></li>
            <li><Link to="#" className="hover:underline">Superstar</Link></li>
            <li><Link to="#" className="hover:underline">NMD</Link></li>
            <li><Link to="#" className="hover:underline">Stan Smith</Link></li>
            <li><Link to="#" className="hover:underline">Sustainability</Link></li>
            <li><Link to="#" className="hover:underline">Predator</Link></li>
            <li><Link to="#" className="hover:underline">Parley</Link></li>
            <li><Link to="#" className="hover:underline">Adicolor</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">SUPPORT</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">Help</Link></li>
            <li><Link to="#" className="hover:underline">UNiDAYS</Link></li>
            <li><Link to="#" className="hover:underline">Customer Services</Link></li>
            <li><Link to="#" className="hover:underline">Returns & Exchanges</Link></li>
            <li><Link to="#" className="hover:underline">Shipping</Link></li>
            <li><Link to="#" className="hover:underline">Order Tracker</Link></li>
            <li><Link to="#" className="hover:underline">Store Finder</Link></li>
            <li><Link to="#" className="hover:underline">adiClub</Link></li>
            <li><Link to="#" className="hover:underline text-[11px]">adiclub Terms and conditions</Link></li>
            <li><Link to="#" className="hover:underline">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">COMPANY INFO</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">About Us</Link></li>
            <li><Link to="#" className="hover:underline">adidas stories</Link></li>
            <li><Link to="#" className="hover:underline">adidas Apps</Link></li>
            <li><Link to="#" className="hover:underline">Entity Details</Link></li>
            <li><Link to="#" className="hover:underline">Press</Link></li>
            <li><Link to="#" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-5 uppercase">FOLLOW US</h3>
          <ul className="space-y-3 text-[13px]">
            <li><Link to="#" className="hover:underline">Instagram</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-center gap-5 text-[12px] mb-5">
        <Link to="#" className="hover:underline text-gray-400">Cookie Settings</Link>
        <Link to="#" className="hover:underline text-gray-400">Privacy Policy</Link>
        <Link to="#" className="hover:underline text-gray-400">Terms and Conditions</Link>
        <Link to="#" className="hover:underline text-gray-400">Cookies</Link>
      </div>

      <div className="text-center text-[12px] text-gray-500">
        ©2025 adidas India Marketing Pvt. Ltd
      </div>
    </footer>
  );
};

export default Footer;
