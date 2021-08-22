import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0x432ef8b023aaba3c42ca540d32351c5b1a869cf7'
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      }
    ],
  },
  {
    label: t('Swap'),
    icon: 'GroupsIcon',
    href: 'https://www.nft-qr.com/swap',
    status: {
      text: t('NFTQR <=> SART').toLocaleUpperCase(),
      color: 'success',
    },
  },

]

export default config
