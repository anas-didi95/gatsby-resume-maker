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

interface IApp {}

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
    }
  `)

  const { profileImg, header } = data

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
    </div>
  )
}

export default App
