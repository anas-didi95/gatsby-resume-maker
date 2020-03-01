import React from "react"

interface ILanguage {
  name: string
  level: string
}

const Language: React.FC<ILanguage> = ({ name, level }) => (
  <>
    <span className="font-bold">{name}</span>
    <span className="italic">{level}</span>
  </>
)

export default Language
