import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ error: "Not authorized" });
  }

  try {
    await dbConnect();
  } catch (error) {
    console.error(error);
    return response.status(503).json({ error: "Database connection failed" });
  }

  try {
    const { currentPassword, newPassword } = request.body;

    if (!currentPassword || !newPassword) {
      return response.status(400).json({ error: "Please fill in all fields" });
    }

    if (newPassword.length < 8) {
      return response
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    const user = await User.findOne({ username: session.user.name });
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) {
      return response
        .status(400)
        .json({ error: "Current password is incorrect" });
    }

    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();

    return response
      .status(200)
      .json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Error changing password" });
  }
}
