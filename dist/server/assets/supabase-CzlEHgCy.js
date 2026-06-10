import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kwuqofiwrnbuloblhcmc.supabase.co";
const supabaseAnonKey = "sb_publishable_uSljvMsMVmYyNYRy_Vsenw_KnC6-xJ6";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
