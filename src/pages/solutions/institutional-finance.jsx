import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { OpacityInText } from "@/components/shared/Text";

import Layout from "@/components/solutions/layout";
import HTMLHead from "@/components/HTMLHead";
import Stats from "@/components/solutions/Stats";
import FooterCallout from "@/components/solutions/FooterCallout";
// import VideoBgHero from "@/components/solutions/VideoBgHero";
import EcosystemSlider, {
  Card,
} from "../../components/solutions/EcosystemSlider";
import SuccessStories, {
  StoryCard,
} from "@/components/solutions/SuccessStories";
import YDeveloperResources, {
  YDeveloperResourcesLink,
} from "@/components/solutions/YDeveloperResources";
import LongformItem from "@/components/solutions/LongformItem";
import BasicCallout from "@/components/solutions/BasicCallout";
import { MotionSlideIn } from "@/components/shared/Motions";
import { GradientText } from "@/components/shared/Text";

import styles from "./IF.module.scss";

import homebaseLogo from "../../../assets/solutions/institutional-finance/homebase-logo.png";
import homebaseMain from "../../../assets/solutions/institutional-finance/homebase-main.jpg";

import medici from "../../../assets/solutions/institutional-finance/medici.svg";
import hamilton from "../../../assets/solutions/institutional-finance/hamilton.svg";
import paypal from "../../../assets/solutions/institutional-finance/paypal.svg";
import visa from "../../../assets/solutions/institutional-finance/visa.svg";
import pyth from "../../../assets/solutions/institutional-finance/pyth.svg";
import etherfuse from "../../../assets/solutions/institutional-finance/etherfuse.svg";
import styled from "styled-components";
import bgPattern from "../../../assets/solutions/institutional-finance/bg-grid.svg";
import gradientPattern from "../../../assets/solutions/institutional-finance/gradient.png";
import heroFrom from "../../../assets/solutions/institutional-finance/from.png";
import heroTo from "../../../assets/solutions/institutional-finance/to.png";

import Image from "next/image";

const InstitutionalFinance = () => {
  const { t } = useTranslation();

  const statsContent = t("solutions-institutional-finance.stats", {
    returnObjects: true,
  });

  const Hero = () => {
    const HeroSection = styled.div`
      position: relative;
      background: #000000;
    `;

    const Container = styled.div`
      position: relative;
      width: 100%;
      max-width: 1144px;
      margin: 0 auto;
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
        font-size: 3.5rem;
        line-height: 1.2;
        max-width: 500px;

        span {
          font-style: italic;
        }
      }

      p {
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.4;
        max-width: 600px;
        color: var(--grey-250);
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
    `;

    const ImagesGrid = styled.div`
      position: relative;
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      margin-top: 2rem;
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
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 400px;
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
              The Private & High Performing Chain <span>for</span> Institutions
            </OpacityInText>
            <OpacityInText element="p" as="paragraph">
              Stop wasting hours on reconciliation, switch to the instantly
              settled, tamper proof & private blockchain
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
      key="medici"
      img={medici}
      url="https://medici-docs.bridgesplit.com/"
      title={t("solutions-institutional-finance.ecosystem.card-medici.title")}
      text={t("solutions-institutional-finance.ecosystem.card-medici.text")}
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
      key="etherfuse"
      img={etherfuse}
      url="https://www.etherfuse.com/"
      title={t(
        "solutions-institutional-finance.ecosystem.card-etherfuse.title",
      )}
      text={t("solutions-institutional-finance.ecosystem.card-etherfuse.text")}
    />,
  ];

  const caseStudyCards = [
    <StoryCard
      key="case-study-pyth"
      logo={"/solutions/institutional-finance/pyth-logo.svg"}
      logoAlt={t(
        "solutions-institutional-finance.case-studies.cards.item-one.logo-alt",
      )}
      mobileImage={"/solutions/defi/pyth-main.jpg"}
      desktopImage={"/solutions/defi/pyth-main.jpg"}
      imageAlt={t(
        "solutions-institutional-finance.case-studies.cards.item-one.image-alt",
      )}
      text={
        <Trans
          i18nKey="solutions-institutional-finance.case-studies.cards.item-one.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t(
        "solutions-institutional-finance.case-studies.cards.item-one.button",
      )}
      buttonUrl="https://solana.com/news/case-study-pyth"
      className={styles.StoryCard}
    />,
    <StoryCard
      key="case-study-homebase"
      logo={homebaseLogo}
      logoAlt={t(
        "solutions-institutional-finance.case-studies.cards.item-two.logo-alt",
      )}
      mobileImage={homebaseMain}
      desktopImage={homebaseMain}
      imageAlt={t(
        "solutions-institutional-finance.case-studies.cards.item-two.image-alt",
      )}
      text={
        <Trans
          i18nKey="solutions-institutional-finance.case-studies.cards.item-two.excerpt"
          components={{ strong: <strong /> }}
        />
      }
      buttonText={t(
        "solutions-institutional-finance.case-studies.cards.item-two.button",
      )}
      buttonUrl="https://solana.com/news/case-study-homebase"
      className={styles.StoryCard}
    />,
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
              defaults="<gradient>Global and Cost-Effective,</gradient> Onchain Activity"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(90deg, #64A8F2 0%, #9945FF 49.61%, #EB54BC 100%);" />
                ),
              }}
            />
          }
          titleKey={statsContent.title}
          subtitleKey={statsContent.subtitle}
          stats={statsContent.stats}
          className={styles.StatsSection}
          statsClassName={styles.StatsContent}
          buttonsClassName={styles.StatsButtons}
        />

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-institutional-finance.callout-1.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%);" />
                ),
              }}
            />
          }
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={<></>}
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
              mediaComponent={<></>}
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
              mediaComponent={<></>}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default InstitutionalFinance;
