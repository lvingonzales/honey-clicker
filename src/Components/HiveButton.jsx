import hiveButton from "../Styles/HiveButton.module.css";
import hiveBox from "../Assets/HiveBox.svg";
import PropTypes from "prop-types";


export default function HiveButton({updateBees}) {
  return (
    <button id="apiary" className={hiveButton.icon} onClick={updateBees}>
        <img id="hiveBox" src={hiveBox} alt="Hive Box" />
    </button>
  ) 
}

HiveButton.propTypes = {
    updateBees: PropTypes.func
}
