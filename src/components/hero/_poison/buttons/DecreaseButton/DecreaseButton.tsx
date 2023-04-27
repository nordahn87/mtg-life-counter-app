import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./DecreaseButton.module.scss";

export const DecreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentPoison, heroCurrentPoison } = useHeroStatus();

    const handleIncreaseHeroCurrentPoison = () => {
        let heroPoisonCounterDecrease = heroCurrentPoison - props.amount;

        if (heroPoisonCounterDecrease < 0) {
            heroPoisonCounterDecrease = 0;
        }
        
        setHeroCurrentPoison(heroPoisonCounterDecrease);
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseHeroCurrentPoison}>
            {props.title}
        </button>
    );
};
