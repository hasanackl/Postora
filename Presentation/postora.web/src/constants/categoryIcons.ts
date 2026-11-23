import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faCar,
  faHouse,
  faLaptop,
  faCouch,
  faShirt,
  faBicycle,
  faTag,
} from '@fortawesome/free-solid-svg-icons'

export const CATEGORY_ICONS: Record<string, IconDefinition> = {
  car: faCar,
  house: faHouse,
  laptop: faLaptop,
  couch: faCouch,
  shirt: faShirt,
  bicycle: faBicycle,
}

export const DEFAULT_CATEGORY_ICON = faTag