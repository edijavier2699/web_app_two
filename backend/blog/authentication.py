from rest_framework import authentication
from rest_framework.exceptions import AuthenticationFailed
from jose import jwt, jwk
import requests

class Auth0JWTAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        auth = request.headers.get('Authorization', None)
        if not auth:
            return None

        try:
            parts = auth.split()

            if parts[0].lower() != 'bearer':
                raise AuthenticationFailed('Authorization header must start with Bearer')
            elif len(parts) == 1:
                raise AuthenticationFailed('Token not found')
            elif len(parts) > 2:
                raise AuthenticationFailed('Authorization header must be Bearer token')

            token = parts[1]
            return self.authenticate_jwt(token,request)
        except Exception as e:
            raise AuthenticationFailed(f'Token authentication failed: {str(e)}')
    
    def authenticate_jwt(self, token,request):
        # Fetch the public key from Auth0
        jwks_url = 'https://dev-2l2jjwfm5ekzae3u.us.auth0.com/.well-known/jwks.json'
        response = requests.get(jwks_url)
        response.raise_for_status()
        jwks = response.json()

        # Extract the kid from the token
        header = jwt.get_unverified_header(token)
        kid = header.get('kid')
        if not kid:
            raise AuthenticationFailed('Invalid token header. No kid found.')

        # Find the public key
        public_key = None
        for key in jwks['keys']:
            if key['kid'] == kid:
                public_key = jwk.construct(key)
                break

        if not public_key:
            raise AuthenticationFailed('Public key not found.')

        # Decode the JWT
        try:
            decoded_token = jwt.decode(token, public_key, algorithms=['RS256'], audience='https://my-endpoints/users')
            user_sub = decoded_token.get('sub')

            if not user_sub:
                raise AuthenticationFailed('Token does not contain user id (sub).')
            return (token)

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token expired.')
        except jwt.JWTClaimsError:
            raise AuthenticationFailed('Incorrect claims, please check the audience and issuer.')
        except Exception as e:
            raise AuthenticationFailed(f'Unable to parse authentication token: {str(e)}')
