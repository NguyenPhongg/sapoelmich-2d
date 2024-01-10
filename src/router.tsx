import { createHashRouter } from 'react-router-dom'
import IndexPage from './pages/index'
import CheckoutPage from './pages/object/checkout'
import TheLayout from './components/TheLayout'
import FormPage from './pages/form'
import ObjectIndexPage from './pages/object/index'

import KitchenPage from './pages/kitchen'
import ChoosePage from './pages/choose'

import NotFoundPage from './pages/404'

const router = createHashRouter([
  {
    path: '/',
    Component: IndexPage,
  },
  {
    path: '/choose',
    Component: ChoosePage,
  },
  {
    path: '/object',
    Component: TheLayout,
    children: [
      {
        index: true,
        Component: ObjectIndexPage,
      },
      {
        path: 'form',
        Component: FormPage,
      },
      {
        path: 'checkout',
        Component: CheckoutPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
  {
    path: '/kitchen',
    Component: KitchenPage,
  },
])

export default router
