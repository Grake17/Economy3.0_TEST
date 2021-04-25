// ===================================================
// Table Interface
// ===================================================

// Import Sequelize
import { Model, ModelCtor } from "sequelize"
// Import Interface
import crew_interface from "./models/Crews/crew_attribute"
import user_interface from "./models/Users/user_attributes"


export default interface tables {
    crew_table: ModelCtor<Model<crew_interface>>,
    user_table: ModelCtor<Model<user_interface>>
}
