import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./CommunitySlider.module.scss";

import Slide1 from "../../../assets/home/community-slider/join-community-slider1.png";
import Slide2 from "../../../assets/home/community-slider/join-community-slider2.png";
import Slide3 from "../../../assets/home/community-slider/join-community-slider3.png";
import Slide4 from "../../../assets/home/community-slider/join-community-slider4.png";
import Slide5 from "../../../assets/home/community-slider/join-community-slider5.png";

const JoinCommunitySlider = () => {
  const { t } = useTranslation();
  const container = useRef(null);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];
  // Triple the slides for seamless looping
  const topRowImages = [...slides, ...slides, ...slides];
  const bottomRowImages = [...slides.reverse(), ...slides, ...slides];

  return (
    <div className={styles.CommunitySlider} ref={container}>
      <div className={styles.SliderWrapper}>
        <div className={styles.TrackContainer}>
          <div className={styles.Track + " " + styles.TopTrack}>
            {topRowImages.map((image, index) => (
              <div key={`top-${index}`} className={styles.Slide}>
                <Image
                  src={image}
                  alt={t("home.community-slider.slide-alt")}
                  width={400}
                  height={300}
                  className={styles.SlideImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.TrackContainer}>
          <div className={styles.Track + " " + styles.BottomTrack}>
            {bottomRowImages.map((image, index) => (
              <div key={`bottom-${index}`} className={styles.Slide}>
                <Image
                  src={image}
                  alt={t("home.community-slider.slide-alt")}
                  width={400}
                  height={300}
                  className={styles.SlideImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunitySlider;
