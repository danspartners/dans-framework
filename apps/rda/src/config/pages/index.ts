import home from './home';
import about from './about';
import support from './support';
import type { Page } from '@dans-framework/pages'

export const pages: Page[] = [
  home,
  {
    id: "search",
    name: "Search",
    slug: "search",
    template: "search",
    inMenu: true,
    menuTitle: {
      en: "Search",
      nl: "Zoeken",
    },
  },
  {
    id: "dashboard",
    name: "Dashboard",
    slug: "dashboard",
    template: "dashboard",
    inMenu: true,
    menuTitle: {
      en: "Dashboard",
      nl: "Dashboard",
    },
  },
  about,
  support,
  {
    id: "record",
    name: "Record",
    slug: "record/:id",
    template: "record",
    inMenu: false,
  },
]
