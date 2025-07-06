// src/config/keyboard.ts
import { Weight } from 'lucide-react'
export const topFunctions = [
  { label: 'DÉCONNEXION', variant: 'success' },
  { label: 'VÉRIF. PRIX', variant: 'success' },
  { label: 'SOLDE CARTE-CADEAU', variant: 'success' },
  { label: 'TÉLÉPHONE RÉAPPRO', variant: 'success' }
]

export const sideFunctions = [
  { label: 'CONSIGNE' },
  { label: '↑' },
  { label: '↓' },
  { label: 'CORR. ERREUR', variant: 'light' },
  { label: 'CL', variant: 'light' }
]

export const numPad = [['7', '8', '9', '@'], ['4', '5', '6', '.'], ['1', '2', '3'], ['0', '00']]

export const actionFunctions = [
  { label: 'ENTRÉE', variant: 'info' },
  { label: 'TOTAL', variant: 'info' },
  { label: 'PETIT ECO', variant: 'warning', icon: Weight },
  { label: 'GRAND ECO', variant: 'warning', icon: Weight }
]
