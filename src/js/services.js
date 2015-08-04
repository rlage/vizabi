//service wraps single endpoint

angular.module('gapminderWorld')
.factory("vizabiFactory", ['$rootScope', '$timeout', function($rootScope, $timeout) {

  return {

    /**
     * Render Vizabi
     * @param {String} tool name of the tool
     * @param {DOMElement} placeholder
     * @return {Object}
     */
    render: function(tool, placeholder, options) {
      var state = JSON.parse(location.hash.substr(1), function(key, value) {
          if (key == 'value' || key == 'end' || key == 'start') {
            var date = new Date(value);
            return date.getFullYear().toString();
          }
          return value;
        }
      );

      options.language = {};
      options.language.id = state.id;
      options.state = state.state;

      return Vizabi(tool, placeholder, options);
    }
  };

}]);
