import Img, { FixedObject } from "gatsby-image"
import React from "react"
import {
  TiCalendar,
  TiDevicePhone,
  TiLocation,
  TiMail,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti"
import { oc } from "ts-optchain"

enum EnumSocial {
  github = "github",
  linkedin = "linkedin",
}

interface IHeader {
  profileImg: FixedObject
  dateOfBirth: string
  place: string
  phone: string
  email: string
  fullname: string
  position: string
  social: {
    [site in EnumSocial]?: string
  }
  summary: Array<string>
}

const Header: React.FC<IHeader> = ({
  profileImg,
  dateOfBirth,
  email,
  fullname,
  phone,
  place,
  position,
  social,
  summary,
}) => (
    <section className="flex">
      <article className="w-3/12">
        <Img className="rounded-full" fixed={profileImg} />
        <div className="mt-1 inline-flex">
          <TiCalendar />
          <p className="text-sm font-semibold ml-2">{dateOfBirth}</p>
        </div>
        <div className="mt-1 inline-flex">
          <TiLocation />
          <p className="text-sm font-semibold ml-2">{place}</p>
        </div>
        <div className="mt-1 inline-flex">
          <TiDevicePhone />
          <p className="text-sm font-semibold ml-2">{phone}</p>
        </div>
        <div className="mt-1 inline-flex">
          <TiMail />
          <p className="text-sm font-semibold ml-2">{email}</p>
        </div>
      </article>
      <article className="ml-5 w-full">
        <h1 className="font-bold capitalize text-3xl mb-2">{fullname}</h1>
        <h2 className="text-semibold text-xl text-gray-700 italic">{position}</h2>
        <div className="flex justify-around mt-5 items-baseline">
          {oc(social).github("") && (
            <span className="inline-flex">
              <TiSocialGithubCircular className="text-xl" />
              <p className="text-sm font-semibold ml-1">
                {oc(social).github("")}
              </p>
            </span>
          )}
          {oc(social).linkedin("") && (
            <span className="inline-flex">
              <TiSocialLinkedinCircular className="text-xl" />{" "}
              <p className="text-sm font-semibold ml-1">
                linkedin.com/in/anas-juwaidi-mohd-jeffry
            </p>
            </span>
          )}
        </div>
        <p className="text-justify p-4 bg-gray-200 rounded-lg mt-6 h-32">
          {summary.join(" ")}
        </p>
      </article>
    </section>
  )

export default Header
