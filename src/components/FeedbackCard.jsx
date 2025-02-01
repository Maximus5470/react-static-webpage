import {quotes} from "../assets/index.js";

const FeedbackCard = ({content, title, name, img}) => {
  return (
    <div
      className={`flex flex-col justify-between px-10 py-12 rounded-2xl max-w-[370px] min-h-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}>
      <img src={quotes} alt={"quote"} className={`w-[42px] h-[27px] object-contain`}/>
      <p className={`text-white text-[18px] leading-[32px] my-10`}>{content}</p>

      <div className={`flex flex-row`}>
        <img src={img} alt={name} className={`w-[50px] h-[50px] rounded-full object-cover`}/>
        <div className={`flex flex-col ml-5`}>
          <h3 className={`text-white text-[18px] font-semibold`}>{name}</h3>
          <p className={`text-gray-500 text-[16px]`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;