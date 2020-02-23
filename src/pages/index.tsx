import React from "react"
import "../styles/app.scss"


const IndexPage: React.FC = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <img
      className="w-full"
      src="/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-blue-700">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #photography
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #travel
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        #winter
      </span>
    </div>
  </div>
)

export default IndexPage
