import { useEffect, useRef, useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";
import UpgradeButton from "./Components/UpgradeButton";
import UpgradeDrawer from "./Components/UpgradeDrawer";
import Upgrade from "./Components/Upgrade";

const Upgrades = [
  {
    name: "Bee Keepers",
    description: "Each level increases bee hatch rate by 1",
    cost: 100,
    costMult: 0.2,
    currentLevel: 0,
    effect: function() {
      return this.currentLevel;
    },
  },
  {
    name: "Augmented Queens",
    description:
      "Each level doubles your idle bee hatch rate. eg. x2 -> x4 -> x8 etc",
    cost: 1000,
    costMult: 2,
    currentLevel: 0,
    effect: function() {
      return Math.pow(2, this.currentLevel);
    },
  },
  {
    name: "Honey Centrifuges",
    description:
      "Each level boosts your honey production by 10%(.10)",
    cost: 150,
    costMult: 0.4,
    currentLevel: 0,
    effect: function() {
      return ((100 + (this.currentLevel * 10))/100);
    },
  },
  {
    name: "Super Bees",
    description:
      "Each level doubles your honey Production. eg. x2 -> x4 -> x8 etc",
    cost: 1500,
    costMult: 2,
    currentLevel: 0,
    effect: function() {
      return Math.pow(2, this.currentLevel);
    },
  },
  {
    name: "Nicer jars",
    description:
      "Each level boosts your Honey value by 20% (.20).",
    cost: 500,
    costMult: 0.8,
    currentLevel: 0,
    effect: function() {
        return ((100 + (this.currentLevel * 20))/100);
    },
  },
];

const beeList = [
  {
    name: "Wild Bees",
    baseProduct: 1,
    baseHatch: 1,
    baseValue: 0.25,
  },
];

export default function App() {
  const [currentBee, setCurrentBee] = useState(0);
  const moneyRef = useRef(0);
  const honeyProductionRef = useRef(0);
  const beeRef = useRef(0);
  const [money, setMoney] = useState(moneyRef.current);

  useEffect(() => {
    setInterval(() => {
      let bee = beeList[currentBee];
      beeRef.current =
        beeRef.current + ((bee.baseHatch + Upgrades[0].effect()) * Upgrades[1].effect());
      honeyProductionRef.current = ((bee.baseProduct * beeRef.current) * Upgrades[2].effect()) * Upgrades[3].effect();
      moneyRef.current =
        moneyRef.current + (honeyProductionRef.current * bee.baseValue) * Upgrades[4].effect();

      setMoney(moneyRef.current.toFixed(2));
    }, 1000);
  }, []);

  function updateBees(evt) {
    let bee = beeList[currentBee];
    beeRef.current =
      beeRef.current + (bee.baseHatch + Upgrades[0].currentLevel);
    honeyProductionRef.current = ((bee.baseProduct * beeRef.current) * Upgrades[2].effect()) * Upgrades[3].effect();
    moneyRef.current =
      moneyRef.current + (honeyProductionRef.current * bee.baseValue) * Upgrades[4].effect();
    setMoney(moneyRef.current.toFixed(2));
  }

  return (
    <>
      <div className="topBar">
        <IncomeDisplay
          money={money}
          income={(honeyProductionRef.current * beeList[currentBee].baseValue).toFixed(2)}
          bees={beeRef.current}
          beeType={beeList[currentBee].name}
        />
      </div>

      <div className="main">
        <HiveButton updateBees={updateBees} />
      </div>
      <div className="bottomBar">
        <UpgradeButton />
        <UpgradeDrawer>
          {Upgrades.map((upgrade) => {
            return (
              <Upgrade
                money={moneyRef}
                setMoney={setMoney}
                key={upgrade.name}
                upgrade={upgrade}
              />
            );
          })}
        </UpgradeDrawer>
      </div>
    </>
  );
}
