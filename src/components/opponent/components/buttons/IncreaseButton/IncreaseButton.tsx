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
        props.setCommanderDamage((damage: number) => damage + props.amount);

        if (props.CurrentCommanderDamage >= 21) {
            props.setCommanderDamage(21);
        }
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
