import { themes } from '../themes'
import type { ThemeId } from '../config/types'
import type { ThemeVars } from '../themes'

export function useTheme(themeId: ThemeId): ThemeVars {
  return themes[themeId] ?? themes.tech
}
