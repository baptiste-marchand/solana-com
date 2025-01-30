import React, { useState, useEffect, useCallback } from "react";
import styles from "./TokenHero.module.scss";
import Button from "@/components/solutions/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import images directly
import confidentialTransfers from "../../../assets/solutions/token-extensions/confidential-transfers.png";
import actionHooks from "../../../assets/solutions/token-extensions/action-hooks.png";
import transferFees from "../../../assets/solutions/token-extensions/transfer-fees.png";
import bgImage from "../../../assets/solutions/token-extensions/bg.png";

const TokenHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [confidentialTransfers, actionHooks, transferFees];

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image src={bgImage} alt="" fill className={styles.bgImage} priority />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Compliance-
            <br />
            In-A-Box
          </h1>
          <p className={styles.subtitle}>
            Regulatory compliance and enterprise customization with no security
            trade-offs.
          </p>
          <div className={styles.cta_group}>
            <Button text="Get Started" url="/get-started" />
            <a href="#resources" className={styles.cta_btn_secondary}>
              <span>
                Resources
                <ArrowUpRight size="14" />
              </span>
            </a>
          </div>
        </div>

        <div
          className={styles.imageWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.slider}>
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className={styles.slide}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={slide}
                  alt={`Token Hero Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.gradient} />
    </section>
  );
};

export default TokenHero;
