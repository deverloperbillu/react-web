import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Banner from './component/banner';
import About from './component/about';
import Service from './component/service';
import Gallery from './component/gallery';
import Testimonial from './component/testimonial';
import Footer from './component/footer';

function App() {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Service />
    <Gallery />
    <Testimonial />
    <Footer />
    </>
  );
}export default App;