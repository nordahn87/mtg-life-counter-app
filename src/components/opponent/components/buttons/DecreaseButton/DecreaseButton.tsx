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
        props.setCommanderDamage((damage: number) => damage - props.amount);

        if (props.CurrentCommanderDamage <= 0) {
            props.setCommanderDamage(0);
        }
    };

    return (
        <button className={S.wrapper} onClick={handleDecreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
