var Validator = require('..');

describe('add(name, regex)', function() {
  before(function() {
    Validator.reset();
  });

  it('should return true', function() {
    Validator.add('notEmpty', /[^/s]+/).should.be.ok;
  });

  it('should return error on duplicate', function() {
    Validator.add('duplicate', /\d+/).should.be.true;
    Validator.add('duplicate', /\d+/).should.be.an.instanceof(Validator.RuleExistsError);
  });
});

describe('check(value, name)', function() {
  before(function() {
    Validator.reset();
  });

  it('should return true when no rules exists', function() {
    Validator.check(false, 'no-rule').should.be.true;
  });

  describe('regex rule', function() {
    before(function() {
      Validator.reset();
      Validator.add('notEmpty', /[^/s]+/);
    });

    it('should return true when passing', function() {
      Validator.check('not empty', 'notEmpty').should.be.true;
    });

    it('should return false when failing', function() {
      Validator.check('', 'notEmpty').should.be.false;
    });
  });

  describe('function rule', function() {
    before(function() {
      Validator.reset();
      Validator.add('custom', function(value) { return value === 'chris' });
    });

    it('should return true when passing', function() {
      Validator.check('chris', 'custom');
    });

    it('should return false when failing', function() {
      Validator.check('tobi', 'custom');
    });
  });
});
