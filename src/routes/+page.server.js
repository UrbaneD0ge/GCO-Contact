import { supabase } from "$lib/supabaseClient";
import { UUID } from "$env/static/private";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        console.log(data.get("name"));
        console.log(data.get("email"));

        const { error } = await supabase.from("contacts").insert([
            {
                name: data.get("name"),
                email: data.get("email"),
                user_id: UUID
            }
        ]);
        if (error) {
            console.log(error);
            return {
                status: 500,
                message: error.message,
                body: error.details
            };
        } else {
            return {
                status: 200,
                body: {
                    name: data.get("name"),
                    email: data.get("email"),
                    message: "Contact added successfully!"
                }
            };
        }
    }
};