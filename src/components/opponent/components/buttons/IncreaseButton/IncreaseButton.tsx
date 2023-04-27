import { FC } from "react";
import S from "./IncreaseButton.module.scss";

export interface ButtonProps {
    setCommanderDamage: any;
    CurrentCommanderDamage: any;
    amount: number;
    title: string;
}

export const IncreaseButton: FC<ButtonProps> = (props) => {
    const handleIncreaseCommanderDamage = () => {
        let opponentDamageIncrease = props.CurrentCommanderDamage + props.amount;

        if (opponentDamageIncrease > 21) {
            opponentDamageIncrease = 21;
        }

        props.setCommanderDamage(opponentDamageIncrease);
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
