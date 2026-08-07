const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  isActive:{
    type: Boolean,
    default: true
  },
  roles:{
    type: String,
    enum: ['user', 'admin', 'moderator'], // Limits acceptable values
    default: 'user'
  },

});

module.exports = model('Usuario', UsuarioSchema)