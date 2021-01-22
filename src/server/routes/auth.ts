import { User } from "#root/db/entities/User";
import { Request, Response, Router } from "express";
import { validate } from "class-validator";

const register = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    // validate data
    let errors: any = {};
    const emailUser = await User.findOne({ email });
    const usernameUser = await User.findOne({ username });

    if (emailUser) errors.email = "Email is already taken";
    if (usernameUser) errors.username = "Username is already taken";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    // create user
    const user = new User({ email, password, username });

    errors = await validate(user);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    await user.save();

    // return user
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const router = Router();
router.post("/register", register);

export default router;
