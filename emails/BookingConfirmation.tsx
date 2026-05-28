/**
 * Booking confirmation email template.
 *
 * DEMO MODE: This file is NOT wired up — keeping the import surface clean.
 * GOING LIVE: install @react-email/components, then uncomment, then import in
 * app/api/stripe/webhook/route.ts and pass to resend.emails.send({ react: ... }).
 */

// import {
//   Html,
//   Head,
//   Body,
//   Container,
//   Heading,
//   Text,
//   Hr,
//   Section,
// } from "@react-email/components";
//
// type Props = {
//   booking: {
//     name: string;
//     starts_at: string;
//     style: string;
//     size: string;
//     placement: string;
//     id: string;
//   };
// };
//
// export default function BookingConfirmation({ booking }: Props) {
//   return (
//     <Html>
//       <Head />
//       <Body style={{ fontFamily: "system-ui", background: "#0a0a0a", color: "#e8e6e3", padding: 24 }}>
//         <Container style={{ maxWidth: 560, margin: "0 auto" }}>
//           <Heading style={{ color: "#b91c1c", letterSpacing: 4 }}>BUDDHA · TATTZ</Heading>
//           <Text>Hey {booking.name},</Text>
//           <Text>Your booking is locked in. Details below — bring valid ID and eat beforehand.</Text>
//           <Hr style={{ borderColor: "#2a2a2a" }} />
//           <Section>
//             <Text><strong>When:</strong> {new Date(booking.starts_at).toLocaleString()}</Text>
//             <Text><strong>Style:</strong> {booking.style}</Text>
//             <Text><strong>Size:</strong> {booking.size}</Text>
//             <Text><strong>Placement:</strong> {booking.placement}</Text>
//             <Text><strong>Confirmation #:</strong> {booking.id}</Text>
//           </Section>
//           <Hr style={{ borderColor: "#2a2a2a" }} />
//           <Text style={{ color: "#888" }}>
//             Need to reschedule? Reply to this email at least 48 hrs out.
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }

export {};
