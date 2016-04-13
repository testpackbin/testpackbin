'use strict'

const server = require('../../server/index'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      should = chai.should(),
      Bin = require('../../server/models/Bin'),
      fake = require('../helpers/faker');

chai.use(chaiHttp);

describe('binCtrl', () => {

  before((done) => {
    Bin.collection.drop((err, r) => {
      done();
    })
  })

  afterEach((done) => {
    Bin.collection.drop(() => {
      done();
    })
  })

  it('should make a bin', (done) => {
    const testBin = fake.bin();
    chai.request(server)
    .post('/api/bins')
    .send(testBin)
    .end((e, r) => {
      if (e) throw e;


      r.should.have.status(200);

      r.body.author.should.equal(testBin.author);
      done();


    })
  })

  it('should update a bin', (done) => {
    fake.binAndSave().then(bin => {
      const testBin = bin;

      chai.request(server)
      .put('/api/bins')
      .send({author: "bananas", _id: testBin._id})
      .end((e, r) => {
        r.should.have.status(200);

        Bin.findById(testBin._id, (e, bin) => {
          bin.author.should.equal('bananas');
          done();
        })
      })
    })
  })
})
