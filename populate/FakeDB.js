const { portofolios, blogs } = require('./data');
const portofolioModel = require('../db/models/portofolio-modal');
const blogModel = require('../db/models/blog-modal');

class FakeDB {
 async clean() {
  await portofolioModel.deleteMany({});
 }

 async addData() {
  await portofolioModel.create(portofolios);
  await blogModel.create(blogs);
 }

 async populate() {
  await this.clean();
  await this.addData();
 }
}

module.exports = new FakeDB();
