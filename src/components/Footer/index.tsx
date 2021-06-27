import React from "react";

import { Wrapper } from "./style";

const Footer = () => {
    const date = (new Date()).getFullYear();

    return (
        <Wrapper>
            @copyright все права защищены {date} год.
        </Wrapper>
    );
};

export default Footer;