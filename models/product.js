const db=require('../util/database.js');

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO Product(title,price,imageurl,description) VALUES(?,?,?,?),[this.title,this.price,this.imageurl,this.description]');
    
  }

  static fetchAll() {
   return db.execute('SELECT * FROM product');
    
  }
  static fetchFindById(id)
  {
    return db.execute('SELECT * FROM product WHERE product.id=?',[id]);
  }

  
};
