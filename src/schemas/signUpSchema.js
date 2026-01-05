import * as z from 'zod';

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export const User = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long').required(),
    lastname: z.string().min(2, 'Name must be at least 2 characters long'),
    username: z.string().lowercase('please username must be in lowercase').required().min(4, 'Username must be at least 4 characters long').max(10, 'Username must be max 10 characters long'),
    email: z.string().regex(
        /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username must be 3–20 characters and contain only letters, numbers, _ or ."
    ).required(),
    password: z.string().min(6, 'minimum 6 charecters are need').regex(passwordRegex, 'Your passwrod must be strong'),

})