var mongoose = requrire('mongoose');

//create a schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
    created_by: { type: Schema.ObjectId, ref: 'User' },
    created_at: {type: Date, default: Date.now},
    text: String
});

//decalre a model called User and Post which has above created schemas
mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);