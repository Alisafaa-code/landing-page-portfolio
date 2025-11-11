import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Links from "./components/Links.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Header />
      <Hero />
      <Links />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
