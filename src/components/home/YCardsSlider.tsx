import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";
// import { Trans } from "next-i18next";
import { useInView } from "react-intersection-observer";

import CaretIcon from "@/components/icons/Caret";
import { AnimatedText } from "@/components/shared/Text";
import type { JSX } from "react";
import styles from "./YCardsSlider.module.scss";

interface CarouselProps {
  titleKey: string;
  items: JSX.Element[];
  initialScroll?: number;
}

type CardT = {
  src: string;
  title: string;
  text1: string;
  text2: string;
  url: string;
};

export const Carousel = ({
  // titleKey,
  items,
  initialScroll = 0,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -304, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 304, behavior: "smooth" });
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={styles.card_slider}>
      <div className={styles.title_container}>
        <h3 className={styles.title_badge}>Updates</h3>
        <AnimatedText
          element="h2"
          as="heading"
          className={styles.title_inner_container}
        >
          <span className={styles.title}>What&apos;s new</span>
          <span
            className={styles.sub_title}
          >{`// Read the latest from the Solana ecosystem.`}</span>
        </AnimatedText>
      </div>

      <div className={styles.Carousel}>
        <div
          className={styles.CarouselContainer}
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={styles.Cards}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.2 * index,
                          ease: "easeOut",
                          once: true,
                        },
                      }
                    : {}
                }
                key={"card" + index}
                className={styles.CardWrapper}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.Arrows}>
          <button onClick={scrollLeft} disabled={!canScrollLeft}>
            <CaretIcon direction="left" />
          </button>
          <button onClick={scrollRight} disabled={!canScrollRight}>
            <CaretIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={classNames(isLoading ? styles.Loading : "", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt}
      {...rest}
    />
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: CardT;
  layout?: boolean;
}) => {
  return (
    <>
      <motion.a
        layoutId={layout ? `card-${card.title}` : undefined}
        className={styles.Card}
        href={card.url}
        target="_blank"
      >
        <div className={styles.CardContent}>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className={styles.CardTitle}
          >
            {card.title}
          </motion.p>
          <motion.p className={styles.CardText}>
            <span>{card.text1}</span>
            <span>{card.text2}</span>
          </motion.p>
        </div>
        <div className={styles.ArrowWrapper}>
          <CaretIcon color="black" />
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className={styles.CardImage}
        />
      </motion.a>
    </>
  );
};
