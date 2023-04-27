import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./IncreaseButton.module.scss";

export const IncreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentPoison, heroCurrentPoison } = useHeroStatus();

    const handleIncreaseHeroCurrentPoison = () => {
        setHeroCurrentPoison((poison: number) => poison + props.amount);

        if (heroCurrentPoison >= 10) {
            setHeroCurrentPoison(10);
        }
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseHeroCurrentPoison}>
            {props.title}
        </button>
    );
};
