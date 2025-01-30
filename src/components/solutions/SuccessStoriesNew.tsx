import React from "react";
import styles from "./SuccessStoriesNew.module.scss";
import classNames from "classnames";
import { AnimatedText } from "@/components/shared/Text";
import styled from "styled-components";

interface Metric {
  value: string;
  label: string;
}

interface Card {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: Metric[];
  readMoreUrl: string;
  readMoreText: string;
}

interface SuccessStoriesProps {
  title: string;
  cards: Card[];
  backgroundTheme?: "grey" | "black";
  className?: string;
  id?: string;
}

export const SuccessStoryCard = ({
  title = "How PhotoFinish Live Leveraged Solana to Drive Sales by 2x",
  description = "Photo Finish™ LIVE is a horse racing game that showcases the economic and player appeal of web3 gaming via real-time racing and creative in-game economies.",
  image = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=3540&auto=format&fit=crop",
  imageAlt = "Card image",
  metrics = [
    { value: "$25m", label: "Races" },
    { value: "$25m", label: "Prizes" },
    { value: "$25m", label: "Revenue" },
  ],
  readMoreUrl = "#",
  readMoreText = "READ MORE",
}: StoryCardProps) => {
  const StoryCard = styled.a`
    background: #2c2c36;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 !important;
    text-decoration: none;
    cursor: pointer;

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
      color: #fff;
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
      color: #fff;
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
      pointer-events: none;
    }

    .read-more::after {
      content: "→";
      margin-left: 0.5rem;
    }

    &,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
    }
  `;

  return (
    <StoryCard
      href={readMoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-slot="success-story-card"
    >
      <div className="card-image-wrapper">
        <img src={image} alt={imageAlt} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-metrics">
          {metrics.map((metric, index) => (
            <div className="metric" key={index}>
              <p className="metric-value">{metric.value}</p>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="read-more-wrapper">
          <span className="read-more">{readMoreText}</span>
        </div>
      </div>
    </StoryCard>
  );
};

const SuccessStoriesGrid = ({ cards }: { cards: StoryCardProps[] }) => {
  const StoryCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 0;

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
      {cards.map((cardProps, index) => (
        <SuccessStoryCard key={index} {...cardProps} />
      ))}
    </StoryCardWrapper>
  );
};

const SuccessStories = ({
  title,
  cards,
  backgroundTheme = "grey",
  className,
  id,
}: SuccessStoriesProps) => {
  const Section = styled.section`
    padding: 64px 0 40px;
    background: ${backgroundTheme === "black"
      ? "var(--black)"
      : "var(--grey-500)"};
  `;

  return (
    <Section
      className={classNames(styles.SuccessStoriesGrid, className)}
      data-theme={backgroundTheme}
      id={id || "success-stories"}
    >
      <div className={classNames(styles.Container, "page-width")}>
        <AnimatedText element="h2" as="heading" className={styles.Title}>
          {title}
        </AnimatedText>
        <SuccessStoriesGrid cards={cards} />
      </div>
    </Section>
  );
};

export default SuccessStories;
