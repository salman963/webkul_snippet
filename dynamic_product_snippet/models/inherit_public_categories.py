from odoo import fields, api, models
from logging import getLogger
_logger = getLogger(__name__)
class InheritPublicCategories(models.Model):
    _inherit = "product.public.category"

    category_hide_from_snippet = fields.Boolean()

    @api.model
    def search_read(self, domain=None, fields=None, offset=0, limit=None, order=None,hide_category=False):
        if hide_category:
            current_website = self.env['website'].get_current_website().id
            domain = [('category_hide_from_snippet','=',False),('website_id','in',[False,current_website])]
            return self.search_read(domain, fields)
        return super().search_read(domain, fields, offset, limit, order)




