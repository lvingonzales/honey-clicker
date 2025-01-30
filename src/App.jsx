import { useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";
import UpgradeButton from "./Components/UpgradeButton";
import UpgradeDrawer from "./Components/UpgradeDrawer";
import Upgrade from "./Components/Upgrade";
import { MoneyContext } from "./Components/Contexts";

const Upgrades = [
  {
    name: "Honeycomb Comb",
    description: "Description",
    baseCost: 1,
    baseMultiplier: 1,
  },
  {
    name: "Super Flowers",
    description: "Description",
    baseCost: 100,
    baseMultiplier: 10,
  }
];

export default function App() {
  const [money, setMoney] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const income = 0;
  return (
    <>
      <MoneyContext.Provider value={{ money, setMoney }}>
        <div className="topBar">
          <IncomeDisplay
            money={money}
            multiplier={multiplier}
            income={income}
          />
        </div>
        <div className="main">
          <HiveButton
            multiplier={multiplier}
          />
        </div>
        <div className="bottomBar">
          <UpgradeButton />
          <UpgradeDrawer>
            {Upgrades.map((upgrade) => {return <Upgrade key={upgrade.name} upgrade={upgrade} currentMultiplier={multiplier} setMultiplier={setMultiplier} />})}
          </UpgradeDrawer>
        </div>
      </MoneyContext.Provider>
    </>
  );
}
