import React from "react"

interface ILanguage {
  name: string
  level: string
}

const Language: React.FC<ILanguage> = ({ name, level }) => (
  <div className="inline-flex justify-between w-full items-center mt-1">
    <span className="font-bold">{name}</span>
    <span className="italic">{level}</span>
  </div>
)

export default Language
