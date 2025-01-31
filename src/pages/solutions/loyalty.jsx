import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Layout from "@/components/solutions/layout";
import HTMLHead from "@/components/HTMLHead";
import Stats from "@/components/solutions/Stats";
import BasicCallout from "@/components/solutions/BasicCallout";
import LongformItem from "@/components/solutions/LongformItem";
import FooterCallout from "@/components/solutions/FooterCallout";
import { GradientText } from "@/components/shared/Text";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import SuccessStories from "@/components/solutions/SuccessStoriesNew";

import styles from "./Loyalty.module.scss";
import heroLottie from "../../../assets/solutions/loyalty/Loyalty_Hero_V1.lottie";
import LongformOneLottie from "../../../assets/solutions/loyalty/Loyalty_TokenExtensions.lottie";
import LongformTwoLottie from "../../../assets/solutions/loyalty/Loyalty_StateCompression_V1.lottie";
import LongformThreeLottie from "../../../assets/solutions/loyalty/Loyalty_SolanaPay_V1.lottie";
import LongformFourLottie from "../../../assets/solutions/loyalty/Loyalty_SecretMenuItem_V1.lottie";

const LoyaltyHero = dynamic(
  () => import("@/components/solutions/loyalty/LoyaltyHero"),
  { ssr: false },
);

const MotionSlideIn = dynamic(
  () => import("@/components/shared/Motions").then((mod) => mod.MotionSlideIn),
  { ssr: false },
);

const Loyalty = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // No need to import DotLottiePlayer dynamically
  }, []);

  // Define default stats content
  const defaultStats = {
    subtitle: "",
    finePrint: "",
    stats: [], // or some default stats if needed
  };

  const statsContent = t("solutions-loyalty.stats", {
    returnObjects: true,
    defaultValue: defaultStats,
  });

  // Define default content with actual titles and text
  const defaultLongform = [
    {
      title: t("solutions-loyalty.longform.0.title", "Token Extensions"),
      text: t(
        "solutions-loyalty.longform.0.text",
        "Customize your loyalty program with programmable tokens",
      ),
    },
    {
      title: t("solutions-loyalty.longform.1.title", "State Compression"),
      text: t(
        "solutions-loyalty.longform.1.text",
        "Scale your program to millions of users",
      ),
    },
    {
      title: t("solutions-loyalty.longform.2.title", "Solana Pay"),
      text: t(
        "solutions-loyalty.longform.2.text",
        "Enable seamless payments and rewards",
      ),
    },
    {
      title: t("solutions-loyalty.longform.3.title", "Secret Menu"),
      text: t(
        "solutions-loyalty.longform.3.text",
        "Create exclusive experiences",
      ),
    },
  ];

  // Get content with fallback to default values
  const longformContent = defaultLongform.map((item, index) => ({
    title: t(`solutions-loyalty.longform.${index}.title`, item.title),
    text: t(`solutions-loyalty.longform.${index}.text`, item.text),
  }));

  const caseStudyCards = [
    {
      title: "Boba Guys Revolutionizes Loyalty",
      description: t(
        "solutions-loyalty.case-study-cards.cards.boba-guys.excerpt",
      ),
      image: "/solutions/loyalty/bobaguys-main.png",
      imageAlt: t(
        "solutions-loyalty.case-study-cards.cards.boba-guys.image-alt",
      ),
      metrics: [
        { value: "500K+", label: "Members" },
        { value: "2x", label: "Engagement" },
        { value: "24/7", label: "Access" },
      ],
      readMoreUrl: "https://solana.com/news/case-study-boba-guys",
      readMoreText: t(
        "solutions-loyalty.case-study-cards.cards.boba-guys.button-text",
      ),
    },
    {
      title: "ASICS Redefines Digital Rewards",
      description: t("solutions-loyalty.case-study-cards.cards.asics.excerpt"),
      image: "/solutions/loyalty/asics-main.webp",
      imageAlt: t("solutions-loyalty.case-study-cards.cards.asics.image-alt"),
      metrics: [
        { value: "100K+", label: "Members" },
        { value: "3x", label: "Engagement" },
        { value: "Global", label: "Reach" },
      ],
      readMoreUrl: "https://ui.asics.com/",
      readMoreText: t(
        "solutions-loyalty.case-study-cards.cards.asics.buttonText",
      ),
    },
    {
      title: "Drip Haus Transforms Fan Experience",
      description: t("solutions-loyalty.case-study-cards.cards.drip.excerpt"),
      image: "/solutions/loyalty/drip-main.jpg",
      imageAlt: t("solutions-loyalty.case-study-cards.cards.drip.image-alt"),
      metrics: [
        { value: "50K+", label: "Members" },
        { value: "4x", label: "Growth" },
        { value: "24/7", label: "Access" },
      ],
      readMoreUrl:
        "https://blockworks.co/news/drip-haus-mass-adoption-strategy",
      readMoreText: t(
        "solutions-loyalty.case-study-cards.cards.drip.buttonText",
      ),
    },
    {
      title: "Eric Church Pioneers Digital Membership",
      description: t(
        "solutions-loyalty.case-study-cards.cards.eric-church.excerpt",
      ),
      image: "/solutions/loyalty/single-main.jpg",
      imageAlt: t(
        "solutions-loyalty.case-study-cards.cards.eric-church.image-alt",
      ),
      metrics: [
        { value: "5K+", label: "Members" },
        { value: "100%", label: "Digital" },
        { value: "24/7", label: "Access" },
      ],
      readMoreUrl:
        "https://single.xyz/blogs/blog/eric-church-future-proofs-fandom-solana-based-digital-deeds-nashville-bar",
      readMoreText: t(
        "solutions-loyalty.case-study-cards.cards.eric-church.buttonText",
      ),
    },
  ];

  const developerResourcesLinks = [
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-one")}
      link="https://solana.com/docs/intro/quick-start"
      key="quick-start"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-two")}
      link="https://solana.com/docs/advanced/state-compression"
      key="state-compression"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-three")}
      link="https://solana.com/docs/advanced/actions"
      key="actions"
    />,
    <YDeveloperResourcesLink
      title={t("solutions-loyalty.developerResources.link-four")}
      link="https://docs.solanapay.com/"
      key="solana-pay"
    />,
  ];

  return (
    <Layout>
      <HTMLHead
        title={t("solutions-loyalty.meta.title")}
        description={t("solutions-loyalty.meta.description")}
      />

      <div className={styles.LoyaltyPage} id="loyalty-page">
        <LoyaltyHero heroLottie={heroLottie} />

        <Stats
          titleContent={
            <Trans
              i18nKey="solutions-loyalty.stats.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%)" />
                ),
              }}
            />
          }
          subtitleKey={statsContent.subtitle}
          kickerKey={statsContent.finePrint}
          kickerUrl="https://solana.com/news/case-study-boba-guys"
          stats={statsContent.stats}
          className={styles.Stats}
          statsClassName={styles.StatsContent}
        />

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-loyalty.callout-1.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%)" />
                ),
              }}
            />
          }
          subtitleKey="solutions-loyalty.callout-1.subtitle"
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <dotlottie-player src={LongformOneLottie} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="right"
              titleComponent={longformContent[0]?.title}
              subtitleComponent={longformContent[0]?.text}
              className={styles.LongformItem1}
            />
          </MotionSlideIn>

          <MotionSlideIn>
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <dotlottie-player src={LongformTwoLottie} autoplay loop />
                </div>
              }
              textContentDesktopDirection="row"
              mediaDesktopPlacement="below"
              titleComponent={longformContent[1]?.title}
              subtitleComponent={longformContent[1]?.text}
              className={styles.LongformItem2}
            />
          </MotionSlideIn>

          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <dotlottie-player src={LongformThreeLottie} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="left"
              titleComponent={longformContent[2]?.title}
              subtitleComponent={longformContent[2]?.text}
              className={styles.LongformItem3}
            />
          </MotionSlideIn>

          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <dotlottie-player src={LongformFourLottie} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="right"
              titleComponent={longformContent[3]?.title}
              subtitleComponent={longformContent[3]?.text}
              className={styles.LongformItem4}
            />
          </MotionSlideIn>
        </div>

        <div id="success-stories">
          <SuccessStories
            title={t("solutions-loyalty.case-study-cards.title")}
            cards={caseStudyCards}
            className={styles.SuccessStories}
          />
        </div>

        <YDeveloperResources
          id="loyalty developer resources"
          title={t("solutions-loyalty.developerResources.title")}
          subtitle={t("solutions-loyalty.developerResources.text")}
          links={developerResourcesLinks}
        />

        <FooterCallout
          title={t("solutions-loyalty.footerCallout.title")}
          text={t("solutions-loyalty.footerCallout.text")}
          btnText={t("solutions-loyalty.footerCallout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t("solutions-loyalty.footerCallout.btnLarge")}
          btnLargeUrl="bd-payments-commerce@solana.org"
          className={styles.FooterCallout}
          topSectionClassName={styles.FooterCalloutTopSection}
          buttonLargeClassName={styles.FooterCalloutButtonLarge}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Loyalty;
