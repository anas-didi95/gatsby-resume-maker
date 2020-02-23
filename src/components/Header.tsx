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

enum EnumDetail {
  dateOfBirth = "dateOfBirth",
  place = "place",
  phone = "phone",
  email = "email",
}

interface IHeader {
  profileImg: FixedObject
  fullname: string
  position: string
  detail: {
    [k in EnumDetail]: string
  }
  social: {
    [site in EnumSocial]?: string
  }
  summary: Array<string>
}

const Header: React.FC<IHeader> = ({
  profileImg,
  fullname,
  position,
  detail,
  social,
  summary,
}) => (
  <section className="flex">
    <article className="w-3/12">
      <Img className="rounded-full" fixed={profileImg} />
      <div className="mt-1 inline-flex">
        <TiCalendar />
        <p className="text-sm font-semibold ml-2">
          {oc(detail).dateOfBirth("")}
        </p>
      </div>
      <div className="mt-1 inline-flex">
        <TiLocation />
        <p className="text-sm font-semibold ml-2">{oc(detail).place("")}</p>
      </div>
      <div className="mt-1 inline-flex">
        <TiDevicePhone />
        <p className="text-sm font-semibold ml-2">{oc(detail).phone("")}</p>
      </div>
      <div className="mt-1 inline-flex">
        <TiMail />
        <p className="text-sm font-semibold ml-2">{oc(detail).email("")}</p>
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
              {oc(social).linkedin("")}
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
