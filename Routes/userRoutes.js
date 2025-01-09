import express from "express";
import User from "../Models/userModel.js"; // Asegúrate de importar el modelo correctamente

const router = express.Router();

// Obtener todos los usuarios
router.get("/usuarios", async (req, res) => {
  try {
    const users = await User.find(); // Cambié 'users' por 'User'
    res.status(200).json(users);
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).json({ error: "Error al obtener usuarios." });
  }
});

// Obtener usuario por ID
router.get("/usuarios/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(204).json();
    }
  } catch (err) {
    console.error("Error al obtener usuario:", err);
    res.status(500).json({ error: "Error al obtener usuario." });
  }
});

// Crear un nuevo usuario
router.post("/crearusuario", async (req, res) => {
  try {
    const { nombre, telefono } = req.body;

    // Validar datos
    if (!nombre || !telefono) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    // Crear usuario
    const newUser = new User({ nombre, telefono });
    await newUser.save();

    res
      .status(201)
      .json({ message: "Usuario creado exitosamente", data: newUser });
  } catch (err) {
    console.error("Error al crear usuario:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Actualizar usuario por ID
router.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(204).json();
    }
  } catch (err) {
    console.error("Error al actualizar usuario:", err);
    res.status(500).json({ error: "Error al actualizar usuario." });
  }
});

// Eliminar usuario por ID
router.delete("/usuarios/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(204).json();
    }
  } catch (err) {
    console.error("Error al eliminar usuario:", err);
    res.status(500).json({ error: "Error al eliminar usuario." });
  }
});

export default router;
