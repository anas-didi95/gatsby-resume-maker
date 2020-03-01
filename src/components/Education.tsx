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
        <h1 className="text-orange-500">{major}</h1>
      </div>
      <p className="italic font-bold text-sm">{university}</p>
      <div className="inline-flex justify-between text-sm w-full">
        <p className="italic">{period}</p>
        <p>
          <span className="font-bold">{mark.name}:</span>&nbsp;{mark.value}
        </p>
      </div>
    </>
  )

export default Education
