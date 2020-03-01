import React from "react"

export interface ILanguageItem {
  name: string
  level: string
}

interface ILanguage {
  items: ILanguageItem[]
}

const Language: React.FC<ILanguageItem> = ({ name, level }) => (
  <>
    <span className="font-bold">{name}</span>
    <span className="italic">{level}</span>
  </>
)

export default Language
