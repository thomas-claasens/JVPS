'use strict';

var app = require('../..');
var request = require('supertest');

var newHomepage;

describe('Homepage API:', function() {

  describe('GET /api/homepage', function() {
    var homepages;

    beforeEach(function(done) {
      request(app)
        .get('/api/homepage')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          homepages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      homepages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/homepage', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/homepage')
        .send({
          name: 'New Homepage',
          info: 'This is the brand new homepage!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newHomepage = res.body;
          done();
        });
    });

    it('should respond with the newly created homepage', function() {
      newHomepage.name.should.equal('New Homepage');
      newHomepage.info.should.equal('This is the brand new homepage!!!');
    });

  });

  describe('GET /api/homepage/:id', function() {
    var homepage;

    beforeEach(function(done) {
      request(app)
        .get('/api/homepage/' + newHomepage._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          homepage = res.body;
          done();
        });
    });

    afterEach(function() {
      homepage = {};
    });

    it('should respond with the requested homepage', function() {
      homepage.name.should.equal('New Homepage');
      homepage.info.should.equal('This is the brand new homepage!!!');
    });

  });

  describe('PUT /api/homepage/:id', function() {
    var updatedHomepage

    beforeEach(function(done) {
      request(app)
        .put('/api/homepage/' + newHomepage._id)
        .send({
          name: 'Updated Homepage',
          info: 'This is the updated homepage!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedHomepage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedHomepage = {};
    });

    it('should respond with the updated homepage', function() {
      updatedHomepage.name.should.equal('Updated Homepage');
      updatedHomepage.info.should.equal('This is the updated homepage!!!');
    });

  });

  describe('DELETE /api/homepage/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/homepage/' + newHomepage._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when homepage does not exist', function(done) {
      request(app)
        .delete('/api/homepage/' + newHomepage._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
