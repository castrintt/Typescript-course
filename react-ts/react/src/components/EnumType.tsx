import React from "react";
import { Test } from "../App";

type Props = {
  testEnum: string;
  setTestEnum: Function;
};

const EnumType = ({ testEnum, setTestEnum }: Props) => {
  setTestEnum(Test.TI);
  return (
    <div>
      <h1>ENUM TYPE TEST</h1>
      <p>{testEnum}</p>
    </div>
  );
};

export default EnumType;
