import React from "react";

import {
    Wrapper,
} from "./style";

type TProps = {
    children: React.ReactNode,
    type: string,
}

const Alert: React.FC<TProps> = ({
     children,
     type,
}) => (
    <Wrapper
        type={type}
        role="alert"
    >
        {children}
    </Wrapper>
);

export default Alert;