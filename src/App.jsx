import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import NavBarNew from './components/NavBarNew';

const App = () => {
  useScrollToTop();
  return (
    <div>
      <NavBarNew/>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
