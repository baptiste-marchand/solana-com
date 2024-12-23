import { Fragment } from "react";
import classNames from "classnames";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Marquee from "react-fast-marquee";

import { AnimatedText } from "@/components/shared/Text";
import { MotionSlideIn } from "@/components/shared/Motions";

import styles from "./Companies.module.scss";

const visaSvg = "/src/img/home/companies/visa.svg";
const paypalSvg = "/src/img/home/companies/paypal-usd.svg";
const stripeSvg = "/src/img/home/companies/stripe.svg";
const awsSvg = "/src/img/home/companies/aws.svg";
const mastercardSvg = "/src/img/home/companies/mastercard.svg";
const shopifySvg = "/src/img/home/companies/shopify.svg";
const googleCloudSvg = "/src/img/home/companies/google-cloud.svg";
const basicsSvg = "/src/img/home/companies/basics.svg";
const moreSvg = "/src/img/home/companies/more.svg";

const Companies = () => {
  const { t } = useTranslation();

  const mobileLogos = [
    { src: visaSvg, alt: "Visa" },
    { src: paypalSvg, alt: "PayPal" },
    { src: stripeSvg, alt: "Stripe" },
    { src: awsSvg, alt: "AWS" },
    { src: mastercardSvg, alt: "MasterCard" },
    { src: shopifySvg, alt: "Shopify" },
    { src: googleCloudSvg, alt: "Google Cloud" },
    { src: basicsSvg, alt: "Basics" },
  ];

  const desktopLogos = [
    { src: visaSvg, alt: "Visa" },
    { src: paypalSvg, alt: "PayPal" },
    { src: stripeSvg, alt: "Stripe" },
    { src: awsSvg, alt: "AWS" },
    { src: mastercardSvg, alt: "MasterCard" },
    { src: shopifySvg, alt: "Shopify" },
    { src: googleCloudSvg, alt: "Google Cloud" },
    { src: basicsSvg, alt: "Basics" },
    { src: moreSvg, alt: "100s more" },
  ];

  return (
    <section className={styles.Companies}>
      <div className={classNames(styles.ContentWrapper, "page-width")}>
        <AnimatedText element="h2" as="heading">
          {t("home.companies.title")}
        </AnimatedText>
        <AnimatedText element="p" as="paragraph">
          {t("home.companies.subtitle")}
        </AnimatedText>
      </div>

      <div>
        <div className={styles.MobileMarquee}>
          <Marquee pauseOnHover={false} play={true} speed={100}>
            {[...mobileLogos, ...mobileLogos].map((logo, index) => (
              <Fragment key={`logo-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={87.75}
                />
              </Fragment>
            ))}
          </Marquee>

          <MotionSlideIn>
            <Image
              src={moreSvg}
              alt={"100s more"}
              width={145}
              height={98}
              className={styles.MoreLogo}
            />
          </MotionSlideIn>
        </div>

        <div className={styles.DesktopStatic}>
          <div className={styles.StaticRow}>
            {desktopLogos.slice(0, 4).map((logo, index) => (
              <MotionSlideIn
                delayIncrease={0.1}
                key={`logo-${index}`}
                className={styles.LogoWrapper}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={87.75}
                />
              </MotionSlideIn>
            ))}
          </div>
          <div className={styles.StaticRow}>
            {desktopLogos.slice(4).map((logo, index) => (
              <MotionSlideIn
                delayIncrease={0.1}
                key={`logo-${index}`}
                className={styles.LogoWrapper}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={87.75}
                />
              </MotionSlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
