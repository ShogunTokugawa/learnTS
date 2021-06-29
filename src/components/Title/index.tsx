import React from "react";

import {
    Caption,
} from "./style";

type TProps = {
    titles: string,
    color: string,
    size: string,
};

const Title: React.FC<TProps> = ({
    titles,
    color,
    size,
}) => (
    <Caption
        color={color}
        size={size}
    >
        {titles}
    </Caption>
);

export default Title;