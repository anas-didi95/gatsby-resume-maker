import React from "react"
import { TiLink } from "react-icons/ti"

interface IProject {
  name: string
  link: string
  description: string[]
}

const Project: React.FC<IProject> = ({ name, link, description }) => (
  <div className="mt-1 mb-2">
    <h1 className="text-orange-500">{name}</h1>
    <div className="inline-flex items-center text-sm">
      <TiLink className="mr-2" />
      <a href={link} className="italic no-underline">
        {link}
      </a>
    </div>
    <p className="text-xs">{description.join(" ")}</p>
  </div>
)

export default Project
