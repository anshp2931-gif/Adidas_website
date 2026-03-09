import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white px-5 md:px-10 py-4 flex flex-wrap justify-between items-center border-b border-gray-200">
      <Link to="/">
        <img 
          src="/assets/download (1).png" 
          alt="Adidas Logo" 
          className="w-12 h-12" 
        />
      </Link>

      <nav className="flex flex-wrap gap-4 md:gap-7 items-center order-3 md:order-none w-full md:w-auto justify-center mt-4 md:mt-0">
        <Link to="/shoes" className="font-bold text-[15px] hover:underline">SHOES</Link>
        <Link to="/mens" className="font-bold text-[15px] hover:underline">MEN</Link>
        <Link to="#" className="font-bold text-[15px] hover:underline">WOMEN</Link>
        <Link to="#" className="font-bold text-[15px] hover:underline">KIDS</Link>
        <Link to="#" className="font-bold text-[15px] hover:underline uppercase text-[13px]">Sports & Lifestyle</Link>
        <Link to="#" className="font-bold text-[15px] hover:underline">OUTLET</Link>
        <Link to="#" className="font-bold text-[15px] text-red-600 hover:underline">EOSS - EXTRA 15% OFF</Link>
      </nav>

      <div className="flex gap-4 md:gap-5 items-center">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-gray-100 border border-transparent focus:border-black outline-none px-4 py-2 rounded w-32 md:w-48 text-sm"
          />
        </div>
        <Link to="/login">
          <img src="/assets/iconamoon--profile-circle-thin.svg" alt="Profile" className="w-6 h-6 cursor-pointer" />
        </Link>
        <img src="/assets/mynaui--heart.svg" alt="Wishlist" className="w-6 h-6 cursor-pointer" />
        <img src="/assets/cil--cart.svg" alt="Cart" className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
