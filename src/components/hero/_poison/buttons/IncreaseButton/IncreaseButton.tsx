import { FC } from "react";
import { useHeroStatus } from "../../../../../providers/HeroStatus.provider";
import { ButtonProps } from "../Button.props";
import S from "./IncreaseButton.module.scss";

export const IncreaseButton: FC<ButtonProps> = (props) => {
    const { setHeroCurrentPoison, heroCurrentPoison } = useHeroStatus();

    const handleIncreaseHeroCurrentPoison = () => {
        let heroPoisonCounterIncrease = heroCurrentPoison + props.amount;

        if (heroPoisonCounterIncrease > 10) {
            heroPoisonCounterIncrease = 10;
        }
        
        setHeroCurrentPoison(heroPoisonCounterIncrease);
    };

    return (
        <button className={S.wrapper} onClick={handleIncreaseHeroCurrentPoison}>
            {props.title}
        </button>
    );
};
