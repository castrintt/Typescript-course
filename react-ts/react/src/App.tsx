import "./App.css";
import React, { ReactElement } from "react";
import { useState } from "react";
import FirstComponente from "./components/FirstComponente";
import SecondComponent from "./components/SecondComponent";
import StateHook from "./components/StateHook";

export type UserInterface = {
  name: string;
  age: number;
  isWorking: boolean;
};

function App(): ReactElement {
  const [user, setUser] = useState<UserInterface>({
    name: "Igor",
    age: 23,
    isWorking: false,
  });

  const userGreeting = (name?: string): string => {
    if (name) {
      return `Olá! seja bem vindo ${name}`;
    }
    return `Olá! seja bem vindo!`;
  };

  const newUser: string = "Igor de novo";
  const newAge: number = 23;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <section>
        {user.isWorking ? (
          <h2>{userGreeting(user.name)}</h2>
        ) : (
          <h2>Bom descanso!</h2>
        )}
        <h2>NOME : {user.name}</h2>
        <h2>IDADE : {user.age}</h2>
        <h2>{user.isWorking ? "Estou trabalhando" : "Estou em casa!"}</h2>
      </section>
      <section>
        <button
          onClick={() => setUser({ ...user, isWorking: !user.isWorking })}
          type="button"
        >
          {user.isWorking ? "Deslogar" : "Logar"}
        </button>
      </section>
      <section>
        <FirstComponente />
        <SecondComponent user={user} newUser={newUser} newAge={newAge} />
        <StateHook />
      </section>
    </div>
  );
}

export default App;
