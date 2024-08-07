const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    nama_pengguna: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    nomor_telepon: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);