interface ThemeInfo {
  color: string,
  size: string
}

export function getThemeInfo() {
  return { data: {
    color: 'dark',
    size: 'normal'
  }
}
}

export function setThemeInfo(themeInfo: ThemeInfo) {
  return { data: {
    color: themeInfo.color,
    size: themeInfo.size
  }
}
}
