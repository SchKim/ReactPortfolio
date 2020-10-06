import React from "react";
// import { IWorks } from "../shared/Iworks";
import WorkComponent from "./WorkComponent";

interface IHomeComponentProps {
    // works : IWorks[];

}
interface IHomeComponentState {
    // works : IWorks[];

}

export default class HomeComponent extends React.Component<IHomeComponentProps, IHomeComponentState> {
  constructor(props: IHomeComponentProps) {
    super(props);

    this.state = {
      works: [],
    };
  }

  render() {
    return (
      <div>
        <WorkComponent />
        <p>Home</p>
      </div>
    );
  }
}
