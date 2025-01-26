function App() {
  return (
    <>
      <main className="main">
        <div className="main__left">
          <h1>Your Result</h1>
          <div className="main__score">76 of 100</div>{' '}
          <div className="main__eval">Great</div>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="main__right">
          <h2>Summary</h2>
          <ul>
            <li>
              <span>Reaction</span> <span>80</span> <span>/ 100</span>
            </li>
            <li>
              <span>Memory</span> <span>92</span> <span>/ 100</span>
            </li>
            <li>
              <span>Verbal</span> <span>61</span> <span>/ 100</span>
            </li>
            <li>
              <span>Visual</span> <span>72</span> <span>/ 100</span>
            </li>
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
