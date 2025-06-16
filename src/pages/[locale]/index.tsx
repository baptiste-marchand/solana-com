import Layout from "@/components/solutions/layout";
import { useTranslation } from "next-i18next";
import HTMLHead from "@/components/HTMLHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLocales } from "@/i18n/routing";

import YHero from "@/components/home/YHero";
import YDeveloperResources from "@/components/solutions/YDeveloperResources";
// import { AnimatedText, GradientText } from "@/components/shared/Text";
import { Carousel, Card } from "@/components/home/YCardsSlider";
//yaimport YCTA from "@/components/home/YCTA";

import styles from "./HomePage.module.scss";
import JoinCommunitySlider from "@/components/home/CommunitySlider";
import SolutionsGrid from "@/components/home/SolutionsGrid";

export default function Home() {
  const { t } = useTranslation();

  // const statsContent = t("home.stats", {
  //   returnObjects: true,
  // });

  // const joinCommunityLinks = [
  //   {
  //     text: t("home.join-community.links.x"),
  //     url: "https://x.com/solana",
  //   },
  //   {
  //     text: t("home.join-community.links.youtube"),
  //     url: "https://www.youtube.com/channel/UC9AdQPUe4BdVJ8M9X7wxHUA",
  //   },
  //   {
  //     text: t("home.join-community.links.linkedin"),
  //     url: "https://www.linkedin.com/company/solana-foundation/",
  //   },
  //   {
  //     text: t("home.join-community.links.community-groups"),
  //     url: "/community",
  //   },
  // ];

  const cardsData = [
    {
      title: t("home.new.cards.stablecoins.title"),
      text1: t("home.new.cards.stablecoins.text-1"),
      text2: t("home.new.cards.stablecoins.text-2"),
      src: "/src/img/home/usdg.png",
      url: "https://jumpcrypto.com/firedancer/",
    },
    {
      title: t("home.new.cards.apex.title"),
      text1: t("home.new.cards.apex.text-1"),
      text2: t("home.new.cards.apex.text-2"),
      src: "/src/img/home/apex.png",
      url: "https://lu.ma/apex-cape-town",
    },
    {
      title: t("home.new.cards.developers.title"),
      text1: t("home.new.cards.developers.text-1"),
      text2: t("home.new.cards.developers.text-2"),
      src: "/src/img/home/devreport.png",
      url: "https://www.developerreport.com/developer-report",
    },
    {
      title: t("home.new.cards.tokenized-assets.title"),
      text1: t("home.new.cards.tokenized-assets.text-1"),
      text2: t("home.new.cards.tokenized-assets.text-2"),
      src: "/src/img/home/franklin.png",
      url: "https://www.theblock.co/post/340432/franklin-templeton-extends-fobxx-fund-to-solana",
    },
    {
      title: t("home.new.cards.firedancer.title"),
      text1: t("home.new.cards.firedancer.text-1"),
      text2: t("home.new.cards.firedancer.text-2"),
      src: "/src/img/home/new-firedancer.svg",
      url: "https://jumpcrypto.com/firedancer/",
    },
    {
      title: t("home.new.cards.blinks.title"),
      text1: t("home.new.cards.blinks.text-1"),
      text2: t("home.new.cards.blinks.text-2"),
      src: "/src/img/home/new-blinks.png",
      url: "https://solana.com/solutions/actions",
    },
  ];

  const cards = cardsData.map((card) => <Card key={card.src} card={card} />);

  return (
    <Layout>
      <HTMLHead
        title={t("home.meta.title")}
        description={t("home.meta.description")}
      />
      <div id="home-page" className={styles.PageWrapper}>
        <YHero />

        <SolutionsGrid />

        <Carousel titleKey="home.new.title" items={cards} />

        <YDeveloperResources
          id="developer-resources"
          title={t("home.developer-resources.title")}
          subtitle={t("home.developer-resources.subtitle")}
          primaryButtonText={t("home.developer-resources.btn")}
          primaryButtonUrl="/docs/intro/quick-start"
          secButtonText="Learn"
          secButtonUrl="/developers"
        />

        <JoinCommunitySlider />

        {/* <YCTA /> */}
      </div>
    </Layout>
  );
}

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
