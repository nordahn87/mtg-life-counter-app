import { FC } from "react";
import { DecreaseButton } from "../DecreaseButton/DecreaseButton";
import S from "./DecreaseButtons.module.scss";

export const DecreaseButtons: FC = () => {
    return (
        <div className={S.wrapper}>
            <DecreaseButton amount={1} title={"1"} />
            <DecreaseButton amount={5} title={"5"} />
            <DecreaseButton amount={10} title={"10"} />
        </div>
    );
};
