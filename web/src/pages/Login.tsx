import { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Header from '../components/Header'

function Login() {
  const [haveAccount, setHaveAccount] = useState(true)
  return (
    <section>
      <Header />
      <div className="mx-auto mt-20 mb-28 flex flex-col items-center justify-center">
        <div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {haveAccount ? 'Entre na sua conta' : 'Cadastro'}
            </h1>
            {haveAccount ? <SignIn /> : <SignUp />}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {haveAccount ? 'Não' : 'Já'} possui uma conta?{' '}
              <a
                onClick={() => {
                  setHaveAccount(!haveAccount)
                }}
                className="text-primary-600 font-medium text-blue-400 hover:underline"
              >
                {haveAccount ? 'Cadastre-se' : 'Faça login'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login