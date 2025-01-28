import PropTypes from "prop-types"
import incomeDisplay from "../Styles/IncomeDisplay.module.css"
import honeyIcon from "/Honey.svg"

export default function IncomeDisplay ({money, moneyMult, income}) {
    return (
        <>
            <div className={incomeDisplay.wrapper}>
                <div>
                    <p className={incomeDisplay.bank}>${money}</p>
                </div>
                <div>
                    <p className={incomeDisplay.income}>${income}/sec</p>
                </div>
                <div>
                    <p className={incomeDisplay.conversion}>${moneyMult} per </p>
                    <HoneyIcon />
                </div>
            </div>
        </>
    )
}

IncomeDisplay.propTypes = {
    money: PropTypes.number,
    moneyMult: PropTypes.number,
    income: PropTypes.number
}

function HoneyIcon () {
    return <img src={honeyIcon} className={incomeDisplay.icon} alt="Honey Drop Icon" />
}
