import React, { ReactElement } from "react";
import { UserInterface } from "../App";

type Props = {
  user: UserInterface;
  newUser: string;
  newAge: number;
};

const SecondComponent = ({ user, newUser, newAge }: Props): ReactElement => {
  return (
    <section>
      <h1>componente 2</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <div>
        <p>Novo user {newUser}</p>
        <p>Nova idade {newAge}</p>
      </div>
    </section>
  );
};

export default SecondComponent;
