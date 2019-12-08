import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import TitleCenter from "../styles/typography"

const Layout = styled.div`
  margin: 0 auto;
  height: 100vh;
`

const BackgroundColor = styled.div`
  background-color: ${theme.darkgreen};
  height: 100vh;
  position: absolute;
  width: 100vw;
  left: 0;
  z-index: -1;
`
const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
`

const Intro = styled.div`
  position: relative;
  color: #fade88;
  justify-content: center;
  margin-top: -70px;
  opacity: 0;
  animation: slide 1s ease-in-out 2s forwards;
  height: 100px;

  @keyframes slide {
    to {
      opacity: 1;
    }
  }
`

const Initials = styled(TitleCenter)`
  display: flex;
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`

const Plus = styled.svg`
  fill: #fade88;
  margin: 3px 32px;
`

const RingContainer = styled.div`
  position: absolute;
  display: flex;
  margin-top: 40px;
  margin-bottom: 0;
  animation: shift 1s ease-in-out 2s forwards;

  @keyframes shift {
    to {
      margin-bottom: 100px;
    }
  }
`

const RingContainerRight = styled(RingContainer)`
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`

const Ring = styled.svg`
  height: 130px;
  width: 130px;
  stroke-dasharray: 380;
  stroke-dashoffset: 380;
  animation: dash 2s ease-in-out forwards;

  @keyframes dash {
    0% {
      opacity: 0;
      stroke-dashoffset: 380;
      margin-right: 200px;
      transform: rotate(-45deg);
    }

    50% {
      opacity: 1;
      stroke-dashoffset: 0;
      margin-right: 200px;
      transform: rotate(0deg);
    }

    100% {
      stroke-dashoffset: 0;
      margin-right: 100px;
    }
  }
`

const DownArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 75px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0;
  width: 13px;
  height: 13px;
  border-bottom: 2px solid #f5bf19;
  border-right: 2px solid #f5bf19;
  z-index: 9;
  margin-left: -5px;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation: fade_move_down 4s ease-in-out infinite;
  animation: fade_move_down 4s ease-in-out infinite;

  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes fade_move_down {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }

  @media (max-width: 500px) {
    bottom: 40px;
  }
`

const Welcome = () => (
  <Layout>
    <BackgroundColor>
      <IntroContainer>
        <Intro>
          <Initials>
            <div>C</div>
            <div>
              <Plus
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.9272 12.5H25.5272V14H13.9272V25.75H12.1272V14H0.477173V12.5H12.1272V0.700012H13.9272V12.5Z" />
              </Plus>
            </div>
            <div>R</div>
          </Initials>
        </Intro>
        <RingContainer>
          <Ring>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFE38C" />
                <stop offset="100%" stop-color="#F5BF19" />
              </linearGradient>
            </defs>
            <circle
              cx="65"
              cy="65"
              r="60"
              stroke="url(#gradient)"
              stroke-width="3"
              fill="none"
            />
          </Ring>
        </RingContainer>
        <RingContainerRight>
          <Ring>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFE38C" />
                <stop offset="100%" stop-color="#F5BF19" />
              </linearGradient>
            </defs>
            <circle
              cx="65"
              cy="65"
              r="60"
              stroke="#002f13"
              stroke-width="8"
              fill="none"
            />
            <circle
              cx="65"
              cy="65"
              r="60"
              stroke="url(#gradient)"
              stroke-width="3"
              fill="none"
            />
          </Ring>
        </RingContainerRight>
      </IntroContainer>
      <DownArrow />
    </BackgroundColor>
  </Layout>
)

export default Welcome
