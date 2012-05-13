// Generated by CoffeeScript 1.3.1
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['mediator', 'chaplin', 'views/layout', 'controllers/session_controller', 'controllers/navigation_controller', 'controllers/sidebar_controller', 'routes'], function(mediator, Chaplin, Layout, SessionController, NavigationController, SidebarController, routes) {
  'use strict';

  var FacebookApplication;
  return FacebookApplication = (function(_super) {

    __extends(FacebookApplication, _super);

    FacebookApplication.name = 'FacebookApplication';

    function FacebookApplication() {
      return FacebookApplication.__super__.constructor.apply(this, arguments);
    }

    FacebookApplication.prototype.title = 'Chaplin Example Application';

    FacebookApplication.prototype.initialize = function() {
      /*console.debug 'ExampleApplication#initialize'
      */
      FacebookApplication.__super__.initialize.apply(this, arguments);
      this.layout = new Layout({
        title: this.title
      });
      new SessionController();
      new NavigationController();
      new SidebarController();
      this.initRouter(routes);
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    return FacebookApplication;

  })(Chaplin.Application);
});
