import React from 'react'
import { DropDown } from '../DropDown/DropDown'
import { ThemeList } from '../../model/site/ThemeList'
import { useTheme } from 'next-themes'

export interface ChangeThemeDropDownProps {
  label?: string
}

export const ChangeThemeDropDown: React.FC<ChangeThemeDropDownProps> = ({ label }) => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <DropDown
        label={label || ''}
        items={Object.values(ThemeList).map((itemTheme) => ({
          id: itemTheme.id,
          value: itemTheme.name,
        }))}
        selectedId={theme || null}
        onSelect={(selectedTheme) => {
          setTheme(selectedTheme)
        }}
      />
    </>
  )
}
