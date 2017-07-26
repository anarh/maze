'use strict';

/**
 * { function_description }
 *
 * @param      {string}  line    The line
 * @return     {Object}  { description_of_the_return_value }
 */
module.exports = function (line) {
  var data = {
    size: [],
    structure: []
  };
  var raw = line.split('-');

  if (!raw[0] || !raw[1]) return;

  data.size = raw[0].replace('(', '').replace(')', '').split(',').map(Number);
  data.structure = raw[1].replace('[', '').replace(']', '').split(',').map(Number);
  return data;
};
