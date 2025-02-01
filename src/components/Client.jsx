import {clients} from "../constants/index.js";
import styles from "../style.js"

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => {
          return (
            <div key={index} className={`${styles.flexCenter} sm:w-1/4 w-1/2 p-4`}>
              <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Client;