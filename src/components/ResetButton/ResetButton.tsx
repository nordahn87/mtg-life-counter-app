import { FC, Fragment, useState } from "react";
import { useCommanderDamage } from "../../providers/CommanderDamage.provider";
import { useHeroMaxHealth } from "../../providers/HeroMaxHealth.provider";
import S from "./ResetButton.module.scss";

type ResetButtonProps = {
    setAccordionState: any;
};

export const ResetButton: FC<ResetButtonProps> = (props) => {
    const { setHeroMaxHealth } = useHeroMaxHealth();
    const { setCommanderDamageOpponentOne, setCommanderDamageOpponentTwo, setCommanderDamageOpponentThree } =
        useCommanderDamage();

    // This will reset state and close reset option
    const handleReset = () => {
        setHeroMaxHealth(40);
        setCommanderDamageOpponentOne(0);
        setCommanderDamageOpponentTwo(0);
        setCommanderDamageOpponentThree(0);
        props.setAccordionState(false);
    };

    const cancelReset = () => {
        props.setAccordionState(false);
    };

    return (
        <div className={S.wrapper}>
            <p className={S.confirmationText}>Sure you want to reset?</p>
            <button className={S.resetButtonConfirm} onClick={handleReset}>
                Confirm
            </button>
            <button className={S.resetButtonCancel} onClick={cancelReset}>
                Cancel
            </button>
        </div>
    );
};
