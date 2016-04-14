const Faker = require('faker');
const Bin = require('../../server/models/Bin');
const User = require('../../server/models/User');

module.exports = {
  bin() {
    const bin = {
      author: Faker.random.number(10).toString(),
      id: Faker.random.number(10).toString(),
      files: [],
      tests: [],
      isBoilerplate: Faker.random.boolean,
      loaders: {
        key: 'value'
      },
      packages: {
        key: 'value'
      }
    }

    for (var i = 0; i < 3; i++) {
      bin.files.push(this.file
        ());
      bin.tests.push(this.file());
    }

    return bin;
  },

  file() {
    return {
      name: Faker.internet.domainName(),
      content: Faker.lorem.paragraph()
    }
  },

  binAndSave() {
    const bin = this.bin();
    return new Bin(bin).save().then(bin => {
      return bin
    })
  },

  user() {
    return {
      username: Faker.internet.userName(),
      password: Faker.internet.password()
    }
  },

  userAndSave() {
    return new User(this.user()).save()
    .then(user => {
      return user;
    })
  }
};
