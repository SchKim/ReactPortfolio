import React from "react";
import { IWorks } from "../shared/IWork";

interface IWorkComponentProps {
   works: IWorks[];
}

export default class WorkComponent extends React.Component<
  IWorkComponentProps
> {
  render() {
    return (
      <div>
        <h1>hier titel</h1>
        <p>text</p>
      {this.props.works.map(work => {
         return <p key={work.id}>{work.id}</p>
        })}
    
      </div>
    );
  }
}
