/* eslint-disable react/prop-types */
import styles from "../styles/Global";
const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img className={styles.btnIcon} src={assetUrl} alt="expo-icon" />
      <div className="flex flex-col ml-4 justify-start">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
