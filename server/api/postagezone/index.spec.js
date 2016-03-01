'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var postagezoneCtrlStub = {
  index: 'postagezoneCtrl.index',
  show: 'postagezoneCtrl.show',
  create: 'postagezoneCtrl.create',
  update: 'postagezoneCtrl.update',
  destroy: 'postagezoneCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var postagezoneIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './postagezone.controller': postagezoneCtrlStub
});

describe('Postagezone API Router:', function() {

  it('should return an express router instance', function() {
    postagezoneIndex.should.equal(routerStub);
  });

  describe('GET /api/postagezones', function() {

    it('should route to postagezone.controller.index', function() {
      routerStub.get
        .withArgs('/', 'postagezoneCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/postagezones/:id', function() {

    it('should route to postagezone.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'postagezoneCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/postagezones', function() {

    it('should route to postagezone.controller.create', function() {
      routerStub.post
        .withArgs('/', 'postagezoneCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/postagezones/:id', function() {

    it('should route to postagezone.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'postagezoneCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/postagezones/:id', function() {

    it('should route to postagezone.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'postagezoneCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/postagezones/:id', function() {

    it('should route to postagezone.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'postagezoneCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
