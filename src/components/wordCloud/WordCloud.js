// @ts-ignore
import tagCanvas from "tag-canvas";
import React from "react";

class TagCloud extends React.Component {
  // constructor(props:any) {
  //   super(props);
  // }

  renderTagCloud() {
    try {
      tagCanvas.Start("myCanvas", "tags", {
        textColour: "#08fdd8",
        reverse: true,
        depth: 0.1,
        maxSpeed: 0.07,
        outlineMethod: "none",
        textHeight: 21,
        wheelZoom: false,
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      // @ts-ignore
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }

  componentDidMount() {
    this.renderTagCloud();
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <p>
              Anything in here will be replaced on browsers that do not support
              the canvas element
            </p>
          </canvas>
        </div>
        <div id="tags" style={{ display: "none" }}>
          <ul>
            <li>
              <a href="/">GitHub</a>
            </li>
            <li>
              <a href="/">JavaScript</a>
            </li>
            <li>
              <a href="/">TypeScript</a>
            </li>
            <li>
              <a href="/">SCSS</a>
            </li>
            <li>
              <a href="/">React</a>
            </li>
            <li>
              <a href="/">CSS</a>
            </li>
            <li>
              <a href="/">HTML</a>
            </li>
            <li>
              <a href="/">Storybook</a>
            </li>
            <li>
              <a href="/">REST</a>
            </li>
            <li>
              <a href="/">Gulp</a>
            </li>
            <li>
              <a href="/">Unit Tests</a>
            </li>
            <li>
              <a href="/">Material Design</a>
            </li>
            <li>
              <a href="/">Ant Design</a>
            </li>
            <li>
              <a href="/">NodeJS</a>
            </li>
            <li>
              <a href="/">BEM</a>
            </li>
            <li>
              <a href="/">Progressive Web Apps</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default TagCloud;
