import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          Hola este es un
          <div className="p-2 text-sm my-2 cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-800 hover:font-semibold">
            Botón de prueba
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
