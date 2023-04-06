import { FC } from "react";
import { DecreaseButton } from "../DecreaseButton/DecreaseButton";
import S from "./DecreaseButtons.module.scss";

export interface DecreaseButtonsProps {
    setCommanderDamage: any;
    CurrentCommanderDamage: any;
}

export const DecreaseButtons: FC<DecreaseButtonsProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <DecreaseButton
                amount={1}
                title={"1"}
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
            <DecreaseButton
                amount={5}
                title={"5"}
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
        </div>
    );
};
