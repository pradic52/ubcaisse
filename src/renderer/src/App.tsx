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
      <div className={mainClass.mainBackgroundColor}>
        <div className="row">
          <div className="col bg-white"></div>
          <div className="col">
            <div className="row">
              <Header />
            </div>
            <div className="row" style={{ marginTop: 5 }}>
              <Smallscreem />
            </div>
            <div className="row" style={{ marginTop: 5 }}>
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
