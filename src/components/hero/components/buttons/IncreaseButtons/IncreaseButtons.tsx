import { FC, Fragment } from "react";
import { IncreaseButton } from "../IncreaseButton/IncreaseButton";
import S from "./IncreaseButtons.module.scss";

export const IncreaseButtons: FC = () => {
    const buttonsData = [
        {
            id: 1,
            amount: 1,
            title: "1",
        },
        {
            id: 2,
            amount: 5,
            title: "5",
        },
        {
            id: 3,
            amount: 10,
            title: "10",
        },
    ];

    return (
        <div className={S.wrapper}>
            {buttonsData.map((item: any) => {
                return (
                    <Fragment key={item.id}>
                        <IncreaseButton amount={item.amount} title={item.title} />
                    </Fragment>
                );
            })}
        </div>
    );
};
