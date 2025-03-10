import { useTranslation } from "next-i18next";
import { useEffect } from "react";

import Text from "@/components/shared/Text";
import Button from "@/components/solutions/Button";
import { MotionSlideIn } from "@/components/shared/Motions";
import Image from "next/image";

import styles from "./LoyaltyHero.module.scss";

const LoyaltyHero = ({ _heroLottie }) => {
  const { t } = useTranslation();

  useEffect(() => {
    import("@dotlottie/player-component").then((mod) => {
      if (!customElements.get("dotlottie-player")) {
        customElements.define("dotlottie-player", mod.DotLottiePlayer);
      }
    });
  }, []);

  return (
    <section className={styles.Hero}>
      <div className={styles.TextWrapper}>
        <Text element="h6" className={styles.Eyebrow}>
          {t("solutions-loyalty.hero.eyebrow")}
        </Text>
        <Text element="h1" as="heading" className={styles.HeroTitle}>
          {t("solutions-loyalty.hero.title")}
        </Text>
        <Text element="p" as="paragraph" className={styles.HeroSubtitle}>
          {t("solutions-loyalty.hero.subtitle")}
        </Text>

        <div className={styles.ButtonWrapper}>
          <Button
            text={t("solutions-loyalty.hero.buttonOne")}
            url="#developer-resources"
          />
          <Button
            text={t("solutions-loyalty.hero.buttonTwo")}
            url="#success-stories"
            theme="secondary"
          />
        </div>
      </div>

      <MotionSlideIn from="right">
        <div className={styles.LottieWrapper}>
          <Image
            src="/src/img/home/solutions/loyalty-hero.svg"
            alt="Loyalty Hero"
            width={1050}
            height={1050}
            priority
          />
        </div>
      </MotionSlideIn>
    </section>
  );
};

export default LoyaltyHero;
