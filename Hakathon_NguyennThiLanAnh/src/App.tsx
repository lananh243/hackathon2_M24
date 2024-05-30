import Header from './components/layouts/Header';
import Menu from './components/layouts/Menu';
import Products from './components/products/Products';
import Footer from './components/layouts/Footer';
import NavbarCarousel from './components/layouts/NavbarCarousel';
export default function App() {

  return (
    <>
      <Header></Header>
      <NavbarCarousel></NavbarCarousel>
      <div className='flex'>
        <Menu></Menu>
        <Products></Products>
      </div>
      <Footer></Footer>
    </>
  );
}
