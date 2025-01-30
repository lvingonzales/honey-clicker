import PropTypes from "prop-types";
import upgrades from "../Styles/Upgrades.module.css";
import honeyIcon from "/Honey.svg";
import { useContext, useState } from "react";
import { MoneyContext } from "./Contexts";

export default function Upgrade ({upgrade, setMultiplier, currentMultiplier}) {
  const {money, setMoney} = useContext(MoneyContext);
  const [cost, setCost] = useState(upgrade.baseCost);

  const handleClick = () => {
    if (money < cost) {
      return;
    }
    setMoney(Math.round((money - cost)*100)/100);
    setCost((Math.round((cost + (cost * 0.2))* 100) / 100));
    setMultiplier(currentMultiplier + upgrade.baseMultiplier);
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
                    <span>{upgrade.name}</span>
                  </div>
                  <div className={upgrades.itemDesc}>
                    <p>
                      {upgrade.description}
                    </p>
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
  currentMultiplier: PropTypes.number
}
