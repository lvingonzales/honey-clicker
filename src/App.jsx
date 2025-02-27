import { useEffect, useRef, useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";
import UpgradeButton from "./Components/UpgradeButton";
import UpgradeDrawer from "./Components/UpgradeDrawer";
import Upgrade from "./Components/Upgrade";

// Upgrades
// Each upgrade is an object with set properties as part of a template
// NOTE TO SELF ADD ATTRIBUTION TO BEE VECTOR ARTIST: <a href="https://www.vecteezy.com/free-vector/bee">Bee Vectors by Vecteezy</a>
const Upgrades = [
  {
    name: "Bee Keepers",
    description: "Each level increases bee hatch rate by 1",
    cost: 100,
    costMult: 0.2,
    currentLevel: 0,
    effect: function () {
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
    effect: function () {
      return Math.pow(2, this.currentLevel);
    },
  },
  {
    name: "Honey Centrifuges",
    description: "Each level boosts your honey production by 10%(.10)",
    cost: 150,
    costMult: 0.4,
    currentLevel: 0,
    effect: function () {
      return (100 + this.currentLevel * 10) / 100;
    },
  },
  {
    name: "Super Bees",
    description:
      "Each level doubles your honey Production. eg. x2 -> x4 -> x8 etc",
    cost: 1500,
    costMult: 2,
    currentLevel: 0,
    effect: function () {
      return Math.pow(2, this.currentLevel);
    },
  },
  {
    name: "Nicer jars",
    description: "Each level boosts your Honey value by 20% (.20).",
    cost: 500,
    costMult: 0.8,
    currentLevel: 0,
    effect: function () {
      return (100 + this.currentLevel * 20) / 100;
    },
  },
];

// The bee list is part of the prestige system, each bee increases the base values
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
  const incomeRef = useRef(0);
  const [money, setMoney] = useState(moneyRef.current);

  // Updates values on a one second interval
  useEffect(() => {
    setInterval(() => {
      let bee = beeList[currentBee];
      // "Upgrades[x]" refers to the upgrades list array
      beeRef.current =
        beeRef.current +
        (bee.baseHatch + Upgrades[0].effect()) * Upgrades[1].effect();

      honeyProductionRef.current =
        bee.baseProduct *
        beeRef.current *
        Upgrades[2].effect() *
        Upgrades[3].effect();

      moneyRef.current =
        moneyRef.current +
        honeyProductionRef.current * bee.baseValue * Upgrades[4].effect();

      incomeRef.current = (honeyProductionRef.current * beeList[currentBee].baseValue).toFixed(2);

      // Calculation order is Base value + flat increases * percentage increases * multiplicative increases

      // Rerenders the components to reflect the above changes
      setMoney(moneyRef.current.toFixed(2));
    }, 1000);
  }, []);

  function updateBees(evt) {
    let bee = beeList[currentBee];

    // On demand update and rerender function 
    beeRef.current =
      beeRef.current + (bee.baseHatch + Upgrades[0].currentLevel);

    honeyProductionRef.current =
      bee.baseProduct *
      beeRef.current *
      Upgrades[2].effect() *
      Upgrades[3].effect();

    moneyRef.current =
      moneyRef.current +
      honeyProductionRef.current * bee.baseValue * Upgrades[4].effect();

    incomeRef.current = (honeyProductionRef.current * beeList[currentBee].baseValue).toFixed(2);

    setMoney(moneyRef.current.toFixed(2));
  }

  return (
    <>
      <div className="topBar">
        <IncomeDisplay
          money={+money}
          income={+incomeRef.current}
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
