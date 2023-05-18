import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonGenders = (props) => (
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


    <rect x="5" y="100" rx="10" ry="10" width="250" height="300" /> 
    <rect x="305" y="100" rx="10" ry="10" width="250" height="300" />
    <rect x="605" y="100" rx="10" ry="10" width="250" height="300" />
    <rect x="905" y="100" rx="10" ry="10" width="250" height="300" />
    <rect x="1205" y="100" rx="10" ry="10" width="250" height="300" />

    <rect x="5" y="500" rx="10" ry="10" width="250" height="300" /> 
    <rect x="305" y="500" rx="10" ry="10" width="250" height="300" />
    <rect x="605" y="500" rx="10" ry="10" width="250" height="300" />
    <rect x="905" y="500" rx="10" ry="10" width="250" height="300" />
    <rect x="1205" y="500" rx="10" ry="10" width="250" height="300" />
  </ContentLoader>
)

export default SkeletonGenders

