import CreateBattleButton from 'src/components/common/Buttons/CreateBattleButton'
import JoinBattleButton from 'src/components/common/Buttons/JoinBattleButton'
import PeopleCoding from 'src/lib/assets/icons/people-coding.svg'
import BattleListingCardSkeletonLoader from './index/BattleListingCard/BattleListingCardSkeletonLoader'
import useBattleRouteContainerHook from './useBattleRouteContainerHook'
import Link from 'next/link'

type Props = {}

const BattleRouteContainer = (props: Props) => {

  const { loadingPublicBattles, publicBattles } = useBattleRouteContainerHook();

  return (
    <div className='py-10 px-20 space-y-10'>
      <div className='w-full flex justify-between items-center bg-slate-800 rounded-xl px-10'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p className='text-white font-bold text-3xl leading-[40px]'>
              Unleash Your Skills in the<br /> Ultimate Coding Battle!
            </p>
            <p className='text-white opacity-60'>Create or join coding battles, showcase your skills, and compete against the best.</p>
          </div>
          <div className='flex gap-5'>
            <CreateBattleButton />
            <JoinBattleButton />
          </div>
        </div>
        <PeopleCoding className="w-96" />
      </div>

      <div className='text-white'>
        <p className='font-medium text-gray-200'>Ongoing Public Battles:</p>
        <div className='flex py-2 px-4 bg-gray-800 rounded-lg my-2 font-medium'>
          <p className='w-[40%]'>Name</p>
          <p className='w-[20%]'>Duration</p>
          <p className='w-[20%]'>Questions</p>
          <p className='w-[20%]'>Participants</p>
        </div>
        {loadingPublicBattles ? <BattleListingCardSkeletonLoader /> : (
          publicBattles.map((battleData: any, index: number) => <Link href={`/battle/${battleData.id}`} key={index} className='flex py-2 px-4 hover:bg-gray-600 duration-200 bg-gray-700 rounded-lg my-2'>
            <p className='w-[40%]'>{battleData.name}</p>
            <p className='w-[20%]'>{battleData.timeValidity} mins</p>
            <p className='w-[20%]'>{battleData.questions.length}</p>
            <p className='w-[20%]'>{battleData.activeUsers.length}</p>
          </Link>))}
      </div>

    </div>
  )
}

export default BattleRouteContainer