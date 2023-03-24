import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import InfiniteScroll from "../../components/anime/InfiniteScroll";
import "../experience/Experience.css";
import { hobbies } from "../../portfolio.js";
import { Fade } from "react-reveal";
import "./Anime.css";

function HobbiesPage(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} className="header" />
      <div className="basic-experience main">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-text-div">
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {hobbies["description"]}
              </p>
            </div>
          </div>
        </Fade>
        <InfiniteScroll />
      </div>
      <Footer
        theme={props.theme}
        onToggle={props.onToggle}
        className="footer"
      />
    </div>
  );
}

export default HobbiesPage;
