import React from "react";
import {
    Link,
    List,
    Wrapper
} from "./style";

type TProps = {
    countArticles: number,
    limit: number,
    links: {title: string, href:string}[];
};

const Pagination: React.FC<TProps> = ({countArticles, limit, links}) => (
    <Wrapper>
        <List>
            {links.map(item =>
                <li>
                    <Link href={item.href}>
                        {item.title}
                    </Link>
                </li>
            )}
        </List>
    </Wrapper>
);

export default Pagination;