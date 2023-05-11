import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPasswordAndContact = (props) => (
  <ContentLoader 
    speed={2}
    width={1800}
    height={200}
    viewBox="0 0 1800 200"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >

    <rect x="11" y="78" rx="10" ry="10" width="1400" height="50" />
  </ContentLoader>
)

export default SkeletonPasswordAndContact

