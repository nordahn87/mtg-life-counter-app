import { FC, useEffect, useState } from "react";
import { CommanderDamageCounter } from "../../CommanderDamageCounter/CommanderDamageCounter";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import S from "./Opponent.module.scss";

export interface OpponentProps {
    CurrentCommanderDamage: any;
    setCommanderDamage: any;
}

export const Opponent: FC<OpponentProps> = (props) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        console.log(props.CurrentCommanderDamage);

        if (props.CurrentCommanderDamage < 0 && props.CurrentCommanderDamage > 21) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
        console.log(props.CurrentCommanderDamage);

        console.log("Is this disabled? " + isDisabled);
    }, [props.CurrentCommanderDamage]);

    return (
        <div className={S.wrapper}>
            <DecreaseButtons
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
            <CommanderDamageCounter CurrentCommanderDamage={props.CurrentCommanderDamage} />
            <IncreaseButtons
                setCommanderDamage={props.setCommanderDamage}
                CurrentCommanderDamage={props.CurrentCommanderDamage}
            />
        </div>
    );
};
