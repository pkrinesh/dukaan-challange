import React from 'react'
import * as Icon from './icons'
import { clsx } from 'clsx'
import { useWindowSize } from '../hooks/use-window-size'

type NavItem = {
  id: string
  name: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    id: 'home',
    name: 'Home',
    icon: <Icon.HomeIcon />,
  },
  {
    id: 'orders',
    name: 'Orders',
    icon: <Icon.OrderIcon />,
  },
  {
    id: 'products',
    name: 'Products',
    icon: <Icon.ProductIcon />,
  },
  {
    id: 'delivery',
    name: 'Delivery',
    icon: <Icon.DeliveryIcon />,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: <Icon.MarketingIcon />,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: <Icon.AnalyticsIcon />,
  },
  {
    id: 'payments',
    name: 'Payments',
    icon: <Icon.PaymentIcon />,
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: <Icon.ToolsIcon />,
  },
  {
    id: 'discounts',
    name: 'Discounts',
    icon: <Icon.DiscountsIcon />,
  },
  {
    icon: <Icon.AudienceIcon />,
    id: 'audience',
    name: 'Audience',
  },
  {
    id: 'appearance',
    name: 'Appearance',
    icon: <Icon.AppearanceIcon />,
  },
  {
    id: 'plugins',
    name: 'Plugins',
    icon: <Icon.PluginsIcon />,
  },
]

export function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [active, setActive] = React.useState('payments')
  const { windowWidth } = useWindowSize()
  const isLarge = React.useMemo(() => windowWidth > 1024, [windowWidth])

  React.useEffect(() => {
    if (windowWidth > 1024) {
      setIsOpen(false)
    }
  }, [setIsOpen, windowWidth])

  return (
    <>
      <button
        className={clsx(
          'absolute z-10 inset-0 bg-card-fg opacity-70 transition ease-in-out',
          !isOpen ? 'hidden' : ''
        )}
        onClick={() => setIsOpen(false)}
      />
      <nav
        className={clsx(
          'fixed lg:relative lg:translate-x-0 z-10 flex w-[224px] h-full flex-col bg-nav px-4 py-4 transition',
          !isOpen ? ' -translate-x-[224px]' : ''
        )}
      >
        <div className="flex">
          <i>
            <Icon.AppIcon />
          </i>
          <div className="flex-auto ml-3">
            <p className="text-white font-medium">Krinesh</p>
            <a className="text-white opacity-80 text-[13px] underline underline-offset-2 cursor-pointer">
              Visit Store
            </a>
          </div>
          <button className="self-center">
            <i>
              <Icon.ArrowDownIcon />
            </i>
          </button>
        </div>
        <ul className="mt-6 flex-auto">
          {navItems.map(({ name, icon, id }) => {
            return (
              <li key={name}>
                <a
                  className={clsx(
                    'px-4 py-2 mt-1 -mx-2 flex gap-3 items-center text-sm font-medium text-nav-fg opacity-80',
                    'rounded cursor-pointer hover:bg-white/10 transition duration-300',
                    active === id ? 'bg-white/10' : ''
                  )}
                  onClick={() => {
                    setActive(id)
                    !isLarge && setIsOpen(false)
                  }}
                >
                  <span>
                    <i>{icon}</i>
                  </span>
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-3 bg-nav-card px-3 py-1.5 rounded">
          <div>
            <div className="bg-white/10 p-1.5 rounded">
              <i>
                <Icon.CreditIcon />
              </i>
            </div>
          </div>
          <div>
            <p className="text-[13px] text-nav-card-fg opacity-80">Available Credits</p>
            <p className="text-nav-card-fg font-medium">222.10</p>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  )
}
