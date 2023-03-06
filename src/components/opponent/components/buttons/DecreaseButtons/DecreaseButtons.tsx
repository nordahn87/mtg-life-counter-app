import { FC } from "react";
import { DecreaseButton } from "../DecreaseButton/DecreaseButton";
import S from "./DecreaseButtons.module.scss";

export const DecreaseButtons: FC = () => {
    return (
        <div className={S.container}>
            <DecreaseButton amount={1} title={"1"} />
        </div>
    );
};
