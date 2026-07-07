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
  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error || "Failed to submit booking");
  }

  return await response.json();
}