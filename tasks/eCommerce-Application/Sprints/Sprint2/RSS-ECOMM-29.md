### Handle Authentication Token (5 points) [RSS-ECOMM-29]

#### Description
Obtain the authentication token securely after a successful login attempt by sending a request to the token endpoint (e.g., https://auth.europe-west1.gcp.commercetools.com/oauth/project_key/customers/token), allowing for seamless user authentication across the application, but do not save it.

#### Acceptance Criteria
- The authentication token is obtained from the token endpoint after a successful login attempt.
- The token is used for subsequent requests that require authentication.
