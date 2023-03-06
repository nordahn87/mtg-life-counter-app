import { FC } from "react";
import { useHeroMaxHealth } from "../../../../../providers/HeroMaxHealth.provider";
import { ButtonProps } from "../Button.props";
import S from "./DecreaseButton.module.scss";

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroMaxHealth } = useHeroMaxHealth();

    const handleDecreaseHeroCurrentHealth = () => {
        setHeroMaxHealth((health: number) => health - props.amount);
    };

    return (
        <button className={S.container} onClick={handleDecreaseHeroCurrentHealth}>
            {props.title}
        </button>
    );
};
