import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Biography from "../components/Biography/Biography";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Biography />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default Home;