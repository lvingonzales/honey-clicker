import PropTypes from "prop-types";
import upgrades from "../Styles/Upgrades.module.css";
import honeyIcon from "/Honey.svg";
import { useState } from "react";


export default function Upgrade ({upgrade, money, setMoney}) {
  const [cost, setCost] = useState(upgrade.cost);

  const handleClick = () => {

    if (money.current < cost) {
      return;
    }
    
    // updates the objects / references and then triggers re-renders
    upgrade.currentLevel = upgrade.currentLevel + 1;
    money.current = money.current - cost;
    setMoney(money.current.toFixed(2));
    upgrade.cost = (Math.round((upgrade.cost + (upgrade.cost * upgrade.costMult))* 100) / 100);
    setCost(upgrade.cost);
  }
    return (
        <li className={upgrades.listItem}>
            <div className={upgrades.itemWrapper}>
              <div className={upgrades.itemContainer}>
                <div className={upgrades.itemIcon}>
                  <img src={honeyIcon} alt="Honey Icon" />
                </div>
                <div className={upgrades.itemDescWrapper}>
                  <div className={upgrades.itemName}>
                    <span>{upgrade.name} lvl: {upgrade.currentLevel}</span>
                  </div>
                  <div className={upgrades.itemDesc}>
                    <p>
                      {upgrade.description}
                    </p>
                    <p>Current Effect: {upgrade.effect()}</p>
                  </div>
                  <div className={upgrades.itemCost}>
                    <span>Cost: ${cost}</span>
                  </div>
                </div>
                <div className={upgrades.itemBuyBtn}>
                  <button onClick={handleClick}>Buy</button>
                </div>
              </div>
            </div>
          </li>
    )
}

Upgrade.propTypes = {
  upgrade: PropTypes.object,
  setMultiplier: PropTypes.func,
  currentMultiplier: PropTypes.number,
  money: PropTypes.number,
  setMoney: PropTypes.func
}
