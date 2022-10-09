odoo.define('website.custom_dynamic_snippet_products', function (require) {
    'use strict';
    
const config = require('web.config');
const core = require('web.core');
const publicWidget = require('web.public.widget');
const DynamicSnippetCarousel = require('website.s_dynamic_snippet_carousel');
    
const CustomDynamicSnippetProducts = DynamicSnippetCarousel.extend({
        selector: '.custom_dynamic_snippet_products',
         xmlDependencies: (DynamicSnippetCarousel.prototype.xmlDependencies || []).concat(
        ['/dynamic_product_snippet/static/src/xml/custom_dynamic_snippet_product.xml']
    ),

    /**
     *
     * @override
     */
    init: function () {
        this._super.apply(this, arguments);
        this.template_key = 'website.custom_dynamic_snippet.products';
    },

    /**
     * Method to be overridden in child components if additional configuration elements
     * are required in order to fetch data.
     * @override
     * @private
     */
    _isConfigComplete: function () {
        return this._super.apply(this, arguments) && this.$el.get(0).dataset.productCategoryId !== undefined;
                },
    /**
     *
     * @override
     * @private
     */
    _mustMessageWarningBeHidden: function() {
        const isInitialDrop = this.$el.get(0).dataset.templateKey === undefined;
        // This snippet has default values obtained after the initial start and render after drop.
        // Because of this there is an initial refresh happening right after.
        // We want to avoid showing the incomplete config message before this refresh.
        // Since the refreshed call will always happen with a defined templateKey,
        // if it is not set yet, we know it is the drop call and we can avoid showing the message.
        return isInitialDrop || this._super.apply(this, arguments);
    },
    /**
     * Method to be overridden in child components in order to provide a search
     * domain if needed.
     * @override
     * @private
     */
    _getSearchDomain: function () {
        const searchDomain = this._super.apply(this, arguments);
        const productCategoryId = parseInt(this.$el.get(0).dataset.productCategoryId);
        if (productCategoryId >= 0) {
            searchDomain.push(['public_categ_ids', 'child_of', productCategoryId]);
        }
        return searchDomain;
    },

      
      
    });
    publicWidget.registry.custom_dynamic_product_snippet = CustomDynamicSnippetProducts;
    
    return CustomDynamicSnippetProducts;
    });




