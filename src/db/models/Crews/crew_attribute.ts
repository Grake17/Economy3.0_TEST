// ===================================================
// Crew Attribute
// ===================================================

// Import Sequelize
import { IntegerDataType, StringDataType } from 'sequelize'

// Export Interface
export default interface Crew_Attribute {
  crewId: {
    type: StringDataType,
    unique: true,
    primaryKey: true
  },
  name: {
    type: StringDataType,
    unique: true
  },
  creatorId: {
    type: StringDataType,
    defaultValue: null
  },
  stanzaPrincipale: {
    type: StringDataType,
    defaultValue: null
  },
  logo: {
    type: StringDataType,
    defaultValue: null
  },
  saldo: {
    type: IntegerDataType,
    defaultValue: 0
  },
  saldoMensile: {
    type: IntegerDataType,
    defaultValue: 0
  },
  verificata: {
    type: Boolean,
    defaultValue: false
  },
  bannata: {
    type: Boolean,
    defaultValue: false
  },
  livellociurma: {
    type: IntegerDataType,
    defaultValue: 1
  },
  membrimin: {
    type: IntegerDataType,
    defaultValue: 6
  },
  membrimax: {
    type: IntegerDataType,
    defaultValue: 10
  }
}
