import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCenterSection = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1200}
    viewBox="0 0 600 800"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >


    <rect x="5" y="20" rx="10" ry="10" width="700" height="40" /> 


    <rect x="25" y="80" rx="10" ry="10" width="104" height="91" />
    <rect x="171" y="80" rx="10" ry="10" width="104" height="91" />
    <rect x="317" y="80" rx="10" ry="10" width="104" height="91" />
    <rect x="458" y="80" rx="10" ry="10" width="104" height="91" />

    <rect x="24" y="208" rx="10" ry="10" width="253" height="71" />
    <rect x="310" y="208" rx="10" ry="10" width="253" height="71" />
    <rect x="22" y="312" rx="10" ry="10" width="253" height="71" />
    <rect x="22" y="413" rx="10" ry="10" width="253" height="71" />
    <rect x="312" y="413" rx="10" ry="10" width="253" height="71" />
    <rect x="311" y="312" rx="10" ry="10" width="253" height="71" />

    <rect x="22" y="573" rx="10" ry="10" width="257" height="200" />
    <rect x="312" y="573" rx="10" ry="10" width="257" height="200" />
  </ContentLoader>
)

export default SkeletonCenterSection