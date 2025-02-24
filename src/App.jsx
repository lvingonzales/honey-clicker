import { useEffect, useRef, useState } from "react";
// import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";
// import UpgradeButton from "./Components/UpgradeButton";
// import UpgradeDrawer from "./Components/UpgradeDrawer";
// import Upgrade from "./Components/Upgrade";

// const Upgrades = [
//   {
//     name: "Honeycomb Comb",
//     description: "Description",
//     baseCost: 1,
//     baseMultiplier: 1,
//   },
//   {
//     name: "Super Flowers",
//     description: "Description",
//     baseCost: 100,
//     baseMultiplier: 10,
//   }
// ];

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
      beeRef.current = beeRef.current + bee.baseHatch;
      honeyProductionRef.current = bee.baseProduct * beeRef.current;
      moneyRef.current =
        moneyRef.current + honeyProductionRef.current * bee.baseValue;

      setMoney(moneyRef.current);
    }, 1000);
  }, []);

  const updateBees = (evt) => {
    let bee = beeList[currentBee];
    beeRef.current = beeRef.current + bee.baseHatch;
    honeyProductionRef.current = bee.baseProduct * beeRef.current;
    moneyRef.current =
      moneyRef.current + honeyProductionRef.current * bee.baseValue;
    setMoney(moneyRef.current);
  };

  return (
    <>
        <div className="topBar">
          <IncomeDisplay
            money={money}
            income={honeyProductionRef.current * beeList[currentBee].baseValue}
            bees={beeRef.current}
            beeType={beeList[currentBee].name}
          />
        </div>
      {/* <div>
        <div>Queen Type: {beeList[currentBee].name}</div>
        <div>Money: {moneyRef.current}</div>
        <div>Money/s: {honeyProductionRef.current * beeList[currentBee].baseValue}</div>
        <div>Honey u/s: {honeyProductionRef.current}</div>
        <div>Bees: {beeRef.current}</div>
      </div> */}
      <button onClick={updateBees}>Click me</button>
    </>
    // <>
    
    //     <div className="main">
    //       <HiveButton
    //         multiplier={multiplier}
    //         money={money}
    //         setMoney={setMoney}
    //         bees={bees}
    //         setBees={setBees}
    //       />
    //     </div>
    //     <div className="bottomBar">
    //       <UpgradeButton />
    //       <UpgradeDrawer>
    //         {Upgrades.map((upgrade) => {return <Upgrade money={money} setMoney={setMoney} key={upgrade.name} upgrade={upgrade} currentMultiplier={multiplier} setMultiplier={setMultiplier} />})}
    //       </UpgradeDrawer>
    //     </div>
    // </>
  );
}
