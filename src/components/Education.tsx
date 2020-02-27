import React from "react"

interface IEducationMark {
  name: string
  value: string
}

interface IEducation {
  major: string
  university: string
  mark: IEducationMark
}

const Education: React.FC<IEducation> = ({ major, university, mark }) => (
  <article className="mb-3">
    <div className="flex justify-between">
      <h1 className="text-orange-500 text-xl">{major}</h1>
    </div>
    <p className="italic mt-1 font-bold">{university}</p>
    <p className="text-sm mt-1"><span className="font-bold">{mark.name}</span>&nbsp;{mark.value}</p>
    <br />
  </article>
)
