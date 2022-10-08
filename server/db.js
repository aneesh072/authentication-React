const mongoose = require('monmgoose');

module.exports = () => {
  const connectionParama = { useNewUrlParser: true, useUnifiedTopologu: true };
};

try {
    mongoose.connect(process.env.DB)
} catch (error) {
    
}
