'use client';

import StyledText from '@/components/styled/StyledText';
import StyledTextDiv from '@/components/styled/StyledTextDiv';
import React from 'react';

const LessImportantBlock: React.FC = () => {
    return (
        <StyledTextDiv>
            <StyledText as="span" $color="600" $weight="900">
                Less important
            </StyledText>
            &nbsp;block
        </StyledTextDiv>
    );
};

export default LessImportantBlock;
