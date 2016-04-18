'use strict'

const server = require('../../server/index'),
      chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      should = chai.should(),
      agent = chai.request.agent(server),
      Bin = require('../../server/models/Bin'),
      User = require('../../server/models/User'),
      fake = require('../helpers/faker'),
      _ = require('lodash'),
      Promise = require('bluebird');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

chai.use(chaiHttp);

function auth() {
  return new Promise((resolve, reject) => {
    let user;
    fake.userAndSave()
    .then(_user => {
      user = _user
      return agent.post('/api/login').send(user)
    })
    .then(res => resolve(user))
    .catch(err => console.log(err));
  })
}

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

      r.should.have.status(201);

      r.body.should.be.a('object');
      done()
      return User.findById(r.body._id, (e, user) => {

      })
    })
  })

  it('should update a user', (done) => {
    auth().then(testUser => {
      agent
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
    .post('/api/users')
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
      .post('/api/login')
      .send({username: testUser.username, password: testUser.password})
      .end((e, r) => {
        if (e) throw e;

        r.should.have.status(201);
        r.body.id_token.should.be.ok;
        done();
      })
    })
  })

  it.skip('should update a user bin', (done) => {
    Promise.all([
      fake.userAndSave(),
      fake.binAndSave(),
      fake.binAndSave()
    ])
    .spread((testUser, course, bin) => {
      chai.request(server)
      .put('/api/users')
      .send({
        user: testUser._id,
        course: course._id,
        bin: bin._id
      })
      .end((e, r) => {
        if (e) throw e;

        r.should.have.status(200);

        User.findById(testUser._id, (e, user) => {
          user.should.be.ok;

          let test = user.courses.reduce(function(c) {
            let target = _.find(c, {course: course._id})
            return !target;
          })

          test.should.be.ok;
          console.log('Test', test);
          expect(test.binId).to.equal(bin._id)
          done();

        })
      })
    })
  })
})
