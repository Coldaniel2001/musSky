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
    <rect x="143" y="296" rx="10" ry="10" width="1" height="0" /> 
    <rect x="136" y="638" rx="10" ry="10" width="1" height="0" /> 
    <rect x="147" y="628" rx="10" ry="10" width="1" height="3" /> 
    <rect x="296" y="629" rx="10" ry="10" width="0" height="1" /> 
    <rect x="296" y="629" rx="10" ry="10" width="1" height="8" /> 
    <rect x="25" y="30" rx="10" ry="10" width="104" height="91" /> 
    <rect x="171" y="30" rx="10" ry="10" width="104" height="91" /> 
    <rect x="317" y="30" rx="10" ry="10" width="104" height="91" /> 
    <rect x="458" y="30" rx="10" ry="10" width="104" height="91" /> 
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