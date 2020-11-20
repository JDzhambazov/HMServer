const UserSchema = new mongoose.Schema({
    // adressID :{
    //     type:'ObjectId',
    //     ref:'Adress',
    //     required:true
    // },
    adressID :{
        type:String,
        required:true
    },
    apartmantID:{
        type: 'ObjectId',
        ref: 'Apartmant',
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email: {
        type: String,
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    image:{
        type:String
    },
    usertype:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Users",UserSchema)