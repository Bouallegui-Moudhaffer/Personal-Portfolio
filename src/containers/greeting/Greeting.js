import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.title}
                <img
                  className="greeting-wave"
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
                  alt="👋"
                  width="58"
                  height="58"
                />
                .
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{
                  color: theme.secondaryText,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(200)
                      .typeString(
                        `<span className="greeting-text-static">I'm a </span>`
                      )
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle1}</span>`
                      )
                      .pauseFor(100)
                      .deleteChars(28)
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle2}</span>`
                      )
                      .pauseFor(100)
                      .deleteChars(25)
                      .typeString(
                        `<span className="greeting-text-static">n </span>`
                      )
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle3}</span>`
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
