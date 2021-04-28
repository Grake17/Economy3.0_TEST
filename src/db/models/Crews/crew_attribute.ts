// ===================================================
// Crew Attribute
// ===================================================

// Import Sequelize
import { IntegerDataType, StringDataType } from 'sequelize'

// Export Interface
export default interface Crew {
  crewId: string,
  name: string,
  creatorId: string,
  stanzaPrincipale: string,
  logo: string,
  saldo: number,
  saldoMensile: number,
  verificata: boolean,
  bannata: boolean,
  livellociurma: number,
  membrimin: number,
  membrimax: number
}
