import styles from "./style.js";
import {
  NavBar,
  Footer,
  Billing,
  Business,
  CTA,
  Hero,
  CardDeal,
  Client,
  Stats
} from './components/index.js';
import Testimonials from "./components/Testimonials.jsx";

const App = () => {
  return (
    <div className="w-full bg-gray-900 overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-gray-900 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-gray-900 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;