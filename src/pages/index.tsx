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
      <div className="flex mt-10">
        <section className="w-3/5">
          <h1 className="font-bold text-3xl">Work Experience</h1>
          <article className="my-3">
            <div className="flex justify-between">
              <h1 className="text-orange-500 text-xl">Position</h1>
              <h1 className="text-orange-500 text-xl">Period</h1>
            </div>
            <p className="italic mt-1 font-bold">Company</p>
            <p className="mt-2">Achievements / Tasks
            </p>
            <ul className="list-disc ml-6">
              <li className="text-sm mt-1">1sajf;sakjflksajfsa;lkjf;lksajf;lksajf;lksajf
                sad;lfjsa;lkfj sa;lkfjsajf sa;lkjfsa
                asjd;fkjsa;lfkjsafjsalfjs a;lfjsa;ljfsa;ljf;lsajf;lsajf;lsajf;lsajfa;dsjf;lsaf
                sajfdlkjsa;lfkjsa;lfdj as; lfjsa;lfj;saljf;lsajf;lsajf;lsajf;lsajf;lsajfasad;fjsa;lfja
              </li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </article>
        </section >
      </div>
    </div>
  )
}

export default App
