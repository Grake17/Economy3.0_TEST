// ===================================================
// Model Cases
// ===================================================

// Import Sequelize
import Sequelize from "sequelize";

// Cases Model
const cases = {
  caseid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  caseauthorid: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  messagecontent: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  messageurl: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  messageid: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  taggedusers: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: "PENDING",
  },
};

// Create Model
const cases_model = { name: "cases", model: cases };

// Export Model
export default cases_model;