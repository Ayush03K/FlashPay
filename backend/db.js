const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    },
    username: {
        type: String,
        minLength: 3,
        maxLength: 30,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 15,
        minLength: 4,
    },
});

const accountSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const transactionSchema = new Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['success', 'failed'],
        default: 'success'
    }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
    User,
    Account,
    Transaction
};
