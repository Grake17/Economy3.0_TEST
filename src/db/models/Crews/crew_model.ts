// ===================================================
// Crew Model
// ===================================================

// Import Sequelize
import Sequelize from "sequelize";

// Attributes
const crews = {
  crewId: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  creatorId: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  stanzaPrincipale: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  logo: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  saldo: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  saldoMensile: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  verificata: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  bannata: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  livellociurma: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  membrimin: {
    type: Sequelize.INTEGER,
    defaultValue: 6,
  },
  membrimax: {
    type: Sequelize.INTEGER,
    defaultValue: 10,
  },
};

// Model Crew
const crews_model = { name: "crews", model: crews };

// Export Model
export default crews_model;
