// import { GoTop } from '@/src/components/GoTop';
import React from 'react';

export type MainProps = {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {

    return (
        <>
            <div>MENU</div>

            <div>
                {children}
                <footer></footer>
            </div>
        </>
    );
};