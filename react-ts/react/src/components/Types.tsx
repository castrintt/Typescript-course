import { ReactElement, ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCount } from "../redux/reducers/sliceNumbers";
import { RootState } from "../redux/store";

type FightTypes = number | string;
export interface Hero {
  name: FightTypes;
  age: FightTypes;
  power: FightTypes;
  stamina: FightTypes;
  class: FightTypes;
}

const Types = (): ReactElement => {
  const myHeroObject: Hero = {
    name: " Igor",
    age: 23,
    power: 100,
    stamina: 1000,
    class: "Assassin",
  };
  const [newName, setNewName] = useState<string>("");

  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.numbers);
  const { name } = useSelector((state: RootState) => state.numbers);

  return (
    <div>
      <h1>Hero types</h1>
      <p>Hero name: {myHeroObject.name}</p>
      <p>Hero Age: {myHeroObject.age}</p>
      <p>Hero power: {myHeroObject.power}</p>
      <p>Hero stamina: {myHeroObject.stamina}</p>
      <p>Hero class: {myHeroObject.class}</p>

      <h1>REDUX TEST</h1>
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={() => dispatch(changeCount(1))}>INCREMENTAR</button>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewName(e.target.value)
        }
      />
      <button onClick={() => dispatch(changeName(newName))}>Mudar nome</button>
    </div>
  );
};

export default Types;
