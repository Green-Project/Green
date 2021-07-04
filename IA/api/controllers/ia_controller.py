import falcon
import json


class IAController:

    def __init__(self, app):
        app.add_route('/suggested_trees', self)

    async def on_get(self, req, resp):
        """Handles GET requests"""
        print(req.params)

        resp.status = falcon.HTTP_200  # This is the default status
        resp.text = json.dumps({
            "message": "IA is still in scontruction, sadly you way have to wait (◞‸◟；)"
        })