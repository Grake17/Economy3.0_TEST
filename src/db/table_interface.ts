// ===================================================
// Table Interface
// ===================================================

// Import Sequelize
import { Model, ModelCtor } from "sequelize"
// Import Interface
import crew_interface from "./models/Crews/crew_attribute"
import temp_roles_interface from "./models/Temp_Roles/temp_roles_attributes"
import user_interface from "./models/Users/user_attributes"
import cases_interface from "./models/Cases/cases_attributes"


export default interface tables {
    crew_table: ModelCtor<Model<crew_interface>>
    user_table: ModelCtor<Model<user_interface>>
    temp_roles_table: ModelCtor<Model<temp_roles_interface>>
    cases_table: ModelCtor<Model<cases_interface>>
}
