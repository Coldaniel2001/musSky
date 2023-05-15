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
    <rect x="5" y="12" rx="10" ry="10" width="250" height="300" /> 
    <rect x="305" y="12" rx="10" ry="10" width="250" height="300" />
    <rect x="605" y="12" rx="10" ry="10" width="250" height="300" />
    <rect x="905" y="12" rx="10" ry="10" width="250" height="300" />
    <rect x="1205" y="12" rx="10" ry="10" width="250" height="300" />

    <rect x="5" y="400" rx="10" ry="10" width="250" height="300" /> 
    <rect x="305" y="400" rx="10" ry="10" width="250" height="300" />
    <rect x="605" y="400" rx="10" ry="10" width="250" height="300" />
    <rect x="905" y="400" rx="10" ry="10" width="250" height="300" />
    <rect x="1205" y="400" rx="10" ry="10" width="250" height="300" />
  </ContentLoader>
)

export default SkeletonGenders

