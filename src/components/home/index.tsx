import * as React from "react";
import "./style.scss";

export default class Home extends React.Component<{}, {}> {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div id="home">
        <p className="app-intro">
          To get started, edit <code>src/components/app/index.tsx</code> and save to reload.
        </p>
        <h1><a href="https://github.com/jjrajani" target="_blank">humdrum</a></h1>
      </div>
    );
  }
}
