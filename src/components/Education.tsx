import React from "react"

export interface IEducationMark {
  name: string
  value: string
}

interface IEducation {
  major: string
  university: string
  period: string
  mark: IEducationMark
}

const Education: React.FC<IEducation> = ({
  major,
  university,
  period,
  mark,
}) => (
  <>
    <div className="flex justify-between">
      <h1 className="text-orange-500 text-lg">{major}</h1>
    </div>
    <p className="italic mt-1 font-bold">{university}</p>
    <p className="text-sm mt-1 italic">{period}</p>
    <p className="text-sm mt-1">
      <span className="font-bold">{mark.name}:</span>&nbsp;{mark.value}
    </p>
  </>
)

export default Education
