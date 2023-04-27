import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./DecreaseButton.module.scss";

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentPoison, heroCurrentPoison } = useHeroStatus();

    const handleIncreaseHeroCurrentPoison = () => {
        setHeroCurrentPoison((poison: number) => poison - props.amount);

        if (heroCurrentPoison <= 0) {
            setHeroCurrentPoison(0);
        }
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseHeroCurrentPoison}>
            {props.title}
        </button>
    );
};
