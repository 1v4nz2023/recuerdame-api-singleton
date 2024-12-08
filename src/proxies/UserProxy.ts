import { Request, Response } from "express";
import { prisma } from "../prismaClient";

export class UserProxy {
  // Get all users
  async GEt_ALL_USERS(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  }

  // Get user by ID
  async GET_USER_BY_ID(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  }

  // nombres String
  // password String
  // rol String
  // estado String

  // Create a new user
  async CREATE_USER(req: Request, res: Response) {
    try {
      const { username, email, nombres, password, rol, estado } = req.body;
      const user = await prisma.user.create({
        data: { username, email, nombres, password, rol, estado },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  }

  // Update a user by ID
  async UPDATE_USER(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { username, email, nombres, password, rol, estado } = req.body;
      const user = await prisma.user.update({
        where: { id },
        data: { username, email, nombres, password, rol, estado},
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Error updating user" });
    }
  }

  // Delete a user by ID
  async DELETE_USER(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await prisma.user.delete({
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error deleting user" });
    }
  }
}


export const UserProxyInstance = new UserProxy();