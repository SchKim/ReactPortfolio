import React from "react";
import { IWorks } from "../shared/IWork";
import { fetchWorks } from "../shared/fetchWorks";
import WorkComponent from "./WorkComponent";

interface IMainComponentProps {}

interface IMainComponentState {
     works: IWorks[];

}

export default class MainComponent extends React.Component<IMainComponentProps, IMainComponentState> {
  constructor(props: IMainComponentProps) {
    super(props);

    this.state = {
      works: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let data = await fetchWorks();
    // console.log(data)
    this.setState({ works: data });
  }

  render() {
    return (
      <div>
        <WorkComponent works={this.state.works}/>
        <p>Home</p>
      </div>
    );
  }
}
