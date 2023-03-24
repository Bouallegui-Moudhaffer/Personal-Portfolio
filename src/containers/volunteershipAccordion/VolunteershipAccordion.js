import React from "react";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./VolunteershipAccordion.css";

function VolunteershipAccordion(props) {
  const theme = props.theme;

  return (
    <div className="volunteership-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <main className="volunteership-container volunteership-cards">
          {props.sections["volunteerships"].map((volunteership, index) => {
            return (
              <ExperienceCard
                key={"volunteership-" + index}
                volunteership={volunteership}
                theme={theme}
              />
            );
          })}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default VolunteershipAccordion;
