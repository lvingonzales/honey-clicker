import { useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";

export default function App () {
    const [money, setMoney] = useState(0);
    const [moneyMult, setmMoneyMult] = useState(1);
    return (
        <>
            <div className="topBar">
                <p>{money}</p>
            </div>
            <div className="main">
                <HiveButton money={money} moneyMult={moneyMult} setMoney={setMoney}/>
            </div>
            <div className="bottomBar">

            </div>
        </>
    )
}
