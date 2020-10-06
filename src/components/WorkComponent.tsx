import React from "react";
import { IWorks } from "../shared/Iworks";

interface IWorkComponentProps {
//   works: IWorks;
}

export default class WorkComponent extends React.Component<
  IWorkComponentProps
> {
  render() {
    return (
      <div>
        <h1>hier titel</h1>
        <p>text</p>
      </div>
    );
  }
}
