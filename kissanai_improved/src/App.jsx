import "./assets/styles.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import img1 from "/images/1img.png";
import img2 from "/images/2img.png";
import img3 from "/images/3img.png";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="secondsection">
        <p className="second_section_p">PIONEERING GENERATIVE AI FOR AGRICULTURE</p>
      </div>
      <div className="thirdsection">
        <Card link="https://kissan.ai/chat" title="Kissan Copilot" image={img1} description="Interact with our AI to get answers to your agricultural questions." />
        <Card link="https://agricopilot.ai/" title="Agri Copilot Farm" image={img2} description="Explore our comprehensive agricultural management program" />
        <Card link="https://dhenu.ai/" title="Dhenu Agri Models" image={img3} description="Stay updated with the latest agricultural news and insights" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
