import { graphql, useStaticQuery } from "gatsby"
import { FixedObject } from "gatsby-image"
import React from "react"
import { oc } from "ts-optchain"
import Education, { IEducationMark } from "../components/Education"
import Experience from "../components/Experience"
import Header, { IDetailHeader, ISocialHeader } from "../components/Header"
import Language from "../components/Language"
import Project from "../components/Project"
import SectionHeader from "../components/SectionHeader"
import Skill from "../components/Skill"
import { AppQuery } from "../graphqlTypes"
import "../styles/app.scss"

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
      skills: allSkillJson(
        sort: { fields: [proficient, name], order: [DESC, ASC] }
        filter: { show: { eq: true } }
      ) {
        edges {
          node {
            name
            proficient
            show
          }
        }
      }
      languages: allLanguageJson(filter: { show: { eq: true } }) {
        edges {
          node {
            name
            level
          }
        }
      }
      projects: allProjectJson(filter: { show: { eq: true } }) {
        edges {
          node {
            name
            link
            description
          }
        }
      }
    }
  `)

  const {
    profileImg,
    header,
    experiences,
    educations,
    skills,
    languages,
    projects,
  } = data
  const totalExperience: number = 3;

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
      <div className="flex mt-6">
        <section className="w-3/5 mr-4">
          <SectionHeader value="Work Experience" />
          <article>
            {oc(experiences)
              .edges([])
              .map((edge, idx) => (
                <>
                  {idx < totalExperience &&
                    <Experience
                      achievements={oc(edge).node.achievements([]) as string[]}
                      company={oc(edge).node.company("")}
                      period={oc(edge).node.period("")}
                      position={oc(edge).node.position("")}
                    />
                  }
                </>
              ))}
          </article>
        </section>
        <section className="w-2/5 ml-4">
          <SectionHeader value="Skills" />
          <div className="text-sm flex justify-around items-center">
            <p className="font-bold">Legend:</p>
            <Skill name="Proficient" proficient={true} />
            <Skill name="Familiar" proficient={false} />
          </div>
          <article className="flex flex-wrap text-sm justify-center mt-1">
            {oc(skills)
              .edges([])
              .map(edge => (
                <Skill
                  name={oc(edge).node.name("")}
                  proficient={oc(edge).node.proficient(false)}
                />
              ))}
          </article>
          <div className="mt-5" />
          <SectionHeader value="Language" />
          <article>
            {oc(languages)
              .edges([])
              .map(edge => (
                <Language
                  name={oc(edge).node.name("")}
                  level={oc(edge).node.level("")}
                />
              ))}
          </article>
          <div className="mt-5" />
          <SectionHeader value="Project" />
          <article>
            {oc(projects)
              .edges([])
              .map(edge => (
                <Project
                  name={oc(edge).node.name("")}
                  link={oc(edge).node.link("")}
                  description={oc(edge).node.description([]) as string[]}
                />
              ))}
          </article>
          <div className="mt-5" />
          <SectionHeader value="Education" />
          <article>
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
          </article>
        </section>
      </div>
    </div>
  )
}

export default App
