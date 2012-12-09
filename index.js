var rules = {};

var run = function(rule) {
  if(rule instanceof RegExp) {
    return function(value) {
      return rule.test(value);
    };
  } else if(typeof rule === 'function') {
    return rule;
  } else {
    return function(value) {
      return true;
    }
  }
};


exports.add = function add(name, rule) {
  if(rules.hasOwnProperty(name)) {
    return new RuleExistsError(name + ' already exists');
  }

  rules[name] = run(rule);
  return true;
};

exports.check = function check(value, ruleName) {
  if(rules.hasOwnProperty(ruleName)) {
    if(!rules[ruleName](value)) {
      return false;
    }
  }

  return true;
};

exports.reset = function reset() {
  rules = {};
  return true;
};

var RuleExistsError = function(msg, constr) {
  Error.captureStackTrace(this, constr || this);
  this.message = msg || 'Error';
}

RuleExistsError.prototype = Error.prototype;

exports.RuleExistsError = RuleExistsError;
