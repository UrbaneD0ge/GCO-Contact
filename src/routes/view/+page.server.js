import { supabase } from "$lib/supabaseClient";
import { UUID } from "$env/static/private";

export async function load() {
    // Get all tables
    const { data, error } = await supabase.from("contacts").select("*");

    console.log(data)

    return {
      contacts: data ?? ["No data"],
      error: error ?? null,
    };
  }