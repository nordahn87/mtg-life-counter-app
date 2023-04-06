import { FC } from "react";
import { IncreaseButton } from "../IncreaseButton/IncreaseButton";
import S from "./IncreaseButtons.module.scss";

export interface IncreaseButtonsProps {
    setCommanderDamage: any;
    CurrentCommanderDamage: any;
}

export const IncreaseButtons: FC<IncreaseButtonsProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <IncreaseButton
                amount={1}
                title={"1"}
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
            <IncreaseButton
                amount={5}
                title={"5"}
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
        </div>
    );
};
