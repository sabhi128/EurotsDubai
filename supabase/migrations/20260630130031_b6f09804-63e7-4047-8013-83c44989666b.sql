CREATE TABLE public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  details text,
  source text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.bookings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit bookings (anon)"
  ON public.bookings FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Public can submit bookings (authenticated)"
  ON public.bookings FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read bookings"
  ON public.bookings FOR SELECT TO authenticated
  USING (true);