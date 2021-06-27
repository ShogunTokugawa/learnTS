import React from "react";

import {
    Wrapper,
    List,
    Link,
} from "./style";

type TProps = {
    links: {title: string, link:string}[];
};

const Nav: React.FC<TProps> = ({links}) => (
    <Wrapper>
        <List>
            {links.map(item =>
                <li>
                    <Link href={item.link}>
                        {item.title}
                    </Link>
                </li>
            )}
        </List>
    </Wrapper>
);

export default Nav;

// x = 5 // : number
// x = [1,2,3]: number[]
// x = ['s1','s2', 's3']: string[]
// x = [{ title: 'titt', link: 'https://'}]: {title: string, link:string}[]