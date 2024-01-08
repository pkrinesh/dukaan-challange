import * as Icon from './icons'

type NavItem = {
  name: string
  icon: React.ReactNode
  isActive?: boolean
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    icon: <Icon.HomeIcon />,
  },
  {
    name: 'Orders',
    icon: <Icon.OrderIcon />,
  },
  {
    name: 'Products',
    icon: <Icon.ProductIcon />,
  },
  {
    name: 'Delivery',
    icon: <Icon.DeliveryIcon />,
  },
  {
    name: 'Marketing',
    icon: <Icon.MarketingIcon />,
  },
  {
    name: 'Analytics',
    icon: <Icon.AnalyticsIcon />,
  },
  {
    name: 'Payments',
    icon: <Icon.PaymentIcon />,
    isActive: true,
  },
  {
    name: 'Tools',
    icon: <Icon.ToolsIcon />,
  },
  {
    name: 'Discounts',
    icon: <Icon.DiscountsIcon />,
  },
  {
    icon: <Icon.AudienceIcon />,
    name: 'Audience',
  },
  {
    name: 'Appearance',
    icon: <Icon.AppearanceIcon />,
  },
  {
    name: 'Plugins',
    icon: <Icon.PluginsIcon />,
  },
]

export function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-nav px-4 py-4">
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
            <Icon.ArrowDown />
          </i>
        </button>
      </div>
      <ul className="mt-6 flex-auto">
        {navItems.map(({ name, icon, isActive }) => {
          return (
            <li
              className={`px-4 py-2 mt-1 -mx-2 rounded cursor-pointer hover:bg-white/10 ${
                isActive && 'bg-white/10'
              }`}
            >
              <a className="flex gap-3 items-center text-sm font-medium text-nav-fg opacity-80">
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
    </div>
  )
}
