import {z} from 'zod';

export const VisitorSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter a valid email address").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"),
    skill: z.string().min(1, "Skill is required"),
    message: z.string().min(1, "Message is required"),
})

