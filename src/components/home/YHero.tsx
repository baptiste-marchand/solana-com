import styles from "@/components/home/YHero.module.scss";
import Button from "@/components/solutions/Button";
import { Zap, ArrowUpRight, Diamond, Leaf, Pin, Newspaper } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  PERF_UPDATE_SEC,
  SAMPLE_HISTORY_HOURS,
  useTransactionStats,
} from "@/hooks/useTransactionStats";
import { FormattedNumber } from "../SolFormattedMessage";
import Loader from "../../../public/src/img/icons/Loader.inline.svg";
import circleImg from "../../../assets/home/supporters/circle.svg";
import shopifyImg from "../../../assets/home/supporters/shopify.svg";
import metaImg from "../../../assets/home/supporters/meta.svg";
import edenImg from "../../../assets/home/supporters/eden.svg";
import stripeImg from "../../../assets/home/supporters/stripe.svg";
import jumpImg from "../../../assets/home/supporters/jump.svg";
import googleImg from "../../../assets/home/supporters/google.svg";
import discordImg from "../../../assets/home/supporters/discord.svg";

const YHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState(8);

  const { avgTps, totalTransactionCount, validators, availableStats } =
    useTransactionStats({
      visible: true,
      performanceUpdateSeconds: PERF_UPDATE_SEC,
      sampleHistoryHours: SAMPLE_HISTORY_HOURS,
    });

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      const newVisibleCount = isMobileView ? 6 : 8;
      setVisibleLogos(newVisibleCount);
      console.log("Visible logos:", newVisibleCount);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconSize = isMobile ? "10" : "14";

  const desktopLogos = [
    { src: circleImg, alt: "Circle" },
    { src: shopifyImg, alt: "Shopify" },
    { src: metaImg, alt: "Meta" },
    { src: edenImg, alt: "Magic Eden" },
    { src: stripeImg, alt: "Stripe" },
    { src: jumpImg, alt: "Jump" },
    { src: googleImg, alt: "Google" },
    { src: discordImg, alt: "Discord" },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__inner_container}>
          <h1 className={styles.hero__title}>
            <span>
              Fast
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__tps}`}
              >
                <Zap size={iconSize} />
                {availableStats ? (
                  <FormattedNumber value={avgTps} />
                ) : (
                  <Loader height={16} />
                )}{" "}
                TPS
              </span>
            </span>
            <span>
              Scalable
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__txns}`}
              >
                <ArrowUpRight size={iconSize} />
                {availableStats ? (
                  <FormattedNumber value={totalTransactionCount} />
                ) : (
                  <Loader height={16} />
                )}{" "}
                TOTAL TXNS
              </span>
            </span>
            <span>
              & Built for
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__nodes}`}
              >
                <Diamond size={iconSize} />
                {availableStats ? (
                  <FormattedNumber value={validators} />
                ) : (
                  <Loader height={16} />
                )}{" "}
                VALIDATOR NODES
              </span>
            </span>
            <span>
              Everyone
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__carbon}`}
              >
                <Leaf size={iconSize} />
                0% NET CARBON IMPACT
              </span>
            </span>
          </h1>

          <div className={styles.hero__content}>
            <div className={styles.hero__info_group}>
              <p className={styles.hero__description}>
                Solana is a high-performance blockchain designed for real-world,
                real-time use cases. It is built to work at a massive scale and
                low cost without sacrificing decentralization or security.
              </p>

              <div className={styles.hero__cta_group}>
                <Button
                  text="Start Building"
                  url="https://solana.com/ar/docs/intro/quick-start"
                  target="_blank"
                />

                <a href="#" className={styles.hero__cta_btn_secondary}>
                  <span>
                    Resources
                    <ArrowUpRight size="14" />
                  </span>
                </a>
              </div>
            </div>

            <div className={styles.hero__pinned_block}>
              <div className={styles.hero__pinned_label}>
                Pinned
                <Pin size="14" />
              </div>
              <a
                href="https://lu.ma/shipordie"
                target="_blank"
                className={styles.hero__pinned_card}
              >
                <Image
                  src="/src/img/pinned-image.jpg"
                  alt="Pinned image"
                  fill
                />
                <div className={styles.hero__blurred_info}>
                  <div className={styles["hero__blurred_info-content"]}>
                    <div className={styles["hero__blurred_info-content-row"]}>
                      <span>Get Tickets for Accelerate in New York City</span>
                      <Newspaper size="24" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.hero__supporters}>
          {(() => {
            console.log("Total logos:", desktopLogos.length);
            console.log("Visible logos state:", visibleLogos);
            console.log(
              "Sliced logos:",
              desktopLogos.slice(0, visibleLogos).length,
            );
            return null;
          })()}
          {desktopLogos.slice(0, visibleLogos).map((logo, index) => {
            console.log("Rendering logo:", index);
            return (
              <div key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={118}
                  height={30}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority={true}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.hero__random_gradient_bg}></div>
    </div>
  );
};

export default YHero;
