import dynamic from "next/dynamic";
import styles from "./LottieCarousel.module.scss";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const LottieCarouselItem = ({ lottie, text, isLottiePaused }) => (
  <div className={styles.LottieCarouselItem}>
    <div className={styles.LottieWrapper}>
      {typeof window !== "undefined" && (
        <Lottie
          options={{
            animationData: lottie,
            loop: true,
            autoplay: !isLottiePaused,
          }}
          isPaused={isLottiePaused}
          isClickToPauseDisabled={true}
        />
      )}
    </div>
    <div className={styles.Text}>{text}</div>
  </div>
);

const LottieCarousel = ({
  _itemsMobile,
  _itemsDesktop,
  _itemsStateMobile,
  _setItemsStateMobile,
  _itemsStateDesktop,
  _setItemsStateDesktop,
}) => {
  // ... rest of the component
};

export default LottieCarousel;
