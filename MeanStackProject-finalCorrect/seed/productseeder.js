const Product = require('../models/product');

var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/newshopping');

var products=[
  
        new Product({
            imagepath:"https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg",
            title:'shirts',
            description:'new one',
            price:1000
    
        }),
        new Product({
            imagepath:"./images/tshrits.jpg",
            title:'t-shirts',
            description:'new one',
            price:1000
    
        }),
        new Product({
            imagepath:"",
            title:'jeans',
            description:'new one',
            price:700
    
        }),
];
var done=0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done ==products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}

