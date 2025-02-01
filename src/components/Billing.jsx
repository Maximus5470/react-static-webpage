import {apple, bill, google} from '../assets/index.js';
import styles, {layout} from "../style.js";

const Billing = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className="size-[100%] relative z-[5]"/>
        <div className={`absolute z-[3] -left-6/8 top-0 size-[50%] white__gradient rounded-full`}/>
        <div className={`absolute z-[0] -left-6/8 bottom-0 size-[50%] pink__gradient rounded-full`}/>
      </div>

      <div className={`${layout.sectionInfo} xl:pl-20`}>
        <h2 className={styles.heading2}>
          Easy control your <br className={`sm:block hidden`}/>billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <div className={`flex flex-row md:w-1/2 w-full mt-10`}>
          <img src={apple} alt="apple" className="size-[100%] mr-6 cursor-pointer"/>
          <img src={google} alt="google" className="size-[100%] cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};

export default Billing;