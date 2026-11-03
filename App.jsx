import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import StoreLayout from './StoreLayout';

function App() {
  return (
    <div>
      {/* Saare components yahan ek sath render honge */}
      <Navbar />
      <HeroBanner />
      <StoreLayout />
    </div>
  );
}

export default App;