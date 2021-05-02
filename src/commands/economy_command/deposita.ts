// ===================================================
// Command Deposita
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Table Interface
import tables from "../../db/table_interface";
// Import MGS ERROR
import errorMGS from "../../utility/errorMGS";
// Fucntion Get User
import getUserDB from "../../utility/User_Utility/getUserDB";
// Import Sequelize
import imp_seq from "../../db/sequelize";
// Get Crew
import getCrew from "../../utility/Crew_Utility/getCrew";
// import Config
import { author_name, economy_color } from "../../config.json";

// Export Funcion
export default async function deposita(mgs: Message, table: tables, args: string[]) {
    // Check User Input
    if (!Number(args[2]) || Number(args[2]) < 1000) return errorMGS(mgs, "Valore inserito invalido");
    // Get User
    const user = (await getUserDB(mgs.author.id, table))?.get();
    // Check Credits
    if (!user?.saldo || user?.saldo < Number(args[2])) return errorMGS(mgs, "Non hai abbastanza soldi");
    // Check Crew
    if (!user.ciurmaId) return errorMGS(mgs, "Non sei in nessuna ciurma!");
    // Get Crew
    const crew = (await getCrew(user.ciurmaId, table))?.get();
    // Test Crew
    if (!crew?.saldo) return errorMGS(mgs, "Ciurma non trovata");
    // Sequelize 
    const sequelize = await imp_seq();
    // Check Sequelize
    if (!sequelize) return errorMGS(mgs, "Internal DB Error");
    // Make Transaction
    const t = await sequelize.transaction();
    // User Pay        
    await table.user_table.update({ saldo: user.saldo - Number(args[2]) }, { where: { userId: mgs.author.id }, transaction: t });
    // Pay Crew
    await table.crew_table.update({ saldo: crew.saldo + Number(args[2]) }, { where: { crewId: user.ciurmaId }, transaction: t });
    // Commit Transaction
    t.commit().then(() => {
        // New Embed
        const embed = new MessageEmbed()
            .setAuthor(author_name)
            .setColor(economy_color)
            .setTitle(`Talleri Depositati`)
            .setDescription(`${mgs.author.username} hai depositato con successo ${args[2]} talleri.`);
        // Send Message
        mgs.channel.send(embed);
    }).catch((err) => errorMGS(mgs, "Error 500"));
}