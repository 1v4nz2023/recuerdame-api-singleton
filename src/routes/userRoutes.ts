import { Router } from "express";
import { userProxy } from "../proxies/UserProxy";

const router = Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await userProxy.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userProxy.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
});

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userProxy.createUser({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = await userProxy.updateUser(id, { name, email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await userProxy.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
});

export default router;
