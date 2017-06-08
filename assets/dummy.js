"use strict";



define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("dummy/components/code-snippet", ["exports", "ember", "dummy/snippets"], function (exports, _ember, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = _ember.default.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(function (l) {
        return l !== '';
      });
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: _ember.default.computed('name', function () {
      return this._unindent((_snippets.default[this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: _ember.default.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/element-example-code', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: 'section',
    classNames: ['element-example-code']
  });
});
define('dummy/components/element-example-result', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: 'section',
    classNames: ['element-example-result']
  });
});
define('dummy/components/element-example', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    tagName: 'paper-material',
    classNames: ['element-example']
  });
});
define('dummy/components/paper-checkbox', ['exports', 'ember-polymer-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperCheckbox.default;
    }
  });
});
define('dummy/components/paper-dropdown-menu', ['exports', 'ember-polymer-paper/components/paper-dropdown-menu'], function (exports, _paperDropdownMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDropdownMenu.default;
    }
  });
});
define('dummy/components/paper-input', ['exports', 'ember-polymer-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInput.default;
    }
  });
});
define('dummy/components/paper-listbox', ['exports', 'ember-polymer-paper/components/paper-listbox'], function (exports, _paperListbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperListbox.default;
    }
  });
});
define('dummy/components/paper-radio-button', ['exports', 'ember-polymer-paper/components/paper-radio-button'], function (exports, _paperRadioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioButton.default;
    }
  });
});
define('dummy/components/paper-radio-group', ['exports', 'ember-polymer-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
define('dummy/components/paper-slider', ['exports', 'ember-polymer-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSlider.default;
    }
  });
});
define('dummy/components/paper-toggle-button', ['exports', 'ember-polymer-paper/components/paper-toggle-button'], function (exports, _paperToggleButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToggleButton.default;
    }
  });
});
define('dummy/components/snippets/paper-dropdown-menu', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    // BEGIN-SNIPPET pastries
    pastries: ['Croissant', 'Donut', 'Financier', 'Madeleine'],
    pastry: 'Croissant'
    // END-SNIPPET
  });
});
define('dummy/components/snippets/paper-input', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    presetName: 'Jerra'
  });
});
define('dummy/components/snippets/paper-listbox', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    // BEGIN-SNIPPET block-usage
    items: ['Dog', 'Cat', 'Elephant', 'Giraffe'],
    blockSelected: 'Cat',
    // END-SNIPPET block-usage

    selectedAnimal: 2
  });
});
define('dummy/components/snippets/paper-radio-group', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    items: ['One', 'Two', 'Three'],
    people: [{ name: 'John', age: 21 }, { name: 'Daniel', age: 22 }, { name: 'Jeroen', age: 20 }]
  });
});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    snippets: _ember.default.inject.service()
  });
});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({
    snippets: _ember.default.inject.service()
  });
});
define('dummy/ember-polymer-paper/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-polymer-paper/components/iron-checked-element-behavior.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/iron-checked-element-behavior.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/iron-selector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/iron-selector.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-checkbox.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-dropdown-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-dropdown-menu.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-input.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-listbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-listbox.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-radio-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-radio-button.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-radio-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-radio-group.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-slider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-slider.js should pass ESLint\n\n');
  });

  QUnit.test('ember-polymer-paper/components/paper-toggle-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-polymer-paper/components/paper-toggle-button.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('dummy/initializers/application', ['exports', 'ember', 'dummy/utils/get-snippets', 'dummy/templates/element-page'], function (exports, _ember, _getSnippets, _elementPage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = _ember.default.Controller,
      Service = _ember.default.Service;
  exports.default = {
    name: 'register-elements',

    initialize: function initialize(app) {
      var hasTemplate = function hasTemplate(snippet) {
        return app.hasRegistration('template:components/snippets/' + snippet.component);
      };

      var snippets = (0, _getSnippets.default)().filter(hasTemplate);
      snippets.forEach(function (snippet) {
        app.register('template:' + snippet.name, _elementPage.default);
        app.register('controller:' + snippet.name, Controller.extend({
          snippet: snippet
        }));
      });

      app.register('service:snippets', Service.extend({
        snippets: snippets
      }));
    }
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment', 'dummy/utils/get-snippets'], function (exports, _ember, _environment, _getSnippets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    var _this = this;

    var snippets = (0, _getSnippets.default)();

    snippets.forEach(function (snippet) {
      _this.route(snippet.name);
    });
  });

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "block-usage-result.hbs": "    Selected = {{blockSelected}}",
    "block-usage.hbs": "    {{#paper-listbox items selectedItem=blockSelected as |item|}}\n      <paper-item>{{item}}</paper-item>\n    {{/paper-listbox}}",
    "block-usage.js": "  items: [ 'Dog', 'Cat', 'Elephant', 'Giraffe' ],\n  blockSelected: 'Cat',",
    "dinosaurs-result.hbs": "    Dinosaur: {{dinosaur}}",
    "dinosaurs.hbs": "    {{#paper-dropdown-menu label=\"Choose one dinosaur\" selectedItem=dinosaur}}\n      <paper-radio-group class=\"dropdown-content\">\n        <paper-radio-button name=\"a\">allosaurus</paper-radio-button>\n        <paper-radio-button name=\"b\">brontosaurus</paper-radio-button>\n        <paper-radio-button name=\"d\">diplodocus</paper-radio-button>\n      </paper-radio-group>\n    {{/paper-dropdown-menu}}",
    "drivers-license-result.hbs": "    {{#if hasLicense}}\n      You may drive 🚗\n    {{else}}\n      No hitting the roads for you yet mate! 🚧\n    {{/if}}",
    "drivers-license.hbs": "    {{#paper-checkbox update=(action (mut hasLicense))}}\n    I have a drivers license\n    {{/paper-checkbox}}",
    "is-adult-result.hbs": "    {{#if isAdult}}\n      You may drink alcohol (in Europe)\n    {{else}}\n      You're too young for alcohol!\n    {{/if}}",
    "is-adult.hbs": "    {{#paper-checkbox checked=isAdult}}\n    I am above eighteen\n    {{/paper-checkbox}}",
    "multi-result.hbs": "    Selected = {{multiSelected}}",
    "multi.hbs": "    {{paper-listbox items selectedItem=multiSelected multi=true}}",
    "paper-checkbox.hbs": "{{#element-example name=\"drivers-license\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET drivers-license --}}\n    {{#paper-checkbox update=(action (mut hasLicense))}}\n    I have a drivers license\n    {{/paper-checkbox}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET drivers-license-result --}}\n    {{#if hasLicense}}\n      You may drive 🚗\n    {{else}}\n      No hitting the roads for you yet mate! 🚧\n    {{/if}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n\n<p>We could also use a traditional two-way binding.</p>\n\n{{#element-example name=\"is-adult\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET is-adult --}}\n    {{#paper-checkbox checked=isAdult}}\n    I am above eighteen\n    {{/paper-checkbox}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET is-adult-result --}}\n    {{#if isAdult}}\n      You may drink alcohol (in Europe)\n    {{else}}\n      You're too young for alcohol!\n    {{/if}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n",
    "paper-dropdown-menu.hbs": "<p>\n  Most commonly we use it in combination with a paper-listbox.\n</p>\n\n{{#element-example name=\"pastries\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET pastries --}}\n    {{#paper-dropdown-menu label=\"Your favourite pastry\"}}\n      {{paper-listbox pastries selectedItem=pastry class=\"dropdown-content\"}}\n    {{/paper-dropdown-menu}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET pastries-result --}}\n    Your favourite pastry is: {{pastry}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n\n<p>\n  But we can use any element that behaves like a iron-selector:\n</p>\n\n{{#element-example name=\"dinosaurs\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET dinosaurs --}}\n    {{#paper-dropdown-menu label=\"Choose one dinosaur\" selectedItem=dinosaur}}\n      <paper-radio-group class=\"dropdown-content\">\n        <paper-radio-button name=\"a\">allosaurus</paper-radio-button>\n        <paper-radio-button name=\"b\">brontosaurus</paper-radio-button>\n        <paper-radio-button name=\"d\">diplodocus</paper-radio-button>\n      </paper-radio-group>\n    {{/paper-dropdown-menu}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET dinosaurs-result --}}\n    Dinosaur: {{dinosaur}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n",
    "paper-dropdown-menu.js": "import Ember from 'ember';\n\nexport default Ember.Component.extend({\n  // BEGIN-SNIPPET pastries\n  pastries: [ 'Croissant', 'Donut', 'Financier', 'Madeleine' ],\n  pastry: 'Croissant'\n  // END-SNIPPET\n});\n",
    "paper-input.hbs": "{{paper-input label=\"Your name\" value=name minlength=3\n  auto-validate=true error-message=\"More than 3 characters required!\"\n  update=(action (mut name))}}\n\n{{paper-input type=\"number\" label=\"Your age\" value=age min=0 max=120}}\n\n<p>\n  Hey, my name is {{name}} and I'm {{age}} years old!\n</p>\n\n\n<p>\n  With a pre-set value:\n</p>\n{{paper-input label=\"Name\" value=presetName}}\n\n<p>\n  Name: {{presetName}}\n</p>\n\n<p>\n  Data down:\n  {{input value=presetName}}\n</p>\n",
    "paper-input.js": "import Ember from 'ember';\n\nexport default Ember.Component.extend({\n  presetName: 'Jerra'\n});\n",
    "paper-listbox.hbs": "<p>Block usage:</p>\n\n{{#element-example name=\"block-usage\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET block-usage --}}\n    {{#paper-listbox items selectedItem=blockSelected as |item|}}\n      <paper-item>{{item}}</paper-item>\n    {{/paper-listbox}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET block-usage-result --}}\n    Selected = {{blockSelected}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n\n<p>Another listbox to prove the values being bound.</p>\n\n{{#paper-listbox items selectedItem=blockSelected as |item|}}\n  <paper-item>{{item}}</paper-item>\n{{/paper-listbox}}\n\n<p>Multi select:</p>\n\n{{#element-example name=\"multi\" as |ex|}}\n  {{#ex.code}}\n    {{!-- BEGIN-SNIPPET multi --}}\n    {{paper-listbox items selectedItem=multiSelected multi=true}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.code}}\n\n  {{#ex.result}}\n    {{!-- BEGIN-SNIPPET multi-result --}}\n    Selected = {{multiSelected}}\n    {{!-- END-SNIPPET --}}\n  {{/ex.result}}\n{{/element-example}}\n\nNon block usage:\n{{paper-listbox items selectedItem=nonBlockSelected}}\n<p>\n  Selected = {{nonBlockSelected}}\n</p>\n\nWithout a positional param:\n{{#paper-listbox selectedItem=noPositionalSelected}}\n  <paper-item>Item 1</paper-item>\n  <paper-item>Item 2</paper-item>\n  <paper-item>Item 3</paper-item>\n{{/paper-listbox}}\n<p>\n  Selected = {{noPositionalSelected}}\n</p>\n\nWith other attribute:\n{{#paper-listbox selectedItem=withNameAttribute selected=\"b\"\n  attrForSelected=\"name\"}}\n  <paper-item name=\"a\">Item a</paper-item>\n  <paper-item name=\"b\">Item b</paper-item>\n  <paper-item name=\"c\">Item c</paper-item>\n{{/paper-listbox}}\n<p>\n  Selected = {{withNameAttribute}}\n</p>\n\nUsing just index:\n{{paper-listbox items selected=selectedAnimal}}\n<p>\n  Selected = {{selectedAnimal}}\n</p>\n",
    "paper-listbox.js": "import Ember from 'ember';\n\nexport default Ember.Component.extend({\n  // BEGIN-SNIPPET block-usage\n  items: [ 'Dog', 'Cat', 'Elephant', 'Giraffe' ],\n  blockSelected: 'Cat',\n  // END-SNIPPET block-usage\n\n  selectedAnimal: 2\n});\n",
    "paper-radio-button.hbs": "{{#paper-radio-button update=(action (mut checked))}}\nToggle this\n{{/paper-radio-button}}\n\n<p>\n  Toggled: {{checked}}\n</p>\n\n<p>We could also use a traditional two-way binding.</p>\n\n{{#paper-radio-button checked=checked2}}\nToggle this\n{{/paper-radio-button}}\n\n<p>\n  Toggled: {{checked2}}\n</p>\n",
    "paper-radio-group.hbs": "{{paper-radio-group items selectedItem=number}}\n\n<p>\n  Selected: {{number}}\n</p>\n\nOr a more complicated object:\n{{#paper-radio-group people selectedItem=person as |person|}}\n  {{#paper-radio-button name=person.name}}\n    {{person.name}}\n  {{/paper-radio-button}}\n{{/paper-radio-group}}\n\n<p>\n  Name: {{person.name}}, Age: {{person.age}}\n</p>\n",
    "paper-radio-group.js": "import Ember from 'ember';\n\nexport default Ember.Component.extend({\n  items: ['One', 'Two', 'Three'],\n  people: [\n    { name: 'John', age: 21 },\n    { name: 'Daniel', age: 22 },\n    { name: 'Jeroen', age: 20 }\n  ]\n});\n",
    "paper-slider.hbs": "{{paper-slider update=(action (mut brightness))}}\n\n<p>\n  Brightness: {{brightness}}\n</p>\n\n<p>We could also use a traditional two-way binding.</p>\n\n{{paper-slider value=brightness2}}\n\n<p>\n  Brightness: {{brightness2}}\n</p>\n",
    "paper-toggle-button.hbs": "{{#paper-toggle-button update=(action (mut toggled))}}\nToggle\n{{/paper-toggle-button}}\n\n<p>\n  Toggled: {{toggled}}\n</p>\n\n<p>We could also use a traditional two-way binding.</p>\n\n{{#paper-toggle-button checked=onoff}}\nOn/Off\n{{/paper-toggle-button}}\n\n<p>\n  On: {{onoff}}\n</p>\n",
    "pastries-result.hbs": "    Your favourite pastry is: {{pastry}}",
    "pastries.hbs": "    {{#paper-dropdown-menu label=\"Your favourite pastry\"}}\n      {{paper-listbox pastries selectedItem=pastry class=\"dropdown-content\"}}\n    {{/paper-dropdown-menu}}",
    "pastries.js": "  pastries: [ 'Croissant', 'Donut', 'Financier', 'Madeleine' ],\n  pastry: 'Croissant'"
  };
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FI/8tm4t", "block": "{\"statements\":[[9,\"paper-drawer-panel\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n  \"],[9,\"paper-header-panel\",{\"attrs\":[[15,\"drawer\",\"\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n    \"],[9,\"paper-toolbar\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n      \"],[11,\"div\",[]],[13],[0,\"Elements\"],[14],[0,\"\\n    \"]]}],[0,\"\\n    \"],[9,\"paper-menu\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],[[\"tabindex\"],[\"-1\"]],{\"statements\":[[0,\"        \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Home\"]]}],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"each\"],[[28,[\"snippets\",\"snippets\"]]],null,{\"statements\":[[6,[\"link-to\"],[[28,[\"snippet\",\"name\"]]],[[\"tabindex\"],[\"-1\"]],{\"statements\":[[0,\"          \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[1,[28,[\"snippet\",\"name\"]],false]]}],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"snippet\"]},null],[0,\"    \"]]}],[0,\"\\n  \"]]}],[0,\"\\n  \"],[9,\"paper-header-panel\",{\"attrs\":[[15,\"main\",\"\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n    \"],[9,\"paper-toolbar\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n      \"],[9,\"paper-icon-button\",{\"attrs\":[[15,\"icon\",\"menu\"],[15,\"paper-drawer-toggle\",\"\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[]}],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"title\"],[13],[0,\"Ember Polymer Paper demo\"],[14],[0,\"\\n\\n      \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/dunnkers/ember-polymer-paper\"],[15,\"tabIndex\",\"-1\"],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"src\",\"images/github.png\"],[15,\"class\",\"github-logo\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"]]}],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"outlet\"],[13],[0,\"\\n      \"],[1,[26,[\"outlet\"]],false],[0,\"\\n    \"],[14],[0,\"\\n  \"]]}],[0,\"\\n\"]]}],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3vKDCMgv", "block": "{\"statements\":[[1,[26,[\"source\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define("dummy/templates/components/element-example", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qIRYgGrC", "block": "{\"statements\":[[11,\"section\",[]],[15,\"class\",\"element-example-display\"],[13],[0,\"\\n  \"],[18,\"default\",[[33,[\"hash\"],null,[[\"code\",\"result\"],[[33,[\"component\"],[\"element-example-code\"],null],[33,[\"component\"],[\"element-example-result\"],null]]]]]],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"divider paper-font-caption\"],[13],[0,\"Handlebars\"],[14],[0,\"\\n\\n\"],[11,\"section\",[]],[15,\"class\",\"element-example-snippet\"],[13],[0,\"\\n  \"],[1,[33,[\"code-snippet\"],null,[[\"name\"],[[33,[\"concat\"],[[28,[\"name\"]],\".hbs\"],null]]]],false],[0,\"\\n  \"],[1,[33,[\"code-snippet\"],null,[[\"name\"],[[33,[\"concat\"],[[28,[\"name\"]],\"-result.hbs\"],null]]]],false],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"divider paper-font-caption\"],[13],[0,\"Javascript\"],[14],[0,\"\\n\\n  \"],[1,[33,[\"code-snippet\"],null,[[\"name\"],[[33,[\"concat\"],[[28,[\"name\"]],\".js\"],null]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/element-example.hbs" } });
});
define("dummy/templates/components/snippets/paper-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z8GUIdMq", "block": "{\"statements\":[[6,[\"element-example\"],null,[[\"name\"],[\"drivers-license\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[6,[\"paper-checkbox\"],null,[[\"update\"],[[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"hasLicense\"]]],null]],null]]],{\"statements\":[[0,\"    I have a drivers license\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"hasLicense\"]]],null,{\"statements\":[[0,\"      You may drive 🚗\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      No hitting the roads for you yet mate! 🚧\\n\"]],\"locals\":[]}]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"We could also use a traditional two-way binding.\"],[14],[0,\"\\n\\n\"],[6,[\"element-example\"],null,[[\"name\"],[\"is-adult\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[6,[\"paper-checkbox\"],null,[[\"checked\"],[[28,[\"isAdult\"]]]],{\"statements\":[[0,\"    I am above eighteen\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"isAdult\"]]],null,{\"statements\":[[0,\"      You may drink alcohol (in Europe)\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      You're too young for alcohol!\\n\"]],\"locals\":[]}]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-checkbox.hbs" } });
});
define("dummy/templates/components/snippets/paper-dropdown-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DPdTP7Km", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"\\n  Most commonly we use it in combination with a paper-listbox.\\n\"],[14],[0,\"\\n\\n\"],[6,[\"element-example\"],null,[[\"name\"],[\"pastries\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[6,[\"paper-dropdown-menu\"],null,[[\"label\"],[\"Your favourite pastry\"]],{\"statements\":[[0,\"      \"],[1,[33,[\"paper-listbox\"],[[28,[\"pastries\"]]],[[\"selectedItem\",\"class\"],[[28,[\"pastry\"]],\"dropdown-content\"]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[0,\"    Your favourite pastry is: \"],[1,[26,[\"pastry\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  But we can use any element that behaves like a iron-selector:\\n\"],[14],[0,\"\\n\\n\"],[6,[\"element-example\"],null,[[\"name\"],[\"dinosaurs\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[6,[\"paper-dropdown-menu\"],null,[[\"label\",\"selectedItem\"],[\"Choose one dinosaur\",[28,[\"dinosaur\"]]]],{\"statements\":[[0,\"      \"],[9,\"paper-radio-group\",{\"attrs\":[[15,\"class\",\"dropdown-content\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n        \"],[9,\"paper-radio-button\",{\"attrs\":[[15,\"name\",\"a\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"allosaurus\"]]}],[0,\"\\n        \"],[9,\"paper-radio-button\",{\"attrs\":[[15,\"name\",\"b\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"brontosaurus\"]]}],[0,\"\\n        \"],[9,\"paper-radio-button\",{\"attrs\":[[15,\"name\",\"d\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"diplodocus\"]]}],[0,\"\\n      \"]]}],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[0,\"    Dinosaur: \"],[1,[26,[\"dinosaur\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-dropdown-menu.hbs" } });
});
define("dummy/templates/components/snippets/paper-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "430LOpL0", "block": "{\"statements\":[[1,[33,[\"paper-input\"],null,[[\"label\",\"value\",\"minlength\",\"auto-validate\",\"error-message\",\"update\"],[\"Your name\",[28,[\"name\"]],3,true,\"More than 3 characters required!\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"name\"]]],null]],null]]]],false],[0,\"\\n\\n\"],[1,[33,[\"paper-input\"],null,[[\"type\",\"label\",\"value\",\"min\",\"max\"],[\"number\",\"Your age\",[28,[\"age\"]],0,120]]],false],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Hey, my name is \"],[1,[26,[\"name\"]],false],[0,\" and I'm \"],[1,[26,[\"age\"]],false],[0,\" years old!\\n\"],[14],[0,\"\\n\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  With a pre-set value:\\n\"],[14],[0,\"\\n\"],[1,[33,[\"paper-input\"],null,[[\"label\",\"value\"],[\"Name\",[28,[\"presetName\"]]]]],false],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Name: \"],[1,[26,[\"presetName\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Data down:\\n  \"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"presetName\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-input.hbs" } });
});
define("dummy/templates/components/snippets/paper-listbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5cBwAD5N", "block": "{\"statements\":[[11,\"p\",[]],[13],[0,\"Block usage:\"],[14],[0,\"\\n\\n\"],[6,[\"element-example\"],null,[[\"name\"],[\"block-usage\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[6,[\"paper-listbox\"],[[28,[\"items\"]]],[[\"selectedItem\"],[[28,[\"blockSelected\"]]]],{\"statements\":[[0,\"      \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[1,[28,[\"item\"]],false]]}],[0,\"\\n\"]],\"locals\":[\"item\"]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[0,\"    Selected = \"],[1,[26,[\"blockSelected\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Another listbox to prove the values being bound.\"],[14],[0,\"\\n\\n\"],[6,[\"paper-listbox\"],[[28,[\"items\"]]],[[\"selectedItem\"],[[28,[\"blockSelected\"]]]],{\"statements\":[[0,\"  \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[1,[28,[\"item\"]],false]]}],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Multi select:\"],[14],[0,\"\\n\\n\"],[6,[\"element-example\"],null,[[\"name\"],[\"multi\"]],{\"statements\":[[6,[\"component\"],[[28,[\"ex\",\"code\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"paper-listbox\"],[[28,[\"items\"]]],[[\"selectedItem\",\"multi\"],[[28,[\"multiSelected\"]],true]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"component\"],[[28,[\"ex\",\"result\"]]],null,{\"statements\":[[0,\"    Selected = \"],[1,[26,[\"multiSelected\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"ex\"]},null],[0,\"\\nNon block usage:\\n\"],[1,[33,[\"paper-listbox\"],[[28,[\"items\"]]],[[\"selectedItem\"],[[28,[\"nonBlockSelected\"]]]]],false],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Selected = \"],[1,[26,[\"nonBlockSelected\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\nWithout a positional param:\\n\"],[6,[\"paper-listbox\"],null,[[\"selectedItem\"],[[28,[\"noPositionalSelected\"]]]],{\"statements\":[[0,\"  \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item 1\"]]}],[0,\"\\n  \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item 2\"]]}],[0,\"\\n  \"],[9,\"paper-item\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item 3\"]]}],[0,\"\\n\"]],\"locals\":[]},null],[11,\"p\",[]],[13],[0,\"\\n  Selected = \"],[1,[26,[\"noPositionalSelected\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\nWith other attribute:\\n\"],[6,[\"paper-listbox\"],null,[[\"selectedItem\",\"selected\",\"attrForSelected\"],[[28,[\"withNameAttribute\"]],\"b\",\"name\"]],{\"statements\":[[0,\"  \"],[9,\"paper-item\",{\"attrs\":[[15,\"name\",\"a\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item a\"]]}],[0,\"\\n  \"],[9,\"paper-item\",{\"attrs\":[[15,\"name\",\"b\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item b\"]]}],[0,\"\\n  \"],[9,\"paper-item\",{\"attrs\":[[15,\"name\",\"c\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Item c\"]]}],[0,\"\\n\"]],\"locals\":[]},null],[11,\"p\",[]],[13],[0,\"\\n  Selected = \"],[1,[26,[\"withNameAttribute\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\nUsing just index:\\n\"],[1,[33,[\"paper-listbox\"],[[28,[\"items\"]]],[[\"selected\"],[[28,[\"selectedAnimal\"]]]]],false],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Selected = \"],[1,[26,[\"selectedAnimal\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-listbox.hbs" } });
});
define("dummy/templates/components/snippets/paper-radio-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dVyHsNdP", "block": "{\"statements\":[[6,[\"paper-radio-button\"],null,[[\"update\"],[[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"checked\"]]],null]],null]]],{\"statements\":[[0,\"Toggle this\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Toggled: \"],[1,[26,[\"checked\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"We could also use a traditional two-way binding.\"],[14],[0,\"\\n\\n\"],[6,[\"paper-radio-button\"],null,[[\"checked\"],[[28,[\"checked2\"]]]],{\"statements\":[[0,\"Toggle this\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Toggled: \"],[1,[26,[\"checked2\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-radio-button.hbs" } });
});
define("dummy/templates/components/snippets/paper-radio-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DDL+/n5/", "block": "{\"statements\":[[1,[33,[\"paper-radio-group\"],[[28,[\"items\"]]],[[\"selectedItem\"],[[28,[\"number\"]]]]],false],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Selected: \"],[1,[26,[\"number\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\nOr a more complicated object:\\n\"],[6,[\"paper-radio-group\"],[[28,[\"people\"]]],[[\"selectedItem\"],[[28,[\"person\"]]]],{\"statements\":[[6,[\"paper-radio-button\"],null,[[\"name\"],[[28,[\"person\",\"name\"]]]],{\"statements\":[[0,\"    \"],[1,[28,[\"person\",\"name\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"person\"]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Name: \"],[1,[28,[\"person\",\"name\"]],false],[0,\", Age: \"],[1,[28,[\"person\",\"age\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-radio-group.hbs" } });
});
define("dummy/templates/components/snippets/paper-slider", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dDRpNM+a", "block": "{\"statements\":[[1,[33,[\"paper-slider\"],null,[[\"update\"],[[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"brightness\"]]],null]],null]]]],false],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Brightness: \"],[1,[26,[\"brightness\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"We could also use a traditional two-way binding.\"],[14],[0,\"\\n\\n\"],[1,[33,[\"paper-slider\"],null,[[\"value\"],[[28,[\"brightness2\"]]]]],false],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Brightness: \"],[1,[26,[\"brightness2\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-slider.hbs" } });
});
define("dummy/templates/components/snippets/paper-toggle-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i7v5NiZA", "block": "{\"statements\":[[6,[\"paper-toggle-button\"],null,[[\"update\"],[[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"toggled\"]]],null]],null]]],{\"statements\":[[0,\"Toggle\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  Toggled: \"],[1,[26,[\"toggled\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"We could also use a traditional two-way binding.\"],[14],[0,\"\\n\\n\"],[6,[\"paper-toggle-button\"],null,[[\"checked\"],[[28,[\"onoff\"]]]],{\"statements\":[[0,\"On/Off\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"\\n  On: \"],[1,[26,[\"onoff\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/snippets/paper-toggle-button.hbs" } });
});
define("dummy/templates/element-page", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8alDWCbt", "block": "{\"statements\":[[11,\"section\",[]],[15,\"class\",\"element-page\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[13],[0,\"\\n    \"],[1,[28,[\"snippet\",\"name\"]],false],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"\\n      \"],[11,\"a\",[]],[16,\"href\",[33,[\"concat\"],[\"https://elements.polymer-project.org/elements/\",[28,[\"snippet\",\"name\"]]],null],null],[15,\"target\",\"_tab\"],[15,\"tabIndex\",\"-1\"],[16,\"title\",[33,[\"concat\"],[[28,[\"snippet\",\"name\"]],\" polymer element reference\"],null],null],[13],[0,\"\\n        \"],[11,\"img\",[]],[15,\"src\",\"images/polymer.svg\"],[15,\"alt\",\"Polymer logo\"],[15,\"class\",\"polymer-logo\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"divider\"],[13],[14],[0,\"\\n\\n  \"],[1,[33,[\"component\"],[[33,[\"concat\"],[\"snippets/\",[28,[\"snippet\",\"component\"]]],null]],null],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/element-page.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "z0ABdMoQ", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Welcome to ember-polymer-paper! 🦄✨\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"snippets\",\"snippets\"]]],null,{\"statements\":[[0,\"  \"],[9,\"paper-card\",{\"attrs\":[[16,\"heading\",[28,[\"snippet\",\"name\"]],null],[15,\"class\",\"index-element-card\"]],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"card-content\"],[13],[0,\"\\n      \"],[18,\"default\",[[33,[\"hash\"],null,[[\"code\",\"result\"],[[33,[\"component\"],[\"element-example-code\"],null],[33,[\"component\"],[\"element-example-result\"],null]]]]]],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"card-actions\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[[28,[\"snippet\",\"name\"]]],[[\"tabIndex\",\"class\"],[\"-1\",\"paper-button-link\"]],{\"statements\":[[0,\"        \"],[9,\"paper-button\",{\"attrs\":[],\"args\":[[],[]],\"locals\":[],\"statements\":[[0,\"Full documentation\"]]}],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n  \"]]}],[0,\"\\n\"]],\"locals\":[\"snippet\"]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define('dummy/utils/get-snippets', ['exports', 'dummy/snippets'], function (exports, _snippets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getSnippets;
  function getSnippets() {
    var map = {};

    Object.keys(_snippets.default).forEach(function (filename) {
      var extidx = filename.lastIndexOf('.');
      var component = filename.substring(0, extidx);
      var name = component.replace('-snippet', '');

      map[name] = map[name] || {
        name: name,
        component: component
      };

      if (filename.endsWith('.hbs')) {
        map[name].template = filename;
      } else if (filename.endsWith('.js')) {
        map[name].script = filename;
      }
    });

    return Object.keys(map).map(function (name) {
      return map[name];
    });
  }
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({"customEvents":{"iron-select":"iron-select","iron-items-changed":"iron-items-changed"},"name":"ember-polymer-paper","version":"0.2.0+dd073b78"});
}
//# sourceMappingURL=dummy.map
