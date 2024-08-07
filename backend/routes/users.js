import express from "express";
import {
  getUser,
  getUserFollowers,
  getUserFollowing,
  addRemoveFollow,
  updateUser,
  updatePassword,
  updateUserPicture,
  deleteUser,
  getTotalLikes,
  getTopLiker,
  getUserRank,
  updateUserPrompt
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import User from "../models/User.js"

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/followers", verifyToken, getUserFollowers);
router.get("/:id/following", verifyToken, getUserFollowing);
router.get("/:id/totalLikes", verifyToken, getTotalLikes);
router.get("/:id/topLiker", verifyToken, getTopLiker);

/* UPDATE USER DETAILS IN PROMPT */
router.post("/prompt/:username", verifyToken, updateUserPrompt);


/* UPDATE */
router.patch("/:id/:userId", verifyToken, addRemoveFollow);

/* UPDATE USER PASSWORD */
router.post("/:id/password", verifyToken, updatePassword);
/* UPDATE USER DETAILS */
router.patch("/:id", verifyToken, updateUser);
/* UPDATE USER PICTURE */
router.patch("/:id/picture", verifyToken, updateUserPicture);

/* DELETE USER */
router.delete("/:id", verifyToken, deleteUser); 


// routes/users.js
router.get("/:id/rank", verifyToken, getUserRank);


export default router;
