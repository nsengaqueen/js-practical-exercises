function sortProducts(arr){
    const products = [
 {name:"books",price:200},
 {name:"mangoes",price:500},
 {name:"tomatoes",price:150},
    ] ;
 
 
 const sortedProducts = products.sort((a,b)=>a.price - b.price)
 return products
 }
 
 console.log(sortProducts());