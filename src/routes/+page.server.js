import { supabase } from "$lib/supabaseClient";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        console.log(data.get("name"));
        console.log(data.get("email"));

        const { data: user, error } = await supabase.from("contacts").insert([
            {
                name: data.get("name"),
                email: data.get("email"),
            }
        ]);
        if (error) {
            console.log(error);
            return {
                status: 500,
                body: {
                    error: error.message
                }
            };
        }
    }
};