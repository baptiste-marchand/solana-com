import { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "./CommunitySlider.module.scss";

import Slide1 from "../../../assets/home/community-slider/join-community-1.png";
import Slide2 from "../../../assets/home/community-slider/join-community-2.png";
import Slide3 from "../../../assets/home/community-slider/join-community-3.png";
import Slide5 from "../../../assets/home/community-slider/join-community-5.png";
import Slide6 from "../../../assets/home/community-slider/join-community-6.png";
import Slide7 from "../../../assets/home/community-slider/join-community-7.png";
import Slide8 from "../../../assets/home/community-slider/join-community-8.png";
import Slide9 from "../../../assets/home/community-slider/join-community-9.png";
import Slide10 from "../../../assets/home/community-slider/join-community-10.png";


const JoinCommunitySlider = () => {
  const { t } = useTranslation();
  const container = useRef(null);

  const slides = [Slide1, Slide2, Slide3,Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];
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
