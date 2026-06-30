import { supabase } from "@/integrations/supabase/client";

export type BookingInput = {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  service: string;
  details?: string;
  source?: string;
};

export async function submitBooking(input: BookingInput) {
  const { error } = await supabase.from("bookings").insert([
    {
      first_name: input.first_name.trim(),
      last_name: input.last_name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone?.trim() || null,
      service: input.service,
      details: input.details?.trim() || null,
      source: input.source || null,
    },
  ]);
  if (error) throw new Error(error.message);
  return { ok: true };
}