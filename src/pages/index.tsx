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
import Header, { IDetailHeader, ISocialHeader } from "../components/Header"
import Experience from "../components/Experience"

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
      header: resumeJson {
        fullname
        position
        detail {
          dateOfBirth
          place
          phone
          email
        }
        social {
          github
          linkedin
        }
        summary
      }
      experiences: allExperienceJson {
        edges {
          node {
            company
            position
            period
            achievements
          }
        }
      }
    }
  `)

  const { profileImg, header, experiences } = data

  return (
    <div className="resume">
      <Header
        profileImg={oc(profileImg).childImageSharp.fixed() as FixedObject}
        fullname={oc(header).fullname("")}
        detail={oc(header).detail() as IDetailHeader}
        position={oc(header).position("")}
        social={oc(header).social() as ISocialHeader}
        summary={oc(header).summary([]) as string[]}
      />
      <div className="flex mt-10">
        <section className="w-3/5">
          <h1 className="font-bold text-3xl">Work Experience</h1>
          {oc(experiences)
            .edges([])
            .map(edge => (
              <Experience
                achievements={oc(edge).node.achievements([]) as string[]}
                company={oc(edge).node.company("")}
                period={oc(edge).node.period("")}
                position={oc(edge).node.position("")}
              />
            ))}
        </section>
      </div>
    </div>
  )
}

export default App
