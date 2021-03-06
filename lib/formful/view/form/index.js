var utile = require('utile'),
inflect = utile.inflect.pluralize;

module['exports'] = function (options, callback) {
  var $ = this.$;

  output  = '',
  resources = options.resource;
  if (!Array.isArray(resources)) {
    resources = [resource];
  }

  $('.resources').html('');

  resources.forEach(function (resource) {
    var entity = resource.lowerResource,
    str = '';
    $('.resources').append('<a href="./' + entity + '" class="btn btn-primary resource">' + entity + '</a>');
  });

  output = $.html();

  if (callback) {
    return callback(null, output);
  }

  return output;


}
