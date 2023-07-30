const fs=require('fs');
const path=require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );
  module.exports=class Cart{
    static addProduct(id,productPrice){
        fs.readFile(p,(err,filContent)=>{
            let cart={products:[],totalPrice:0};
            if(!err)
            {
                cart=JSON.parse(filContent);
            }
            const existingProductindex=cart.products.findIndex(prod=>prod.id==id);
            const existingProduct=cart.products[existingProductindex];
            let updatedProduct;
            if(existingProduct){
                updatedProduct={...existingProduct};
                updatedProduct.qty=updatedProduct.qty+1;
                cart.products=[...cart.products];
                cart.products[existingProductindex]=updatedProduct;
            }
            else{
                updatedProduct={id:id,qty:1};
                cart.products=[...cart.products,updatedproducts];
            }
            cart.totalPrice=cart.totalPrice+productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            });
        });
    }

  }