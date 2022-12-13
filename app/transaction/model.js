const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema({
    historyVoucherTopup: {
        gameName: { type: String, require: [true, 'nama game harus diisi']},
        category: { type: String, require: [true, 'kategori harus diisi']},
        thumbnail: { type: String},
        coinName: { type: String, require: [true, 'nama koin harus diisi']},
        coinQuantity: { type: String, require: [true, 'jumlah koin harus diisi']},
        price: { type: Number, require: [true, 'hargaharus diisi']},
    },

    historyPayment: {
        name: { type : String, require: [true, 'nama harus diisi']},
        type: { type : String, require: [true, 'tipe pembayaran harus diisi']},
        bankName: { type : String, require: [true, 'nama bank harus diisi']},
        noRekening: { type : Number, require: [true, 'no rekening harus diisi']},
    },

    name: {
        type: String,
        require: [true, 'nama harus diisi'],
    },

    accountUser: {
        type: String,
        require: [true, 'nama akun harus diisi'],
    },

    tax: {
        type: Number,
        default: 0,
    },

    value: {
        type: Number,
        default: 0,
    },

    status: {
        type: String,
        enum: ['pending','success','failed'],
        default: 'pending',
    },

    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    },

    historyUser: {
        name: { type: String, require: [true, 'nama player hsrus diisi']},
        phoneNumber: {
            type: Number,
            require: [true, 'no telpon harus diisi'],
        }
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
