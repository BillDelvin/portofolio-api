const { portofolios } = require('./data');
const portofolioModel = require('../db/models/portofolio-modal');

class FakeDB {
 async clean() {
  await portofolioModel.deleteMany({});
 }

 async addData() {
  await portofolioModel.create(portofolios);
 }

 async populate() {
  await this.clean();
  await this.addData();
 }
}

module.exports = new FakeDB();
