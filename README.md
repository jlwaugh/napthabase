# Napthabase

## Clone and run locally

1. Clone this repo

   ```bash
   git clone https://github.com/jlwaugh/napthabase.git
   ```

2. Navigate to app directory

    ```bash
   cd napthabase
   ```
    
3. Install dependencies

    ```bash
   npm install
   ```
   
4. Create `.env` with environment variables

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [Supabase project API settings](https://app.supabase.com/project/_/settings/api).

5. Run a local development server

   ```bash
   npm run dev
   ```

The starter kit should now be running on [localhost:3000](http://localhost:3000/).
