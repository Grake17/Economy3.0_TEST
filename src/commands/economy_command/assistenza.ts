// ===================================================
// Command Assitenza
// ===================================================

// Import Config
import { author_name, economy_color, channels } from "../../config.json";
// Import Discord Type
import { Message, MessageEmbed, TextChannel } from "discord.js";
// Import Table Interface
import tables from "../../db/table_interface";
// import Error MGS
import errorMGS from "../../utils/errorMGS";
// Import Chekc Permission
import checkPermission from "../../utils/checkPermisison";

// Export Command
export default async function assistenza(
  mgs: Message,
  table: tables,
  args: string[]
) {
  // Check Command
  switch (args[2]) {
    case "new":
      assistenza_new(mgs, table, args);
      break;
    case "list":
      assistenza_list(mgs, table, args);
      break;
    case "case":
      assistenza_case(mgs, table, args);
      break;
    default:
      errorMGS(mgs, "Comando Invalido!");
  }
}

// New Function
async function assistenza_new(mgs: Message, table: tables, args: string[]) {
  // Users Tags
  const tags = mgs.mentions.members?.map((users) => users.id);
  // Content
  let text: string;
  // Check if Tags
  if (tags)
    text = mgs.content.substring(14, mgs.content.length - 23 * tags.length);
  else text = mgs.content.substring(3);
  // Add to DB
  table.cases_table
    .create({
      caseauthorid: mgs.author.id,
      messagecontent: text,
      messageurl: mgs.url,
      messageid: mgs.id,
      taggedusers: tags?.toString(),
    })
    .then(() => {
      // Embed Users
      const embed = new MessageEmbed()
        .setAuthor(author_name)
        .setColor(economy_color)
        .setTitle(`Richiesta effettuata`)
        .setDescription(`Lo staff risponderà il prima possibile`);
      // Send Message to users
      mgs.channel.send(embed);
      // Message Content
      const content = [
        `**Canale messaggio** : <#${mgs.channel.id}>`,
        `**Link messaggio**: [link](${mgs.url})`,
        `**Contenuto richiesta**: ${text}`,
        `**Numero Utenti Taggati**: ${tags?.length}`,
      ].join("\n");
      // Embed for staffs
      embed
        .setTitle(`Nuova richiesta da *${mgs.author.username}*`)
        .setDescription(content);
      // Get Staff Channel
      const channel_staff = mgs.guild?.channels.cache.get(
        channels.staff_channel
      ) as TextChannel;
      // Send Staff Message
      channel_staff.send(embed);
    });
}

// List Function
async function assistenza_list(mgs: Message, table: tables, args: string[]) {
  // Check Channel
  if (channels.staff_channel !== mgs.channel.id) return;
  // Check Permissions
  if (!checkPermission(mgs.author.id)) return errorMGS(mgs, "Repoooooort!");
  // Get All Cases
  table.cases_table.findAll({ where: { state: "PENDING" } }).then((cases) => {
    // Create embed
    const embed = new MessageEmbed()
      .setAuthor(author_name)
      .setColor(economy_color)
      .setDescription("Lista dei casi aperti");
    cases.map((elment) => {
      // Get Array Element
      const data = elment.get();
      // Add Fields
      embed.addField(
        `Case N: ${data.caseid}  Stato: ${data.state}`,
        `Caso aperto da <@!${data.caseauthorid}>`
      );
    });
    // Send Message
    mgs.channel.send(embed);
  });
}

// Case Function
async function assistenza_case(mgs: Message, table: tables, args: string[]) {
  // Check Channel
  if (channels.staff_channel !== mgs.channel.id) return;
  // Check Permissions
  if (!checkPermission(mgs.author.id)) return errorMGS(mgs, "Repoooooort!");
  // Check Specific case
  if (!args[3]) return errorMGS(mgs, "Devi specificare l'ID di un caso");
  // Get Data
  table.cases_table.findOne({ where: { caseid: args[3] } }).then((data) => {
    // Get Data
    const variables = data?.get();
    // Check If null
    if (variables == null)
      return errorMGS(mgs, "Non ho trovato nessun caso con quell'ID");
    // Embed
    const embed = new MessageEmbed()
      .setAuthor(author_name)
      .setColor(economy_color);
    // Set Content
    const content = [
      `ID Caso: ${variables.caseid}`,
      `Autore caso: <@!${variables.caseauthorid}>`,
      `Contenuto: ${variables.messagecontent}`,
      `Message URL: ${variables.messageurl}`
    ].join("\n");
    // Check Tags
    if (variables.taggedusers?.length !== 0)
      // Add Fields
      embed.addField(
        "Tagged Users",
        `${variables.taggedusers?.split(",").map((user) => `<@!${user}>`)}`
      );    
    // Set Descripion
    embed.setDescription(content);
    // Send Emebd
    mgs.channel.send(embed);
  });
}

// Assistenza Resolve
async function assistenza_pay(mgs: Message, table: tables, args: string[]) {
    
}