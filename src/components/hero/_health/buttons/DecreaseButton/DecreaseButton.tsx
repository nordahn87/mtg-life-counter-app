import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./DecreaseButton.module.scss";

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentHealth } = useHeroStatus();

    const handleDecreaseHeroCurrentHealth = () => {
        setHeroCurrentHealth((health: number) => health - props.amount);
    };

    return (
        <button className={S.wrapper} onClick={handleDecreaseHeroCurrentHealth}>
            {props.title}
        </button>
    );
};
