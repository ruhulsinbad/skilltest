import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Products from "./components/Products";
import SeoSection from "./components/SeoSection";

function App() {
  return (
    <div className=" ">
      <header className=""></header>
      <body className=" ">
        <Menu />
        <Hero />
        <Categories />
        <SeoSection />
        <Products />
        <Footer />
      </body>
    </div>
  );
}

export default App;
