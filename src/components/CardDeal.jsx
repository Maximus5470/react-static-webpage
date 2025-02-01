import {card} from '../assets/index.js';
import styles, {layout} from '../style.js';
import Button from "./Button.jsx";

const CardDeal = () => {
  return (
    <section id={"product"} className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mb-5`}>Get Your Card Now</h2>
        <p className={`${styles.paragraph} mb-10`}>Get your money where it needs to go — no matter where in the world
          that is. With our international debit card, you can spend in any currency and get real-time exchange
          rates.</p>
        <Button/>
      </div>
      <div className={`${layout.sectionImg} xl:ml-40`}>
        <img src={card} alt="card" className="w-full"/>
      </div>
    </section>
  );
};

export default CardDeal;