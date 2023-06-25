import React, { useEffect, useState } from 'react'

type Props = {
  timeInSeconds: number
  onTimerEnd?: () => void
}

const CountdownTimer = ({ timeInSeconds, onTimerEnd }: Props) => {

  const [remainingSeconds, setRemainingSeconds] = useState(timeInSeconds)

  useEffect(() => {
    if (remainingSeconds === 0 && onTimerEnd) {
      onTimerEnd()
    }
  }, [remainingSeconds])

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prevTimeInSeconds) => {
        if (prevTimeInSeconds <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeInSeconds - 1;
      })
    }, 1000)

    return () => {
      clearInterval(timer);
    };
  }, [])

  const seconds = remainingSeconds % 60;
  const minutes = Math.floor(((remainingSeconds - seconds) / 60) % 60);
  const hours = Math.floor((remainingSeconds - minutes) / 3600);
  return (
    <div className="flex items-center gap-2">
      <span>Battle Ends In:</span>
      <div className='flex relative border px-2 py-1 border-gray-500 text-red-400 rounded-lg text-xl tracking-widest'>
        <span>{hours.toString().padStart(2, '0')}</span>
        :
        <span>{minutes.toString().padStart(2, '0')}</span>
        :
        <span>{seconds.toString().padStart(2, '0')}</span>
        <span className="absolute top-[-5px] right-[-5px] inline-flex h-3 w-3 rounded-full bg-red-400">
          <span className="animate-ping inline-flex rounded-full h-3 w-3 top-0 bg-red-500"></span>
        </span>
      </div>
    </div>
  )
}

export default CountdownTimer