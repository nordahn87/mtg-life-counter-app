import { FC, useState } from "react";
import S from "./Accordion.module.scss";

type AccordionProps = {
    children: React.ReactNode;
    title: string;
    accordionState: any;
    setAccordionState: any;
};

export const Accordion: FC<AccordionProps> = (props) => {
    const toggleAccordion = () => {
        props.setAccordionState(!props.accordionState);
    };

    return (
        <div className={S.wrapper}>
            <button className={S.button} onClick={toggleAccordion}>
                <div>{props.title}</div>
            </button>
            {props.accordionState ? <div className={S.container}>{props.children}</div> : null}
        </div>
    );
};
