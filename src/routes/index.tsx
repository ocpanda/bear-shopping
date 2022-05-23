import Performance from '@/pages/Performance'
import Script from '@/pages/Script'

export type RouteConfig = {
  label: string
  name: string
  path?: string
  element: any
}

export const configs: RouteConfig[] = [
  {
    label: '首頁',
    name: 'Performance',
    path: '/performance',
    element: <Performance />,
  },
  {
    label: '食品、生鮮',
    name: 'Category/food',
    path: '/category/food',
    element: <Script />,
  },
  {
    label: '生活百貨、日用品、清潔',
    name: 'Category/life',
    path: '/category/life',
    element: <Script />,
  },
  {
    label: '3C、家電',
    name: 'Category/3c',
    path: '/category/3c',
    element: <Script />,
  },
  {
    label: '圖書',
    name: 'Category/book',
    path: '/category/book',
    element: <Script />,
  },
  {
    label: '精品、飾品',
    name: 'Category/boutique',
    path: '/category/boutique',
    element: <Script />,
  },
  {
    label: '衣服、內衣褲、鞋子、襪子',
    name: 'Category/clothes',
    path: '/category/clothes',
    element: <Script />,
  },
  {
    label: '戶外、運動、休閒',
    name: 'Category/outdoor',
    path: '/category/outdoor',
    element: <Script />,
  },
  {
    label: '寵物',
    name: 'Category/pet',
    path: '/category/pet',
    element: <Script />,
  },
  {
    label: '旅遊、票券',
    name: 'Category/travel',
    path: '/category/travel',
    element: <Script />,
  },
  {
    label: '傢俱、寢俱',
    name: 'Category/furniture',
    path: '/category/furniture',
    element: <Script />,
  },
  {
    label: '國外代購',
    name: 'Category/purchasing',
    path: '/category/purchasing',
    element: <Script />,
  },
]
