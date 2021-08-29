export const NeutralColors = {
	black: 'rgba(0,0,0,1)',
	gray95: 'rgba(0,0,0,0.95)',
	gray85: '#262626',
	gray81: 'rgba(0,0,0,0.81)',
	gray11: 'rgba(0,0,0,0.11)',
	gray06: '#efefef',
	white: 'rgba(255,255,255,1)',
}

export const AccentColors = {
	red: '#eb2f1b',
}

export interface Theme {
	accent: string
	neutral: string
	text: string
	textNegative: string
	background: string
	backgroundNegative: string
	footerText: string
	footerBackground: string
	thumbnail: string
	sidebarText: string
	sidebarBackground: string
}

export const themeLight: Theme = {
	accent: AccentColors.red,
	neutral: NeutralColors.gray11,
	text: NeutralColors.gray81,
	textNegative: NeutralColors.white,
	background: NeutralColors.white,
	backgroundNegative: NeutralColors.gray85,
	footerText: NeutralColors.white,
	footerBackground: NeutralColors.gray95,
	thumbnail: NeutralColors.gray06,
	sidebarText: NeutralColors.white,
	sidebarBackground: NeutralColors.gray95,
}

export const themeDark: Theme = {
	accent: AccentColors.red,
	neutral: NeutralColors.gray11,
	text: NeutralColors.white,
	textNegative: NeutralColors.gray81,
	background: NeutralColors.gray85,
	backgroundNegative: NeutralColors.white,
	footerText: NeutralColors.white,
	footerBackground: NeutralColors.gray95,
	thumbnail: NeutralColors.gray06,
	sidebarText: NeutralColors.gray85,
	sidebarBackground: NeutralColors.white,
}
