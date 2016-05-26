'use strict';

define( function ( require ) {
    var CategoriesBaseCtrl      = require( 'categories/CategoriesBaseCtrl' );
    var CategoriesContentCtrl   = require( 'categories/CategoriesContentCtrl' );
    var CategoriesCreateCtrl    = require( 'categories/CategoriesCreateCtrl' );
    var CategoriesEditCtrl      = require( 'categories/CategoriesEditCtrl' );
    var CategoriesListCtrl      = require( 'categories/CategoriesListCtrl' );
    var CategoriesRouter        = require( 'categories/CategoriesRouter' );
    var CategoriesService       = require( 'categories/CategoriesService' );

    var CategoriesModule        = angular.module( 'CategoriesModule', []);

    CategoriesModule.config([ '$stateProvider', CategoriesRouter ]);

    CategoriesModule.controller( 'CategoriesBaseCtrl', [ '$scope', CategoriesBaseCtrl ]);

    CategoriesModule.controller( 'CategoriesContentCtrl', [ '$scope', '$stateParams', 'CategoriesService', CategoriesContentCtrl ]);

    CategoriesModule.controller( 'CategoriesCreateCtrl', [ '$scope', 'events', 'CategoriesService', CategoriesCreateCtrl ]);

    CategoriesModule.controller( 'CategoriesEditCtrl', [ '$scope', '$stateParams', 'events', 'CategoriesService', CategoriesEditCtrl ]);

    CategoriesModule.controller( 'CategoriesListCtrl', [ '$scope', 'CategoriesService', CategoriesListCtrl ]);

    CategoriesModule.factory( 'CategoriesService', [ 'BaseService', CategoriesService ]);
});