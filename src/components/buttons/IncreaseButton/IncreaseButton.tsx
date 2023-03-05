import { FC } from "react";
import { useHeroMaxHealth } from "../../../providers/HeroMaxHealth.provider";
import { ButtonProps } from "../Button.props";
import S from "./IncreaseButton.module.scss";

export const IncreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroMaxHealth } = useHeroMaxHealth();

    const handleIncreaseHeroCurrentHealth = () => {
        setHeroMaxHealth((health: number) => health + props.amount);
    };

    return (
        <button className={S.container} onClick={handleIncreaseHeroCurrentHealth}>
            {props.title}
        </button>
    );
};
