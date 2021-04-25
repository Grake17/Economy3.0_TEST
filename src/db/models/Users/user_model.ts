// ===================================================
// User Model
// ===================================================

// Import Sequelize
import Sequelize from 'sequelize'

// Models
const users = {
  userId: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true
  },
  gamerTag: {
    type: Sequelize.STRING,
    defaultValue: null,
    unique: true
  },
  guest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  ciurmaId: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  saldo: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  saldoDepositatoTot: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  saldoDepositatoPar: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  guadagnoMensile: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  pirataLeggendario: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  guardianoAthena: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  dataEntrataCiurma: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  dataEntrataVoc: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  bannato: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  discordlevel: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  gamelevel: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  chiavi: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  dateGuest: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  guestTime: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}

// Models
const users_model = { name: 'crews', model: users }

// Export Model
export default users_model
