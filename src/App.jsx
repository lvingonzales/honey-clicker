import { useEffect, useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";
import UpgradeButton from "./Components/UpgradeButton";
import UpgradeDrawer from "./Components/UpgradeDrawer";
import Upgrade from "./Components/Upgrade";

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



export default function App() {
  // const [bees, setBees] = useState(0);
  // const [money, setMoney] = useState(0);
  // const [tick, setTick] = useState(0);
  // const [multiplier, setMultiplier] = useState(1);
  // const [beeProduction, setBeeProduction] = useState(0.5);
  // const income = 0;

  // const incTick = () => {
  //   console.log("Increment tick: ", tick);
  //   setTick(tick + 1);
  // }

  // useEffect (() => {
  //   console.log("Set Money Tick: ", tick);
  //   setMoney(money + (bees * beeProduction * multiplier));
  // }, [tick])

  // useEffect (() => {
  //   const interval = setInterval(() => {
  //     incTick();
  //   }, 1000);
    
  //   return () => {
  //     clearInterval(interval);
  //   }
  // })

  const [counter, setCounter]= useState(1);
  const [power, setPower] = useState (150);

  function calculate(value) {
    console.log(counter);
    value = counter * (power / 100);
    // Add percentage increases to the power value,  and the multiplicative upgrades go into an array that is iterated over.
    
    setCounter(value);
  }
  

  useEffect (() => {
    setInterval(() => {
      setCounter(count => count * (power /100))
    }, 1000);
  }, [])

  return (
    <>
      <div>{counter}</div>
    </>
    // <>
    //     <div className="topBar">
    //       <IncomeDisplay
    //         money={money}
    //         multiplier={multiplier}
    //         income={income}
    //         bees={bees}
    //       />
    //     </div>
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
