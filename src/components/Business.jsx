import styles, {layout} from "../style.js";
import {features} from "../constants/index.js";
import Button from "./Button.jsx";

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-lg feature-card items-center`}>
      <div className={`size-[64px] rounded-full ${styles.flexCenter}`}>
        {/*TODO Surround with Aura*/}
        <img src={icon} alt={"icon"} className={`size-[50%] object-contain mr-6`}/>
      </div>
      <div className={`flex flex-col items-start w-md`}>
        <h3 className={`font-bold ${styles.paragraph} text-white`}>{title}</h3>
        <p className={`${styles.paragraph} mt-1`}>{content}</p>
      </div>
    </div>
  );
}

const Business = () => {
  return (
    <section id={"features"} className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className={`sm:block hidden`}/>we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button styles={`mt-10`}/>
      </div>
      <div className={`flex flex-col md:w-1/2 w-full xl:pl-20 md:mt-0 mt-10`}>
        {features.map((feature) => {
          return (
            <FeatureCard key={feature.id} {...feature} />
          );
        })}
      </div>
    </section>
  );
};

export default Business;