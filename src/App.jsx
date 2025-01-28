import { useState } from "react";
import HiveButton from "./Components/HiveButton";
import "./Styles/App.css";
import IncomeDisplay from "./Components/IncomeDisplay";

export default function App () {
    const [money, setMoney] = useState(0);
    const [moneyMult, setmMoneyMult] = useState(1);

    const income = 0;
    return (
        <>
            <div className="topBar">
                <IncomeDisplay money={money} moneyMult={moneyMult} income={income} />
            </div>
            <div className="main">
                <HiveButton money={money} moneyMult={moneyMult} setMoney={setMoney}/>
            </div>
            <div className="bottomBar">

            </div>
        </>
    )
}
