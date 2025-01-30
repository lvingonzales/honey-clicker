import hiveButton from "../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";
import PropTypes from "prop-types";
import { useContext } from "react";
import { MoneyContext } from "./Contexts";

export default function HiveButton({multiplier}) {
  const {money, setMoney} = useContext(MoneyContext);

    const handleClick = () => {
        document.getElementById("apiary").classList.add(hiveButton.rotateRight)
        setMoney((Math.round((money + multiplier)*100)/100));
    }
  return (
    <button id="apiary" className={hiveButton.icon} onClick={handleClick}>
        <img src={hiveBox} alt="Hive Box" />
    </button>
  ) 
}

HiveButton.propTypes = {
    money: PropTypes.number,
    setMoney: PropTypes.func,
    multiplier: PropTypes.number
}
