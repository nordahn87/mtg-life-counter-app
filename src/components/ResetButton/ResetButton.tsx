import { FC, Fragment, useState } from "react";
import { useCommanderDamage } from "../../providers/CommanderDamage.provider";
import { useHeroMaxHealth } from "../../providers/HeroMaxHealth.provider";
import S from "./ResetButton.module.scss";

export const ResetButton: FC = () => {
    const [showReset, setShowReset] = useState<boolean>(false);

    const { setHeroMaxHealth } = useHeroMaxHealth();
    const { setCommanderDamageOpponentOne, setCommanderDamageOpponentTwo, setCommanderDamageOpponentThree } =
        useCommanderDamage();

    // This will reset state and close reset option
    const handleReset = () => {
        setHeroMaxHealth(40);
        setCommanderDamageOpponentOne(0);
        setCommanderDamageOpponentTwo(0);
        setCommanderDamageOpponentThree(0);
        setShowReset(false);
    };

    const openResetOption = () => {
        setShowReset(!showReset);
    };

    const closeResetOption = () => {
        setShowReset(false);
    };

    return (
        <div className={S.wrapper}>
            <button className={S.resetButton} onClick={openResetOption}>
                Reset
            </button>
            {showReset ? (
                <div className={S.container}>
                    <button className={S.resetButtonConfirm} onClick={handleReset}>
                        Yes
                    </button>
                    <button className={S.resetButtonCancel} onClick={closeResetOption}>
                        No
                    </button>
                </div>
            ) : null}
        </div>
    );
};
