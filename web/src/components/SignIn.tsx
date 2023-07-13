import React, { useState } from 'react'

function SignIn (): JSX.Element {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  function handleInputChange ({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [target.name]: target.name === 'remember' ? target.checked : target.value
    })
  }

  const handleSubmit = (): void => {
    console.log('submit')
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
          value={form.password}
        />
      </div>
      <div className="flex items-center justify-between">
        <a
          href="/redefine-password"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          Esqueceu a sua senha?
        </a>
      </div>
      <button
        type="submit"
        className="hover:bg-primary-700 w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Entrar
      </button>
    </form>
  )
}

export default SignIn
