import {stats} from "../constants/index.js";
import styles from "../style.js";

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-bold text-white sm:text-[40px] text-3xl sm:leading-[53px] leading-[43px]">{stat.value}</h4>
          <p className="font-semibold text-gradient sm:text-[20px] text-2xl sm:leading-[26px] leading-[21px] uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;