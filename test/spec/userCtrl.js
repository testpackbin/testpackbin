'use strict'

const server = require('../../server/index'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      should = chai.should(),
      Bin = require('../../server/models/Bin'),
      User = require('../../server/models/User'),
      fake = require('../helpers/faker');

chai.use(chaiHttp);

describe('userCtrl', () => {

  before((done) => {
    User.collection.drop((e, r) => {
      done();
    })
  })

  afterEach((done) => {
    User.collection.drop((e, r) => {
      done();
    })
  })

  it('should make a user', (done) => {
    const testUser = fake.user();

    chai.request(server)
    .post('/api/users')
    .send(testUser)
    .end((e, r) => {

      r.should.have.status(200);

      r.body.should.be.a('object');
      done()
      return User.findById(r.body._id, (e, user) => {

      })
    })
    // .then(user => {
    //   user.username.should.equal(testUser.username);
    //   done();
    // })
  })
})
