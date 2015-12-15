'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var homepageCtrlStub = {
  index: 'homepageCtrl.index',
  show: 'homepageCtrl.show',
  create: 'homepageCtrl.create',
  update: 'homepageCtrl.update',
  destroy: 'homepageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var homepageIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './homepage.controller': homepageCtrlStub
});

describe('Homepage API Router:', function() {

  it('should return an express router instance', function() {
    homepageIndex.should.equal(routerStub);
  });

  describe('GET /api/homepage', function() {

    it('should route to homepage.controller.index', function() {
      routerStub.get
        .withArgs('/', 'homepageCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/homepage/:id', function() {

    it('should route to homepage.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'homepageCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/homepage', function() {

    it('should route to homepage.controller.create', function() {
      routerStub.post
        .withArgs('/', 'homepageCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/homepage/:id', function() {

    it('should route to homepage.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'homepageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/homepage/:id', function() {

    it('should route to homepage.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'homepageCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/homepage/:id', function() {

    it('should route to homepage.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'homepageCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
