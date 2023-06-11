import React from 'react'

type Props = {}

const BattleListingCardSkeletonLoader = (props: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='w-full h-12 rounded-lg bg-[#31333a] animate-pulse'></div>
      <div className='w-full h-12 rounded-lg bg-[#31333a] animate-pulse'></div>
      <div className='w-full h-12 rounded-lg bg-[#31333a] animate-pulse'></div>
      <div className='w-full h-12 rounded-lg bg-[#31333a] animate-pulse'></div>
      <div className='w-full h-12 rounded-lg bg-[#31333a] animate-pulse'></div>
    </div>
  )
}

export default BattleListingCardSkeletonLoader