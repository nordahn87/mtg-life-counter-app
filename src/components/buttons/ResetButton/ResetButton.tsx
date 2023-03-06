import { FC, Fragment, useState } from "react";
import { useHeroMaxHealth } from "../../../providers/HeroMaxHealth.provider";
import S from "./ResetButton.module.scss";

export const ResetButton: FC = () => {
    const [showReset, setShowReset] = useState<boolean>(false);
    const { setHeroMaxHealth } = useHeroMaxHealth();

    // This will reset state and close reset option
    const handleReset = () => {
        setHeroMaxHealth(40);
        setShowReset(false);
    };

    const openResetOption = () => {
        setShowReset(true);
    };

    const closeResetOption = () => {
        setShowReset(false);
    };

    return (
        <Fragment>
            <button onClick={openResetOption}>RESET</button>
            {showReset ? (
                <div className={S.container}>
                    <p>Are you sure you want to reset?</p>
                    <button onClick={handleReset}>Yes</button>
                    <button onClick={closeResetOption}>No</button>
                </div>
            ) : null}
        </Fragment>
    );
};
