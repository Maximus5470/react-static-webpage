import styles from "../style.js";
import Button from "./Button.jsx";

const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow`}>
      <div className={`flex flex-1 flex-col`}>
        <h2 className={`${styles.heading2} sm:mb-0 mb-6`}>Let’s try our service now!</h2>
        <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on
          the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  );
};

export default Cta;