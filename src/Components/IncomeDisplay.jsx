import PropTypes from "prop-types"
import incomeDisplay from "../Styles/IncomeDisplay.module.css"
import honeyIcon from "/Honey.svg"
import { useEffect } from "react"

export default function IncomeDisplay ({money, income, bees, beeType}) {

    useEffect(() => {
        console.log(typeof money);
    }, [])
    return (
        <>
            <div className={incomeDisplay.wrapper}>
                <div className={incomeDisplay.bank}>
                    <p>${money >= 1000000 ? money.toExponential(3): money}</p>
                </div>
                <div className={incomeDisplay.income}>
                    <p>${income >= 1000000 ? money.toExponential(3) : income}/sec</p>
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
