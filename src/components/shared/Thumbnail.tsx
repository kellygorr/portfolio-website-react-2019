import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IThumbnail } from '../data/IProject'
import { AccentColor, LoadingColor } from '../../GlobalStyles'
import { Tag } from '.'

interface IThumbnailProps {
	data: IThumbnail
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { data } = props
	const [isLoaded, setIsLoaded] = React.useState(false)

	return (
		<ThumbnailContainer>
			<ThumbnailImage
				style={{
					backgroundImage: isLoaded ? `url('${data.thumbnail}')` : `url('data:image/png;base64,${transparentBase64}')`,
				}}
			/>
			<H3>{data.header}</H3>
			{/* We don't want to nest <a>'s*/}
			<ThumbnailLink to={`/page/${data.header.replace(' ', '').toLowerCase()}`} />

			{data.tags && (
				<Tags>
					[{/* We want the thumbnail link behind the tag links */}
					<ThumbnailLink to={`/page/${data.header.replace(' ', '').toLowerCase()}`} />
					{data.tags.map((tag, index) => (
						<Tag key={index} isLastTag={data.tags ? index === data.tags.length - 1 : false} tag={tag} />
					))}
					]
				</Tags>
			)}
			<LoadingImage src={data.thumbnail} onLoad={() => setIsLoaded(true)} />
		</ThumbnailContainer>
	)
}

const ThumbnailLink = styled(Link)`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	grid-column: gallery;
`

const ThumbnailImage = styled.div`
	width: 100%;
	height: 175px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border: 3px solid #ffffff;
	background-color: ${LoadingColor};
	transition: background-image 500ms ease-in, border-color 100ms ease-in;
`

const H3 = styled.h3`
	width: 100%;
	text-align: center;
	padding-top: 8px;
	font-size: 1em;
	font-family: 'Museo_Slab_500_2';
	transition: color 100ms ease-in;
`
const Tags = styled.div`
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;
`

const ThumbnailContainer = styled.div`
	display: flex;
	flex-direction: column;

	&:hover {
		${ThumbnailImage} {
			border-color: ${AccentColor};
		}
		${H3} {
			color: ${AccentColor};
		}
	}
`
const LoadingImage = styled.img`
	display: none;
`

const transparentBase64 =
	'iVBORw0KGgoAAAANSUhEUgAAAooAAAFKCAYAAACadH6lAAABNWlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5XSJNxc//QhHN06uLj7BE6OgoPiE/gGilMHhwjBqfSbvvPjcDg/MCp23WkYZRjEWrWbjnQ9X86/MscMAHTCLLVbrSOAOIkj/iPg5wMB8LZt150G07EYpkoDY2C3G2UhiArQv9apBjECzKCfahCPgKnO2jUQz0Cpl/s7UApy/wRKyvV8EN+A2XM9H4wFwAxyXwNMHd1ogFqSDtVF71zLqmVZ0u4mQSRPh5mOBpk8jMNEpYnq6KgL5P8BsJwvtpuO3Kha1sHmlL0n4nq+zO3rBAGIlZciKwgv1dWfCmNv8lzcGK3C8QPMjots/xbut2DprsjWq1DegafRL8KzT/57sqVFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPQmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDItMTVUMTk6NTE6NDItMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDZUMTM6MzU6MjQtMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTA2VDEzOjM1OjI0LTA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODRjZDExZi05NGExLTQ2MjItYjU2My01NzcxNWUzZDA0ZjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWMxMDAwMi0zMTRkLTljNGEtYTAwYS00OTZmMmRhZjFmZTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOEUxQTgxMzIxQzYzRDU5QiIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgdGlmZjpJbWFnZVdpZHRoPSI2NTAiIHRpZmY6SW1hZ2VMZW5ndGg9IjMzMCIgdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPSIyIiB0aWZmOk9yaWVudGF0aW9uPSIxIiB0aWZmOlNhbXBsZXNQZXJQaXhlbD0iMyIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6RXhpZlZlcnNpb249IjAyMzEiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI2NTAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIzMzAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxODAxMTc0MDcyMDY4MTE4RTFBODEzMjFDNjNENTlCIiBzdEV2dDp3aGVuPSIyMDE2LTAyLTE1VDE5OjUxOjQyLTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6QzM1ODM4M0UwQzIwNjgxMThFMUE4MTMyMUM2M0Q1OUIiIHN0RXZ0OndoZW49IjIwMTYtMDItMTVUMjA6NDE6MTUtMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0NTgzODNFMEMyMDY4MTE4RTFBODEzMjFDNjNENTlCIiBzdEV2dDp3aGVuPSIyMDE2LTAyLTE1VDIwOjQxOjE1LTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTdmN2UwNmMtNjUzZC00NjZkLTg0NjMtMDc4Y2UyNGE0YWJlIiBzdEV2dDp3aGVuPSIyMDE5LTEyLTA2VDEzOjM1OjI0LTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mjg0Y2QxMWYtOTRhMS00NjIyLWI1NjMtNTc3MTVlM2QwNGY3IiBzdEV2dDp3aGVuPSIyMDE5LTEyLTA2VDEzOjM1OjI0LTA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTdmN2UwNmMtNjUzZC00NjZkLTg0NjMtMDc4Y2UyNGE0YWJlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4RTFBODEzMjFDNjNENTlCIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThFMUE4MTMyMUM2M0Q1OUIiLz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MEVEQTIxNDI1QjM2NjNFMkNGNDdBM0U3NTNERDAxNEE8L3JkZjpsaT4gPHJkZjpsaT5EM0VDM0QyNkEyMEQ5M0RFMjFFM0QzODI0Q0NFQzNGNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTJEQ0RDNjMxNTIwNjgxMUE3OUZGOTA2NTg5RDZGOUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjQ4NDZENjYwRTlDNDExRTJCNEZEOTQ0RkI4NEQ1RDI0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpGMkRBMzJGRjBFMjA2ODExODcxRkQ2Qjg4MDdBRUZDNTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODM5RjQ4QjFCNDY3REQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkY4N0YxMTc0MDcyMDY4MTE4MDgzOUY0OEIxQjQ2N0REPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpGOTdGMTE3NDA3MjA2ODExODA4MzlGNDhCMUI0NjdERDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8dGlmZjpCaXRzUGVyU2FtcGxlPiA8cmRmOlNlcT4gPHJkZjpsaT44PC9yZGY6bGk+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPC9yZGY6U2VxPiA8L3RpZmY6Qml0c1BlclNhbXBsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hKNI4AAAF7ElEQVR4nO3WsRHAIBDAsJD9d356zj0U0gQuvWbmAwCA0387AACANxlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIBlFAACSUQQAIG2okQWRlNZpJwAAAABJRU5ErkJggg=='
