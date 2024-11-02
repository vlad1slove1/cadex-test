'use client';

import StyledText from '@/components/styled/StyledText';
import StyledTextDiv from '@/components/styled/StyledTextDiv';
import React from 'react';

const AlsoImportantBlock: React.FC = () => {
    return (
        <StyledTextDiv>
            Also&nbsp;
            <StyledText as="span" $color="600" $weight="900">
                very important
            </StyledText>
            &nbsp;title
        </StyledTextDiv>
    );
};

export default AlsoImportantBlock;
