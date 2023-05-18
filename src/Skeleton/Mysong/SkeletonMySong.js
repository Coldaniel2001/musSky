
import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMySong = (props) => (
  <ContentLoader 
    speed={2}
    width={1800}
    height={200}
    viewBox="0 0 1800 200"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >
    <circle cx="100" cy="107" r="75" /> 
    <rect x="300" y="123" rx="10" ry="10" width="243" height="16" /> 
    <rect x="600" y="123" rx="10" ry="10" width="243" height="16" /> 
    <rect x="900" y="123" rx="10" ry="10" width="243" height="16" />
    <rect x="1200" y="123" rx="10" ry="10" width="243" height="16" /> 
  </ContentLoader>
)

export default SkeletonMySong