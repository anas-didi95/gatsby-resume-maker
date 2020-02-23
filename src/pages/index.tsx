import React from "react"
import "../styles/app.scss"
import { TiCalendar, TiDevicePhone, TiLocation, TiSocialGithub, TiSocialLinkedin, TiSocialGithubCircular, TiSocialLinkedinCircular, TiMail } from "react-icons/ti"

interface IApp { }

const App: React.FC<IApp> = () => (
  <div className="resume">
    <section className="flex">
      <article className="w-3/12">
        <img src="" alt="Profile Image" />
        <div className="mt-2 inline-flex">
          <TiCalendar />
          <p className="text-sm font-semibold ml-2">27 Aug 1995</p>
        </div>
        <div className="mt-2 inline-flex">
          <TiLocation />
          <p className="text-sm font-semibold ml-2">Selangor, Malaysia</p>
        </div>
        <div className="mt-2 inline-flex">
          <TiDevicePhone />
          <p className="text-sm font-semibold ml-2">018-7601343</p>
        </div>
        <div className="mt-2 inline-flex">
          <TiMail />
          <p className="text-sm font-semibold ml-2">anas.didi95@gmail.com</p></div>
      </article>
      <article className="ml-5 w-full">
        <h1 className="font-bold capitalize text-3xl mb-1">
          Anas Juwaidi Bin mohd jeffry
        </h1>
        <h2 className="text-semibold text-xl text-gray-700 italic">
          Software Engineer
        </h2>
        <div className="flex justify-around mt-3 items-baseline">
          <span className="inline-flex">
            <TiSocialGithubCircular className="text-xl" /> <p className="text-sm font-medium ml-1">github.com/anas-didi95</p>
          </span>
          <span className="inline-flex">
            <TiSocialLinkedinCircular className="text-xl" /> <p className="text-sm font-medium ml-1">linkedin.com/in/anas-juwaidi-mohd-jeffry</p>
          </span>
        </div>
        <p className="text-justify p-3 bg-gray-200 rounded-md mt-3">
          Telecom Engineer with IT experience. Worked in the most important
          telecom company in Malaysia across different areas. Got experience
          managing servers, application servers and cloud tools. Love learning
          new things or tools everyday.
        </p>
      </article>
    </section>
  </div>
)

export default App
