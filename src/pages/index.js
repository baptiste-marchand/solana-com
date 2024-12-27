import Layout from "@/components/solutions/layout";
import { Trans, useTranslation } from "next-i18next";
import HTMLHead from "@/components/HTMLHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import YHero from "@/components/home/YHero";
import Companies from "@/components/home/Companies";
import DeveloperResources from "@/components/solutions/DeveloperResources";
import { AnimatedText, GradientText } from "@/components/shared/Text";
import { Carousel, Card } from "@/components/home/CardsSlider";

import styles from "./HomePage.module.scss";

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
      title: t("home.new.cards.firedancer.title"),
      text1: t("home.new.cards.firedancer.text-1"),
      text2: t("home.new.cards.firedancer.text-2"),
      src: "/src/img/home/new-firedancer.svg",
      url: "https://jumpcrypto.com/firedancer/",
    },
    {
      title: t("home.new.cards.recap.title"),
      text1: t("home.new.cards.recap.text-1"),
      text2: t("home.new.cards.recap.text-2"),
      src: "/src/img/home/new-recap.svg",
      url: "https://solana.com/news/state-of-solana-breakpoint-2024",
    },
    {
      title: t("home.new.cards.ticket-sale.title"),
      text1: t("home.new.cards.ticket-sale.text-1"),
      src: "/src/img/home/new-ticket-sale.png",
      url: "/breakpoint/tickets",
    },
    {
      title: <Trans i18nKey="home.new.cards.hacker-house.title" />,
      text1: t("home.new.cards.hacker-house.text-1"),
      src: "/src/img/home/new-hacker-house.svg",
      url: "https://lu.ma/hong-kong-hh-2024",
    },
    {
      title: t("home.new.cards.blinks.title"),
      text1: t("home.new.cards.blinks.text-1"),
      text2: t("home.new.cards.blinks.text-2"),
      src: "/src/img/home/new-blinks.png",
      url: "https://solana.com/solutions/actions",
    },
  ];

  const cards = cardsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <Layout>
      <HTMLHead
        title={t("home.meta.title")}
        description={t("home.meta.description")}
      />
      <div id="home-page" className={styles.PageWrapper}>
        <YHero />

        <Companies />

        <Carousel titleKey="home.new.title" items={cards} />

        <DeveloperResources
          title={t("home.developer-resources.title")}
          subtitle={t("home.developer-resources.subtitle")}
          buttonText={t("home.developer-resources.btn")}
          buttonUrl="/docs/intro/quick-start"
          image="/src/img/home/developer-resources.svg"
          className={styles.DeveloperResources}
          imageClassName={styles.DeveloperResourcesImage}
        />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
      // revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
