import { graphql, useStaticQuery } from "gatsby"
import { FixedObject } from "gatsby-image"
import React from "react"
import { oc } from "ts-optchain"
import Education, { IEducationMark } from "../components/Education"
import Experience from "../components/Experience"
import Header, { IDetailHeader, ISocialHeader } from "../components/Header"
import SectionHeader from "../components/SectionHeader"
import { AppQuery } from "../graphqlTypes"
import "../styles/app.scss"

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
      educations: allEducationJson {
        edges {
          node {
            major
            university
            period
            mark {
              name
              value
            }
          }
        }
      }
    }
  `)

  const { profileImg, header, experiences, educations } = data

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
          <SectionHeader value="Work Experience" />
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
          <br />
          <SectionHeader value="Education" />
          {oc(educations)
            .edges([])
            .map(edge => (
              <Education
                major={oc(edge).node.major("")}
                university={oc(edge).node.university("")}
                period={oc(edge).node.period("")}
                mark={oc(edge).node.mark() as IEducationMark}
              />
            ))}
        </section>
      </div>
    </div>
  )
}

export default App
