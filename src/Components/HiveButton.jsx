import hiveButton from"../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";

export default function HiveButton() {
    return <img className={hiveButton.icon} src={hiveBox} alt="Hive Box" />
}
