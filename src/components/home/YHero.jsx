import styles from "@/components/home/YHero.module.scss";
import Button from "@/components/solutions/Button";

const YHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>

        <div>
          <h1 className={styles.hero__title}>
            Fast
            <span
              className={`${styles.hero__title_tag} ${styles.hero__title_tag__tps}`}
            >
              4,700 TPS
            </span>
            , Scalable
            <span
              className={`${styles.hero__title_tag} ${styles.hero__title_tag__txns}`}
            >
              349,077,760,944 TOTAL TXNS
            </span>
            , & Built for
            <span
              className={`${styles.hero__title_tag} ${styles.hero__title_tag__nodes}`}
            >
              1,490 VALIDATOR NODES
            </span>
            Everyone
            <span
              className={`${styles.hero__title_tag} ${styles.hero__title_tag__carbon}`}
            >
              0% NET CARBON IMPACT
            </span>
          </h1>
        </div>

        <div className={styles.hero__info_group}>
          <p className={styles.hero__description}>
            Solana is a high-performance blockchain platform designed to support
            decentralised applications and cryptocurrencies. It aims to provide
            scalability without sacrificing decentralisation or security.
          </p>

          <div className={styles.hero__cta_group}>
            <Button
              text="Start Building"
              url="/"
            />

            <a
              href="#"
              className={styles.hero__cta_btn_secondary}
            >
              <span>Resources</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YHero;
