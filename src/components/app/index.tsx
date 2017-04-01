import * as React from "react";
import "./style.scss";
import Header from "../header";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Header title={"React template Pre-packed with..."}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
