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

  // als het component geladen word voer getData uit
  componentDidMount() {
    this.getData();
  }

  // haal data binnen met fetchproducts en zet het in de this.state
  // method gemaakt zet products data in getData
  async getData() {
    let data = await fetchWorks();
    console.log(data)
    this.setState({ works: data });
  }

  render() {
   // console.log(this.state.works)
    return (
      <div>
          {/* <WorkComponent></WorkComponent> */}
        <WorkComponent works={this.state.works}/>
        <p>Home</p>
      </div>
    );
  }
}
