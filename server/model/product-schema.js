import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

// Schema define karna
const productSchema = new mongoose.Schema({
    id: Number,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// Auto-increment setup
const AutoIncrement = mongooseSequence(mongoose);
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

// Model create karna
const Product = mongoose.model('Product', productSchema);

export default Product;
