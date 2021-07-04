from utils.signature import  SignatureUtils
import falcon

class AuthMiddleware:

    async def process_request(self, req, resp):
        params = req.params

        print(params)
        if not SignatureUtils.verify_signature(params):

            description = ('Token signature is missing or is wrong'
            ', please provide a valid one')
            
            raise falcon.HTTPUnauthorized(title='signature token required',
                                            description=description)

