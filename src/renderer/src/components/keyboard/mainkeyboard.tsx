import { JSX } from 'react'
import Key from './key' // <-- assure-toi que le chemin est correct

import { topFunctions, sideFunctions, numPad, actionFunctions } from '../../config/keyboard'

export default function MainKeyboard(): JSX.Element {
  return (
    <div className="keyboard bg-primary" style={{ height: 'max-content' }}>
      <div style={{ gridTemplateColumns: 'repeat(6,1fr)' }} className="d-grid gap-2">
        {topFunctions.map((key) => (
          <Key key={key.label} label={key.label} />
        ))}
      </div>
      <div
        style={{ gridTemplateColumns: '2fr 6fr 4fr', marginTop: '0.6rem' }}
        className="d-grid gap-2"
      >
        <div className="d-grid gap-2">
          {sideFunctions.map((key) => (
            <Key key={key.label} label={key.label} />
          ))}
        </div>
        <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {numPad.flat().map((label, idx) => (
            <Key key={idx} label={label} className="bg-dark text-white" />
          ))}
        </div>
        <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {actionFunctions.map((key) => (
            <Key
              key={key.label}
              label={key.label}
              dimensions={{ height: '100%', width: '100px' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
