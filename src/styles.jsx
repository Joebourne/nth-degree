import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  div#root {
    width: 100%;
    height: 100%;
  }
`;

const ROW_LENGTH = 10;
export const GRID_SIZE = ROW_LENGTH * ROW_LENGTH;
const ANIMATION_DURATION = 600;

export const OuterWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const Container = styled.div`
  @media (max-width: 960px) {
    padding: 0 20px;
  }

  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 960px) {
    max-width: 40%;
  }

  @media (min-width: 1220px) {
    max-width: 30%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;

  & > * {
    ${({ cycleSize, offsetCount }) => css`
      :nth-child(${cycleSize}n + ${offsetCount}) {
        border: none;

        @keyframes swell {
          from {
            transform: scale(0.4) rotate(0);
            background-color: red;
          }
          to {
            transform: scale(0.8) rotate(315deg);
            background-color: darkred;
          }
        }

        animation-iteration-count: infinite;
        animation-name: swell;
        animation-duration: ${ANIMATION_DURATION}ms;
        animation-direction: alternate;
      }
    `}
  }
`;

const MARGIN_PCT = 1;

export const Block = styled.div`
  padding: calc(100% / ${ROW_LENGTH} / 2 - ${MARGIN_PCT}%);
  margin: ${MARGIN_PCT}%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${MARGIN_PCT}%;

  /* // first item on a row shouldn't have margin-left */
  :nth-child(${ROW_LENGTH}n - 9) {
    margin-left: 0;
  }

  /* // last item on a row shouldn't have margin-right */
  :nth-child(${ROW_LENGTH}n) {
    margin-right: 0;
  }
`;

export const Form = styled.form``;

export const InputsRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const inputStyles = css`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 24px;
  border-bottom: 2px solid white;
  width: 11.25%;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;

  &:focus {
    outline: 2px solid white;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CycleInput = styled.input`
  ${inputStyles};
  margin-right: 5%;
`;

export const StaticSpan = styled.span`
  font-size: 24px;
  width: 10%;
`;

export const OffsetInput = styled.input`
  ${inputStyles};
  margin-left: 5%;
  margin-right: 5%;
`;

export const Submit = styled.input`
  display: block;
  margin: 0;
  border: none;
  padding: 0 20px;
  font-size: 20px;
  transition: transform 0.1s
  width: 50%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;

  &:focus, &:visited {
    border: none;
    outline: none;
  }

  &:active {
    transform: scale(0.98);
    border: 2px solid white;
  }
`;
