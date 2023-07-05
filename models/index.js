// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// one product can only belong to one category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// one category can have many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
// one product can have to many tags
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
// one tag can have many products
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
