*This repository is a mirror of the [component](http://component.io) module [cgarvis/validator](http://github.com/cgarvis/validator). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/cgarvis-validator`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# validator

  Lightweight validation library

## Installation

    $ component install cgarvis/validator

## API

  - [add(name, regexp)](#add-regexp)
  - [add(name, fn)](#add-fn)
  - [check(value, name)](#check-value-name)
<a name=""></a>

<a name="add-regexp"></a>
### add(name, regexp)

    Validator.add('notEmpty', /[^/s]+/)

<a name="add-fn"></a>
### add(name, fn)

    Validator.add('isMe', function(value) { return value === 'chris'; });

<a name="check-value-name"></a>
### check(value, name)

    Validator.check('not empty', 'notEmpty')

## License

  MIT
