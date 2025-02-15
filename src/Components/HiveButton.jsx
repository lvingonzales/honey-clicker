import hiveButton from "../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";
import PropTypes from "prop-types";


export default function HiveButton({multiplier, bees, setBees}) {

    const handleClick = () => {
      setBees (bees + 1);
        // setMoney((Math.round((money + multiplier)*100)/100));
    }
  return (
    <button id="apiary" className={hiveButton.icon} onClick={handleClick}>
        <img id="hiveBox" src={hiveBox} alt="Hive Box" />
    </button>
  ) 
}

HiveButton.propTypes = {
    money: PropTypes.number,
    setMoney: PropTypes.func,
    multiplier: PropTypes.number,
    bees: PropTypes.number,
    setBees: PropTypes.func
}
