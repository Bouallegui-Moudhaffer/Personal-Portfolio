// @ts-ignore
import tagCanvas from "tag-canvas";
import React from "react";

class TagCloud extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <a href="/">OpenCV</a>
            </li>
            <li>
              <a href="/">Django</a>
            </li>
            <li>
              <a href="/">Flask</a>
            </li>
            <li>
              <a href="/">React</a>
            </li>
            <li>
              <a href="/">MySQL</a>
            </li>
            <li>
              <a href="/">MongoDB</a>
            </li>
            <li>
              <a href="/">BigQuery</a>
            </li>
            <li>
              <a href="/">REST</a>
            </li>
            <li>
              <a href="/">Machine Learning</a>
            </li>
            <li>
              <a href="/">CRISP-DM</a>
            </li>
            <li>
              <a href="/">Deep Learning</a>
            </li>
            <li>
              <a href="/">CoreNLP</a>
            </li>
            <li>
              <a href="/">NodeJS</a>
            </li>
            <li>
              <a href="/">Stanza</a>
            </li>
            <li>
              <a href="/">Statistics</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default TagCloud;
