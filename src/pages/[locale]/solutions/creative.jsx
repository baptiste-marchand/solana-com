import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";
import dynamic from "next/dynamic";

import { withLocales } from "@/i18n/routing";
import HTMLHead from "@/components/HTMLHead";
import Layout from "@/components/solutions/layout";
import Button from "@/components/solutions/Button";
import Stats from "@/components/solutions/Stats";
import BasicCallout from "@/components/solutions/BasicCallout";
import LongformItem from "@/components/solutions/LongformItem";
import EcosystemSliderWithTabs, {
  Card,
} from "@/components/solutions/EcosystemSliderWithTabs";
import SuccessStories from "@/components/solutions/SuccessStoriesNew";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import FooterCallout from "@/components/solutions/FooterCallout";
import { AnimatedText, GradientText } from "@/components/shared/Text";
import { MotionSlideIn } from "@/components/shared/Motions";
import CreativeHero from "@/components/home/CreativeHero";

import styles from "./Creative.module.scss";
import blinksLottie from "../../../../assets/solutions/creative/Blinks.lottie";
import nftLottie from "../../../../assets/solutions/creative/NFT.lottie";

const DotLottiePlayer = dynamic(
  () =>
    import("@dotlottie/player-component").then(() => {
      // Return a placeholder component since we're only loading the web component
      return function DotLottiePlayer() {
        return null;
      };
    }),
  { ssr: false },
);

const Creative = () => {
  const { t } = useTranslation();

  const statsContent = t("solutions-creative.stats", {
    returnObjects: true,
  });

  const platformCards = [
    <Card
      key="magic-eden"
      img="/solutions/creative/carousel-1.webp"
      url="https://magiceden.io/"
      title={t("solutions-creative.ecosystem.platforms.magic-eden.title")}
      text={t("solutions-creative.ecosystem.platforms.magic-eden.text")}
    />,
    <Card
      key="drip"
      img="/solutions/creative/carousel-2.webp"
      url="https://drip.haus/"
      title={t("solutions-creative.ecosystem.platforms.drip.title")}
      text={t("solutions-creative.ecosystem.platforms.drip.text")}
    />,
    <Card
      key="tensor"
      img="/solutions/creative/carousel-3.webp"
      url="https://www.tensor.trade/"
      title={t("solutions-creative.ecosystem.platforms.tensor.title")}
      text={t("solutions-creative.ecosystem.platforms.tensor.text")}
    />,
    <Card
      key="metaplex"
      img="/solutions/creative/carousel-4.webp"
      url="https://www.metaplex.com/"
      title={t("solutions-creative.ecosystem.platforms.metaplex.title")}
      text={t("solutions-creative.ecosystem.platforms.metaplex.text")}
    />,
    <Card
      key="audius"
      img="/solutions/creative/carousel-5.webp"
      url="https://audius.co/"
      title={t("solutions-creative.ecosystem.platforms.audius.title")}
      text={t("solutions-creative.ecosystem.platforms.audius.text")}
    />,
    <Card
      key="access-protocol"
      img="/solutions/creative/carousel-6.webp"
      url="https://hub.accessprotocol.co/creators"
      title={t("solutions-creative.ecosystem.platforms.access-protocol.title")}
      text={t("solutions-creative.ecosystem.platforms.access-protocol.text")}
    />,
    <Card
      key="3-land"
      img="/solutions/creative/carousel-7.webp"
      url="https://3.land/"
      title={t("solutions-creative.ecosystem.platforms.3-land.title")}
      text={t("solutions-creative.ecosystem.platforms.3-land.text")}
    />,
    <Card
      key="primatives"
      img="/solutions/creative/carousel-8.webp"
      url="https://blog.primitives.xyz/announcing-the-primitives-protocol/"
      title={t("solutions-creative.ecosystem.platforms.primatives.title")}
      text={t("solutions-creative.ecosystem.platforms.primatives.text")}
    />,
    <Card
      key="exchange-art"
      img="/solutions/creative/carousel-9.webp"
      url="https://exchange.art/"
      title={t("solutions-creative.ecosystem.platforms.exchange-art.title")}
      text={t("solutions-creative.ecosystem.platforms.exchange-art.text")}
    />,
    <Card
      key="floor"
      img="/solutions/creative/carousel-10.webp"
      url="https://www.floornfts.io/"
      title={t("solutions-creative.ecosystem.platforms.floor.title")}
      text={t("solutions-creative.ecosystem.platforms.floor.text")}
    />,
  ];

  const creativesCards = [
    <Card
      key="eric-church"
      img="/solutions/creative/eric-church.webp"
      url="https://single.xyz/blogs/blog/eric-church-future-proofs-fandom-solana-based-digital-deeds-nashville-bar"
      title={t("solutions-creative.ecosystem.creatives.eric-church.title")}
      text={t("solutions-creative.ecosystem.creatives.eric-church.text")}
    />,
    <Card
      key="bryan-johnson"
      img="/solutions/creative/bryan-johnson.webp"
      url="https://www.todaynftnews.com/billionaire-biohacker-bryan-johnson-launches-nft-venture-with-solana-based-drip-airdrop/"
      title={t("solutions-creative.ecosystem.creatives.bryan-johnson.title")}
      text={t("solutions-creative.ecosystem.creatives.bryan-johnson.text")}
    />,
    <Card
      key="bangerz"
      img="/solutions/creative/bangerz.webp"
      url="https://x.com/bangerzNFT"
      title={t("solutions-creative.ecosystem.creatives.bangerz.title")}
      text={t("solutions-creative.ecosystem.creatives.bangerz.text")}
    />,
    <Card
      key="degen-poet"
      img="/solutions/creative/degen-poet.webp"
      url="https://www.degenpoet.com/"
      title={t("solutions-creative.ecosystem.creatives.degen-poet.title")}
      text={t("solutions-creative.ecosystem.creatives.degen-poet.text")}
    />,
  ];

  const caseStudyCards = [
    {
      title: "Culture Hacker Brings Immersive Art to Life",
      description: t(
        "solutions-creative.case-studies.cards.culture-hacker.excerpt",
      ),
      image: "/solutions/creative/culture-hacker.png",
      imageAlt: "Culture Hacker",
      metrics: [
        { value: "1M+", label: "Impressions" },
        { value: "100K+", label: "Participants" },
        { value: "24/7", label: "Access" },
      ],
      readMoreUrl:
        "https://solana.com/news/case-study-culturehacker-where-theres-smoke",
      readMoreText: t(
        "solutions-creative.case-studies.cards.culture-hacker.button",
      ),
    },
    {
      title: "Eric Church Revolutionizes Fan Engagement",
      description: t(
        "solutions-creative.case-studies.cards.eric-church.excerpt",
      ),
      image: "/solutions/creative/single.png",
      imageAlt: "Eric Church",
      metrics: [
        { value: "5K+", label: "Members" },
        { value: "100%", label: "Digital" },
        { value: "24/7", label: "Access" },
      ],
      readMoreUrl:
        "https://single.xyz/blogs/blog/eric-church-future-proofs-fandom-solana-based-digital-deeds-nashville-bar",
      readMoreText: t(
        "solutions-creative.case-studies.cards.eric-church.button",
      ),
    },
  ];

  const developerResourcesLinks = [
    <YDeveloperResourcesLink
      key="guide"
      title={t(
        "solutions-creative.developer-resources.links.quick-start.title",
      )}
      link="/docs/intro/quick-start"
    />,
    <YDeveloperResourcesLink
      key="state-compression"
      title={t(
        "solutions-creative.developer-resources.links.actions-blinks.title",
      )}
      link="/solutions/actions"
    />,
    <YDeveloperResourcesLink
      key="token-extensions"
      title={t(
        "solutions-creative.developer-resources.links.token-extensions.title",
      )}
      link="/developers/guides/token-extensions/getting-started"
    />,
    <YDeveloperResourcesLink
      key="blinks-actions"
      title={t(
        "solutions-creative.developer-resources.links.compression-guide.title",
      )}
      link="/developers/guides/javascript/compressed-nfts"
    />,
  ];

  return (
    <Layout>
      <HTMLHead
        title={t("solutions-creative.meta.title")}
        description={t("solutions-creative.meta.description")}
      />
      <div className={styles.PageWrapper} id="creative-page">
        <CreativeHero />

        <Stats
          titleContent={
            <Trans
              i18nKey="solutions-creative.stats.title"
              defaults="<gradient>Create, Share, Earn</gradient> — All on Solana"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%);" />
                ),
              }}
            />
          }
          subtitleKey={statsContent.subtitle}
          stats={statsContent.stats}
          className={styles.StatsSection}
          buttonsClassName={styles.StatsButtons}
          statsClassName={styles.StatsWrapper}
        />

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-creative.callout-1.title"
              defaults="<gradient>Creator-Friendly Tooling,</gradient> for Any Collection or Campaign>"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%);" />
                ),
              }}
            />
          }
          subtitleKey="solutions-creative.callout-1.subtitle"
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <DotLottiePlayer />
                  <dotlottie-player src={blinksLottie} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="right"
              titleComponent={t("solutions-creative.meet-users.title")}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-creative.meet-users.subtitle"
                  components={{
                    nextLink: (
                      <Link href="/solutions/actions" target="_blank" />
                    ),
                  }}
                />
              }
              className={styles.LongformItem1}
            />
          </MotionSlideIn>

          <MotionSlideIn>
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <DotLottiePlayer />
                  <dotlottie-player src={nftLottie} autoplay loop />
                </div>
              }
              textContentDesktopDirection="row"
              titleComponent={t("solutions-creative.mint-digital.title")}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-creative.mint-digital.subtitle"
                  components={{
                    nextLink: (
                      <Link
                        href="/docs/advanced/state-compression"
                        target="_blank"
                      />
                    ),
                  }}
                />
              }
              className={styles.LongformItem4}
            />
          </MotionSlideIn>
        </div>

        <div className={classNames(styles.ExploreCards, "page-width")}>
          <div className={styles.ExploreCardsCards}>
            <div className={styles.ExploreCardsCard}>
              <div className={styles.ExploreCardsCardContent}>
                <AnimatedText element="h3" as="heading">
                  {t(
                    "solutions-creative.explore-cards.cards.brand-loyalty.title",
                  )}
                </AnimatedText>

                <AnimatedText element="p" as="paragraph">
                  {t(
                    "solutions-creative.explore-cards.cards.brand-loyalty.subtitle",
                  )}
                </AnimatedText>
              </div>

              <Button
                text={t(
                  "solutions-creative.explore-cards.cards.brand-loyalty.btn",
                )}
                url="/solutions/loyalty"
              />
            </div>
          </div>
        </div>

        <div id="ecosystem">
          <EcosystemSliderWithTabs
            titleKey={t("solutions-creative.ecosystem.title")}
            className={styles.EcosystemSlider}
            tab1Title={t("solutions-creative.ecosystem.platforms.title")}
            tab2Title={t("solutions-creative.ecosystem.creatives.title")}
            tab1Cards={platformCards}
            tab2Cards={creativesCards}
          />
        </div>

        <SuccessStories
          title={t("solutions-creative.case-studies.title")}
          cards={caseStudyCards}
          className={styles.SuccessStories}
          cardsClassName={styles.SuccessStoriesCards}
        />

        <YDeveloperResources
          id="creative developer resources"
          title={t("solutions-creative.developer-resources.title")}
          subtitle={t("solutions-creative.developer-resources.subtitle")}
          links={developerResourcesLinks}
        />

        <FooterCallout
          title={t("solutions-creative.footer-callout.title")}
          text={t("solutions-creative.footer-callout.text")}
          btnText={t("solutions-creative.footer-callout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t("solutions-creative.footer-callout.btn-large")}
          btnLargeUrl="bd-social@solana.org"
          className={styles.FooterCallout}
          topSectionClassName={styles.FooterCalloutTopSection}
          buttonLargeClassName={styles.FooterCalloutButtonLarge}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { locale = "en" } = params;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: withLocales(),
    fallback: "blocking",
  };
}

export default Creative;
