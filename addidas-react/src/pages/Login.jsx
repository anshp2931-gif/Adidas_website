import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Header />
      
      <main className="max-w-5xl mx-auto px-5 md:px-10 py-16 flex flex-col md:flex-row gap-16 md:gap-20">
        <section className="flex-1">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-6">LOG IN</h1>
          <p className="text-sm mb-6">Logged in with a different account? <span className="underline cursor-pointer">Log out</span></p>
          
          <form className="space-y-5">
            <div>
              <input 
                type="email" 
                placeholder="Email *" 
                className="w-full border border-gray-400 p-4 outline-none focus:border-black transition-colors"
                required
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password *" 
                className="w-full border border-gray-400 p-4 outline-none focus:border-black transition-colors"
                required
              />
            </div>
            
            <div className="flex justify-between items-center text-sm py-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-black" />
                Keep me logged in
              </label>
              <span className="underline cursor-pointer">Forgot your password?</span>
            </div>
            
            <button className="bg-black text-white px-8 py-4 font-bold flex items-center justify-between group hover:text-gray-400 transition-colors w-full md:w-auto min-w-[200px] uppercase text-sm">
              LOG IN
              <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
          
          <div className="mt-8 text-xs text-gray-500 leading-relaxed">
            By logging in, you agree to our <span className="underline">Privacy Policy</span> and <span className="underline">Terms and Conditions</span>.
          </div>
        </section>

        <section className="flex-1">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-6">JOIN THE CLUB. GET REWARDED.</h1>
          <p className="text-sm mb-6 leading-relaxed">
            Join the adiClub loyalty program today and get rewarded for your passion. Unlock exclusive benefits, 
            early access to drops, and more.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-sm">
              <span className="font-bold">✓</span> A 15% welcome voucher for your next purchase
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="font-bold">✓</span> Points for every purchase and for being active
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="font-bold">✓</span> Exclusive offers and promotions
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="font-bold">✓</span> Early access to limited edition products
            </li>
          </ul>

          <button className="bg-black text-white px-8 py-4 font-bold flex items-center justify-between group hover:text-gray-400 transition-colors w-full md:w-auto min-w-[200px] uppercase text-sm">
            REGISTER NOW
            <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
