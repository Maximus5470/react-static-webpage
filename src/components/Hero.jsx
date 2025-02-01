import styles from "../style.js";
import {discount, robot} from "../assets/index.js";
import GetStarted from "./GetStarted.jsx";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} w-full justify-start justify-items-center flex-col lg:px-16 xl:px-0 sm:px-16 px-6 `}>
        <div className={`flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-xl mb-2 mt-5`}>
          <img src={discount} alt="discount" className="size-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className={`text-white`}>20% </span>
            <span className={`text-gray-400`}>Discount For </span>
            <span className={`text-white`}>1 Month </span>
            <span className={`text-gray-400`}>Account</span>
          </p>
        </div>
        <div className={`flex flex-row justify-start items-start w-full mt-10`}>
          <h1 className={`text-white flex-1 font-semibold sm:text-[72px] text-[52px] sm:leading-[75px]`}>
            <div className={`flex flex-row space-x-16`}>
              <h1>
                The Next<br className={`sm:block hidden`}/>{" "}
                <span className={"text-gradient"}>Generation</span>{" "}
              </h1>
              <div className={`sm:flex hidden md:mr-4 mr-0`}>
                <GetStarted/>
              </div>
            </div>
            Payment Method
          </h1>
        </div>
        <h1 className={`text-white font-semibold w-full sm:text-[68px] text-[52px] sm:leading-[75px]`}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.
          </p>
        </h1>
      </div>
      <div className={`flex-1 flex md:my-0 my-10 relative justify-end`}>
        <img src={robot} alt="robot" className={`w-[100%] h-[100%] relative z-[5] max-w-[600px] xl:-right-30`}/>
        <div className={`absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`}/>
        <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient`}/>
        <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`}/>
      </div>

      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;