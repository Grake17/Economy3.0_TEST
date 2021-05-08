// ===================================================
// GetDate Function
// ===================================================

// Import Moment
import moment from "moment";

// Export Date
export default async function getDate(time: string | number): Promise<Date[]> {
  // Get Date Now
  const date_now = moment().utc(true).toDate();
  // Get Lease
  const date_lease = moment().utc(true).add(time, `hours`).toDate();
  // Return Info
  return [date_now, date_lease];
}
