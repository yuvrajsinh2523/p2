const mongoose=require("mongoose");
const exporess=require("express");
const Ph=require("../models/m.js");


const sampleData = [
{
title:"Dairy Milk Silk",
description:"Smooth and creamy milk chocolate with rich cocoa taste.",
image:{
name:"Dairy Milk Silk",
url:"https://cdn.creazilla.com/photos/1775115/free-stock-photo-from-tookapic-photo-sm.jpeg"
},
price:"120"
},

{
title:"KitKat",
description:"Crunchy wafer covered with delicious milk chocolate.",
image:{
name:"KitKat",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"50"
},

{
title:"Ferrero Rocher",
description:"Premium chocolate with hazelnut filling and crispy shell.",
image:{
name:"Ferrero Rocher",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"350"
},

{
title:"Dark Chocolate",
description:"Rich dark chocolate with intense cocoa flavor.",
image:{
name:"Dark Chocolate",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"180"
},

{
title:"Snickers",
description:"Chocolate bar with caramel, peanuts, and nougat.",
image:{
name:"Snickers",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"40"
},

{
title:"5 Star",
description:"Soft caramel and chocolate combination.",
image:{
name:"5 Star",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"30"
},

{
title:"Perk",
description:"Light crispy wafer coated with chocolate.",
image:{
name:"Perk",
url:"https://cdn.creazilla.com/photos/7787123/chocolate-sweets-food-photo-sm.jpeg"
},
price:"20"
},

{
title:"Bournville",
description:"Premium dark chocolate with rich cocoa.",
image:{
name:"Bournville",
url:"https://creazilla.com/media/photo/1757691/coffee-time-painting-looks-like"
},
price:"150"
},

{
title:"Munch",
description:"Crunchy wafer snack covered in chocolate.",
image:{
name:"Munch",
url:"https://creazilla.com/media/photo/1757691/coffee-time-painting-looks-like"
},
price:"20"
},

{
title:"Milky Bar",
description:"Creamy white chocolate loved by kids.",
image:{
name:"Milky Bar",
url:"https://creazilla.com/media/photo/1757691/coffee-time-painting-looks-like"
},
price:"25"
},

{
title:"Toblerone",
description:"Swiss chocolate with honey and almond nougat.",
image:{
name:"Toblerone",
url:"https://cdn.creazilla.com/8a0599346a10ed28b1b473959cb29a4b.jpeg"
},
price:"250"
},

{
title:"Mars Bar",
description:"Chocolate bar with soft nougat and caramel.",
image:{
name:"Mars",
url:"https://cdn.creazilla.com/8a0599346a10ed28b1b473959cb29a4b.jpeg"
},
price:"60"
},

{
title:"Galaxy Chocolate",
description:"Smooth and silky milk chocolate.",
image:{
name:"Galaxy",
url:"https://cdn.creazilla.com/8a0599346a10ed28b1b473959cb29a4b.jpeg"
},
price:"110"
},

{
title:"Hershey's Bar",
description:"Classic creamy milk chocolate bar.",
image:{
name:"Hershey",
url:"https://cdn.creazilla.com/8a0599346a10ed28b1b473959cb29a4b.jpeg"
},
price:"140"
},

{
title:"Kinder Joy",
description:"Chocolate treat with surprise toy inside.",
image:{
name:"Kinder Joy",
url:"https://cdn.creazilla.com/61d227310fec68f95d7386cf3ac83353.jpeg"
},
price:"50"
},

{
title:"Chocolate Truffle",
description:"Rich chocolate truffle with soft filling.",
image:{
name:"Truffle",
url:"https://cdn.creazilla.com/f4f108e2239b9b334de164b5ad9ab7c9.jpeg"
},
price:"200"
},

{
title:"Almond Chocolate",
description:"Chocolate bar with crunchy almonds.",
image:{
name:"Almond Chocolate",
url:"https://cdn.creazilla.com/photos/491279/chocolate-pieces-black-chocolate-photo-sm.jpeg"
},
price:"170"
},

{
title:"Fruit & Nut",
description:"Chocolate mixed with dry fruits and nuts.",
image:{
name:"Fruit & Nut",
url:"https://cdn.creazilla.com/photos/491279/chocolate-pieces-black-chocolate-photo-sm.jpeg"
},
price:"160"
},

{
title:"Chocolate Gift Box",
description:"Special assorted chocolates for gifting.",
image:{
name:"Gift Box",
url:"https://cdn.creazilla.com/photos/491279/chocolate-pieces-black-chocolate-photo-sm.jpeg"
},
price:"500"
},

{
title:"Premium Chocolate Pack",
description:"Luxury pack of mixed chocolates.",
image:{
name:"Premium Pack",
url:"https://cdn.creazilla.com/photos/491279/chocolate-pieces-black-chocolate-photo-sm.jpeg"
},
price:"799"
}
];

module.exports = {data:sampleData};
