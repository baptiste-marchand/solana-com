import React from "react";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import * as Tabs from "@radix-ui/react-tabs";
import dynamic from "next/dynamic";

import { OpacityInText } from "@/components/shared/Text";
import { MotionSlideIn } from "@/components/shared/Motions";

import styles from "@/components/solutions/LottieHeroWithTabs.module.scss";

// Remove Lottie import and add DotLottiePlayer
const DotLottiePlayer = dynamic(
  () =>
    import("@dotlottie/player-component").then(() => {
      return function DotLottiePlayer() {
        return null;
      };
    }),
  { ssr: false },
);

interface LottieHeroWithTabsProps {
  tabs: {
    buttonTitle: string;
    content: {
      title: string;
      subtitle: string;
      lottieMobile: string; // Updated type to string for .lottie file path
      lottieDesktop: string; // Updated type to string for .lottie file path
    };
  }[];
  tabListAriaLabel: string;
  className?: string;
}

const LottieHeroWithTabs = ({
  tabs,
  tabListAriaLabel,
  className,
}: LottieHeroWithTabsProps) => {
  const [value, setValue] = useState("tab1");

  return (
    <>
      <Tabs.Root
        className={classNames(styles.TabsRoot, className)}
        defaultValue="tab1"
        value={value}
      >
        <Tabs.Content value="tab1">
          <div className={styles.GradientBgWrapper}>
            <Image
              src="/solutions/payments/payments-with-mobile-gradient.svg"
              className={classNames(styles.GradientBg, "d-lg-none")}
              priority
              fill
              alt="Gradient background"
            />
            <Image
              src="/solutions/payments/payments-with-desktop-gradient.svg"
              className={classNames(styles.GradientBg, "d-none d-lg-block")}
              priority
              fill
              alt="Gradient background"
            />
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <div className={styles.GradientBgWrapper}>
            <Image
              src="/solutions/payments/payments-without-mobile-gradient.svg"
              className={classNames(styles.GradientBg, "d-lg-none")}
              priority
              fill
              alt="Gradient background"
            />
            <Image
              src="/solutions/payments/payments-without-desktop-gradient.svg"
              className={classNames(styles.GradientBg, "d-none d-lg-block")}
              priority
              fill
              alt="Gradient background"
            />
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab1">
          <OpacityInText
            element="h1"
            as="heading"
            className={classNames(styles.Title)}
          >
            {tabs[0].content.title}
          </OpacityInText>

          <OpacityInText
            element="p"
            as="paragraph"
            className={classNames(styles.Subtitle)}
          >
            {tabs[0].content.subtitle}
          </OpacityInText>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <OpacityInText element="h1" className={classNames(styles.Title)}>
            {tabs[1].content.title}
          </OpacityInText>
          <OpacityInText
            element="p"
            as="paragraph"
            className={classNames(styles.Subtitle)}
          >
            {tabs[1].content.subtitle}
          </OpacityInText>
        </Tabs.Content>

        <MotionSlideIn>
          <Tabs.List className={styles.TabsList} aria-label={tabListAriaLabel}>
            <Tabs.Trigger
              className={styles.TabsTrigger}
              value="tab1"
              onClick={() => setValue("tab1")}
            >
              {tabs[0].buttonTitle}
            </Tabs.Trigger>
            <Tabs.Trigger
              className={styles.TabsTrigger}
              value="tab2"
              onClick={() => setValue("tab2")}
            >
              {tabs[1].buttonTitle}
            </Tabs.Trigger>
          </Tabs.List>
        </MotionSlideIn>

        <Tabs.Content
          className={`${styles.TabsContent} hero-tab-content`}
          value="tab1"
        >
          <MotionSlideIn>
            <div className={classNames(styles.LottieWrapper, "d-lg-none")}>
              <DotLottiePlayer />
              <dotlottie-player
                src={tabs[0].content.lottieMobile}
                autoplay
                loop
              />
            </div>
            <div
              className={classNames(styles.LottieWrapper, "d-none d-lg-block")}
            >
              <DotLottiePlayer />
              <dotlottie-player
                src={tabs[0].content.lottieDesktop}
                autoplay
                loop
              />
            </div>
          </MotionSlideIn>
        </Tabs.Content>

        <Tabs.Content
          className={`${styles.TabsContent} hero-tab-content`}
          value="tab2"
        >
          <MotionSlideIn>
            <div className={classNames(styles.LottieWrapper, "d-lg-none")}>
              <DotLottiePlayer />
              <dotlottie-player
                src={tabs[1].content.lottieMobile}
                autoplay
                loop
              />
            </div>
            <div
              className={classNames(styles.LottieWrapper, "d-none d-lg-block")}
            >
              <DotLottiePlayer />
              <dotlottie-player
                src={tabs[1].content.lottieDesktop}
                autoplay
                loop
              />
            </div>
          </MotionSlideIn>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default LottieHeroWithTabs;
