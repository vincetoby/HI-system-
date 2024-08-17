import mongoose from "mongoose";
import bcrypt from "bcrypt";

const HISSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hospitalCategory: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'hospital'],
       
    }
}, { timestamps: true });

// Pre-save hook to hash the password before saving
HISSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const HISModel = mongoose.model("Users", HISSchema);

export default HISModel;
