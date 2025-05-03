// import { GoTop } from '@/src/components/GoTop';
import React from 'react';

export type MainProps = {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     event.preventDefault();
//     window && window.scrollTo(0, 0);
//   };

    return (
        <>
            <div>MENU</div>

            <div>
                {children}
                <footer></footer>
            </div>

            {/* <GoTop handleClick={handleClick} /> */}
        </>
    );
};