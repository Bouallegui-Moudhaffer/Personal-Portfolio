import React from "react";
import { Route, Switch, HashRouter, useHistory } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import HobbiesPage from "../pages/hobbies/Hobbies";
import { settings } from "../portfolio.js";
import GamingPage from "../pages/gaming/gaming";
import AnimePage from "../pages/anime/Anime";
import { recognition } from "../components/speechRecognition/SpeechRecognition";

export default function Main(propss) {
  const history = useHistory();
  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes("navigate to") || command.includes("go to")) {
      if (command.includes("home") || command.includes("index")) {
        history.push("/home");
      } else if (command.includes("education") || command.includes("index")) {
        history.push("/education");
      } else if (command.includes("experience") || command.includes("index")) {
        history.push("/experience");
      } else if (command.includes("contact") || command.includes("index")) {
        history.push("/contact");
      }
    }
  };

  recognition.onend = () => {
    recognition.start();
  };

  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/hobbies"
              render={(props) => (
                <HobbiesPage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/gaming"
              render={(props) => (
                <GamingPage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/anime"
              render={(props) => (
                <AnimePage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/hobbies"
              render={(props) => (
                <HobbiesPage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/gaming"
              render={(props) => (
                <GamingPage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            <Route
              path="/anime"
              render={(props) => (
                <AnimePage
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
