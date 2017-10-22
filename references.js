var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/blog_demo_2");


var Post = require("./models/post");

var User = require("./models/user");


// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });

// Post.create({
//   title: "How to cook the best burger p6",
//   content: "huaeohnuhnteohn uheoh tnuhnhun"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//       if(err){
//           console.log(err);
//       } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                   console.log(err);
//                 } else {
//                   console.log(data);
//                 }
//             });
//       }
//     });
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});



// var newUser = User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// newUser.posts.push({
//     title: "How to brew polyjuice potions",
//     content: "Just kidding. Go to potions class to learn it."
// })



// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost =new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// User.findOne({name: "Hermione Granger"}, function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       user.posts.push({
//           title: "3 Things I really hate",
//           content: "Voldemort. Voldemort. Voldemort"
//       });
//       user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//       });
//   }
// });