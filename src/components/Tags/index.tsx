import React from "react";

import {
    Wrapper,
    Link,
    List,
} from "./style";

type TProps = {
    links: {
        title: string,
        href:string
    }[];
};

const Tags: React.FC<TProps> = ({ links }) => (
    <Wrapper>
        {links.map(item =>
            <List>
                <Link href={item.href}>
                    {item.title}
                </Link>
            </List>
        )}
    </Wrapper>
);

export default Tags;