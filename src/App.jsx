import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=''>
      <form action="" className='col-start-3 col-end-7 grid grid-cols-1 gap-6'>
        <div>
          {/* <img
              className=""
              src=""
              alt="ShiftTag"
            /> */}
            <h1 className='font-bold'>ScoreNow</h1>
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
        <div className='block'>
            <div className="grid grid-cols-2">
              <div className='col-start-1'>
                <label htmlFor="remember-me">
                  <input type="checkbox" name="remember-me" id="remember-me" checked/>
                  <span className='ml-2'>Lembrar usuário</span>
                </label>
              </div>
              <div className='col-end-4 col-span-1'>
                <a href="#"><span className='ml-2 underline'>Esqueci minha senha.</span></a>
              </div>
            </div>
        </div>
        <div>
          <button type='submit' className='border-2 p-4 flex w-full justify-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Entrar
          </button>
        </div>
        <div className='flex justify-center'>
          <h4 className=''>Não é possível se logar? <span className='underline'><a href="#">Abra um ticket.</a></span></h4>
        </div>
      </form>
    </main>
  )
}

export default App
