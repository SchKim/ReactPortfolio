import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WORKS } from "./shared/works";
import MainComponent from "./components/MainComponent";

interface IAppComponentProps {}

export default class AppComponent extends React.Component<IAppComponentProps> {
  constructor(props: IAppComponentProps) {
    super(props);
    this.state = {
      works: WORKS,
    };
  }

  render( ){


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
      <MainComponent />
    </div>
  );
}

}
