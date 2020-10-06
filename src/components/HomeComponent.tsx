import React from "react";
import { IWorks } from "../shared/IWork";
import WorkComponent from "./WorkComponent";

interface IHomeComponentProps {
     works : IWorks[];

}


export default class HomeComponent extends React.Component<IHomeComponentProps> {
  
  render() {
    return (
      <div>
       {/* { this.renderWorks() } */}
      </div>
    );
  }

  renderWorks(){

    const works = this.props.works.slice(0,10);

    // return works.map((work) => {
        // return <WorkComponent key={work.id} work={work} />
       // return <WorkComponent></WorkComponent>
    // });
  }
}
