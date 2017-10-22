var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/blog_demo");


// USER email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String
});
var User = mongoose.model("User", userSchema);

// POST -title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema)


var Users = [];
Users.push(User({
    email: "sally@brown.edu",
    name: "Sally Brown"
}));

Users.push(User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
}));

Users.forEach(function(user){
    user.save(function(err, user){
        if(err){
            console.log(err);
        } else {
            console.log(user);
        }
    });
});



var Posts = [];
Posts.push(Post({
    title: "Reflections on Apples",
    content: "They are delicious"
}));
Posts.forEach(function(post){
    post.save(function(err, post){
        if(err){
            console.log(err);
        } else {
            console.log(post);
        }
    });
})


// var newUser = User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// newUser.posts.push({
//     title: "How to brew polyjuice potions",
//     content: "Just kidding. Go to potions class to learn it."
// })




