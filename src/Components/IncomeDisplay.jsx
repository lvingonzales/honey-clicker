import PropTypes from "prop-types"
import incomeDisplay from "../Styles/IncomeDisplay.module.css"
import honeyIcon from "/Honey.svg"

export default function IncomeDisplay ({money, income, bees, beeType}) {
    return (
        <>
            <div className={incomeDisplay.wrapper}>
                <div className={incomeDisplay.bank}>
                    <p>${money}</p>
                </div>
                <div className={incomeDisplay.income}>
                    <p>${income}/sec</p>
                </div>
                <p className={incomeDisplay.bees}>{bees} Bees </p>
                <p>{beeType}</p>
            </div>
        </>
    )
}

IncomeDisplay.propTypes = {
    money: PropTypes.number,
    income: PropTypes.number,
    bees: PropTypes.number,
    beeType: PropTypes.string
}

function HoneyIcon () {
    return <img src={honeyIcon} className={incomeDisplay.icon} alt="Honey Drop Icon" />
}
