import React from 'react'
let router = [
	{
		path: '/homepage',
		component: React.lazy(() => import('../pages/homepage')),
	},
	{
		path: '/videopage',
		component: React.lazy(() => import('../pages/videopage')),
	},
	{
		path: '/detailpage',
		component: React.lazy(() => import('../pages/detailpage')),
	}
]

export default router