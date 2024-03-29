import { HighlightName, IProject, SectionName, SkillType, ToolType } from '../IProject'

const thumbnail = 'monogram.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/k-monogram/large6.jpg'

export const kMonogram: IProject = {
	details: {
		header: 'K Monogram',
		thumbnail: thumbnail,
	},
	content: [
		{
			slideshow: {
				width: 1250,
				slides: [
					{
						img: img1,
					},
				],
			},
		},
		{
			header: SectionName.Overview,
			body: 'K monogram design',
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Skills,
					tags: [SkillType.Design],
				},
				{
					header: HighlightName.Tools,
					tags: [ToolType.Illustrator],
				},
			],
		},
	],
}
