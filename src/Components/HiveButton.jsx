import hiveButton from "../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";
import PropTypes from "prop-types";

export default function HiveButton({ money ,setMoney }) {
    const handleClick = () => {
        setMoney(money + 1)
    }
  return (
    <button className={hiveButton.icon} onClick={handleClick}>
        <img src={hiveBox} alt="Hive Box" />
    </button>
  ) 
}

HiveButton.propTypes = {
    money: PropTypes.number,
    setMoney: PropTypes.func,
}
