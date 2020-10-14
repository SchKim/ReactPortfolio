import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { BrouwserRouter } from "react-router-dom";

import MainComponent from "./components/MainComponent";

interface IAppComponentProps {}

export default class AppComponent extends React.Component<IAppComponentProps> {
  constructor(props: IAppComponentProps) {
    super(props);
    this.state = {
      //works: WORKS,
    };
  }

  render( ){


  return (
    <div className="App">
      <MainComponent />
      <p>bdsbdsb</p>
    </div>
  );
}

}
