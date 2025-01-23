import { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

import { AnimatedText } from "@/components/shared/Text";
import { MotionSlideIn } from "@/components/shared/Motions";
import Button from "./Button";

import styles from "./SuccessStories.module.scss";
import styled from "styled-components";

interface StoryCardProps {
  logo: string;
  logoAlt: string;
  mobileImage: string;
  desktopImage: string;
  imageAlt: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
  logoClassName?: string;
  mainImageClassName?: string;
}

export const StoryCard = ({
  logo,
  logoAlt,
  mobileImage,
  desktopImage,
  imageAlt,
  text,
  buttonText,
  buttonUrl,
  className,
  logoClassName,
  mainImageClassName,
}: StoryCardProps) => {
  return (
    <div className={classNames(styles.StoryCard, className)}>
      <div className={classNames(styles.LogoWrapper, logoClassName)}>
        <MotionSlideIn>
          <Image
            src={logo}
            alt={logoAlt}
            width={100}
            height={50}
            className={classNames(styles.LogoImage)}
          />
        </MotionSlideIn>
      </div>

      <div className={classNames(styles.MainImageWrapper, mainImageClassName)}>
        <MotionSlideIn>
          {mobileImage && (
            <Image
              src={mobileImage}
              alt={imageAlt}
              width={465}
              height={465}
              className="d-lg-none"
            />
          )}

          <Image
            src={desktopImage}
            alt={imageAlt}
            width={465}
            height={465}
            className={mobileImage ? "d-none d-lg-block" : styles.MainImage}
          />
        </MotionSlideIn>
      </div>

      <AnimatedText element="p" as="paragraph" className={styles.Text}>
        {text}
      </AnimatedText>

      <MotionSlideIn>
        <Button text={buttonText} url={buttonUrl} target="_blank" />
      </MotionSlideIn>
    </div>
  );
};

interface SuccessStoriesProps {
  title: string;
  cards: ReactNode[];
  backgroundTheme?: "grey" | "black";
  className?: string;
  cardsClassName?: string;
  id?: string;
}

export const SuccessStoryCard = ({ ...props }) => {
  const StoryCard = styled.div`
    background: #2c2c36;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 !important;

    strong {
      color: var(--white);
    }

    &:hover {
      transform: translateY(-4px);
    }

    a {
      font-size: 15px;
      line-height: 1.32;
    }

    .card-image-wrapper {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card-title {
      font-size: 1.5rem;
      line-height: 1.4;
      margin-bottom: 0.75rem;
      font-weight: 600;
      width: 100%;
      max-width: 400px;
    }

    .card-description {
      color: var(--grey-250);
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      width: 100%;
      max-width: 450px;
    }

    @media (max-width: 768px) {
      .card-title,
      .card-description {
        max-width: 100%;
      }
    }

    .card-metrics {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
      margin-top: auto;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(160, 160, 160, 0.2);
    }

    .metric {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 0.25rem;
      width: 100%;
      max-width: 25%;
    }

    @media (max-width: 600px) {
      .metric {
        max-width: 33.33%;
      }
    }

    .metric-value {
      color: var(--whitw);
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      line-height: 1;
    }

    .metric-label {
      color: var(--grey-250);
      font-size: 0.875rem;
      margin: 0;
      line-height: 1;
    }

    .read-more-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    .read-more {
      color: #8b5cf6;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      margin-top: auto;
    }

    .read-more::after {
      content: "→";
      margin-left: 0.5rem;
    }
  `;

  return (
    <StoryCard {...props} data-slot="success-story-card">
      <div className="card-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=3540&auto=format&fit=crop"
          alt="Card image"
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">
          How PhotoFinish Live Leveraged Solana to Drive Sales by 2x
        </h2>
        <p className="card-description">
          Photo Finish™ LIVE is a horse racing game that showcases the economic
          and player appeal of web3 gaming via real-time racing and creative
          in-game economies.
        </p>
        <div className="card-metrics">
          <div className="metric">
            <p className="metric-value">$25m</p>
            <span className="metric-label">Races</span>
          </div>
          <div className="metric">
            <p className="metric-value">$25m</p>
            <span className="metric-label">Prizes</span>
          </div>
          <div className="metric">
            <p className="metric-value">$25m</p>
            <span className="metric-label">Revenue</span>
          </div>
        </div>
        <div className="read-more-wrapper">
          <a href="#" className="read-more">
            READ MORE
          </a>
        </div>
      </div>
    </StoryCard>
  );
};

const SuccessStoriesGrid = ({}) => {
  const StoryCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 64px;

    &:has(> :last-child:nth-child(2n + 1)):has(> :nth-child(3))
      [data-slot="success-story-card"]:first-child {
      grid-column: 1 / -1 !important;
      flex-direction: row;

      .card-image-wrapper {
        width: 50%;
        flex-shrink: 0;
        height: 100%; /* Make wrapper full height */
      }
    }

    @media (max-width: 768px) {
      & {
        grid-template-columns: 1fr;
        .card-image-wrapper {
          width: 100%;
          height: auto;
          .card-image {
            position: relative;
            max-height: 300px;
          }
        }
      }

      &:has(> :last-child:nth-child(2n + 1)):has(> :nth-child(3))
        [data-slot="success-story-card"]:first-child {
        grid-column: auto;
        flex-direction: column;
      }

      &:has(> :last-child:nth-child(2n + 1)):has(> :nth-child(3))
        [data-slot="success-story-card"]:first-child
        .card-image-wrapper {
        width: 100%;
        height: auto;
      }
    }
  `;

  return (
    <StoryCardWrapper>
      {SuccessStoryCard({})}
      {SuccessStoryCard({})}
      {SuccessStoryCard({})}
    </StoryCardWrapper>
  );
};

const SuccessStories = ({
  title,
  // cards,
  backgroundTheme = "grey",
  className,
  // cardsClassName,
  id,
}: SuccessStoriesProps) => {
  return (
    <section
      className={classNames(styles.SuccessStoriesGrid, className)}
      data-theme={backgroundTheme}
      id={id || "success-stories"}
    >
      <div className={classNames(styles.Container, "page-width")}>
        <AnimatedText element="h2" as="heading" className={styles.Title}>
          {title}
        </AnimatedText>

        <SuccessStoriesGrid />
      </div>
    </section>
  );
};

export default SuccessStories;
