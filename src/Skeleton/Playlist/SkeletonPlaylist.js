import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPlaylist = (props) => (
  <ContentLoader 
    speed={2}
    width={1800}
    height={900}
    viewBox="0 0 1800 900"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >
    <rect x="5" y="20" rx="10" ry="10" width="700" height="40" /> 
    <rect x="1250" y="20" rx="10" ry="10" width="200" height="50" /> 

    <rect x="5" y="100" rx="10" ry="10" width="1500" height="250" /> 

    <rect x="5" y="450" rx="10" ry="10" width="1500" height="100" /> 
    <rect x="5" y="600" rx="10" ry="10" width="1500" height="100" /> 
    <rect x="5" y="750" rx="10" ry="10" width="1500" height="100" /> 


  </ContentLoader>
)

export default SkeletonPlaylist
