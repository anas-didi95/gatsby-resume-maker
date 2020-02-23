import React from "react"
import {
  TiCalendar,
  TiDevicePhone,
  TiLocation,
  TiMail,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti"
import "../styles/app.scss"
import { useStaticQuery, graphql } from "gatsby"
import { AppQuery } from "../graphqlTypes"
import Img, { FixedObject } from "gatsby-image"
import { oc } from "ts-optchain"

interface IApp { }

const App: React.FC<IApp> = () => {
  const data: AppQuery = useStaticQuery(graphql`
    query App {
      profileImg: file(absolutePath: { regex: "/profile-pic/" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="resume">
      <section className="flex">
        <article className="w-3/12">
          <Img className="rounded-full" fixed={oc(data).profileImg.childImageSharp.fixed() as FixedObject} />
          <div className="mt-1 inline-flex">
            <TiCalendar />
            <p className="text-sm font-semibold ml-2">27 Aug 1995</p>
          </div>
          <div className="mt-1 inline-flex">
            <TiLocation />
            <p className="text-sm font-semibold ml-2">Selangor, Malaysia</p>
          </div>
          <div className="mt-1 inline-flex">
            <TiDevicePhone />
            <p className="text-sm font-semibold ml-2">018-7601343</p>
          </div>
          <div className="mt-1 inline-flex">
            <TiMail />
            <p className="text-sm font-semibold ml-2">anas.didi95@gmail.com</p>
          </div>
        </article>
        <article className="ml-5 w-full">
          <h1 className="font-bold capitalize text-3xl mb-2">
            Anas Juwaidi Bin mohd jeffry
          </h1>
          <h2 className="text-semibold text-xl text-gray-700 italic">
            Software Engineer
          </h2>
          <div className="flex justify-around mt-5 items-baseline">
            <span className="inline-flex">
              <TiSocialGithubCircular className="text-xl" />{" "}
              <p className="text-sm font-semibold ml-1">github.com/anas-didi95</p>
            </span>
            <span className="inline-flex">
              <TiSocialLinkedinCircular className="text-xl" />{" "}
              <p className="text-sm font-semibold ml-1">
                linkedin.com/in/anas-juwaidi-mohd-jeffry
              </p>
            </span>
          </div>
          <p className="text-justify p-4 bg-gray-200 rounded-lg mt-6 h-32">
            Telecom Engineer with IT experience. Worked in the most important
            telecom company in Malaysia across different areas. Got experience
            managing servers, application servers and cloud tools. Love learning
            new things or tools everyday.
          </p>
        </article>
      </section>
    </div>
  )
}

export default App
