import { useState, useEffect } from "react";
import styles from "@/components/home/CreativeHero.module.scss";
import Button from "@/components/solutions/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Import images
import gridImg from "../../../assets/solutions/creative/grid.svg";
import leftImg from "../../../assets/solutions/creative/left.png";
import rightImg from "../../../assets/solutions/creative/right.png";
import gradientImg from "../../../assets/solutions/creative/gradient.png";

const CreativeHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__background}>
        <Image
          src={gridImg}
          alt=""
          fill
          className={styles.hero__grid}
          priority
        />
      </div>

      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__text}>
            <h1 className={styles.hero__title}>
              {isMobile ? (
                "Where Creativity Meets Scalability"
              ) : (
                <>
                  Where Creativity
                  <br />
                  Meets Scalability
                </>
              )}
            </h1>
            <p className={styles.hero__description}>
              Unparalleled speed and low-costs make launching global brand
              campaigns to high-volume asset production all possible.
            </p>
            <div className={styles.hero__cta_group}>
              <Button text="Start Building" url="/" />
              <a href="#" className={styles.hero__cta_btn_secondary}>
                <span>
                  Resources
                  <ArrowUpRight size="14" />
                </span>
              </a>
            </div>
          </div>

          <div className={styles.hero__visuals}>
            <Image
              src={leftImg}
              alt=""
              width={500}
              height={300}
              className={styles.hero__left_image}
              priority
            />

            <Image
              src={rightImg}
              alt=""
              width={500}
              height={300}
              className={styles.hero__right_image}
              priority
            />
          </div>
        </div>
      </div>

      <Image
        src={gradientImg}
        alt=""
        fill
        className={styles.hero__gradient}
        priority
      />
    </div>
  );
};

export default CreativeHero;
