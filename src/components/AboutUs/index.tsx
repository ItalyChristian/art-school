import React from 'react';

import * as S from './styles';
import  background  from './image.jpeg';
import { ContainerThree } from '../ContainerThree';
import { Heading } from '../Heading';

export const AboutUs = () => {
    return (
        <S.Container>
            <Heading as='h2' size='1.75rem'>Sobre a Escola</Heading>
          
            <ContainerThree
                image={background.src}
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            />
        </S.Container>
    );
};