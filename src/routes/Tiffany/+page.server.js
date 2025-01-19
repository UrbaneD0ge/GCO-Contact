import { supabase } from "$lib/supabaseClient";
import { UUID } from "$env/static/private";

export const actions = {
    default: async ({ request }) => {
        // simulate slow connection
        // await new Promise((resolve) => setTimeout(resolve, 4000));
        const data = await request.formData();
        console.log(data.get("name"));
        console.log(data.get("email"));

        const { error } = await supabase.from("contacts").insert([
            {
                name: data.get("name"),
                email: data.get("email"),
                latitude: data.get("latitude"),
                longitude: data.get("longitude"),
                user_id: UUID,
                rep_id: 6
            }
        ]);
        if (error) {
            console.log(error);
            return {
                status: 500,
                code: error.code,
                message: error.message,
                body: error.details
            };
        } else {
            return {
                status: 200,
                body: "Contact added successfully!",
                name: data.get("name"),
                email: data.get("email"),
                message: "Contact added successfully!"
            };
        }
    }
};