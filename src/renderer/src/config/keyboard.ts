// src/config/keyboard.ts
import { Weight } from 'lucide-react'
export const topFunctions = [
  { label: 'DÉCON- NEXION', variant: 'success' },
  { label: 'VÉRIF. PRIX', variant: 'success' },
  { label: 'SOLDE CARTE-CADEAU', variant: 'success' },
  { label: '', variant: 'success' },
  { label: '', variant: 'success' },
  { label: '', variant: 'success' },
  { label: 'Consigne', variant: 'success' },
  { label: '@', variant: 'success' },
  { label: 'TÉLÉPHONE RÉAPPRO', variant: 'success' },
  { label: '', variant: 'success' },
  { label: '', variant: 'success' },
  { label: '', variant: 'success' }
]

export const sideFunctions = [
  { label: '↑' },
  { label: '↓' },
  { label: 'CORR. ERREUR', variant: 'primary' },
  { label: 'CL' }
]

export const numPad = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['00', '0', '000']
]

export const actionFunctions = [
  { label: 'ENTRÉE', variant: 'info' },
  { label: 'PETIT ECO', variant: 'warning', icon: Weight },
  { label: 'TOTAL', variant: 'info' },

  { label: 'GRAND ECO', variant: 'warning', icon: Weight }
]
