import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import {
  useTransactionStats,
  PERF_UPDATE_SEC,
  SAMPLE_HISTORY_HOURS,
} from "@/hooks/useTransactionStats";

import CreativeImg from "../../../public/src/img/home/solutions/creative.png";
import FinanceImg from "../../../public/src/img/home/solutions/finance.png";
import PaymentsImg from "../../../public/src/img/home/solutions/payments.png";
import DeFiImg from "../../../public/src/img/home/solutions/defi.png";
import GamingImg from "../../../public/src/img/home/solutions/gaming.png";
import LoyaltyImg from "../../../public/src/img/home/solutions/loyalty.png";
import DepinImg from "../../../public/src/img/home/solutions/depin.png";
import Image from "next/image";

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;
  gap: 0.25rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--green);
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
  position: relative;
  overflow: visible;
  border: none !important;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }

  > * {
    z-index: 2;
    position: relative;
  }

  .bg-shape {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 300px;
    border-radius: 999px;
    background: #fff;
    filter: blur(35px);
    z-index: 1;
    opacity: 0.05;
    overflow: visible;
    border: none !important;
  }
`;

const BentoCardStyle = styled.a`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0rem;
  background: #ffffff0f;
  backdrop-filter: none;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: none !important;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    padding: 1.5rem 1.5rem 0;
    flex-direction: column;
    align-items: flex-start;

    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto;
    }
  }

  .inner {
    width: 100%;
    padding: 0;
    max-width: 100%;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    color: var(--white);

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: var(--cadet-grey);
    max-width: 500px;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }
  }

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto;
    }
  }

  &.large {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem 0;

    @media (max-width: 768px) {
      grid-column: span 1;
      padding: 1.5rem 1.5rem 0;
    }

    .inner {
      padding: 0;
      width: 100%;
    }

    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0.75rem 1rem 0;
      margin-top: auto;

      &.full-height {
        padding-bottom: 0;
        margin-bottom: -0.25rem;
      }
    }

    img {
      width: auto;
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  &.depin-card {
    .image-container {
      display: flex;
      align-items: flex-end;

      @media (max-width: 768px) {
        height: auto;
      }
    }
  }
`;

const BentoCard = ({
  title,
  description,
  className = "",
  image,
  imageStyle = {},
  href = "#",
}) => {
  const isLarge = className?.includes("large");

  return (
    <BentoCardStyle href={href} className={className}>
      <div className="inner">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {image && (
        <div
          className={`image-container ${isLarge ? "large-image" : ""} ${imageStyle.fullHeight ? "full-height" : ""}`}
        >
          <Image
            style={{
              objectFit: "contain",
              maxWidth: isLarge ? "100%" : "180px",
              ...imageStyle,
            }}
            src={image}
            alt={title}
            width={isLarge ? 520 : 180}
            height={isLarge ? 260 : 180}
          />
        </div>
      )}
    </BentoCardStyle>
  );
};

const BentoStat = ({ title, value, color }) => {
  const StatValueStyle = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-grow: 1;
    flex-shrink: 0;
  `;

  const StatDotStyle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background-color: var(--stat-color, #ff8c00);
    flex-shrink: 0;
    margin-top: 0.25rem;
  `;

  const StatInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  `;

  const StatInfoP = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1;
    color: var(--cadet-grey);
  `;

  const StatValueSpan = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
  `;
  return (
    <StatValueStyle>
      <StatDotStyle
        style={{
          "--stat-color": color || "#ff8c00",
        }}
      />
      <StatInfoStyle>
        <StatValueSpan>{value}</StatValueSpan>
        <StatInfoP>{title}</StatInfoP>
      </StatInfoStyle>
    </StatValueStyle>
  );
};

const BentoStatGridStyle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 2rem;

  > p {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.4;
    color: var(--cadet-grey);
    max-width: 250px;
  }

  // Hide mobile stats container on desktop
  .stats-container {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    > p {
      text-align: center;
      margin-bottom: 2rem;
    }

    // Hide desktop stats on mobile
    > :not(p):not(.stats-container) {
      display: none;
    }

    // Show and style mobile stats
    .stats-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      width: 100%;
      padding: 0 1rem;
    }
  }
`;

const BentoStatGrid = () => {
  const { avgTps, availableStats } = useTransactionStats({
    visible: true,
    performanceUpdateSeconds: PERF_UPDATE_SEC,
    sampleHistoryHours: SAMPLE_HISTORY_HOURS,
  });

  return (
    <BentoStatGridStyle>
      <p>Businesses choose Solana for high-speed, low-cost transactions.</p>
      {/* Desktop stats */}
      <BentoStat
        color="#9945FF"
        title="Near Zero Transaction Costs"
        value="$0.001"
      />
      <BentoStat color="#19FB9B" title="Avg Transaction Time" value="400ms" />
      <BentoStat
        color="#43B4CA"
        title="Avg TPS"
        value={availableStats ? avgTps.toLocaleString() : "..."}
      />
      <BentoStat color="#5791FF" title="Users" value="778M" />

      {/* Mobile stats in 2 columns */}
      <div className="stats-container">
        <BentoStat
          color="#9945FF"
          title="Near Zero Transaction Costs"
          value="$0.001"
        />
        <BentoStat color="#19FB9B" title="Avg Transaction Time" value="400ms" />
        <BentoStat
          color="#43B4CA"
          title="Avg TPS"
          value={availableStats ? avgTps.toLocaleString() : "..."}
        />
        <BentoStat color="#5791FF" title="Users" value="778M" />
      </div>
    </BentoStatGridStyle>
  );
};

const StyledSection = styled.section`
  border-left: none !important;
  border-right: none !important;

  * {
    border-left: none !important;
    border-right: none !important;
  }
`;

const SolutionsGrid = () => {
  return (
    <StyledSection>
      <SectionContainer
        showXBorder={false}
        style={{
          "--padding-bottom": "1rem",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <TitleBlock>
          <SectionSubtitle>Solutions</SectionSubtitle>
          <SectionTitle>Ready for Business</SectionTitle>
          {/* <SectionDescription>
            Power global finance, trade real-world assets, enable instant
            borderless payments, and more.
          </SectionDescription> */}
        </TitleBlock>
        <BentoGrid>
          <BentoCard
            className="large"
            title="Payments"
            description="Enjoy lightning-fast payments, with near-zero fees and no intermediaries."
            image={PaymentsImg}
            imageStyle={{
              maxWidth: "100%",
              marginTop: "auto",
              fullHeight: true,
            }}
            href="/solutions/payments"
          />
          <BentoCard
            className="large"
            title="DeFi"
            description="Unmatched capital efficiency on a global scale."
            image={DeFiImg}
            imageStyle={{
              maxWidth: "100%",
              marginTop: "auto",
              fullHeight: true,
            }}
            href="/solutions/defi"
          />
          <BentoCard
            className="large"
            title="Games"
            description="Turn your games into economies."
            image={GamingImg}
            imageStyle={{
              maxWidth: "70%",
              marginBottom: "1rem",
            }}
            href="/solutions/gaming"
          />
          <BentoCard
            title="Creators"
            description="Turn your audience into an engaged community."
            image={CreativeImg}
            imageStyle={{
              maxWidth: "180px",
            }}
            href="/solutions/creative"
          />
          <BentoCard
            title="Institutional Finance"
            description="Increase market liquidity and access with tokenized assets."
            image={FinanceImg}
            imageStyle={{
              maxWidth: "180px",
            }}
            href="/solutions/institutional-finance"
          />
          <BentoCard
            title="Loyalty"
            description="Turn every user interaction into a connection."
            image={LoyaltyImg}
            imageStyle={{
              maxWidth: "180px",
            }}
            href="/solutions/loyalty"
          />
          <BentoCard
            title="DePIN"
            description="Build Decentralized Physical Infrastructure."
            image={DepinImg}
            imageStyle={{
              maxWidth: "180px",
              marginTop: "0",
            }}
            className="depin-card"
            href="/solutions/depin"
          />
          <div className="bg-shape"></div>
        </BentoGrid>
        <BentoStatGrid />
      </SectionContainer>
    </StyledSection>
  );
};

export default SolutionsGrid;
