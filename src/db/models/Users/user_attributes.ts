// ===================================================
// User Attribute
// ===================================================

// User Interface
export default interface User {
  userId: string;
  gamerTag?: string;
  guest?: boolean;
  ciurmaId?: string;
  saldo?: number,  
  saldoDepositatoTot?: number;
  saldoDepositatoPar?: number;
  guadagnoMensile?: number;
  pirataLeggendario?: boolean;
  guardianoAthena?: boolean;
  dataEntrataCiurma?: Date;
  dataEntrataVoc?: string;
  bannato?: boolean;
  discordlevel?: number;
  gamelevel?: number;
  chiavi?: number;
  dateGuest?: Date;
  guestTime?: Date;
}
