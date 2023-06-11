import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from 'src/utils/auth';
import CommonModal from './CommonModal';
import { apiCall } from 'src/core/api-requests/axios';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

type Props = {
  isOpen: any,
  onClose: any,
  prevBattleId?: string
}

const JoinBattleFormModal = ({ isOpen, onClose, prevBattleId }: Props) => {
  const [joiningBattleLoader, setJoiningBattleLoader] = useState(false)
  const router = useRouter()
  const { currentUser } = useAuth()
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
      battleId: prevBattleId || '',
    },
  })

  const onSubmit = (data: any) => {
    setJoiningBattleLoader(true)
    apiCall({
      key: 'join_battle',
      params: {
        battle_id: data?.battleId
      }
    }).then((res: any) => {
      if (res.data) {
        router.push('/battle/' + data?.battleId)
        toast({
          title: 'Joined Battle successfully',
          description: "We've redirected you to your battle. Happy coding!",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
      }
      setJoiningBattleLoader(false)
    }).catch((error) => {
      toast({
        title: 'Unexpected Error',
        description: "Something wrong has happened",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
      console.log('Error: ', error?.response?.data)
      setJoiningBattleLoader(false)
    })
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
              <label htmlFor="battleId" className="block mb-2 text-sm font-medium text-white">Battle Id</label>
              <input disabled={prevBattleId ? true : false} {...register('battleId', { required: "A Valid Battle Id is required" })} type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter battle id" />
              {errors.battleId && <p className='text-red-400 text-sm' role="alert">{errors.battleId?.message}</p>}
            </div>
          </div>
          <div className='flex w-full justify-center'>
            {joiningBattleLoader ?
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
              <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Join Battle</button>
            }
          </div>
        </form>
      </div>
    </CommonModal>
  )
}

export default JoinBattleFormModal