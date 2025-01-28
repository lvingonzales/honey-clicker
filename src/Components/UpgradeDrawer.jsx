import upgrades from "../Styles/Upgrades.module.css";
import honeyIcon from "/Honey.svg";

export default function UpgradeDrawer() {
  const closeMenu = () => {
    document.getElementById("upgradeDrawer").classList.remove(upgrades.active);
  };
  return (
    <div id="upgradeDrawer" className={upgrades.wrapper}>
      <div className={upgrades.tabs}>
        <button className={upgrades.btn}>Extractors</button>
        <button className={upgrades.btn}>Upgrades</button>
        <button
          className={upgrades.btn + " " + upgrades.close}
          onClick={closeMenu}
        >
          X
        </button>
      </div>
      <div className={upgrades.shelf}>
        <ul className={upgrades.list + " " + upgrades.activeList}>
          <li className={upgrades.listItem}>
            <div className={upgrades.itemWrapper}>
              <div className={upgrades.itemContainer}>
                <div className={upgrades.itemIcon}>
                  <img src={honeyIcon} alt="Honey Icon" />
                </div>
                <div className={upgrades.itemDescWrapper}>
                  <div className={upgrades.itemName}>
                    <span>Honeycomb Combs</span>
                  </div>
                  <div className={upgrades.itemDesc}>
                    <p>
                      Special combs that remove the wax caps from the frames,
                      exposing that sweet liquid gold.
                    </p>
                  </div>
                  <div className={upgrades.itemCost}>
                    <span>Cost: $1.00</span>
                  </div>
                </div>
                <div className={upgrades.itemBuyBtn}>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
