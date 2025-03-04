import users from "../model/user-schema.js";

export const userSignup = async (request, response) => {
    try {
        // Check if user already exists
        const existingUser = await users.findOne({
            $or: [
                { email: request.body.email },
                { username: request.body.username }
            ]
        });

        if (existingUser) {
            return response.status(400).json({ message: "User already registered" });
        }

        // Create a new user
        const newUser = new users(request.body);
        await newUser.save();

        response.status(200).json({ message: "Signup successful" });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
};
