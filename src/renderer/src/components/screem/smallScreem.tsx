import { JSX } from 'react'
import Container from '../card'
import { mainClass } from '@renderer/assets/style/base'

function Smallscreem(): JSX.Element {
  return (
    <>
      <Container className={mainClass.headerItems} style={{ margin: 10 }}>
        <div className="text-uppercase" style={{ height: 20 }}>
          veuille saisir le code de l&apos;article
        </div>
      </Container>
    </>
  )
}

export default Smallscreem
