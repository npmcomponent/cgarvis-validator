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
