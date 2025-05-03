import React from 'react';

import * as S from './styles';
import { Button } from '../Button';

type BannerProps = {
  backgroundImage: any;
  title: string;
  textButton: string;
//   onButtonClick?: () => void;
};

export const BannerContainer = ({ backgroundImage, title, textButton}: BannerProps) => {
    return (
        <S.Container backgroundImage={backgroundImage}>
            <S.Content>
                <S.Title>{title}</S.Title>
                <Button textButton={textButton} />
                {/* {buttonText && <S.Button onClick={onButtonClick}>{buttonText}</S.Button>} */}
            </S.Content>
        </S.Container>
    );
};