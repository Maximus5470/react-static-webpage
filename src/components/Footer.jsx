import {footerLinks, socialMedia} from "../constants/index.js";
import styles from "../style.js";
import {logo} from "../assets/index.js";

const Footer = () => {
  return (
    <section className={`flex-col ${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <img src={logo} alt="logo" className={`w-[266px] h-[72px] object-contain`}/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and
            secure.</p>
        </div>

        <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-white font-semibold text-lg sm:mt-0 mt-10">{link.title}</h3>
              {link.links.map((item, index) => (
                <a key={index} href={item.url} className="text-gray-500 text-base mt-2">{item.name}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`w-full justify-between items-center flex md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-500`}>
        <p className={`${styles.paragraph} text-gray-500`}>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((item, index) => (
            <img src={item.icon} alt="icon" key={item.id}
                 className={`size-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;