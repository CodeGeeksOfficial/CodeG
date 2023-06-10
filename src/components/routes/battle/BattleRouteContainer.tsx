import CreateBattleButton from 'src/components/common/Buttons/CreateBattleButton'
import JoinBattleButton from 'src/components/common/Buttons/JoinBattleButton'

type Props = {}

const BattleRouteContainer = (props: Props) => {
  return (
    <div className='flex-1 mt-5'>
      <div className='flex w-full py-10 items-center gap-5 justify-center'>
        <JoinBattleButton />
        <CreateBattleButton />
      </div>
    </div>
  )
}

export default BattleRouteContainer