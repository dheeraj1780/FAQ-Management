import AdminModel from "../models/AdminModel.js";
import { UnauthenticatedError } from "../errors/customError.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const login = async (req, res) => {
  const user = await AdminModel.findOne({ username: req.body.username });
  console.log(req.body.username);
  console.log(user);
  console.log(req.body.password);
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  console.log(user.password);

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
