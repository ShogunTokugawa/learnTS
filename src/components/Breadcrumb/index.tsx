import React from "react";

import {
    Link,
    List,
    Listed,
    Wrapper,
} from "./style";

type TProps = {
    links: {
        title: string,
        link:string
    }[];
};

const Breadcrumb: React.FC<TProps> = ({links}) => (
    <Wrapper>
        <List>
            {links.map(item =>
                <Listed>
                    <Link href={item.link}>
                        {item.title}
                    </Link>
                </Listed>
            )}
        </List>
    </Wrapper>
);

export default Breadcrumb;