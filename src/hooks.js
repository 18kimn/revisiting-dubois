export const handle = async ({ request, resolve }) => {
	return resolve(request)
	// const cookies = cookie.parse(request.headers.cookie || '')
	// request.locals.userid = cookies.userid || uuid()

	// if (request.query.has('_method')) {
	// 	request.method = request.query.get('_method').toUpperCase()
	// }

	// const response = await resolve(request)

	// if (!cookies.userid) {
	// 	// if this is the first time the user has visited this app,
	// 	// set a cookie so that we recognise them when they return
	// 	response.headers['set-cookie'] = cookie.serialize(
	// 		'userid',
	// 		request.locals.userid,
	// 		{
	// 			path: '/',
	// 			httpOnly: true,
	// 		},
	// 	)
	// }

	// return response
}
