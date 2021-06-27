import React from 'react';

import {
    Logo,
    Title,
    Wrapper
} from './style';

type TProps = {
    title: string,
    logo: string,
    bgColor: string,
};

const Header: React.FC<TProps> = ({
    title,
    logo,
    bgColor,
}) => (
    <Wrapper
        bgColor={bgColor}
    >
        <Title
            size={'20px'}
        >
            Добро пожаловать на {title}
        </Title>

        <Logo
            src={logo}
            alt={title}
        />
    </Wrapper>
);

export default Header;