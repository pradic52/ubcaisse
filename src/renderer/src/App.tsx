import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/card'
import { mainClass } from './assets/style/base'
import Header from './components/screem/header'
import Smallscreem from './components/screem/smallScreem'
import Secondescreem from './components/screem/secondeScreem'
import Mainkeyboard from './components/keyboard/mainkeyboard'

function App(): React.JSX.Element {
  return (
    <>
      <div
        className={mainClass.mainBackgroundColor}
        style={{
          margin: 0,
          padding: 0,
          maxHeight: '100vh',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div className="row">
          <div className="col bg-white"></div>
          <div className="col" style={{ width: '100%' }}>
            <div className="row">
              <Header />
            </div>
            <div className="row">
              <Smallscreem />
            </div>
            <div className="row">
              <Secondescreem />
            </div>
            <div className="row" style={{ marginTop: 5 }}>
              <Mainkeyboard />
            </div>
          </div>
        </div>
        <div className="row">
          <Container className={mainClass.envContainer} />
        </div>
      </div>
    </>
  )
}

export default App
