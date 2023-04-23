import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./IncreaseButton.module.scss";

export const IncreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentHealth } = useHeroStatus();

    const handleIncreaseHeroCurrentHealth = () => {
        setHeroCurrentHealth((health: number) => health + props.amount);
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseHeroCurrentHealth}>
            {props.title}
        </button>
    );
};
