import data from './data.json'

function App() {
  return (
    <>
      <main className="main">
        <div className="main__left">
          <h1>Your Result</h1>
          <div className="main__score">
            <span className="main__number-1">76</span>
            <span className="main__number-2">of 100</span>
          </div>
          <div className="main__eval">Great</div>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="main__right">
          <h2>Summary</h2>
          <ul>
            {data.map((item, index) => (
              <li key={item.category} className={`li-${index.toString()}`}>
                <span className="main__metric">
                  <img src={item.icon} alt="" />
                  <span>{item.category}</span>
                </span>
                <span className="main__item-score">
                  {item.score} <span>/ 100</span>
                </span>
              </li>
            ))}
          </ul>
          <button>Continue</button>
        </div>
      </main>
      <footer className="attribution">
        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/adam-crowley">Adam Crowley</a>.
        </p>
      </footer>
    </>
  )
}

export default App
