import React from "react";
import {
    Wrapper,
    LogoCard,
    BodyCard,
    TitleCard,
    TextCadr,
} from "./style";

type TProps = {
    children: React.ReactNode,
    url: string,
    title: string,
};

const Card: React.FC<TProps> = ({
    children,
    url,
    title,
}) => (
    <Wrapper>
        <LogoCard src={url}/>
        <BodyCard>
            <TitleCard>{title}</TitleCard>
            <TextCadr>{children}</TextCadr>
        </BodyCard>

    </Wrapper>
);

export default Card;