import styles from "@/components/home/YHero.module.scss";
import Button from "@/components/solutions/Button";
import { Zap, ArrowUpRight, Diamond, Leaf, Pin, Newspaper } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const YHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setVisibleLogos(4);
      } else if (window.innerWidth <= 1024) {
        setVisibleLogos(6);
      } else {
        setVisibleLogos(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconSize = isMobile ? "10" : "14";

  const desktopLogos = [
    { src: "/src/img/home/supporters/circle.png", alt: "Circle" },
    { src: "/src/img/home/supporters/shopify.png", alt: "Shopify" },
    { src: "/src/img/home/supporters/meta.png", alt: "Meta" },
    { src: "/src/img/home/supporters/eden.png", alt: "Magic Eden" },
    { src: "/src/img/home/supporters/stripe.png", alt: "Stripe" },
    { src: "/src/img/home/supporters/jump.png", alt: "Jump" },
    { src: "/src/img/home/supporters/google.png", alt: "Google" },
    { src: "/src/img/home/supporters/discord.png", alt: "Discord" },
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
                4,700 TPS
              </span>
            </span>
            <span>
              Scalable
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__txns}`}
              >
                <ArrowUpRight size={iconSize} />
                349,077,760,944 TOTAL TXNS
              </span>
            </span>
            <span>
              & Built for
              <span
                className={`${styles.hero__title_tag} ${styles.hero__title_tag__nodes}`}
              >
                <Diamond size={iconSize} />
                1,490 VALIDATOR NODES
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
                Solana is a high-performance blockchain platform designed to
                support decentralised applications and cryptocurrencies. It aims
                to provide scalability without sacrificing decentralisation or
                security.
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

            <div className={styles.hero__pinned_block}>
              <div className={styles.hero__pinned_label}>
                Pinned
                <Pin size="14" />
              </div>
              <a href="#" className={styles.hero__pinned_card}>
                <Image
                  src="/src/img/pinned-image.jpg"
                  alt="Pinned image"
                  fill
                />
                <div className={styles.hero__blurred_info}>
                  <div className={styles["hero__blurred_info-content"]}>
                    <div className={styles["hero__blurred_info-content-row"]}>
                      <span>Tickets on Sale for Breakpoint 2024</span>
                      <Newspaper size="24" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.hero__supporters}>
          {desktopLogos.slice(0, visibleLogos).map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={118}
              height={30}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.hero__random_gradient_bg}></div>
    </div>
  );
};

export default YHero;
