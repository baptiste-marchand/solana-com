import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { OpacityInText } from "@/components/shared/Text";
import dynamic from "next/dynamic";
import { withLocales } from "@/i18n/routing";

import Layout from "@/components/solutions/layout";
import HTMLHead from "@/components/HTMLHead";
import Stats from "@/components/solutions/Stats";
import FooterCallout from "@/components/solutions/FooterCallout";
// import VideoBgHero from "@/components/solutions/VideoBgHero";
import EcosystemSlider, { Card } from "@/components/solutions/EcosystemSlider";
import SuccessStories from "@/components/solutions/SuccessStoriesNew";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import LongformItem from "@/components/solutions/LongformItem";
import BasicCallout from "@/components/solutions/BasicCallout";
import { MotionSlideIn } from "@/components/shared/Motions";
import { GradientText } from "@/components/shared/Text";
import styles from "./IF.module.scss";
import longformOne from "../../../../assets/solutions/institutional-finance/InstitutionalFinance_PermanentDelegate_V1.lottie";
import longformTwo from "../../../../assets/solutions/institutional-finance/Institutional Finance_SPE_V1.lottie";
import longformThree from "../../../../assets/solutions/institutional-finance/Institutional Finance_RWA_V1.lottie";

import franklinMain from "../../../../assets/solutions/institutional-finance/franklin-main.png";

import apollo from "../../../../assets/solutions/institutional-finance/apollo.svg";
import hamilton from "../../../../assets/solutions/institutional-finance/hamilton.svg";
import paypal from "../../../../assets/solutions/institutional-finance/paypal.svg";
import visa from "../../../../assets/solutions/institutional-finance/visa.svg";
import pyth from "../../../../assets/solutions/institutional-finance/pyth.svg";
import franklin from "../../../../assets/solutions/institutional-finance/franklin.svg";
import societe from "../../../../assets/solutions/institutional-finance/societe.svg";
import styled from "styled-components";
import bgPattern from "../../../../assets/solutions/institutional-finance/bg-grid.svg";
import gradientPattern from "../../../../assets/solutions/institutional-finance/gradient.png";
import heroFrom from "../../../../assets/solutions/institutional-finance/from.png";
import heroTo from "../../../../assets/solutions/institutional-finance/to.png";

import Image from "next/image";

const DotLottiePlayer = dynamic(
  () =>
    import("@dotlottie/player-component").then(() => {
      return function DotLottiePlayer() {
        return null;
      };
    }),
  { ssr: false },
);

const InstitutionalFinance = () => {
  const { t } = useTranslation();

  const statsContent = t("solutions-institutional-finance.stats", {
    returnObjects: true,
  });

  const Hero = () => {
    const HeroSection = styled.div`
      position: relative;
      width: 100%;
      min-height: 100vh; // Full viewport height
      height: 100vh; // Exact viewport height
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 24px;
      overflow: hidden;

      @media (max-width: 768px) {
        padding: 24px;
        min-height: 100vh;
        height: auto;
      }
    `;

    const Container = styled.div`
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    `;

    const HeroStyled = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 0;
      position: relative;
      z-index: 15;

      h1 {
        text-align: center;
        font-size: 4.5rem;
        line-height: 1;
        max-width: 500px;
        margin-bottom: 1.5rem;

        span {
          font-style: italic;
        }

        @media (max-width: 768px) {
          font-size: 2.5rem; // Reduced from 3.5rem
          line-height: 0.9; // Slightly tighter line height for mobile
          max-width: 100%; // Allow full width on mobile
          padding: 0 1rem; // Add some padding on the sides
        }
      }

      p {
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.4;
        max-width: 600px;
        color: var(--grey-250);

        @media (max-width: 768px) {
          font-size: 1rem; // Slightly smaller text on mobile
          line-height: 1.3; // Tighter line height for mobile
          padding: 0 1rem;
        }
      }
    `;

    const HeroPatternBg = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: auto 250px;
      background-position: top center;
      background-repeat: repeat-x;
      pointer-events: none;
    `;

    const GradientPattern = styled.div`
      position: absolute;
      top: 0px;
      right: 10%;
      width: 600px;
      height: 600px;
      z-index: 10;
      pointer-events: none;

      @media (max-width: 768px) {
        top: -100px; // Changed from -200px to -100px to bring it down
        right: -20%;
        width: 500px;
        height: 500px;
      }
    `;

    const ImagesGrid = styled.div`
      position: relative;
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      margin-top: 2rem;
      max-width: 1100px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      > div {
        background: #141414;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        width: 100%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &.fill-img {
          padding-bottom: 0;
          padding-right: 0;
          padding-left: 0;
          padding-top: 0;

          img {
            max-width: 100%;
            width: 700px;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 700px;
        }
      }

      .arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;

        @media (max-width: 768px) {
          width: 60px;
          top: 45%;
          transform: translate(-50%, -50%) rotate(90deg);
        }
      }

      &::before {
        content: "";
        display: block;
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        background: linear-gradient(224.76deg, #0097d8 5.6%, #a74fff 97%);
        mix-blend-mode: screen;
        filter: blur(80px);
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    `;

    return (
      <HeroSection>
        <HeroPatternBg style={{ backgroundImage: `url(${bgPattern})` }} />
        <Container>
          <GradientPattern>
            <Image
              src={gradientPattern}
              alt="gradient pattern"
              width={600}
              height={600}
            />
          </GradientPattern>
          <HeroStyled>
            <OpacityInText element="h1" as="heading" className={styles.Title}>
              Tokenize Everything
            </OpacityInText>
            <OpacityInText element="p" as="paragraph">
              Instant settlement, tamper-proof security, and privacy for
              institutional needs
            </OpacityInText>

            <ImagesGrid>
              <div>
                <Image src={heroFrom} alt="" width={300} height={300} />
              </div>
              <div className="fill-img">
                <Image src={heroTo} alt="" width={300} height={300} />
              </div>
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA5NiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTgwLjk1MiAxMy42MDAyQzc3Ljg5MTIgMTEuMzQ5MyA3NS4xNTc0IDkuMjM1NDYgNzIuOTI2OSA3LjM3Mzk2QzY4LjQ1NyAzLjY4MzIzIDY1LjkzNjEgMC45ODQ5MzcgNjYuNDI5IDAuMjY1OTM3QzY2LjkyMiAtMC40NTMwNjQgNzAuMzA4MyAwLjc0MTE2MSA3NS4zMjE4IDMuMjc2MzlDNzcuODE4MiA0LjU0OTk2IDgwLjgyOTUgNi4yODY0NiA4NC4wODggOC4yNjAzMkw4OS4xNDQ5IDExLjM5NDlMOTEuNzkzOSAxMy4xMjM0QzkyLjQ2NjYgMTMuNTQ5IDkzLjA5MjggMTQuMDQyNiA5My42NjI1IDE0LjU5NjVDOTQuNDU0NiAxNS4zNTcyIDk1LjA1OSAxNi4yODk4IDk1LjQyOTMgMTcuMzIzQzk1Ljc3NTEgMTguMzUxNCA5NS44NzE0IDE5LjQ0OSA5NS43MTA2IDIwLjUyN0M5NS42MzM3IDIxLjAzNTEgOTUuNTA3OCAyMS41MzUxIDk1LjMzNDUgMjIuMDIwMkM5NS4yMDYzIDIyLjM3NTcgOTUuMDU4MyAyMi43MjQgOTQuODkxMSAyMy4wNjM1Qzk0LjM2NjMgMjQuMDczOCA5My43ODM2IDI1LjA1MzcgOTMuMTQ2IDI1Ljk5ODZDOTIuMDQzNSAyNy42NjI0IDkwLjg0NDIgMjkuMjYxNCA4OS41NTQxIDMwLjc4NzNDODcuNDExNiAzMy4zNTMgODQuOTgwNCAzNS42Njc3IDgyLjMwOTIgMzcuNjg1Qzc3Ljc0NzEgNDEuMDc5MSA3NC4zNDU5IDQyLjE0NjkgNzMuODM0NCA0MS4zNTYyQzczLjMyMjkgNDAuNTY1NiA3NS42MDA4IDM4LjAyODggNzkuMDA5IDMzLjk3MDZDODAuNjE0MyAzMS45ODQ5IDgyLjY1OTQgMjkuNDczOSA4NC42NDMgMjYuNjE4M0w4NS41Nzg4IDI1LjIzNjRDODIuNTc2MSAyNS44MDI2IDc4LjYxNTggMjYuMzc4NyA3My4zNDE5IDI2Ljg3MTZDNjYuMDM0OSAyNy41Mjk5IDU4LjcwMjkgMjcuODEyMSA1MS4zNzU0IDI3LjcxN0M0My4yNzk3IDI3LjYzMTQgMzUuMTk5NyAyNy4xMTI1IDI3LjE3MDQgMjYuMTYyNkMxMS44MzAyIDI0LjM3NyAtMC4xNDM2MTkgMjEuMDgyIDAuMDU4MDcxMyAyMC4wOTY4QzAuMjU5NzYyIDE5LjExMTYgMTIuMjYzMyAyMC4wMjc0IDI3LjI3MjggMjAuMjM5M0M0Mi4yNTAzIDIwLjQ5OTYgNTcuMjQwNiAxOS45MDM1IDcyLjE2OTIgMTguNDUzOEM3OC4zOTQ5IDE3Ljg0NTggODIuNzg4IDE3LjM5OTkgODUuOTU4MiAxNy4xNzEzTDg1Ljg4NzYgMTcuMDQ5Mkw4MS4xMDgyIDEzLjUzNzIiIGZpbGw9IiNBNjRDRkYiLz4KPC9zdmc+Cg=="
                alt="Arrow"
                width={300}
                height={300}
                className="arrow"
              />
            </ImagesGrid>
          </HeroStyled>
        </Container>
      </HeroSection>
    );
  };

  const ecosystemCards = [
    <Card
      key="apollo"
      img={apollo}
      url="https://www.apollo.com/"
      title={t("solutions-institutional-finance.ecosystem.card-apollo.title")}
      text={t("solutions-institutional-finance.ecosystem.card-apollo.text")}
    />,
    <Card
      key="hamilton"
      img={hamilton}
      url="https://www.hamiltonlane.com/en-us/news/news-libre-launches-scope-on-solana"
      title={t("solutions-institutional-finance.ecosystem.card-hamilton.title")}
      text={t("solutions-institutional-finance.ecosystem.card-hamilton.text")}
    />,
    <Card
      key="paypal"
      img={paypal}
      url="https://newsroom.paypal-corp.com/2024-05-29-PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain,-Providing-Faster,-Cheaper-Transactions-for-Consumers"
      title={t("solutions-institutional-finance.ecosystem.card-paypal.title")}
      text={t("solutions-institutional-finance.ecosystem.card-paypal.text")}
    />,
    <Card
      key="visa"
      img={visa}
      url="https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.19881.html"
      title={t("solutions-institutional-finance.ecosystem.card-visa.title")}
      text={t("solutions-institutional-finance.ecosystem.card-visa.text")}
    />,
    <Card
      key="pyth"
      img={pyth}
      url="https://www.pyth.network/"
      title={t("solutions-institutional-finance.ecosystem.card-pyth.title")}
      text={t("solutions-institutional-finance.ecosystem.card-pyth.text")}
    />,
    <Card
      key="franklin"
      img={franklin}
      url="https://www.etherfuse.com/"
      title={t("solutions-institutional-finance.ecosystem.card-franklin.title")}
      text={t("solutions-institutional-finance.ecosystem.card-franklin.text")}
    />,
    <Card
      key="societe"
      img={societe}
      url="https://www.societe.com/"
      title={t("solutions-institutional-finance.ecosystem.card-societe.title")}
      text={t("solutions-institutional-finance.ecosystem.card-societe.text")}
    />,
  ];

  const caseStudyCards = [
    {
      title: "Pyth Network Brings Real-World Data On-Chain",
      description: t(
        "solutions-institutional-finance.case-studies.cards.item-one.excerpt",
      ),
      image: "/solutions/defi/pyth-main.jpg",
      imageAlt: t(
        "solutions-institutional-finance.case-studies.cards.item-one.image-alt",
      ),
      metrics: [
        { value: "$3B+", label: "TVL" },
        { value: "200+", label: "Publishers" },
        { value: "24/7", label: "Data Feed" },
      ],
      readMoreUrl: "https://solana.com/news/case-study-pyth",
      readMoreText: t(
        "solutions-institutional-finance.case-studies.cards.item-one.button",
      ),
    },
    {
      title: "Franklin Templeton Brings Tokenized Money Market To Solana",
      description: t(
        "solutions-institutional-finance.case-studies.cards.item-two.excerpt",
      ),
      image: franklinMain.src,
      imageAlt: t(
        "solutions-institutional-finance.case-studies.cards.item-two.image-alt",
      ),
      metrics: [
        { value: "$512M", label: "Assets in Fund" },
        { value: "4.2%", label: "Average 7-Day Yield" },
        { value: "100%", label: "Digital" },
      ],
      readMoreUrl:
        "https://cointelegraph.com/news/franklin-templeton-us-govt-money-fund-solana",
      readMoreText: t(
        "solutions-institutional-finance.case-studies.cards.item-two.button",
      ),
    },
  ];

  const developerResourcesLinks = [
    <YDeveloperResourcesLink
      key="docs"
      title={t(
        "solutions-institutional-finance.developer-resources.links.quick-start.title",
      )}
      link="https://solana.com/docs/intro/quick-start"
    />,
    <YDeveloperResourcesLink
      key="solana-pay"
      title={t(
        "solutions-institutional-finance.developer-resources.links.solana-pay.title",
      )}
      link="https://docs.solanapay.com/"
    />,
    <YDeveloperResourcesLink
      key="helio"
      title={t(
        "solutions-institutional-finance.developer-resources.links.helio.title",
      )}
      link="https://solana.com/docs/advanced/actions"
    />,
  ];

  return (
    <Layout headerClassName={styles.Header}>
      <HTMLHead
        title={t("solutions-institutional-finance.meta.title")}
        description={t("solutions-institutional-finance.meta.description")}
      />

      <div className={styles.PageWrapper} id="if-page">
        <Hero />
        {/* <VideoBgHero
          classes={styles.VideoHero}
          videoSrc="https://player.vimeo.com/progressive_redirect/playback/1010826993/rendition/1080p/file.mp4?loc=external&signature=4fc1a0aa20104b5363ae29e7772493dde747947e2250e964ff1ff1003e497b81"
          videoSrc720="https://player.vimeo.com/progressive_redirect/playback/1010826993/rendition/720p/file.mp4?loc=external&signature=cfc66c3690345cb70d036749c31f77bc2a5fc401e438c396554c97584d07d097"
          videoPoster="/solutions/institutional-finance/Export Block Chain Solana V14.jpeg"
          title={t("solutions-institutional-finance.hero.title")}
          subtitle={t("solutions-institutional-finance.hero.subtitle")}
          eyebrow={t("solutions-institutional-finance.hero.eyebrow")}
          buttons={[
            {
              text: t("solutions-institutional-finance.hero.button"),
              url: "#resources",
            },
          ]}
        /> */}

        <Stats
          titleContent={
            <Trans
              i18nKey="solutions-institutional-finance.stats.title"
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
              i18nKey="solutions-institutional-finance.callout-1.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%)" />
                ),
              }}
            />
          }
          // subtitleKey="solutions-institutional-finance.callout-1.subtitle"
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={
                <div className={styles.TokenExtensionsMedia}>
                  <DotLottiePlayer />
                  <dotlottie-player src={longformOne} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="left"
              titleComponent={t(
                "solutions-institutional-finance.longform-two.title",
              )}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-institutional-finance.longform-two.subtitle"
                  components={[
                    <Link href="/solutions/token-extensions" key="0" />,
                  ]}
                />
              }
              className={styles.LongformItem2}
            />
          </MotionSlideIn>

          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <DotLottiePlayer />
                  <dotlottie-player src={longformThree} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="right"
              titleComponent={t(
                "solutions-institutional-finance.longform-three.title",
              )}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-institutional-finance.longform-three.subtitle"
                  components={[
                    <Link
                      href="https://solana.com/solutions/real-world-assets"
                      key="0"
                      target="_blank"
                      rel="noopener noreferrer"
                    />,
                  ]}
                />
              }
              className={styles.LongformItem3}
            />
          </MotionSlideIn>

          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={
                <div className={styles.LottieWrapper}>
                  <DotLottiePlayer />
                  <dotlottie-player src={longformTwo} autoplay loop />
                </div>
              }
              mediaDesktopPlacement="left"
              titleComponent={t(
                "solutions-institutional-finance.longform-one.title",
              )}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-institutional-finance.longform-one.subtitle"
                  components={[
                    <Link
                      href="/solutions/solana-permissioned-environments"
                      key="0"
                    />,
                  ]}
                />
              }
              className={styles.LongformItem1}
            />
          </MotionSlideIn>
        </div>

        <div id="ecosystem">
          <EcosystemSlider
            titleKey="solutions-institutional-finance.ecosystem.title"
            cards={ecosystemCards}
            className={styles.EcosystemSlider}
          />
        </div>

        <SuccessStories
          title={t("solutions-institutional-finance.case-studies.title")}
          cards={caseStudyCards}
          className={styles.SuccessStories}
        />

        <YDeveloperResources
          id="finance developer resources"
          title={t("solutions-institutional-finance.developer-resources.title")}
          subtitle={t(
            "solutions-institutional-finance.developer-resources.subtitle",
          )}
          links={developerResourcesLinks}
        />

        <FooterCallout
          title={t("solutions-institutional-finance.footer-callout.title")}
          text={t("solutions-institutional-finance.footer-callout.text")}
          btnText={t("solutions-institutional-finance.footer-callout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t(
            "solutions-institutional-finance.footer-callout.btn-large",
          )}
          btnLargeUrl="https://solanafoundation.typeform.com/to/L2kwha4R"
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

export default InstitutionalFinance;
