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
        let opponentDamage = CurrentCommanderDamage + props.amount;

        if (opponentDamage > 21) {
            opponentDamage = 21
        }

        props.setCommanderDamage(opponentDamage)
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
