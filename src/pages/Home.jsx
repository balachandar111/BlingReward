import Hero from "../components/Hero";
import Industries from "../components/Industries";
import About from "../components/About";
import Showcase from "../components/Showcase";
import HowBlingWorks from "../components/HowBlingWorks";
import Features from "../components/Features";
import Rewards from "../components/Rewards";
import HowItWorks from "../components/HowItWorks";
import WhyUs from "../components/WhyUs";
import SuccessStories from "../components/SuccessStories";
import TalkToSales from "../components/TalkToSales";

/* Navbar + Footer now come from the shared Layout in App.js */
function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <About />
      <Showcase />
      <HowBlingWorks />
      <Features />
      <Rewards />
      <HowItWorks />
      <WhyUs />
      <SuccessStories />
      <TalkToSales />
    </>
  );
}

export default Home;
