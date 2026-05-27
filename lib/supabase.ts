/**
 * Supabase clients — DEMO MODE: not instantiated.
 *
 * GOING LIVE:
 *   1. npm install @supabase/supabase-js @supabase/ssr
 *   2. Set env vars (see .env.example)
 *   3. Uncomment the block below
 *   4. Run supabase/schema.sql in the SQL editor to create the bookings table
 */

// import { createClient } from "@supabase/supabase-js";
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";
//
// /** Browser / RSC-safe client using the anon key */
// export const supabaseBrowser = () =>
//   createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );
//
// /** Server client with cookie pass-through (auth-aware) */
// export const supabaseServerCookies = async () => {
//   const cookieStore = await cookies();
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll: () => cookieStore.getAll(),
//         setAll: (xs) => xs.forEach((c) => cookieStore.set(c.name, c.value, c.options)),
//       },
//     }
//   );
// };
//
// /** Service-role client for trusted server work (writes from API routes) */
// export const supabaseServer = () =>
//   createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!,
//     { auth: { persistSession: false } }
//   );

export {};
