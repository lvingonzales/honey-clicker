import upgrades from "../Styles/Upgrades.module.css";
import UpgradeDrawer from "./UpgradeDrawer";

export default function UpgradeButton () {
    const handleClick = () => {
        document.getElementById("upgradeDrawer").classList.add(upgrades.active);
    }
    return  (
        <div className={upgrades.container}>
            <button className={upgrades.btn} onClick={handleClick}>Upgrades</button>
        </div>
    )
}
