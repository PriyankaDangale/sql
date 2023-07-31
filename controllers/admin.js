const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  Product.fetchAll().then(product=>{
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing:false
    })
  })
    .catch(err=>console.log(err));
 
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    imageUrl:imageUrl,
    price:price,
    description:description

  }).then(res=>{
    console.log(res);
    res.rdirect('/admin/products');

  }).catch(err=>console.log(err));
  
};
exports.getEditProduct = (req, res, next) => {
  const editMode=req.query.edit;
  if(!editMode)
  {
   return  res.redirect('/');
  }
  const proId=req.params.productId;
  Product.findById(proId).then(product=>{
    if(!product)
    {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode
    })
  }).catch(err=>console.log(err));
 
};
exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
const updatedImageUrl=req.body.imageUrl;
const updatedDesc=req.body.description;
Product.findById().then(product=>{
  product.title=updatedTitle;
  product.price=updatedPrice;
  product.imageUrl=updatedImageUrl;
  product.description=updatedDesc;
  return product.save();
})
.then(res=>{
  console.log(res);
  res.redirect('/admin');

})
.catch(err=>console.log(err));

};
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
exports.postDeleteProduct=(req,res,next)=>{
  const proId=req.body.productId;
  Product.findById(proId).then(product=>{
    return product.destroy();
  })
  .then(res=>{
    console.log('Detroyeddd');
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err));
}
