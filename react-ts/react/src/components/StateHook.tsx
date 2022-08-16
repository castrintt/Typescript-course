import React, { useState, ChangeEvent } from "react";

const StateHook = () => {
  const [text, setText] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>test</h1>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default StateHook;
