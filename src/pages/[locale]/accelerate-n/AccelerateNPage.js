import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./accelerate-n.module.scss";

// Import images
import MapSVG from "../../../../assets/accelerate/map.svg";
import LibertyImage from "../../../../assets/accelerate/liberty.png";
import CapitolImage from "../../../../assets/accelerate/capitol.png";
import FacesImage from "../../../../assets/accelerate/faces.png";
import PeopleImage from "../../../../assets/accelerate/people.png";
import CompaniesImage from "../../../../assets/accelerate/companies.png";
import GovtImage from "../../../../assets/accelerate/govt.png";
import ThumbnailImage from "../../../../assets/accelerate/thumbnail.png";
import SponsorsImage from "../../../../assets/accelerate/sponsors.png";
import LibertyDotImage from "../../../../assets/accelerate/liberty-dot.png";
import FreeTicketImage from "../../../../assets/accelerate/free.png";
import Speaker1 from "../../../../assets/accelerate/speakers/01.png";
import Speaker2 from "../../../../assets/accelerate/speakers/02.png";
import Speaker3 from "../../../../assets/accelerate/speakers/03.png";
import Speaker4 from "../../../../assets/accelerate/speakers/04.png";
import Speaker5 from "../../../../assets/accelerate/speakers/05.png";
import Speaker6 from "../../../../assets/accelerate/speakers/06.png";
import Speaker7 from "../../../../assets/accelerate/speakers/07.png";
import Speaker8 from "../../../../assets/accelerate/speakers/08.png";

// Counter animation hook
const useCounterAnimation = (end, duration = 2000, startDelay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    // Check if on mobile
    const isMobile = window.innerWidth < 768;

    // If on mobile, just set to the end value without animation
    if (isMobile) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          setTimeout(() => {
            let startTime;
            const animateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentCount = Math.floor(progress * end);
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              } else {
                setCount(end);
              }
            };
            requestAnimationFrame(animateCount);
          }, startDelay);
        }
      },
      { threshold: 0.1 },
    );

    // Store ref.current in a variable for cleanup
    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, startDelay, hasStarted]);

  return [count, countRef];
};

const FAQs = [
  {
    question: "Which event do I attend?",
    answer:
      "Ship or Die is for everyone, Scale or Die is exclusively for developers.",
  },
  {
    question: "Are travel and accommodation part of my ticket?",
    answer:
      "Attendees are responsible for making their own travel and accommodation — but there are plenty of hotels in New York! The Solana Foundation has worked with multiple hotels in New York to offer discounted rates on hotels during Ship or Die.",
  },
  {
    question: "I can no longer attend. Can I get a refund?",
    answer:
      'We&apos;re sorry to hear that! Tickets are non-refundable, but are transferable. Please email <a href="mailto:accelerate@solana.org" className={styles.emailLink}>accelerate@solana.org</a> to transfer your ticket. For more information on how to book, check out the travel section.',
  },
  {
    question: "Is there parking onsite?",
    answer: "No, we suggest using Rideshare or Taxis.",
  },
  {
    question: "Additional Questions/Enquires?",
    answer:
      'Please email <a href="mailto:accelerate@solana.org" className={styles.emailLink}>accelerate@solana.org</a> | <a href="mailto:press@solana.org" className={styles.emailLink}>press@solana.org</a>',
  },
];

export default function AccelerateNPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideoLightbox, setShowVideoLightbox] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [showFreeTicketModal, setShowFreeTicketModal] = useState(false);

  // Counter animations
  const [peopleCount, peopleCountRef] = useCounterAnimation(3000, 2000, 0);
  const [companiesCount, companiesCountRef] = useCounterAnimation(
    250,
    2000,
    200,
  );
  const [policyCount, policyCountRef] = useCounterAnimation(5, 2000, 400);
  const [touristsCount, touristsCountRef] = useCounterAnimation(0, 1000, 600);

  // Handle video lightbox
  const openVideoLightbox = () => {
    setShowVideoLightbox(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeVideoLightbox = () => {
    setShowVideoLightbox(false);
    // Re-enable scrolling
    document.body.style.overflow = "";
  };

  // Close lightbox and free ticket modal on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        if (showVideoLightbox) {
          closeVideoLightbox();
        }
        if (showFreeTicketModal) {
          closeFreeTicketModal();
        }
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [showVideoLightbox, showFreeTicketModal]);

  // Show free ticket modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFreeTicketModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Close free ticket modal
  const closeFreeTicketModal = () => {
    setShowFreeTicketModal(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // For sticky bottom bar (mobile only) - show as soon as user scrolls
      const isScrolled = scrollPosition > 10; // Just need minimal scroll to trigger

      if (isScrolled !== stickyVisible) {
        setStickyVisible(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page loads with scroll
    handleScroll();

    // Add a class to the body to hide global header
    document.body.classList.add("accelerate-n-page");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("accelerate-n-page");
    };
  }, [stickyVisible]);

  // These could be moved to translation files in a real implementation
  const heroTitle = "A gathering of America&apos;s next builders.";
  const heroDescription =
    "Accelerate is a high-conviction summit for people building the next chapter of America. From AI to crypto, defense to finance—if you&apos;re not in the room, you&apos;re already behind.";

  // Define logo paths directly
  const accLogoPath = "/assets/accelerate/acc-logo.svg";

  // YouTube video ID
  const youtubeVideoId = "_pF34DUWYSY";

  return (
    <>
      <Head>
        <title>Accelerate - {heroTitle}</title>
        <meta name="description" content={heroDescription} />
        <style>
          {`
            /* Hide global header via direct CSS */
            header.global-header, 
            header.position-sticky, 
            header[class*="Header_header"] {
              display: none !important;
            }

            /* ABC Diatype font-face declaration */
            @font-face {
              font-family: 'ABC Diatype';
              src: url('/fonts/ABCDiatype-Regular.woff2') format('woff2'),
                   url('/fonts/ABCDiatype-Regular.woff') format('woff');
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }
            
            @font-face {
              font-family: 'ABC Diatype';
              src: url('/fonts/ABCDiatype-Medium.woff2') format('woff2'),
                   url('/fonts/ABCDiatype-Medium.woff') format('woff');
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </Head>

      <div className={styles.container}>
        {/* Custom header for this page */}
        <header
          className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        >
          <div className={styles.logo}>
            <img
              src={accLogoPath}
              alt="Accelerate Logo"
              className={styles.logoImg}
            />
          </div>
          <nav className={styles.nav}>
            <Link href="#sponsors">SPONSORS</Link>
            <Link href="#speakers">SPEAKERS</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="/accelerate-n/tickets" className={styles.ticketsButton}>
              GET TICKETS
            </Link>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.mapBackground}>
            <div className={styles.mapSvgWrapper}>
              <Image
                src={MapSVG}
                alt="US Map"
                fill
                style={{ objectFit: "cover" }}
                className={styles.mapSvg}
                priority
              />
            </div>
          </div>

          <div className={styles.libertyImage}>
            <Image
              src={LibertyImage}
              alt="Statue of Liberty"
              width={400}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          <div className={styles.capitolImage}>
            <Image
              src={CapitolImage}
              alt="Capitol Building"
              width={400}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <img
                src={accLogoPath}
                alt="Accelerate Logo"
                className={styles.heroLogoImg}
              />
            </div>

            <h1>
              A gathering
              <br /> of America&apos;s
              <br /> next builders.
            </h1>
            <p className={styles.heroDescription}>
              Accelerate is a high-conviction summit for people building the
              next chapter of America. From AI to crypto, defense to finance—if
              you&apos;re not in the room, you&apos;re already behind.
            </p>
            <Link
              href="/accelerate-n/tickets"
              className={styles.getTicketsButton}
            >
              Get Tickets →
            </Link>

            <div className={styles.eventInfo}>
              <div className={styles.infoItem}>
                <h3>WHEN</h3>
                <p>May 19-23</p>
              </div>
              <div className={styles.infoItem}>
                <h3>WHERE</h3>
                <p>NYC</p>
              </div>
              <div className={styles.infoItem}>
                <h3>JOIN</h3>
                <div className={styles.joinInfo}>
                  <p>3,000+</p>
                  <div className={styles.facesImageContainer}>
                    <Image
                      src={FacesImage}
                      alt="Attendee faces"
                      className={styles.facesImage}
                      width={80}
                      height={25}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who&apos;s attending section */}
        <section className={styles.attendingSection}>
          <div className={styles.attendingContent}>
            <h2 className={styles.attendingTitle}>
              <span className={styles.slashes}>{"//"}</span>
              {" Who's attending?"}
            </h2>

            <div className={styles.attendingCards}>
              <div
                className={styles.attendingCard}
                style={{ padding: "2rem", backgroundColor: "#1F2941" }}
              >
                <h3
                  className={styles.cardNumber}
                  ref={peopleCountRef}
                  style={{ textAlign: "left" }}
                >
                  {peopleCount}+
                </h3>
                <p
                  className={styles.cardDescription}
                  style={{ textAlign: "left" }}
                >
                  High Energy Top 1% Builders in USA
                </p>
                <img
                  src={PeopleImage.src}
                  alt="People attending"
                  width="100"
                  height="32"
                  style={{
                    maxHeight: "32px",
                    display: "block",
                    padding: 0,
                    margin: 0,
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </div>

              <div
                className={styles.attendingCard}
                style={{ padding: "2rem", backgroundColor: "#1F2941" }}
              >
                <h3
                  className={styles.cardNumber}
                  ref={companiesCountRef}
                  style={{ textAlign: "left" }}
                >
                  {companiesCount}+
                </h3>
                <p
                  className={styles.cardDescription}
                  style={{ textAlign: "left" }}
                >
                  Companies that are hiring &amp; demoing
                </p>
                <img
                  src={CompaniesImage.src}
                  alt="Companies attending"
                  width="100"
                  height="32"
                  style={{
                    maxHeight: "32px",
                    display: "block",
                    padding: 0,
                    margin: 0,
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </div>

              <div
                className={styles.attendingCard}
                style={{ padding: "2rem", backgroundColor: "#1F2941" }}
              >
                <h3
                  className={styles.cardNumber}
                  ref={policyCountRef}
                  style={{ textAlign: "left" }}
                >
                  {policyCount}%
                </h3>
                <p
                  className={styles.cardDescription}
                  style={{ textAlign: "left" }}
                >
                  Policy makers from Capitol Hill
                </p>
                <img
                  src={GovtImage.src}
                  alt="Government representatives"
                  width="48"
                  height="32"
                  style={{
                    maxHeight: "32px",
                    display: "block",
                    padding: 0,
                    margin: 0,
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </div>

              <div
                className={styles.attendingCard}
                style={{ padding: "2rem", backgroundColor: "#1F2941" }}
              >
                <h3
                  className={styles.cardNumber}
                  ref={touristsCountRef}
                  style={{ textAlign: "left" }}
                >
                  {touristsCount}
                </h3>
                <p
                  className={styles.cardDescription}
                  style={{ textAlign: "left" }}
                >
                  Tourists and lurkers and people who don&apos;t ship
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Promo Section */}
        <section className={styles.videoSection}>
          <div className={styles.videoContent}>
            <div className={styles.videoThumbnailContainer}>
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={ThumbnailImage}
                  alt="Accelerate Event Video Thumbnail"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className={styles.thumbnailImage}
                />
                <div className={styles.playButton} onClick={openVideoLightbox}>
                  <div className={styles.playIcon}></div>
                </div>
              </div>
            </div>
            <div className={styles.videoTextContainer}>
              <h2 className={styles.videoTitle}>
                This isn&apos;t for everyone
                <span className={styles.asterisk}>*</span>
              </h2>
              <div className={styles.videoDescription}>
                <p>You know how this works.</p>
                <p>
                  The deals, the hires, the sparks—they don&apos;t happen on
                  Zoom.
                </p>
                <p>
                  They happen in real rooms, with real people, colliding at full
                  speed.
                </p>
                <p>
                  <strong>Accelerate</strong> is that room.
                </p>
                <p>
                  This isn&apos;t your usual panel-driven fluff fest. It&apos;s
                  raw. Fast. Built for people who don&apos;t have time to
                  pretend they care about panels.
                </p>
                <p>
                  It&apos;s where founders meet investors, where builders meet
                  policy-makers, where shit gets done.
                </p>
              </div>
              <Link
                href="/accelerate-n/tickets"
                className={styles.videoTicketsButton}
              >
                {/* Get Tickets button */}
                Get Tickets →
              </Link>
            </div>
          </div>
        </section>

        {/* Video Lightbox */}
        {showVideoLightbox && (
          <div className={styles.videoLightbox} onClick={closeVideoLightbox}>
            <div
              className={styles.videoLightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeLightboxButton}
                onClick={closeVideoLightbox}
              >
                ×
              </button>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                  title="Accelerate Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Free Ticket Modal */}
        {showFreeTicketModal && (
          <div
            className={styles.freeTicketModal}
            onClick={closeFreeTicketModal}
          >
            <div
              className={styles.freeTicketModalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalButton}
                onClick={closeFreeTicketModal}
              >
                ×
              </button>
              <div className={styles.freeTicketImageWrapper}>
                <div className={styles.freeTicketImageBackground}>
                  <Image
                    src={FreeTicketImage}
                    alt="Free Ticket"
                    width={500}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </div>
              <div className={styles.freeTicketText}>
                <h3 className={styles.freeTicketTitle}>FREE TICKET?</h3>
                <h2 className={styles.freeTicketHeadline}>
                  We&apos;re refunding random tickets daily
                </h2>
                <p className={styles.freeTicketDescription}>
                  You could attend Accelerate for free as we&apos;re refunding
                  random tickets every single day. To enter just purchase a
                  ticket
                </p>
                <Link
                  href="/accelerate-n/tickets"
                  className={styles.freeTicketButton}
                >
                  Get Tickets
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Full-width divider */}
        <div className={styles.divider}></div>

        {/* Speakers Section */}
        <section className={styles.speakersSection}>
          <div className={styles.speakersContent}>
            <div className={styles.speakersTitleRow}>
              <h2 className={styles.speakersTitle}>Operators only</h2>
              <Link href="/accelerate-n/tickets" className={styles.speakersCTA}>
                Get Tickets
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            <div className={styles.speakerGrid}>
              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker1}
                    alt="Luca Netz"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Luca Netz</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker2}
                    alt="Guy Hawkins"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Guy Hawkins</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker3}
                    alt="Ralph Edwards"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Ralph Edwards</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker4}
                    alt="Wade Warren"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Wade Warren</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker5}
                    alt="Brooklyn Simmons"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Brooklyn Simmons</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker6}
                    alt="Kathryn Murphy"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Kathryn Murphy</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker7}
                    alt="Albert Flores"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Albert Flores</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerImageWrapper}>
                  <Image
                    src={Speaker8}
                    alt="Cameron Williams"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.speakerImage}
                  />
                </div>
                <h3 className={styles.speakerName}>Cameron Williams</h3>
                <p className={styles.speakerRole}>CEO & Founder</p>
                <p className={styles.speakerCompany}>Pudgy Penguins</p>
                <a
                  href="https://twitter.com/username"
                  className={styles.speakerTwitter}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width divider */}
        <div className={styles.divider}></div>

        {/* Sponsors Section */}
        <section className={styles.sponsorsSection}>
          <div className={styles.sponsorsContent}>
            <div className={styles.sponsorsTitleRow}>
              <h2 className={styles.sponsorsTitle}>Skin in the Game</h2>
              <Link href="/accelerate-n/tickets" className={styles.sponsorsCTA}>
                Get Tickets
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            <div className={styles.sponsorsHR}></div>

            <div className={styles.sponsorsImageContainer}>
              <Image
                src={SponsorsImage}
                alt="Event Sponsors"
                width={1200}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection} id="faq">
          <h2 className={styles.faqTitle}>Frequently Asked</h2>

          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {FAQs.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    {faq.question}
                    <svg
                      className={styles.faqIcon}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* NYC CTA Section */}
        <div
          style={{
            padding: "0 2rem",
            width: "100%",
            backgroundColor: "#13151E",
          }}
        >
          <section className={styles.nycCtaSection}>
            <div className={styles.nycCtaContent}>
              <div className={styles.nycCtaTextContent}>
                <h2 className={styles.nycCtaTitle}>Come to NYC</h2>
                <p className={styles.nycCtaDescription}>
                  Accelerate is a high-conviction summit for people building the
                  next chapter of America.
                </p>
                <Link
                  href="/accelerate-n/tickets"
                  className={styles.nycCtaButton}
                >
                  Get Tickets
                </Link>
              </div>
              <div className={styles.nycCtaImageWrapper}>
                <Image
                  src={LibertyDotImage}
                  alt="Statue of Liberty pixel art"
                  className={styles.nycCtaImage}
                  width={900}
                  height={900}
                  priority
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerRow}>
              <div className={styles.footerLogo}>
                <img
                  src={accLogoPath}
                  alt="Accelerate Logo"
                  className={styles.footerLogoImg}
                  width="120"
                  height="30"
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
              <nav className={styles.footerNav}>
                <Link href="#sponsors">SPONSORS</Link>
                <Link href="#speakers">SPEAKERS</Link>
                <Link href="#faq">FAQ</Link>
              </nav>
              <p className={styles.copyright}>© Solana Foundation 2025</p>
            </div>
          </div>
        </footer>

        {/* Sticky Bottom Bar (Mobile Only) */}
        <div
          className={`${styles.stickyBottomBar} ${stickyVisible ? styles.visible : ""}`}
        >
          <Link
            href="/accelerate-n/tickets"
            className={styles.stickyBottomButton}
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </>
  );
}
