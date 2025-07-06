import { JSX } from 'react'
import Key from './key' // <-- assure-toi que le chemin est correct
import '@renderer/assets/style/keyboard.css' // <-- importe ton CSS

import { topFunctions, sideFunctions, numPad, actionFunctions } from '../../config/keyboard'

export default function MainKeyboard(): JSX.Element {
  return (
    <div className="keyboard">
      {/* 1) ligne du haut */}
      <div className="top-row">
        {topFunctions.map((fn, i) => (
          <Key
            key={i}
            label={fn.label}
            className={fn.variant ? `text-white bg-${fn.variant}` : ''}
          />
        ))}
      </div>

      {/* 2) corps: côté gauche, pavé, côté droit */}
      <div className="keyboard-body">
        <div className="side-col">
          {sideFunctions.map((fn, i) => (
            <Key
              key={i}
              label={fn.label}
              className={fn.variant ? `text-white bg-${fn.variant}` : 'bg-secondary text-white'}
            />
          ))}
        </div>

        <div className="num-pad">
          {numPad.flat().map((label, idx) => (
            <Key key={idx} label={label} className="bg-dark text-white" />
          ))}
        </div>

        <div className="action-col">
          {actionFunctions.map((fn, i) => (
            <Key key={i} label={fn.label} className={`text-white bg-${fn.variant}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
