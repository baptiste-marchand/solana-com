import styled from "styled-components";
import SectionContainer from "./SectionContainer";

import WalletsImg from "../../../assets/home/solutions/wallets.png";
import CreativeImg from "../../../assets/home/solutions/creative.png";
import FinanceImg from "../../../assets/home/solutions/finance.png";
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
`;

const SectionSubtitle = styled.h3`
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--green);
`;

const SectionDescription = styled.p`
  color: var(--cadet-grey);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1;
  max-width: none;
  margin: 0 auto;
  max-width: 700px;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;

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
  }
`;

const BentoCardStyle = styled.div`
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0rem;
  background: #ffffff0f;
  backdrop-filter: blur(35px);
  border-radius: 0.75rem;
  overflow: hidden;

  .inner {
    width: 100%;
    padding: 2rem 1.5rem;
    max-width: calc(100% - 250px);
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    color: var(--white);
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: var(--cadet-grey);
    max-width: 500px;
  }

  &.large {
    grid-column: span 2;
    aspect-ratio: 16/9;
    align-items: flex-start;

    .inner {
      max-width: 100%;
    }
  }
`;

const BentoCard = ({ title, description, className = "", children }) => {
  return (
    <BentoCardStyle className={className}>
      <div className="inner">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {children && <div>{children}</div>}
    </BentoCardStyle>
  );
};

const BentoStat = ({ title, value, color }) => {
  const StatValueStyle = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-grow: 1;
    flex-shrink-0;
  `;

  const StatDotStyle = styled.div`
    width: 10px;
    height: 10px;
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
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1;
    color: var(--cadet-grey);
  `;

  const StatValueSpan = styled.span`
    font-size: 2rem;
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

const BentoStatGrid = () => {
  const BentoStatGridStyle = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;

    > p {
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1;
      color: var(--cadet-grey);
      max-width: 250px;
    }
  `;
  return (
    <BentoStatGridStyle>
      <p>Business choose Solana for the high speed low-cost transactions</p>
      <BentoStat
        color="#9945FF"
        title="Near Zero Transaction Costs"
        value="$0.001"
      />
      <BentoStat color="#19FB9B" title="Avg Transaction Time" value="435ms" />
      <BentoStat color="#43B4CA" title="Avg TPS" value="2,659" />
      <BentoStat color="#5791FF" title="Users" value="87M" />
    </BentoStatGridStyle>
  );
};

const SolutionsGrid = () => {
  return (
    <section>
      <SectionContainer
        showXBorder={false}
        style={{ "--padding-bottom": "1rem" }}
      >
        <TitleBlock>
          <SectionSubtitle>Solutions</SectionSubtitle>
          <SectionTitle>Ready for Business</SectionTitle>
          <SectionDescription>
            Power global finance, enable instant borderless payments, trade
            real-world assets and more
          </SectionDescription>
        </TitleBlock>
        <BentoGrid>
          <BentoCard
            className="large"
            title="Payments"
            description="Enjoy lightning-fast payments, with near-zero fees and no intermediaries."
          />
          <BentoCard
            className="large"
            title="DeFi"
            description="Enjoy unmatched capital efficiency with infinite composability."
          />
          <BentoCard
            className="large"
            title="Gaming"
            description="Create next-level gaming experiences with instant, cheap micro transactions."
          />
          <BentoCard
            title="Creative"
            description="Create, share, and earn using scalable and low-cost Solana network."
          >
            <Image
              style={{
                paddingRight: "1rem",
                objectFit: "contain",
              }}
              src={CreativeImg}
              alt="Creative"
            />
          </BentoCard>
          <BentoCard
            title="Institutional Finance"
            description="Increase market liquidity and access with tokenized assets."
          >
            <Image
              style={{
                marginBottom: "-3rem",
                marginRight: "1rem",
                objectFit: "contain",
              }}
              width={200}
              height={100}
              src={FinanceImg}
              alt="Creative"
            />
          </BentoCard>
          <BentoCard
            title="Loyalty"
            description="Turn every user interaction into a personalized, long-term connection."
          />
          <BentoCard
            title="Wallets"
            description="Send, save and access web3 in convenient, customizable ways."
          >
            <Image
              style={{
                marginBottom: "-3rem",
                marginRight: "1rem",
                objectFit: "contain",
              }}
              src={WalletsImg}
              alt="Creative"
            />
          </BentoCard>
          <div className="bg-shape"></div>
        </BentoGrid>
        <BentoStatGrid />
      </SectionContainer>
    </section>
  );
};

export default SolutionsGrid;
