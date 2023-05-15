import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSidebarRight = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={800}
    viewBox="0 0 280 800"
    backgroundColor="#7239e537"
    foregroundColor="#7239e537"
    {...props}
  >
    <rect x="143" y="296" rx="0" ry="0" width="1" height="0" /> 
    <rect x="136" y="638" rx="0" ry="0" width="1" height="0" /> 
    <rect x="296" y="629" rx="0" ry="0" width="0" height="1" /> 
    <rect x="5" y="142" rx="10" ry="10" width="253" height="636" /> 
    <rect x="45" y="54" rx="10" ry="10" width="170" height="67" />
  </ContentLoader>
)

export default SkeletonSidebarRight







// import React from "react"
// import ContentLoader from "react-content-loader"

// const SkeletonSidebarRight = (props) => (
//   <ContentLoader
//     rtl
//     speed={2}
//     width={100}
//     height={800}
//     viewBox="0 0 280 800"
//     backgroundColor="#7239e537"
//     foregroundColor="#7239e537"
//     {...props}
//   >
//     <rect x="4" y="16" rx="10" ry="10" width="368" height="82" />
//     <rect x="5" y="134" rx="0" ry="10" width="369" height="796" />
//   </ContentLoader>
// )

// export default SkeletonSidebarRight