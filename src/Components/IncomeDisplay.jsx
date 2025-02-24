import PropTypes from "prop-types"
import incomeDisplay from "../Styles/IncomeDisplay.module.css"
import honeyIcon from "/Honey.svg"

export default function IncomeDisplay ({money, multiplier, income, bees}) {
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
                    <p className={incomeDisplay.conversion}>${multiplier} per </p>
                    <HoneyIcon />
                </div>
                <p className={incomeDisplay.bees}>{bees} Bees </p>
            </div>
        </>
    )
}

IncomeDisplay.propTypes = {
    money: PropTypes.number,
    multiplier: PropTypes.number,
    income: PropTypes.number,
    bees: PropTypes.number
}

function HoneyIcon () {
    return <img src={honeyIcon} className={incomeDisplay.icon} alt="Honey Drop Icon" />
}
