import {
	Button,
	Flex,
	Heading,
	Link,
	ListItem,
	Select,
	Text,
	UnorderedList,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import jobs from '../data/jobs';
import { colors } from '../theme';

const SkillsSelect = ({ expIndex, setIndex }) => (
	<Select value={expIndex} onChange={(e) => setIndex(e.target.value)}>
		{jobs.map((job, index) => (
			<option key={`${job.workplace}-select-option`} value={index}>
				{job.workplace}
			</option>
		))}
	</Select>
);

const SkillsButtons = ({ expIndex, setIndex }) => (
	<Grid
		container
		item
		spacing={2}
		justifyContent='center'
		style={{ margin: 'auto' }}
	>
		{jobs.map((job, index) => (
			<Grid container item key={`${job.workplace}-btn`}>
				<Button
					isActive={expIndex === index}
					isFullWidth
					onClick={() => setIndex(index)}
				>
					{job.workplace}
				</Button>
			</Grid>
		))}
	</Grid>
);

const SkillsDetails = ({ index }) => {
	const job = jobs[index];
	const secondary = useColorModeValue(
		colors.secondary.light,
		colors.secondary.dark
	);

	return (
		<Grid container item direction='column'>
			<Grid container item style={{ margin: '12px' }}>
				<Heading as='h1' size='md'>
					{job.position} {' '}
					<Link href={job.url} isExternal color={secondary}>
						{job.workplace}
					</Link>
				</Heading>
			</Grid>
			<Grid container item style={{ marginLeft: '12px' }}>
				{job.duration.map((duration) => (
					<Grid key={duration} container item>
						<Text mt={2}>{duration}</Text>
					</Grid>
				))}
			</Grid>
			<Grid
				container
				item
				style={{ marginLeft: '12px', marginBottom: '12px' }}
			>
				<UnorderedList mt={2}>
					{job.description.map((desc) => (
						<ListItem key={desc}>{desc}</ListItem>
					))}
				</UnorderedList>
			</Grid>
		</Grid>
	);
};

export default function SkillsOverview() {
	const [index, setIndex] = useState(0);
	const showSelect = useBreakpointValue({
		base: false,
		lg: true,
	});
	const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

	return (
		<Flex
			as={Grid}
			container
			item
			direction='row'
			justify='center'
			xs={9}
			sm={6}
			bgColor={bg}
			borderRadius='lg'
			borderWidth={bg === colors.bg.light ? '1px' : ''}
			rounded='md'
			shadow='lg'
			style={{
				margin: '24px',
				marginTop: '3vh',
				width: '75vw',
				height: '60vh',
			}}
		>
			<Grid
				container
				direction='column'
				item
				xs={9}
				sm={6}
				md={2}
				alignItems='center'
				justifyContent='flex-start'
				style={{
					marginTop: '24px',
					marginBottom: '24px',
					marginRight: '3vw',
				}}
			>
				{showSelect ? (
					<SkillsButtons expIndex={index} setIndex={setIndex} />
				) : (
					<SkillsSelect expIndex={index} setIndex={setIndex} />
				)}
			</Grid>
			<Grid
				container
				item
				xs={9}
				sm={6}
				style={{
					marginTop: '24px',
					marginBottom: '24px',
					marginLeft: '12px',
				}}
			>
				<SkillsDetails index={index} />
			</Grid>
		</Flex>
	);
}
