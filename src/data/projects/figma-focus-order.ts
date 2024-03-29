import { IProject, TagType, SkillType, FileType, SectionName, HighlightName } from '../IProject'

const thumbnail = 'focus-orderer.jpg'
const thumbnail2 = 'focus-orderer-twitter.jpg'
const thumbnail3 = 'focus-orderer-instagram.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/1.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/3.jpg'
const img7 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/4.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/video1thumb2.jpg'
const img6 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/video2thumb2.jpg'
const img8 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/v2/v2-1.jpg'
const img9 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/v2/v2-2.jpg'
const img10 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/v2/v2-3.jpg'
const img11 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/v2/v2-4.jpg'
const video1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/v2/v2-video.mp4'
const video2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/focus-orderer/sizedvid2.mp4'

export const focusOrderer: IProject = {
	details: {
		header: 'Figma Focus Orderer',
		thumbnail: thumbnail,
		tags: [TagType.Microsoft, TagType.Tooling],
	},
	content: [
		{
			slideshow: {
				neutralBorder: true,
				width: 1735,
				slides: [
					{
						img: img5,
						caption: 'Community page',
					},
					{
						img: img8,
						caption: 'Annotations and Readout',
					},
					{
						img: img11,
						caption: 'Multiple annotation sets',
					},
					{
						img: img9,
						caption: 'Home view and sorting',
					},
					{
						img: img10,
						caption: 'List view and edit screens',
					},
					{
						img: img4,
						caption: 'FRE with Lottie animations',
						file: {
							type: FileType.Video,
							source: video1,
						},
					},
					{
						img: img7,
						caption: 'Original plugin',
					},
					{
						img: img1,
						caption: 'Plugin V1',
					},
					{
						img: img6,
						caption: 'Plugin V1 - Demo',
						file: {
							type: FileType.Video,
							source: video2,
						},
					},
				],
			},
		},
		{
			header: SectionName.URL,
			body: '<a href="https://www.figma.com/community/plugin/731310036968334777/A11y---Focus-Orderer">https://www.figma.com/community/plugin/731310036968334777/A11y---Focus-Orderer</a>',
		},
		{
			header: SectionName.Accessibility,
			body: `Microsoft's Focus Orderer is a plugin for Figma that allows designers to build accessibility into their designs.  It is publicly available to the figma community.`,
		},
		{
			header: SectionName.Role,
			highlight: [
				{
					header: HighlightName.Skills,
					tags: [SkillType.TypeScript, SkillType.React, SkillType.HTML, SkillType.CSS, SkillType.UIUX],
				},
			],
			body: `My team and I partnered with the a11y team to redesign the Focus Orderer plugin and expand its capabilities.  I rebuilt the plugin in React and added new features including: 
			1) Edit screen to add roles, properties, and comments on each annotation 2) First Run Experience tutorial for new plugin users 3) Auto load user annotations when plugin launches 4) A readout of the annotation details so users can see them without having to download the plugin`,
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Platform,
					tags: [TagType.Figma],
				},
				{
					header: HighlightName.Dates,
					body: 'Sept. 2020 - Present',
				},
				{
					header: HighlightName.Designer,
					body: 'Damien Aistrope, Ben Truelove',
				},
				{
					header: HighlightName.Illustrator,
					body: 'Jason Custer, Nando Costa',
				},
				{
					header: HighlightName.Motion,
					body: 'Chris Lorance',
				},
				{
					header: `Original plugin ${HighlightName.Engineer}`,
					body: 'Tiffany Chen',
				},
				{
					header: HighlightName.Engineer,
					body: 'Kelly Gorr',
				},
			],
		},
		{
			header: SectionName.Hype,
			attachments: [
				{
					header: `Microsoft Design Twitter`,
					thumbnail: thumbnail2,
					file: {
						type: FileType.Link,
						source: 'https://twitter.com/MicrosoftDesign/status/1304072149334925314',
					},
				},
				{
					header: `microsoft.design Instagram`,
					thumbnail: thumbnail3,
					file: {
						type: FileType.Link,
						source: 'https://www.instagram.com/p/CE9dP0ml_Ib/',
					},
				},
			],
		},
	],
}
