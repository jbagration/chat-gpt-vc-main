import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"


function HomePage() {
  return (
    <div className='flex flex-col items-center h-screen text-black'>

        <div className='flex space-x-2 p-2 text-center'>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun Icon */}
                    <SunIcon className='h-8 w-8'/>
                    <h3>Примеры</h3>
                </div>

                <div className='space-y-2'>
                    <p className='infoText example-button'>Расскажи о квантовых вычислениях простыми словами</p>
                    <p className='infoText example-button'>
                    Придумай 10 идей подарков для мальчика семи лет
                    </p>
                    <p className='infoText example-button'>Как сделать HTTP-запрос в Javascript</p>
                </div>
            </div>

            {/* second */}
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun Icon */}
                    <BoltIcon className='h-8 w-8'/>
                    <h3>Возможности</h3>
                </div>

                <div className='space-y-2'>
                    <p className='infoText'>ChatGPT помнит, что пользователь сообщил ранее</p>
                    <p className='infoText'>
                    Позволяет вносить правки в процессе
                    </p>
                    <p className='infoText'>Может не отвечать на неуместные запросы</p>
                </div>
            </div>

            {/* third */}
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun Icon */}
                    <ExclamationTriangleIcon className='h-8 w-8'/>
                    <h3>Ограничения</h3>
                </div>

                <div className='space-y-2'>
                    <p className='infoText'>Может генерировать недостоверную информацию</p>
                    <p className='infoText'>
                    Может производить нетолерантные или предвзятые ответы
                    </p>
                    <p className='infoText'>Знания о мире после 2021 года ограничены или отсутствуют</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomePage