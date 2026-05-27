import { format } from "date-fns";

export const TIME_SLOTS = ["10:00", "12:00", "14:00", "16:00", "18:00"] as const;

/**
 * Mock availability — in production this comes from Supabase.
 * TODO: Replace with:
 *   const { data } = await supabase
 *     .from('bookings')
 *     .select('starts_at')
 *     .gte('starts_at', dayStart)
 *     .lte('starts_at', dayEnd);
 */
export function getBookedSlots(date: Date): string[] {
  const key = format(date, "yyyy-MM-dd");
  // Deterministic pseudo-random "booked" slots based on date
  const sum = key.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const booked: string[] = [];
  if (sum % 3 === 0) booked.push("10:00");
  if (sum % 4 === 0) booked.push("14:00");
  if (sum % 5 === 0) booked.push("18:00");
  return booked;
}

export function isClosed(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 1; // Sun & Mon closed
}
