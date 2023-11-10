/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../styles/Global";
import Button from "./Button";
import assets from "../assets";
const SectionWrapper = ({
  title,
  description,
  mockupImg,
  showBtn,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`${styles.h1Text}
          ${reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText}
          `}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="exp://u.expo.dev/update/8bcec993-2cc5-493a-b504-994ddf1fbb9a"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            className={`${styles.sectionImg} 
        ${reverse ? "fadeLeftMini" : "fadeRightMini"}

          `}
            src={mockupImg}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
