import { JSX } from 'react'
import Key from './key' // <-- assure-toi que le chemin est correct

import { topFunctions, sideFunctions, numPad, actionFunctions } from '../../config/keyboard'

export default function MainKeyboard(): JSX.Element {
  return (
    <div className="container">
      {/* 1) ligne du haut */}
      <div className="row grid text-">
        {topFunctions.map((fn, i) => (
          <Key
            key={i}
            label={fn.label}
            className={fn.variant ? `text-white bg-${fn.variant} g-col-2` : ''}
          />
        ))}
      </div>

      {/* 2) corps: côté gauche, pavé, côté droit */}
      <div className="row">
        <div className="col">
          {sideFunctions.map((fn, i) => (
            <Key
              key={i}
              label={fn.label}
              className={fn.variant ? `text-white bg-${fn.variant}` : 'bg-secondary text-white'}
            />
          ))}
        </div>

        <div className="col-5">
          {numPad.flat().map((label, idx) => (
            <Key key={idx} label={label} className="bg-dark text-white" />
          ))}
        </div>

        <div className="col">
          {actionFunctions.map((fn, i) => (
            <Key key={i} label={fn.label} className={`text-white bg-${fn.variant}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
