import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header (): JSX.Element {
  return (
    <header className="z-10 max-h-40 w-full bg-indigo-500 text-blue-950 p-5 font-black text-lg">
      <nav className="flex justify-around items-stretch">
        <div className="self-center max-w-[160px] text-center">
          Desafio Fullstack Java + React <br/>
          <a href="https://www.linkedin.com/in/thales-sz" target="_blank" className="hover:underline hover:text-blue-500 text-blue-100" rel="noreferrer">Feito por Thales</a>
        </div>
        <a href="/">
          <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" alt="logo" />
        </a>
        <a className="flex justify-center text-center gap-2 self-center" href="/login">
          <FontAwesomeIcon icon={faUser} size="lg"/>
          Login
        </a>
      </nav>
    </header>
  )
}

export default Header
