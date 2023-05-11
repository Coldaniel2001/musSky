import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPreferencesAndQuestion = (props) => (
  <ContentLoader 
    speed={2}
    width={2100}
    height={500}
    viewBox="0 0 2100 500"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >

    <rect x="200" y="36" rx="10" ry="10" width="700" height="400" />
    <rect x="1300" y="36" rx="10" ry="10" width="700" height="400" />
  </ContentLoader>
)

export default SkeletonPreferencesAndQuestion