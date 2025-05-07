import React from 'react';

import data from "../../api/dataMock.json";
import { Footer } from '@/src/components/Footer';
import { GoTop } from '@/src/components/GoTop';
import { Menu } from '@/src/components/Menu';

export type MainProps = {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window && window.scrollTo(0, 0);
    };

    return (
        <>
            <Menu links={data.menuAttributes} />
                {children}
            <Footer />
            <GoTop handleClick={() => handleClick}/>
        </>
    );
};