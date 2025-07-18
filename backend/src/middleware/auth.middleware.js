import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token=req.cookies.jwt
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized user not found",
      });
    }

    req.user = user;
    next();
       console.log("Authenticated user:", user._id); // ✅ Log to confirm

  } catch (error) {
    console.log("Error in protectedRoute Middleware", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
