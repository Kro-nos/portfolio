import React from 'react';

import SkillsOverview from '../SkillsOverview';
import SectionContainer from '../SectionContainer';

export default function Skills() {
    return (
        <SectionContainer
            id="Skills"
            name="Skills"
            headerText="Skills"
            useHeaderStyle
        >
            <SkillsOverview />
        </SectionContainer>
    );
};