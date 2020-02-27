import React from "react"

interface ISectionHeader {
  value: string
}

const SectionHeader: React.FC<ISectionHeader> = ({ value }) => (
  <h1 className="font-bold text-3xl underline">{value}</h1>
)

export default SectionHeader
