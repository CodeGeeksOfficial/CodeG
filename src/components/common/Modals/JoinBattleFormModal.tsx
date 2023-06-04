import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/utils/auth';
import CommonModal from './CommonModal';

type Props = {
  isOpen:any,
  onClose:any,
}

const JoinBattleFormModal = ({isOpen,onClose}: Props) => {
  const { currentUser } = useAuth()
  
  const {
    control,
    register,
    getValues,
    setValue,
    formState: { errors },
    watch,
    clearErrors,
    handleSubmit,
    reset,
    setError,
  } = useForm({
    defaultValues: {
      battleUrl: '',
    },
  })

  const onSubmit = (data:any) => {
    console.log(data)
  }

  return (
    <CommonModal
      className='sm:w-[580px] sm:h-[280px]'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="h-full px-5 flex flex-col py-10">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between w-full h-full'>
          <div className=''>
            <div className="mb-8">
              <label htmlFor="battleUrl" className="block mb-2 text-sm font-medium text-white">Battle URL</label>
              <input {...register('battleUrl',{required:"A Valid Battle URL is required"})} type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="https://codeg.netlify.app/battle/battle-url"/>
              {errors.battleUrl && <p className='text-red-400 text-sm' role="alert">{errors.battleUrl?.message}</p>}
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Create Battle</button>
          </div>
        </form>
      </div>
    </CommonModal>
  )
}

export default JoinBattleFormModal