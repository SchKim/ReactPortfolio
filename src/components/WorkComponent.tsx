import React from "react";
import { IWorks } from "../shared/IWork";

interface IWorkComponentProps {
   works: IWorks[];
}

export default class WorkComponent extends React.Component<
  IWorkComponentProps
> {
  render() {
      // console.log(this.props.works)
    return (
      <div>
        <h1>hier titel</h1>
        <p>text</p>
        {/* <p>{this.props.works.id}</p> */}
    
      </div>
    );
  }
}
