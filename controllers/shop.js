const Product = require('../models/product');
const cart=require('../models/cart');
exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/products'
    
  });

  }).catch(err=>console.log(err));
};
exports.getProduct=(req,res,next)=>{
  const proid=req.params.productid;
  /*Product.findAll({where:{id:proid}}).then(product=>{
    res.redirect('shop/product-detail',
    {product:product[0],
      pageTitle:produc[0].ttitle,
      path:'/products'});
  }).catch(err=>console.log(err));*/
  Product.findById(proid).then((product)=>{
    res.redirect('shop/product-detail',
    {product:product,
      pageTitle:producttitle,
      path:'/products'});
  })

  .catch(err=>console.log(err));
    
};


exports.getIndex = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    
  });

  }).catch(err=>console.log(err));
    
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart=(req,res,next)=>{
  const proId=req.body.productId;
  Product.findById(proId,(product)=>{
    Cart.addProduct(proId,product.price);
  });
  res.redirect('/cart');
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
