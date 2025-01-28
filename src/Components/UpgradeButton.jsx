import upgrades from "../Styles/Upgrades.module.css";

export default function UpgradeButton () {
    const handleClick = () => {
        document.getElementById("upgradeDrawer").classList.add(upgrades.active);
    }
    return  (
        <div className={upgrades.container}>
            <button className={upgrades.btn} onClick={handleClick}>SHOP</button>
        </div>
    )
}
