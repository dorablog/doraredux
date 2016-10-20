export const API_ROOT = (process.env.NODE_ENV === 'production')
		? 'http://121.42.194.189:9000/'
		:'http://121.42.194.189:9000/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
		? '.jackhu.top'
		: ''