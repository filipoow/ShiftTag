import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <form action="" className='grid grid-cols-1 gap-6'>
        <div>
          {/* <img
              className=""
              src=""
              alt="ShiftTag"
            /> */}
            <h1 className='font-bold'>ShiftTag</h1>
            <h3>
              O Aplicativo de marcação de ponto mais rápido e fácil!
            </h3>
        </div>
        <div className=''>
          <label htmlFor="email" className='block'>
            <span className='text-gray-700'>Email</span>
            <input 
              id='email'
              name='email'
              type="email"
              autoComplete='email'
              required
              className='mt-1 block w-full' 
            />
          </label>
        </div>
        <div className=''>
          <label htmlFor="password" className='block'>
            <span className='text-gray-700'>Senha</span>
            <input 
              id='password'
              name='password'
              type="password"
              autoComplete='password'
              required
              className='mt-1 block w-full' 
            />
          </label>
        </div>
      </form>
    </main>
  )
}

export default App
