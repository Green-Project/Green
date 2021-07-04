from wsgiref.simple_server import make_server
from controllers.ia_controller import IAController
from utils.auth import AuthMiddleware

import falcon
import falcon.asgi



app = falcon.asgi.App(middleware=[
    AuthMiddleware()
])

ia_controller = IAController(app)

if __name__ == '__main__':
    with make_server('', 8000, app) as httpd:
        print('Serving on port 8000...')

        httpd.serve_forever()