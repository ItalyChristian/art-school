import React from 'react';

import * as S from './styles';
import { Container_Flex_Column as Container_Flex_Column } from '../../styles/globals';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export type CardProps = {
    title: string;
    text: string;
}

export const ServicesCard = ({ title, text }: CardProps) => {
    return (
        <Container_Flex_Column>
            <S.Card>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row"
                        sx={{
                        justifyContent: "space-between",
                        alignItems: "center"}}
                    >
                        <Grid size={7}>
                            <S.LeftSide>
                                <IoArrowForwardCircleOutline />
                                <a>{title}</a>
                            </S.LeftSide>
                        </Grid>
                        
                        <Grid size={5}>
                            <S.RightSide><p>{text}</p></S.RightSide>
                        </Grid>
                    </Grid>
                </Box>
            </S.Card>
        </Container_Flex_Column>
    );
};