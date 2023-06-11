import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/utils/auth';
import CommonModal from './CommonModal';
import { apiCall } from 'src/core/api-requests/axios';
import router from 'next/router';
import { useToast } from '@chakra-ui/react';

type Props = {
  isOpen: any,
  onClose: any,
}

const CreateBattleFormModal = ({ isOpen, onClose }: Props) => {
  const { currentUser } = useAuth()
  const [creatingBattleLoader, setCreatingBattleLoader] = useState(false)
  const toast = useToast();

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
      battleName: '',
      adminId: currentUser.uid,
      isPrivate: false,
      timeValidity: 60,
      noOfQuestions: 3
    },
  })

  const onSubmit = async (data: any) => {
    setCreatingBattleLoader(true)
    await apiCall({
      key: "create_battle",
      data: {
        // TODO: create User Class and send proper objects
        battle_name: data?.battleName,
        is_private: data?.isPrivate,
        time_validity: parseInt(data?.timeValidity),
        no_of_questions: parseInt(data?.noOfQuestions),
      },
    }).then((res: any) => {
      let battleId = res.data;
      router.push('/battle/' + battleId);
      toast({
        title: 'Battle created successfully',
        description: "We've redirected you to your battle. Happy coding!",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    }).catch((error) => {
      toast({
        title: 'Unexpected Error',
        description: "Something wrong has happened",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
      onClose()
      setCreatingBattleLoader(false)
    })
  }

  return (
    <CommonModal
      className='sm:w-[580px] sm:h-[520px]'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="h-full px-5 flex flex-col py-10">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between w-full h-full'>
          <div className=''>
            <div className="mb-8">
              <label htmlFor="battleName" className="block mb-2 text-sm font-medium text-white">Battle Name</label>
              <input {...register('battleName', { required: "Battle name is required" })} type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Battle Area 51" />
              {errors.battleName && <p className='text-red-400 text-sm' role="alert">{errors.battleName?.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="small-range" className="block mb-2 text-sm font-medium text-white">Select Time Duration</label>
              <input {...register('timeValidity')} type="range" min={30} max={300} step={30} className="w-full h-1 mb-6 rounded-lg appearance-none cursor-pointer range-sm bg-gray-700"></input>
              <div className='flex justify-center w-full text-white'>
                <div className='gap-2'>
                  <span>{Math.floor(watch('timeValidity') / 60)}hrs</span>
                  <span> : </span>
                  <span>{watch('timeValidity') % 60 === 0 ? '00' : watch('timeValidity') % 60}min</span>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="small-range" className="block mb-2 text-sm font-medium text-white">Select No. of Questions</label>
              <input {...register('noOfQuestions')} type="range" min={1} max={5} step={1} className="w-full h-1 mb-6 rounded-lg appearance-none cursor-pointer range-sm bg-gray-700"></input>
              <div className='flex justify-center w-full text-white'>
                <div className='gap-2'>
                  <span>{Math.floor(watch('noOfQuestions'))} question(s)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-8 gap-5">
              <label htmlFor="isPrivate" className="text-sm font-medium text-white">Create a private battle </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input {...register('isPrivate')} type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            {creatingBattleLoader ?
              <button disabled type="button" className="inline-flex justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center">
                <div>
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                  Loading...
                </div>
              </button>
              :
              <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Create Battle</button>
            }
          </div>
        </form>
      </div>
    </CommonModal>
  )
}

export default CreateBattleFormModal