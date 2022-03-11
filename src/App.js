import Header from "./components/header";
import Hero from "./components/Hero";
import AdvancedStatistics from "./components/advanced-statistics";
import GetStarted from "./components/GetStarted";
import Footer from "./components/footer";
import Shortener from "./components/shortener";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <AdvancedStatistics>
        <Shortener />
      </AdvancedStatistics>
      <GetStarted />
      <Footer />
    </>
  );
}
