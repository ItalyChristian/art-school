import React, { useCallback } from 'react';

import data from "../../api/dataMock.json";
import { Footer } from '@/src/components/Footer';
import { GoTop } from '@/src/components/GoTop';
import { Menu } from '@/src/components/Menu';

export type MainProps = {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <Menu links={data.menuAttributes} />
                {children}
            <Footer />
            <GoTop handleClick={handleClick} />
        </>
    );
};