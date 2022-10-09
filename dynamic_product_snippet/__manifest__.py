# -*- coding: utf-8 -*-
{
    'name': "Dynamic Product Snippet",
    'version': '0.1',
    'summary': """
        Dynamic Product Snippet""",

    'description': """
        You can put the products dynamically on the page with the help of snippet.
    """,
    'author': "Webkul Pvt. Ltd.",
    'website': "http://www.webkul.com",
    'category': 'Hidden',
    
    # any module necessary for this one to work correctly
    'depends': ['base','website_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/assets.xml',
        'views/views.xml',
        'views/templates.xml',
        'views/snippets.xml',
        'views/inherit_product_public_category_view.xml',
    ],
    # 'qweb': ['static/src/xml/*.xml','static/src/js/*.xml'],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'application':True,
    'auto_install':False,
    'installable': True,
}
