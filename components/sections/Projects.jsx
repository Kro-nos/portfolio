import React from 'react';

import ProjectsOverview from '../ProjectsOverview';
import SectionContainer from '../SectionContainer';

export default function MoreProjects() {
    return (
        <SectionContainer
            id='projects'
            name='projects'
            headerText='Projects'
            useHeaderStyle
        >
            <ProjectsOverview />
        </SectionContainer>
    );
}