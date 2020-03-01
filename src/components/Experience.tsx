import React from "react"

interface IExperience {
  company: string
  position: string
  period: string
  achievements: string[]
}

const Experience: React.FC<IExperience> = ({
  company,
  position,
  period,
  achievements,
}) => (
  <div className="mt-2 mb-4">
    <div className="flex justify-between">
      <h1 className="text-orange-500 text-lg">{position}</h1>
      <h1 className="text-orange-500 text-lg">{period}</h1>
    </div>
    <p className="italic mt-1 font-bold">{company}</p>
    <p className="mt-2">Achievements / Tasks</p>
    <ul className="list-disc ml-6">
      {achievements.map((ach, idx) => (
        <li className="text-sm mt-1">{ach}</li>
      ))}
    </ul>
  </div>
)

export default Experience
