import styles from "../style.js";
import {FeedbackCard} from "./index.js";
import {feedback} from "../constants/index.js";

const Testimonials = () => {
  return (
    <section id={"clients"} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className={`absolute size-[60%] -right-[60%] blue__gradient`}/>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z[1]`}>
        <h2 className={`${styles.heading2}`}>What people are <br className={`sm:block hidden`}/> saying about us</h2>
        <div className={`w-full flex sm:mt-0 mt-6`}>
          <p className={`${styles.paragraph} text-left max-w-[450px] xl:ml-20 ml-0`}>Everything you need to accept card
            payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div
        className={`w-full flex sm:justify-between justify-center items-center flex-wrap feedback-container relative z[1]`}>
        {feedback.map((item) => {
          return <FeedbackCard key={item.id} {...item}/>
        })}
      </div>
    </section>
  );
};

export default Testimonials;