import { FC } from "react";
import { useCommanderDamage } from "../../../../../providers/CommanderDamage.provider";
import { ButtonProps } from "../Button.props";
import S from "./DecreaseButton.module.scss";

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const { setCommanderDamage } = useCommanderDamage();

    const handleDecreaseCommanderDamage = () => {
        setCommanderDamage((damage: number) => damage - props.amount);
    };

    return (
        <button className={S.container} onClick={handleDecreaseCommanderDamage}>
            {props.title}
        </button>
    );
};
