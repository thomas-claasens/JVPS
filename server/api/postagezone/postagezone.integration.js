'use strict';

var app = require('../..');
import request from 'supertest';

var newPostagezone;

describe('Postagezone API:', function() {

  describe('GET /api/postagezones', function() {
    var postagezones;

    beforeEach(function(done) {
      request(app)
        .get('/api/postagezones')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          postagezones = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      postagezones.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/postagezones', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/postagezones')
        .send({
          name: 'New Postagezone',
          info: 'This is the brand new postagezone!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPostagezone = res.body;
          done();
        });
    });

    it('should respond with the newly created postagezone', function() {
      newPostagezone.name.should.equal('New Postagezone');
      newPostagezone.info.should.equal('This is the brand new postagezone!!!');
    });

  });

  describe('GET /api/postagezones/:id', function() {
    var postagezone;

    beforeEach(function(done) {
      request(app)
        .get('/api/postagezones/' + newPostagezone._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          postagezone = res.body;
          done();
        });
    });

    afterEach(function() {
      postagezone = {};
    });

    it('should respond with the requested postagezone', function() {
      postagezone.name.should.equal('New Postagezone');
      postagezone.info.should.equal('This is the brand new postagezone!!!');
    });

  });

  describe('PUT /api/postagezones/:id', function() {
    var updatedPostagezone;

    beforeEach(function(done) {
      request(app)
        .put('/api/postagezones/' + newPostagezone._id)
        .send({
          name: 'Updated Postagezone',
          info: 'This is the updated postagezone!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPostagezone = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPostagezone = {};
    });

    it('should respond with the updated postagezone', function() {
      updatedPostagezone.name.should.equal('Updated Postagezone');
      updatedPostagezone.info.should.equal('This is the updated postagezone!!!');
    });

  });

  describe('DELETE /api/postagezones/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/postagezones/' + newPostagezone._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when postagezone does not exist', function(done) {
      request(app)
        .delete('/api/postagezones/' + newPostagezone._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
