import styled from 'styled-components/macro'
import { IThumbnail } from '../../../data/IProject'
import { AnimateIn, SMALL_SCREEN } from '../../../styles/GlobalStyles'
import { GetPageName, Tags } from '..'
import { useInView } from 'react-intersection-observer'
import { LinkWrapper } from './LinkWrapper'

interface IThumbnailProps {
	data: IThumbnail
	hideTags?: boolean
	style?: React.CSSProperties
	setQuery: (query: string) => void
	thumbnailClick?: () => void
	showFull?: boolean
}

export const Thumbnail = (props: IThumbnailProps): JSX.Element => {
	const { data, style, hideTags } = props
	const link = data.file ? data.file.source : `/page/${GetPageName(data.header)}`
	const thumbnailStyle: React.CSSProperties = !data.thumbnail
		? { pointerEvents: 'none' }
		: { alignItems: props.showFull ? 'flex-start' : 'center' }

	const [ref, inView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<Container ref={ref} style={{ ...thumbnailStyle, ...style }} aria-hidden={!data.thumbnail}>
			<LinkStyle onClick={props.thumbnailClick}>
				<LinkWrapper link={link} tabIndex={!data.thumbnail ? -1 : undefined}>
					<ImageWrapper>{inView && data.thumbnail && <Image src={data.thumbnail} />}</ImageWrapper>
					<H3 style={{ textAlign: props.showFull ? 'start' : 'center' }}>
						<span>{props.showFull && 'Title:'}</span>
						{data.header}
					</H3>
				</LinkWrapper>
			</LinkStyle>
			<Details>
				<span>{props.showFull && 'Details: '}</span>
				{data.tags && !hideTags && <Tags tags={data.tags} setQuery={props.setQuery} />}
			</Details>
			{props.showFull &&
				data.highlights &&
				data.highlights.map((highlight, index) => (
					<Details key={index}>
						<span>{highlight.header}: </span>
						{highlight.tags && !hideTags && <Tags tags={highlight.tags} setQuery={props.setQuery} />}
					</Details>
				))}
		</Container>
	)
}

const Container = styled.li`
	display: flex;
	flex-direction: column;
	line-height: 1.5rem;
`

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 5px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.thumbnail};
	border: 3px solid transparent;
	background-clip: padding-box; // this should eliminate the need to have a border color (instead of transparent), but it is not hiding the background completely
	transition: border-color 100ms ease-in;
`
const Image = styled.img`
	height: 200px;
	min-height: 200px;
	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;
	width: 100%;
	object-fit: cover;

	@media (min-width: ${SMALL_SCREEN}px) {
		height: 100%;
	}
`

const H3 = styled.h3`
	font-family: 'Museo_Slab_500_2';
	transition: color 100ms ease-in;

	span {
		padding-right: 5px;
	}
`

const LinkStyle = styled.div`
	width: 100%;
	a {
		&:hover,
		&:focus {
			text-decoration: none;
			${ImageWrapper} {
				border-color: ${({ theme }) => theme.accent};
			}
			${H3} {
				color: ${({ theme }) => theme.accent};
			}
		}
	}
`
const Details = styled.div`
	display: flex;

	> span {
		padding-right: 5px;
	}
`
