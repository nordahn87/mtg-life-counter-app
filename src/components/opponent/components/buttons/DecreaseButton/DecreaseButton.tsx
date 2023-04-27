import { FC, useEffect, useState } from "react";
import S from "./DecreaseButton.module.scss";

export interface ButtonProps {
    setCommanderDamage: any;
    CurrentCommanderDamage: any;
    amount: number;
    title: string;
}

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const handleDecreaseCommanderDamage = () => {
        let opponentDamageDecrease = props.CurrentCommanderDamage - props.amount;

        if (opponentDamageDecrease < 0) {
            opponentDamageDecrease = 0;
        }

        props.setCommanderDamage(opponentDamageDecrease);
    };

    return (
        <button className={S.wrapper} onClick={handleDecreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
