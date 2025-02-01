import styles from "../style.js";
import {arrowUp} from "../assets/index.js";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} size-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]`}>
      <div className={`${styles.flexCenter} bg-gray-900 rounded-full size-full items-center flex flex-col`}>
        <div className={`${styles.flexStart} flex-row justify-center items-center`}>
          <p className={`font-medium text-[18px] leading-[23px] text-gradient mr-2`}>
            <span>Get</span>
          </p>
          <img src={arrowUp} alt="arrowUp" className={`size-[23px] object-contain`}/>
        </div>
        <p className={`font-medium text-[18px] text-gradient leading-[23px]`}>
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;