import React from "react"

interface ISkill {
  name: string
  proficient: boolean
}

const Skill: React.FC<ISkill> = ({ name, proficient }) => (
  <button
    className={`border px-4 py-2 rounded-full m-1 text-xs font-semibold ${
      proficient ? "bg-green-300" : "bg-yellow-300"
      }`}>
    {name}
  </button>
)

export default Skill
