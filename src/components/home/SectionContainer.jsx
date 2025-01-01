import styled from "styled-components";

const BorderedContainerStyle = styled.div`
  --padding-y: 80px;
  --padding-bottom: var(--padding-y);

  width: 100%;
  padding: var(--padding-y) 0.25rem;
  padding-bottom: var(--padding-bottom);
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &.y-border {
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      z-index: 2;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSI3MjciIHZpZXdCb3g9IjAgMCAyIDcyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMFY3MjciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjE4IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4KPC9zdmc+Cg==");
      background-size: auto;
      background-repeat: repeat-y;
      top: 0;
    }

    &::after {
      left: 0;
    }

    &::before {
      right: 0;
    }
  }

  .bordered-lines {
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: calc(100% + 1.5rem);
      left: -0.75rem;
      right: -0.75rem;
      z-index: 2;
      top: unset;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5NiIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgMTA5NiAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTA5NiAxSDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjE4IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4KPC9zdmc+Cg==");
      background-size: auto;
      background-repeat: repeat-x;
    }
    &::after {
      top: calc(var(--padding-y) - 0.75rem);
    }

    &::before {
      bottom: calc(var(--padding-y) - 0.75rem);
    }
  }
`;

const SectionContainer = ({
  children,
  showYBorder = true,
  showXBorder = true,
  style = {},
}) => {
  return (
    <BorderedContainerStyle className={showYBorder && "y-border"} style={style}>
      {children}
      {showXBorder && <div className="bordered-lines" />}
    </BorderedContainerStyle>
  );
};

export default SectionContainer;
