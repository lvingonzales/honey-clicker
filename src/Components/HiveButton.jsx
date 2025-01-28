import hiveButton from "../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";

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
