import "./styles.css";
import { useState } from "react";
import ShakespeareInfo from "./components/ShakespeareInfo";
import Work from "./components/Work";
import AddWorkForm from "./components/AddWorkForm";

export default function App() {
  const [worksData, setWorksData] = useState([
    {
      id: 1,
      title: "Ромео і Джульєтта",
      type: "Трагедія",
      date: 1597,
      description:
        "Один з найвідоміших творів Шекспіра про трагічне кохання двох молодих людей з ворожих родин.",
    },
    {
      id: 2,
      title: "Сон в літню ніч",
      type: "Комедія",
      date: 1600,
      description:
        "Комедія, що розповідає про пригоди чотирьох афінських закоханих та групи акторів, які потрапляють до чарівного лісу, населеного феями.",
    },
    {
      id: 3,
      title: "Гамлет",
      type: "Трагедія",
      date: 1603,
      description:
        "Найдовша п’єса Шекспіра, що є однією з найвпливовіших трагедій в англійській літературі. Сюжет розгортається навколо принца Гамлета, який мстить за вбивство свого батька.",
    },
  ]);

  const addWork = (newWork) => {
    setWorksData((prev) => [...prev, { id: Date.now(), ...newWork }]);
  };

  return (
    <div className="App">
      <ShakespeareInfo />

      <div className="bibliography">
        <h2>Твори</h2>

        <AddWorkForm onAdd={addWork} />

        {worksData.map((work) => (
          <Work key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
