import React, { lazy, Suspense } from 'react'
import Search from '../Search/Search'

import SkeletonGenders from '../../Skeleton/Gender/SkeletonGenders';


const Genders = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../Genders/Genders')), 2000);
  });
});

const GendersSection = () => {

  return (
    <div>
      <Suspense fallback={<SkeletonGenders />}>
        <Search />
        <Genders />
      </Suspense>
    </div>
  )
}

export default GendersSection