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
import Slide11 from "../../../assets/home/community-slider/join-community-11.jpg";
import Slide12 from "../../../assets/home/community-slider/join-community-12.jpg";
import Slide13 from "../../../assets/home/community-slider/join-community-13.jpeg";
import Slide14 from "../../../assets/home/community-slider/join-community-14.jpeg";
import Slide15 from "../../../assets/home/community-slider/join-community-15.jpeg";
import Slide16 from "../../../assets/home/community-slider/join-community-16.jpg";

const JoinCommunitySlider = () => {
  const { t } = useTranslation();
  const container = useRef(null);

  // Triple the slides for seamless looping
  const topRowImages = [
    Slide1,
    Slide8,
    Slide3,
    Slide11,
    Slide6,
    Slide13,
    Slide9,
    Slide14,
  ];
  const bottomRowImages = [
    Slide12,
    Slide5,
    Slide15,
    Slide2,
    Slide10,
    Slide7,
    Slide16,
  ];

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
