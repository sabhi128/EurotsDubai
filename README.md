# EurotsDubai

A premium home maintenance and luxury repair service platform designed with a modern, responsive, and high-end aesthetic. Built using **TanStack Start**, **React**, **Supabase**, and **Resend** for seamless, secure booking management and instant client communications.

---

## 🚀 Key Features

* **Premium Visual Design**: Harmonious gold & emerald theme featuring glassmorphism, smooth scrolling, and micro-animations driven by **Framer Motion**.
* **Type-Safe Routing**: Built with **TanStack Router** using file-based route trees for rapid client-side transitions.
* **Instant Booking Forms**: Seamless, secure client lead capture that stores booking data directly in **Supabase** database tables.
* **Automated Email Alerts**: Instant notifications sent to your admin inbox on new booking submissions using the server-side **Resend REST API**.
* **Responsive Assets & Favicons**: Custom-tailored layout configurations and cropped vector favicons optimized for multiple device viewports.

---

## 🛠️ Tech Stack

* **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (Vite + Nitro/Vinxi SSR engine)
* **Styling**: Tailwind CSS & Modern Custom CSS variables
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Database**: [Supabase](https://supabase.com/) (PostgreSQL Database & client connection)
* **Mailing**: [Resend](https://resend.com/) (Serverless REST API client)
* **Package Manager**: [Bun](https://bun.sh/) (Fast runtime & installer)

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh) (recommended) or [Node.js](https://nodejs.org) installed on your machine.

### 1. Clone & Install Dependencies

```bash
cd fix-it-luxe
bun install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Client-side Supabase keys (prefixed with VITE_ to expose to client bundle)
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Server-side Resend configurations (Hidden from client/browser)
RESEND_API_KEY=re_your_resend_api_key
NOTIFICATION_EMAIL=your-recipient-email@gmail.com
```

### 3. Run Development Server

```bash
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the application locally.

---

## 📦 Production & Deployment

### Build for Production

Compile both the client-side bundle and SSR Nitro server code:

```bash
bun run build
```

You can preview the production build locally:

```bash
bun run preview
```

### Hosting on Vercel

This repository is optimized for serverless hosting on Vercel:

1. Connect your repository to **Vercel**.
2. Vercel will automatically detect the **TanStack Start** framework.
3. Configure the following environment variables in the Vercel Dashboard under **Project Settings > Environment Variables**:
   * `VITE_SUPABASE_URL`
   * `VITE_SUPABASE_ANON_KEY`
   * `RESEND_API_KEY`
   * `NOTIFICATION_EMAIL`
4. Deploy!

---

## 🗄️ Database Setup

Ensure your connected Supabase project has a `bookings` table with the following schema:

```sql
create table bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  service text not null,
  details text,
  source text
);
```
