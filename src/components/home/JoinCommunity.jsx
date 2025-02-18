import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import Text, { AnimatedText } from "@/components/shared/Text";

import styles from "./JoinCommunity.module.scss";

import MobileHeroImage from "../../../assets/home/join-community.png";
import Image1 from "../../../assets/home/join-community-1.jpeg";
import Image2 from "../../../assets/home/join-community-2.jpeg";
import Image3 from "../../../assets/home/join-community-3.jpeg";
import Image4 from "../../../assets/home/join-community-4.jpeg";
import Image5 from "../../../assets/home/join-community-5.jpeg";
import Image6 from "../../../assets/home/join-community-6.jpeg";
import Image7 from "../../../assets/home/join-community-7.jpeg";
import Image8 from "../../../assets/home/join-community-8.jpeg";
import Image9 from "../../../assets/home/join-community-9.jpeg";
import Image10 from "../../../assets/home/join-community-10.jpeg";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const links = [
  {
    title: "Discord",
    url: "https://discord.com/invite/solana",
    icon: "/images/community/discord.svg",
  },
  {
    title: "GitHub",
    url: "https://github.com/solana-labs",
    icon: "/images/community/github.svg",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/solana",
    icon: "/images/community/twitter.svg",
  },
  {
    title: "Telegram",
    url: "https://t.me/solana",
    icon: "/images/community/telegram.svg",
  },
];

const JoinCommunity = ({ title }) => {
  const { t } = useTranslation();

  const container = useRef(null);

  const topRowImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const bottomRowImages = [Image7, Image8, Image9, Image10, Image2, Image4];

  useGSAP(
    () => {
      let topImgs = gsap.utils.toArray(".join-community-img-top"),
        bottomImgs = gsap.utils.toArray(".join-community-img-bottom"),
        mm = gsap.matchMedia();

      mm.add("(min-width:768px)", () => {
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=500px",
            scrub: 1,
            pin: true,
            pinSpacing: "margin",
          },
          defaults: { ease: "none" },
        });

        pinTl.from(topImgs, {
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        });

        pinTl.from(
          bottomImgs,
          {
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          "<",
        );

        pinTl.from(
          ".join-commuity-main-title , .links",
          {
            autoAlpha: 0,
            y: 50,
            stagger: 0.1,
          },
          "<50%",
        );
      });
    },
    { scope: container },
  );

  return (
    <div className={styles.JoinCommunity} ref={container}>
      <Image
        src={MobileHeroImage}
        alt={t("home.join-community.hero-alt")}
        width={390}
        height={209}
        className={styles.MobileHeroImage}
      />

      <div className={styles.ImgsWrapper}>
        <div className={styles.ImgsRow}>
          {topRowImages.map((image, index) => (
            <Image
              key={`top-${index}`}
              src={image}
              alt={t("home.join-community.hero-alt")}
              width={390}
              height={209}
              className={`${styles.Image} join-community-img-top`}
            />
          ))}
        </div>
        <div className={styles.ImgsRow}>
          {bottomRowImages.map((image, index) => (
            <Image
              key={`bottom-${index}`}
              src={image}
              alt={t("home.join-community.hero-alt")}
              width={390}
              height={209}
              className={`${styles.Image} join-community-img-bottom`}
            />
          ))}
        </div>
      </div>

      <div className={styles.Content}>
        <AnimatedText
          element="h2"
          as="heading"
          className={`${styles.Title} ${styles.MobileTitle}`}
        >
          {title}
        </AnimatedText>

        <Text
          element="h2"
          as="heading"
          className={`${styles.Title} ${styles.DesktopTitle} join-commuity-main-title`}
        >
          {title}
        </Text>

        <div className={`${styles.Links} links`}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.Link}
            >
              <img src={link.icon} alt={link.title} />
              <span>
                {link.title}
                <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
