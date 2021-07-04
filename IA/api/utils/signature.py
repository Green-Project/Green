import config as cfg
import jwt
import copy
import hashlib

class SignatureUtils:
    
    @staticmethod
    def generate_signature(payload):
        jwt_token = jwt.encode(payload, cfg["TOKEN_SECRET"], algorithm="HS256")
        payload["signature"] = hashlib.md5(jwt_token.encode()).hexdigest()

        return payload

    @staticmethod
    def verify_signature(payload):
        print("verifying signrature...")
        
        payload_copy = copy.deepcopy(payload)
        signature = payload.get("signature", False)
        
        if not signature:
            return False

        payload_copy.pop("signature")

        jwt_token = jwt.encode(payload_copy, cfg.env["TOKEN_SECRET"], algorithm="HS256")
        return signature == hashlib.md5(jwt_token.encode()).hexdigest()
        