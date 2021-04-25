// ===================================================
// Table Interface
// ===================================================

import { Model, ModelCtor } from "sequelize"

export default interface tables {
    crew_table: ModelCtor<Model<any,any>>,
    user_table: ModelCtor<Model<any,any>>
}
