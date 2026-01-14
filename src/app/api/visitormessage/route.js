import dbConnection from "@/lib/db";
import Visitormessage from "@/model/Visitormessage";

export async function POST(req, res){
    await dbConnection();
    const {name, email, skill, message} = await req.json();
    
    try {
        const newVisitorMessage = new Visitormessage({name, email, skill, message});
        await newVisitorMessage.save();
        return new Response(JSON.stringify({message: "Message saved successfully"}), {status: 201});
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to save message"}), {status: 500});
    }
}
