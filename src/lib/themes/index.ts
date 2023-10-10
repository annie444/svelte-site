import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const rainbow: CustomThemeConfig = {
	name: 'rainbow',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-surface-700)',
		'--on-secondary': 'var(--color-primary-300)',
		'--on-tertiary': 'var(--color-surface-700)',
		'--on-success': 'var(--color-surface-700)',
		'--on-warning': 'var(--color-surface-700)',
		'--on-error': 'var(--color-surface-700)',
		'--on-surface': 'var(--color-primary-300)',
		// =~= Theme Colors  =~=
		// primary | #F6F2E4
		'--color-primary-50': '254 253 251', // #fefdfb
		'--color-primary-100': '253 252 250', // #fdfcfa
		'--color-primary-200': '253 252 248', // #fdfcf8
		'--color-primary-300': '251 250 244', // #fbfaf4
		'--color-primary-400': '249 246 236', // #f9f6ec
		'--color-primary-500': '246 242 228', // #F6F2E4
		'--color-primary-600': '221 218 205', // #dddacd
		'--color-primary-700': '185 182 171', // #b9b6ab
		'--color-primary-800': '148 145 137', // #949189
		'--color-primary-900': '121 119 112', // #797770
		// secondary | #874BD1
		'--color-secondary-50': '237 228 248', // #ede4f8
		'--color-secondary-100': '231 219 246', // #e7dbf6
		'--color-secondary-200': '225 210 244', // #e1d2f4
		'--color-secondary-300': '207 183 237', // #cfb7ed
		'--color-secondary-400': '171 129 223', // #ab81df
		'--color-secondary-500': '135 75 209', // #874BD1
		'--color-secondary-600': '122 68 188', // #7a44bc
		'--color-secondary-700': '101 56 157', // #65389d
		'--color-secondary-800': '81 45 125', // #512d7d
		'--color-secondary-900': '66 37 102', // #422566
		// tertiary | #4D96FF
		'--color-tertiary-50': '228 239 255', // #e4efff
		'--color-tertiary-100': '219 234 255', // #dbeaff
		'--color-tertiary-200': '211 229 255', // #d3e5ff
		'--color-tertiary-300': '184 213 255', // #b8d5ff
		'--color-tertiary-400': '130 182 255', // #82b6ff
		'--color-tertiary-500': '77 150 255', // #4D96FF
		'--color-tertiary-600': '69 135 230', // #4587e6
		'--color-tertiary-700': '58 113 191', // #3a71bf
		'--color-tertiary-800': '46 90 153', // #2e5a99
		'--color-tertiary-900': '38 74 125', // #264a7d
		// success | #6BCB77
		'--color-success-50': '233 247 235', // #e9f7eb
		'--color-success-100': '225 245 228', // #e1f5e4
		'--color-success-200': '218 242 221', // #daf2dd
		'--color-success-300': '196 234 201', // #c4eac9
		'--color-success-400': '151 219 160', // #97dba0
		'--color-success-500': '107 203 119', // #6BCB77
		'--color-success-600': '96 183 107', // #60b76b
		'--color-success-700': '80 152 89', // #509859
		'--color-success-800': '64 122 71', // #407a47
		'--color-success-900': '52 99 58', // #34633a
		// warning | #FFD93D
		'--color-warning-50': '255 249 226', // #fff9e2
		'--color-warning-100': '255 247 216', // #fff7d8
		'--color-warning-200': '255 246 207', // #fff6cf
		'--color-warning-300': '255 240 177', // #fff0b1
		'--color-warning-400': '255 228 119', // #ffe477
		'--color-warning-500': '255 217 61', // #FFD93D
		'--color-warning-600': '230 195 55', // #e6c337
		'--color-warning-700': '191 163 46', // #bfa32e
		'--color-warning-800': '153 130 37', // #998225
		'--color-warning-900': '125 106 30', // #7d6a1e
		// error | #FF6B6B
		'--color-error-50': '255 233 233', // #ffe9e9
		'--color-error-100': '255 225 225', // #ffe1e1
		'--color-error-200': '255 218 218', // #ffdada
		'--color-error-300': '255 196 196', // #ffc4c4
		'--color-error-400': '255 151 151', // #ff9797
		'--color-error-500': '255 107 107', // #FF6B6B
		'--color-error-600': '230 96 96', // #e66060
		'--color-error-700': '191 80 80', // #bf5050
		'--color-error-800': '153 64 64', // #994040
		'--color-error-900': '125 52 52', // #7d3434
		// surface | #28313E
		'--color-surface-50': '223 224 226', // #dfe0e2
		'--color-surface-100': '212 214 216', // #d4d6d8
		'--color-surface-200': '201 204 207', // #c9cccf
		'--color-surface-300': '169 173 178', // #a9adb2
		'--color-surface-400': '105 111 120', // #696f78
		'--color-surface-500': '40 49 62', // #28313E
		'--color-surface-600': '36 44 56', // #242c38
		'--color-surface-700': '30 37 47', // #1e252f
		'--color-surface-800': '24 29 37', // #181d25
		'--color-surface-900': '20 24 30' // #14181e
	}
};

export const warm: CustomThemeConfig = {
	name: 'warm',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #ffa299
		'--color-primary-50': '255 241 240', // #fff1f0
		'--color-primary-100': '255 236 235', // #ffeceb
		'--color-primary-200': '255 232 230', // #ffe8e6
		'--color-primary-300': '255 218 214', // #ffdad6
		'--color-primary-400': '255 190 184', // #ffbeb8
		'--color-primary-500': '255 162 153', // #ffa299
		'--color-primary-600': '230 146 138', // #e6928a
		'--color-primary-700': '191 122 115', // #bf7a73
		'--color-primary-800': '153 97 92', // #99615c
		'--color-primary-900': '125 79 75', // #7d4f4b
		// secondary | #ffccdc
		'--color-secondary-50': '255 247 250', // #fff7fa
		'--color-secondary-100': '255 245 248', // #fff5f8
		'--color-secondary-200': '255 242 246', // #fff2f6
		'--color-secondary-300': '255 235 241', // #ffebf1
		'--color-secondary-400': '255 219 231', // #ffdbe7
		'--color-secondary-500': '255 204 220', // #ffccdc
		'--color-secondary-600': '230 184 198', // #e6b8c6
		'--color-secondary-700': '191 153 165', // #bf99a5
		'--color-secondary-800': '153 122 132', // #997a84
		'--color-secondary-900': '125 100 108', // #7d646c
		// tertiary | #8B4513
		'--color-tertiary-50': '238 227 220', // #eee3dc
		'--color-tertiary-100': '232 218 208', // #e8dad0
		'--color-tertiary-200': '226 209 196', // #e2d1c4
		'--color-tertiary-300': '209 181 161', // #d1b5a1
		'--color-tertiary-400': '174 125 90', // #ae7d5a
		'--color-tertiary-500': '139 69 19', // #8B4513
		'--color-tertiary-600': '125 62 17', // #7d3e11
		'--color-tertiary-700': '104 52 14', // #68340e
		'--color-tertiary-800': '83 41 11', // #53290b
		'--color-tertiary-900': '68 34 9', // #442209
		// success | #75d175
		'--color-success-50': '234 248 234', // #eaf8ea
		'--color-success-100': '227 246 227', // #e3f6e3
		'--color-success-200': '221 244 221', // #ddf4dd
		'--color-success-300': '200 237 200', // #c8edc8
		'--color-success-400': '158 223 158', // #9edf9e
		'--color-success-500': '117 209 117', // #75d175
		'--color-success-600': '105 188 105', // #69bc69
		'--color-success-700': '88 157 88', // #589d58
		'--color-success-800': '70 125 70', // #467d46
		'--color-success-900': '57 102 57', // #396639
		// warning | #FFD700
		'--color-warning-50': '255 249 217', // #fff9d9
		'--color-warning-100': '255 247 204', // #fff7cc
		'--color-warning-200': '255 245 191', // #fff5bf
		'--color-warning-300': '255 239 153', // #ffef99
		'--color-warning-400': '255 227 77', // #ffe34d
		'--color-warning-500': '255 215 0', // #FFD700
		'--color-warning-600': '230 194 0', // #e6c200
		'--color-warning-700': '191 161 0', // #bfa100
		'--color-warning-800': '153 129 0', // #998100
		'--color-warning-900': '125 105 0', // #7d6900
		// error | #FF7F7F
		'--color-error-50': '255 236 236', // #ffecec
		'--color-error-100': '255 229 229', // #ffe5e5
		'--color-error-200': '255 223 223', // #ffdfdf
		'--color-error-300': '255 204 204', // #ffcccc
		'--color-error-400': '255 165 165', // #ffa5a5
		'--color-error-500': '255 127 127', // #FF7F7F
		'--color-error-600': '230 114 114', // #e67272
		'--color-error-700': '191 95 95', // #bf5f5f
		'--color-error-800': '153 76 76', // #994c4c
		'--color-error-900': '125 62 62', // #7d3e3e
		// surface | #FFEBCD
		'--color-surface-50': '255 252 248', // #fffcf8
		'--color-surface-100': '255 251 245', // #fffbf5
		'--color-surface-200': '255 250 243', // #fffaf3
		'--color-surface-300': '255 247 235', // #fff7eb
		'--color-surface-400': '255 241 220', // #fff1dc
		'--color-surface-500': '255 235 205', // #FFEBCD
		'--color-surface-600': '230 212 185', // #e6d4b9
		'--color-surface-700': '191 176 154', // #bfb09a
		'--color-surface-800': '153 141 123', // #998d7b
		'--color-surface-900': '125 115 100' // #7d7364
	}
};

export const mono: CustomThemeConfig = {
	name: 'mono',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'Roboto',
		'--theme-font-family-heading': 'Noto Serif Display',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '0px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ff6666
		'--color-primary-50': '255 232 232', // #ffe8e8
		'--color-primary-100': '255 224 224', // #ffe0e0
		'--color-primary-200': '255 217 217', // #ffd9d9
		'--color-primary-300': '255 194 194', // #ffc2c2
		'--color-primary-400': '255 148 148', // #ff9494
		'--color-primary-500': '255 102 102', // #ff6666
		'--color-primary-600': '230 92 92', // #e65c5c
		'--color-primary-700': '191 77 77', // #bf4d4d
		'--color-primary-800': '153 61 61', // #993d3d
		'--color-primary-900': '125 50 50', // #7d3232
		// secondary | #6666ff
		'--color-secondary-50': '232 232 255', // #e8e8ff
		'--color-secondary-100': '224 224 255', // #e0e0ff
		'--color-secondary-200': '217 217 255', // #d9d9ff
		'--color-secondary-300': '194 194 255', // #c2c2ff
		'--color-secondary-400': '148 148 255', // #9494ff
		'--color-secondary-500': '102 102 255', // #6666ff
		'--color-secondary-600': '92 92 230', // #5c5ce6
		'--color-secondary-700': '77 77 191', // #4d4dbf
		'--color-secondary-800': '61 61 153', // #3d3d99
		'--color-secondary-900': '50 50 125', // #32327d
		// tertiary | #996699
		'--color-tertiary-50': '240 232 240', // #f0e8f0
		'--color-tertiary-100': '235 224 235', // #ebe0eb
		'--color-tertiary-200': '230 217 230', // #e6d9e6
		'--color-tertiary-300': '214 194 214', // #d6c2d6
		'--color-tertiary-400': '184 148 184', // #b894b8
		'--color-tertiary-500': '153 102 153', // #996699
		'--color-tertiary-600': '138 92 138', // #8a5c8a
		'--color-tertiary-700': '115 77 115', // #734d73
		'--color-tertiary-800': '92 61 92', // #5c3d5c
		'--color-tertiary-900': '75 50 75', // #4b324b
		// success | #99cc33
		'--color-success-50': '240 247 224', // #f0f7e0
		'--color-success-100': '235 245 214', // #ebf5d6
		'--color-success-200': '230 242 204', // #e6f2cc
		'--color-success-300': '214 235 173', // #d6ebad
		'--color-success-400': '184 219 112', // #b8db70
		'--color-success-500': '153 204 51', // #99cc33
		'--color-success-600': '138 184 46', // #8ab82e
		'--color-success-700': '115 153 38', // #739926
		'--color-success-800': '92 122 31', // #5c7a1f
		'--color-success-900': '75 100 25', // #4b6419
		// warning | #ff9900
		'--color-warning-50': '255 240 217', // #fff0d9
		'--color-warning-100': '255 235 204', // #ffebcc
		'--color-warning-200': '255 230 191', // #ffe6bf
		'--color-warning-300': '255 214 153', // #ffd699
		'--color-warning-400': '255 184 77', // #ffb84d
		'--color-warning-500': '255 153 0', // #ff9900
		'--color-warning-600': '230 138 0', // #e68a00
		'--color-warning-700': '191 115 0', // #bf7300
		'--color-warning-800': '153 92 0', // #995c00
		'--color-warning-900': '125 75 0', // #7d4b00
		// error | #ff6699
		'--color-error-50': '255 232 240', // #ffe8f0
		'--color-error-100': '255 224 235', // #ffe0eb
		'--color-error-200': '255 217 230', // #ffd9e6
		'--color-error-300': '255 194 214', // #ffc2d6
		'--color-error-400': '255 148 184', // #ff94b8
		'--color-error-500': '255 102 153', // #ff6699
		'--color-error-600': '230 92 138', // #e65c8a
		'--color-error-700': '191 77 115', // #bf4d73
		'--color-error-800': '153 61 92', // #993d5c
		'--color-error-900': '125 50 75', // #7d324b
		// surface | #434343
		'--color-surface-50': '227 227 227', // #e3e3e3
		'--color-surface-100': '217 217 217', // #d9d9d9
		'--color-surface-200': '208 208 208', // #d0d0d0
		'--color-surface-300': '180 180 180', // #b4b4b4
		'--color-surface-400': '123 123 123', // #7b7b7b
		'--color-surface-500': '67 67 67', // #434343
		'--color-surface-600': '60 60 60', // #3c3c3c
		'--color-surface-700': '50 50 50', // #323232
		'--color-surface-800': '40 40 40', // #282828
		'--color-surface-900': '33 33 33' // #212121
	}
};
