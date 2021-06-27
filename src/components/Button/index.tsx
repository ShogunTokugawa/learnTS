import React from "react";

import {
    ButtonWrapper,
    LinkWrapper,
} from "./style";

type TProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset",
    variant?: string,
    isLink?: boolean,
    href?: string,
    onClick?: () => void,
};

const Button: React.FC<TProps> = ({
        children,
        type = 'button',
        variant = 'secondary',
        isLink = false,
        href,
        onClick,
}) => {
    if (isLink) {
        return (
            <LinkWrapper
                href={href}
            >
                {children}
            </LinkWrapper>
        )
    }

    return (
        <ButtonWrapper
            type={type}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    )
};

export default Button;