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
  })

  it('should update a user', (done) => {
    const testUser = fake.userAndSave()

    testUser.then(testUser => {
      chai.request(server)
      .put('/api/users')
      .send({username: "Steve", _id: testUser._id})
      .end((e, r) => {
        if (e) throw e;

        r.should.have.status(200);
        r.body.should.be.a('object');

        User.findById(testUser._id, (e, user) => {
          user.should.be.ok;
          user.username.should.equal('Steve');
          done();
        })
      })
    })
  })

  it('should retrieve a user', (done) => {
    const testUser = fake.userAndSave();

    testUser.then(testUser => {
      chai.request(server)
      .get('/api/users/' + testUser._id)
      .end((e, r) => {
        if (e) throw e;

        r.should.have.status(200)
        r.body.should.be.a('object');
        r.body.username.should.equal(testUser.username);
        done()
      })
    })
  })

  it('should register a user', (done) => {
    const testUser = fake.user();

    chai.request(server)
    .post('/api/users/create')
    .send({username: testUser.username, password: testUser.password})
    .end((e, r) => {
      if (e) throw e;

      r.should.have.status(201);
      r.body.should.be.a('object');

      User.findOne({username: testUser.username}, (e, user) => {
        user.should.be.ok;
        user.username.should.equal(testUser.username);
        done();
      })
    })
  })

  it('should login a user', (done) => {
    const testUser = fake.userAndSave();

    testUser.then(testUser => {
      chai.request(server)
      .post('/api/sessions/create')
      .send({username: testUser.username, password: testUser.password})
      .end((e, r) => {
        if (e) throw e;

        r.should.have.status(201);
        r.body.id_token.should.be.ok;
        done();
      })
    })
  })
})
