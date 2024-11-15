import User from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = await User.create(req.body);
        if (!userData) {
            return res.status(400).json({ message: "User not created" });
        }
        const savedData = await userData.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(400).json({ message: "Users data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400).json({ message: "User not found" });
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(401).json({ message: "User not found" });
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(401).json({ message: "User not found" });
        }
         await User.findByIdAndDelete(id);
        res.status(200).json({msg: "user deleted"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};