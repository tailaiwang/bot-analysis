import robotLogo from '/robot.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://docs.google.com/document/d/1LAy9pFN3Mt0y3Jrbu3U3QPbDeptVjJhxCiYgUsq0DQI/edit" target="_blank">
          <img src={robotLogo} className="logo" alt="Robot" />
        </a>
      </div>
      <h1>CS 492 Final Project</h1>
      <div className="card">
        <p>
            Lorme ipsum...
        </p>
      </div>
    </>
  )
}

export default App
