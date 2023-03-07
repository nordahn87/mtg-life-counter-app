import { FC } from "react";
import { useCommanderDamage } from "../../../../../providers/CommanderDamage.provider";
import { ButtonProps } from "../Button.props";
import S from "./IncreaseButton.module.scss";

export const IncreaseButton: FC<ButtonProps> = (props) => {

    const handleIncreaseCommanderDamage = () => {
        props.setCommanderDamage((damage: number) => damage + props.amount);
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
