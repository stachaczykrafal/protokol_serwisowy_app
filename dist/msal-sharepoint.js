(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name3 in all)
      __defProp(target, name3, { get: all[name3], enumerable: true });
  };

  // node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.mjs
  var BrowserPerformanceMeasurement_exports = {};
  __export(BrowserPerformanceMeasurement_exports, {
    BrowserPerformanceMeasurement: () => BrowserPerformanceMeasurement
  });
  var BrowserPerformanceMeasurement;
  var init_BrowserPerformanceMeasurement = __esm({
    "node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.mjs"() {
      "use strict";
      BrowserPerformanceMeasurement = class _BrowserPerformanceMeasurement {
        constructor(name3, correlationId) {
          this.correlationId = correlationId;
          this.measureName = _BrowserPerformanceMeasurement.makeMeasureName(name3, correlationId);
          this.startMark = _BrowserPerformanceMeasurement.makeStartMark(name3, correlationId);
          this.endMark = _BrowserPerformanceMeasurement.makeEndMark(name3, correlationId);
        }
        static makeMeasureName(name3, correlationId) {
          return `msal.measure.${name3}.${correlationId}`;
        }
        static makeStartMark(name3, correlationId) {
          return `msal.start.${name3}.${correlationId}`;
        }
        static makeEndMark(name3, correlationId) {
          return `msal.end.${name3}.${correlationId}`;
        }
        static supportsBrowserPerformance() {
          return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.mark === "function" && typeof window.performance.measure === "function" && typeof window.performance.clearMarks === "function" && typeof window.performance.clearMeasures === "function" && typeof window.performance.getEntriesByName === "function";
        }
        /**
         * Flush browser marks and measurements.
         * @param {string} correlationId
         * @param {SubMeasurement} measurements
         */
        static flushMeasurements(correlationId, measurements) {
          if (_BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
            try {
              measurements.forEach((measurement) => {
                const measureName = _BrowserPerformanceMeasurement.makeMeasureName(measurement.name, correlationId);
                const entriesForMeasurement = window.performance.getEntriesByName(measureName, "measure");
                if (entriesForMeasurement.length > 0) {
                  window.performance.clearMeasures(measureName);
                  window.performance.clearMarks(_BrowserPerformanceMeasurement.makeStartMark(measureName, correlationId));
                  window.performance.clearMarks(_BrowserPerformanceMeasurement.makeEndMark(measureName, correlationId));
                }
              });
            } catch (e) {
            }
          }
        }
        startMeasurement() {
          if (_BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
            try {
              window.performance.mark(this.startMark);
            } catch (e) {
            }
          }
        }
        endMeasurement() {
          if (_BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
            try {
              window.performance.mark(this.endMark);
              window.performance.measure(this.measureName, this.startMark, this.endMark);
            } catch (e) {
            }
          }
        }
        flushMeasurement() {
          if (_BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
            try {
              const entriesForMeasurement = window.performance.getEntriesByName(this.measureName, "measure");
              if (entriesForMeasurement.length > 0) {
                const durationMs = entriesForMeasurement[0].duration;
                window.performance.clearMeasures(this.measureName);
                window.performance.clearMarks(this.startMark);
                window.performance.clearMarks(this.endMark);
                return durationMs;
              }
            } catch (e) {
            }
          }
          return null;
        }
      };
    }
  });

  // node_modules/@azure/msal-browser/dist/index.mjs
  var dist_exports = {};
  __export(dist_exports, {
    AccountEntity: () => AccountEntity,
    ApiId: () => ApiId,
    AuthError: () => AuthError,
    AuthErrorCodes: () => AuthErrorCodes_exports,
    AuthErrorMessage: () => AuthErrorMessage,
    AuthenticationHeaderParser: () => AuthenticationHeaderParser,
    AuthenticationScheme: () => AuthenticationScheme,
    AzureCloudInstance: () => AzureCloudInstance,
    BrowserAuthError: () => BrowserAuthError,
    BrowserAuthErrorCodes: () => BrowserAuthErrorCodes_exports,
    BrowserAuthErrorMessage: () => BrowserAuthErrorMessage,
    BrowserCacheLocation: () => BrowserCacheLocation,
    BrowserConfigurationAuthError: () => BrowserConfigurationAuthError,
    BrowserConfigurationAuthErrorCodes: () => BrowserConfigurationAuthErrorCodes_exports,
    BrowserConfigurationAuthErrorMessage: () => BrowserConfigurationAuthErrorMessage,
    BrowserPerformanceClient: () => BrowserPerformanceClient,
    BrowserPerformanceMeasurement: () => BrowserPerformanceMeasurement,
    BrowserUtils: () => BrowserUtils_exports,
    CacheLookupPolicy: () => CacheLookupPolicy,
    ClientAuthError: () => ClientAuthError,
    ClientAuthErrorCodes: () => ClientAuthErrorCodes_exports,
    ClientAuthErrorMessage: () => ClientAuthErrorMessage,
    ClientConfigurationError: () => ClientConfigurationError,
    ClientConfigurationErrorCodes: () => ClientConfigurationErrorCodes_exports,
    ClientConfigurationErrorMessage: () => ClientConfigurationErrorMessage,
    DEFAULT_IFRAME_TIMEOUT_MS: () => DEFAULT_IFRAME_TIMEOUT_MS,
    EventHandler: () => EventHandler,
    EventMessageUtils: () => EventMessageUtils,
    EventType: () => EventType,
    InteractionRequiredAuthError: () => InteractionRequiredAuthError,
    InteractionRequiredAuthErrorCodes: () => InteractionRequiredAuthErrorCodes_exports,
    InteractionRequiredAuthErrorMessage: () => InteractionRequiredAuthErrorMessage,
    InteractionStatus: () => InteractionStatus,
    InteractionType: () => InteractionType,
    JsonWebTokenTypes: () => JsonWebTokenTypes,
    LocalStorage: () => LocalStorage,
    LogLevel: () => LogLevel,
    Logger: () => Logger,
    MemoryStorage: () => MemoryStorage,
    NavigationClient: () => NavigationClient,
    OIDC_DEFAULT_SCOPES: () => OIDC_DEFAULT_SCOPES,
    PerformanceEvents: () => PerformanceEvents,
    PromptValue: () => PromptValue,
    ProtocolMode: () => ProtocolMode,
    PublicClientApplication: () => PublicClientApplication,
    PublicClientNext: () => PublicClientNext,
    ServerError: () => ServerError,
    ServerResponseType: () => ServerResponseType,
    SessionStorage: () => SessionStorage,
    SignedHttpRequest: () => SignedHttpRequest,
    StringUtils: () => StringUtils,
    StubPerformanceClient: () => StubPerformanceClient,
    UrlString: () => UrlString,
    WrapperSKU: () => WrapperSKU,
    createNestablePublicClientApplication: () => createNestablePublicClientApplication,
    createStandardPublicClientApplication: () => createStandardPublicClientApplication,
    isPlatformBrokerAvailable: () => isPlatformBrokerAvailable,
    stubbedPublicClientApplication: () => stubbedPublicClientApplication,
    version: () => version2
  });

  // node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
  var BrowserUtils_exports = {};
  __export(BrowserUtils_exports, {
    addClientCapabilitiesToClaims: () => addClientCapabilitiesToClaims2,
    blockAPICallsBeforeInitialize: () => blockAPICallsBeforeInitialize,
    blockAcquireTokenInPopups: () => blockAcquireTokenInPopups,
    blockNonBrowserEnvironment: () => blockNonBrowserEnvironment,
    blockRedirectInIframe: () => blockRedirectInIframe,
    blockReloadInHiddenIframes: () => blockReloadInHiddenIframes,
    clearHash: () => clearHash,
    createGuid: () => createGuid,
    getCurrentUri: () => getCurrentUri,
    getHomepage: () => getHomepage,
    invoke: () => invoke,
    invokeAsync: () => invokeAsync,
    isInIframe: () => isInIframe,
    isInPopup: () => isInPopup,
    preconnect: () => preconnect,
    preflightCheck: () => preflightCheck,
    redirectPreflightCheck: () => redirectPreflightCheck,
    replaceHash: () => replaceHash
  });

  // node_modules/@azure/msal-common/dist/utils/Constants.mjs
  var Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    // ADFS String
    ADFS: "adfs",
    DSTS: "dstsv2",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // CIAM URL
    CIAM_AUTH_URL: ".ciamlogin.com",
    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    NOT_APPLICABLE: "N/A",
    NOT_AVAILABLE: "Not Available",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2e3,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: [
      "login.microsoftonline.com",
      "login.windows.net",
      "login.microsoft.com",
      "sts.windows.net"
    ],
    SHR_NONCE_VALIDITY: 240,
    INVALID_INSTANCE: "invalid_instance"
  };
  var HttpStatus = {
    SUCCESS: 200,
    SUCCESS_RANGE_START: 200,
    SUCCESS_RANGE_END: 299,
    REDIRECT: 302,
    CLIENT_ERROR: 400,
    CLIENT_ERROR_RANGE_START: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    GONE: 410,
    TOO_MANY_REQUESTS: 429,
    CLIENT_ERROR_RANGE_END: 499,
    SERVER_ERROR: 500,
    SERVER_ERROR_RANGE_START: 500,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    SERVER_ERROR_RANGE_END: 599,
    MULTI_SIDED_ERROR: 600
  };
  var HttpMethod = {
    GET: "GET",
    POST: "POST"
  };
  var OIDC_DEFAULT_SCOPES = [
    Constants.OPENID_SCOPE,
    Constants.PROFILE_SCOPE,
    Constants.OFFLINE_ACCESS_SCOPE
  ];
  var OIDC_SCOPES = [...OIDC_DEFAULT_SCOPES, Constants.EMAIL_SCOPE];
  var HeaderNames = {
    CONTENT_TYPE: "Content-Type",
    CONTENT_LENGTH: "Content-Length",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver"
  };
  var PersistentCacheKeys = {
    ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
    // new cache entry for active_account for a more robust version for browser
  };
  var AADAuthorityConstants = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers"
  };
  var ClaimsRequestKeys = {
    ACCESS_TOKEN: "access_token",
    XMS_CC: "xms_cc"
  };
  var PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
  };
  var OAuthResponseType = {
    CODE: "code",
    IDTOKEN_TOKEN: "id_token token",
    IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
  };
  var ServerResponseType = {
    QUERY: "query",
    FRAGMENT: "fragment"
  };
  var ResponseMode = {
    QUERY: "query",
    FRAGMENT: "fragment",
    FORM_POST: "form_post"
  };
  var GrantType = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
  };
  var CacheAccountType = {
    MSSTS_ACCOUNT_TYPE: "MSSTS",
    ADFS_ACCOUNT_TYPE: "ADFS",
    MSAV1_ACCOUNT_TYPE: "MSA",
    GENERIC_ACCOUNT_TYPE: "Generic"
    // NTLM, Kerberos, FBA, Basic etc
  };
  var Separators = {
    CACHE_KEY_SEPARATOR: "-",
    CLIENT_INFO_SEPARATOR: "."
  };
  var CredentialType = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken"
  };
  var APP_METADATA = "appmetadata";
  var CLIENT_INFO = "client_info";
  var THE_FAMILY_ID = "1";
  var AUTHORITY_METADATA_CONSTANTS = {
    CACHE_KEY: "authority-metadata",
    REFRESH_TIME_SECONDS: 3600 * 24
    // 24 Hours
  };
  var AuthorityMetadataSource = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values"
  };
  var SERVER_TELEM_CONSTANTS = {
    SCHEMA_VERSION: 5,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
  };
  var AuthenticationScheme = {
    BEARER: "Bearer",
    POP: "pop",
    SSH: "ssh-cert"
  };
  var ThrottlingConstants = {
    // Default time to throttle RequestThumbprint in seconds
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    // Default maximum time to throttle in seconds, overrides what the server sends back
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    // Prefix for storing throttling entries
    THROTTLING_PREFIX: "throttling",
    // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
  };
  var Errors = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch"
  };
  var PasswordGrantConstants = {
    username: "username",
    password: "password"
  };
  var RegionDiscoverySources = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4"
  };
  var RegionDiscoveryOutcomes = {
    CONFIGURED_NO_AUTO_DETECTION: "2",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5"
  };
  var CacheOutcome = {
    // When a token is found in the cache or the cache is not supposed to be hit when making the request
    NOT_APPLICABLE: "0",
    // When the token request goes to the identity provider because force_refresh was set to true. Also occurs if claims were requested
    FORCE_REFRESH_OR_CLAIMS: "1",
    // When the token request goes to the identity provider because no cached access token exists
    NO_CACHED_ACCESS_TOKEN: "2",
    // When the token request goes to the identity provider because cached access token expired
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    // When the token request goes to the identity provider because refresh_in was used and the existing token needs to be refreshed
    PROACTIVELY_REFRESHED: "4"
  };
  var JsonWebTokenTypes = {
    Jwt: "JWT",
    Jwk: "JWK",
    Pop: "pop"
  };
  var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;

  // node_modules/@azure/msal-common/dist/error/AuthErrorCodes.mjs
  var AuthErrorCodes_exports = {};
  __export(AuthErrorCodes_exports, {
    postRequestFailed: () => postRequestFailed,
    unexpectedError: () => unexpectedError
  });
  var unexpectedError = "unexpected_error";
  var postRequestFailed = "post_request_failed";

  // node_modules/@azure/msal-common/dist/error/AuthError.mjs
  var AuthErrorMessages = {
    [unexpectedError]: "Unexpected error in authentication.",
    [postRequestFailed]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  };
  var AuthErrorMessage = {
    unexpectedError: {
      code: unexpectedError,
      desc: AuthErrorMessages[unexpectedError]
    },
    postRequestFailed: {
      code: postRequestFailed,
      desc: AuthErrorMessages[postRequestFailed]
    }
  };
  var AuthError = class _AuthError extends Error {
    constructor(errorCode, errorMessage, suberror) {
      const errorString = errorMessage ? `${errorCode}: ${errorMessage}` : errorCode;
      super(errorString);
      Object.setPrototypeOf(this, _AuthError.prototype);
      this.errorCode = errorCode || Constants.EMPTY_STRING;
      this.errorMessage = errorMessage || Constants.EMPTY_STRING;
      this.subError = suberror || Constants.EMPTY_STRING;
      this.name = "AuthError";
    }
    setCorrelationId(correlationId) {
      this.correlationId = correlationId;
    }
  };
  function createAuthError(code, additionalMessage) {
    return new AuthError(code, additionalMessage ? `${AuthErrorMessages[code]} ${additionalMessage}` : AuthErrorMessages[code]);
  }

  // node_modules/@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs
  var ClientAuthErrorCodes_exports = {};
  __export(ClientAuthErrorCodes_exports, {
    authTimeNotFound: () => authTimeNotFound,
    authorizationCodeMissingFromServerResponse: () => authorizationCodeMissingFromServerResponse,
    bindingKeyNotRemoved: () => bindingKeyNotRemoved,
    cannotAppendScopeSet: () => cannotAppendScopeSet,
    cannotRemoveEmptyScope: () => cannotRemoveEmptyScope,
    clientInfoDecodingError: () => clientInfoDecodingError,
    clientInfoEmptyError: () => clientInfoEmptyError,
    deviceCodeExpired: () => deviceCodeExpired,
    deviceCodePollingCancelled: () => deviceCodePollingCancelled,
    deviceCodeUnknownError: () => deviceCodeUnknownError,
    emptyInputScopeSet: () => emptyInputScopeSet,
    endSessionEndpointNotSupported: () => endSessionEndpointNotSupported,
    endpointResolutionError: () => endpointResolutionError,
    hashNotDeserialized: () => hashNotDeserialized,
    invalidAssertion: () => invalidAssertion,
    invalidCacheEnvironment: () => invalidCacheEnvironment,
    invalidCacheRecord: () => invalidCacheRecord,
    invalidClientCredential: () => invalidClientCredential,
    invalidState: () => invalidState,
    keyIdMissing: () => keyIdMissing,
    maxAgeTranspired: () => maxAgeTranspired,
    methodNotImplemented: () => methodNotImplemented,
    missingTenantIdError: () => missingTenantIdError,
    multipleMatchingAccounts: () => multipleMatchingAccounts,
    multipleMatchingAppMetadata: () => multipleMatchingAppMetadata,
    multipleMatchingTokens: () => multipleMatchingTokens,
    nestedAppAuthBridgeDisabled: () => nestedAppAuthBridgeDisabled,
    networkError: () => networkError,
    noAccountFound: () => noAccountFound,
    noAccountInSilentRequest: () => noAccountInSilentRequest,
    noCryptoObject: () => noCryptoObject,
    noNetworkConnectivity: () => noNetworkConnectivity,
    nonceMismatch: () => nonceMismatch,
    nullOrEmptyToken: () => nullOrEmptyToken,
    openIdConfigError: () => openIdConfigError,
    requestCannotBeMade: () => requestCannotBeMade,
    stateMismatch: () => stateMismatch,
    stateNotFound: () => stateNotFound,
    tokenClaimsCnfRequiredForSignedJwt: () => tokenClaimsCnfRequiredForSignedJwt,
    tokenParsingError: () => tokenParsingError,
    tokenRefreshRequired: () => tokenRefreshRequired,
    unexpectedCredentialType: () => unexpectedCredentialType,
    userCanceled: () => userCanceled,
    userTimeoutReached: () => userTimeoutReached
  });
  var clientInfoDecodingError = "client_info_decoding_error";
  var clientInfoEmptyError = "client_info_empty_error";
  var tokenParsingError = "token_parsing_error";
  var nullOrEmptyToken = "null_or_empty_token";
  var endpointResolutionError = "endpoints_resolution_error";
  var networkError = "network_error";
  var openIdConfigError = "openid_config_error";
  var hashNotDeserialized = "hash_not_deserialized";
  var invalidState = "invalid_state";
  var stateMismatch = "state_mismatch";
  var stateNotFound = "state_not_found";
  var nonceMismatch = "nonce_mismatch";
  var authTimeNotFound = "auth_time_not_found";
  var maxAgeTranspired = "max_age_transpired";
  var multipleMatchingTokens = "multiple_matching_tokens";
  var multipleMatchingAccounts = "multiple_matching_accounts";
  var multipleMatchingAppMetadata = "multiple_matching_appMetadata";
  var requestCannotBeMade = "request_cannot_be_made";
  var cannotRemoveEmptyScope = "cannot_remove_empty_scope";
  var cannotAppendScopeSet = "cannot_append_scopeset";
  var emptyInputScopeSet = "empty_input_scopeset";
  var deviceCodePollingCancelled = "device_code_polling_cancelled";
  var deviceCodeExpired = "device_code_expired";
  var deviceCodeUnknownError = "device_code_unknown_error";
  var noAccountInSilentRequest = "no_account_in_silent_request";
  var invalidCacheRecord = "invalid_cache_record";
  var invalidCacheEnvironment = "invalid_cache_environment";
  var noAccountFound = "no_account_found";
  var noCryptoObject = "no_crypto_object";
  var unexpectedCredentialType = "unexpected_credential_type";
  var invalidAssertion = "invalid_assertion";
  var invalidClientCredential = "invalid_client_credential";
  var tokenRefreshRequired = "token_refresh_required";
  var userTimeoutReached = "user_timeout_reached";
  var tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt";
  var authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response";
  var bindingKeyNotRemoved = "binding_key_not_removed";
  var endSessionEndpointNotSupported = "end_session_endpoint_not_supported";
  var keyIdMissing = "key_id_missing";
  var noNetworkConnectivity = "no_network_connectivity";
  var userCanceled = "user_canceled";
  var missingTenantIdError = "missing_tenant_id_error";
  var methodNotImplemented = "method_not_implemented";
  var nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled";

  // node_modules/@azure/msal-common/dist/error/ClientAuthError.mjs
  var ClientAuthErrorMessages = {
    [clientInfoDecodingError]: "The client info could not be parsed/decoded correctly",
    [clientInfoEmptyError]: "The client info was empty",
    [tokenParsingError]: "Token cannot be parsed",
    [nullOrEmptyToken]: "The token is null or empty",
    [endpointResolutionError]: "Endpoints cannot be resolved",
    [networkError]: "Network request failed",
    [openIdConfigError]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
    [hashNotDeserialized]: "The hash parameters could not be deserialized",
    [invalidState]: "State was not the expected format",
    [stateMismatch]: "State mismatch error",
    [stateNotFound]: "State not found",
    [nonceMismatch]: "Nonce mismatch error",
    [authTimeNotFound]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
    [maxAgeTranspired]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
    [multipleMatchingTokens]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
    [multipleMatchingAccounts]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
    [multipleMatchingAppMetadata]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
    [requestCannotBeMade]: "Token request cannot be made without authorization code or refresh token.",
    [cannotRemoveEmptyScope]: "Cannot remove null or empty scope from ScopeSet",
    [cannotAppendScopeSet]: "Cannot append ScopeSet",
    [emptyInputScopeSet]: "Empty input ScopeSet cannot be processed",
    [deviceCodePollingCancelled]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
    [deviceCodeExpired]: "Device code is expired.",
    [deviceCodeUnknownError]: "Device code stopped polling for unknown reasons.",
    [noAccountInSilentRequest]: "Please pass an account object, silent flow is not supported without account information",
    [invalidCacheRecord]: "Cache record object was null or undefined.",
    [invalidCacheEnvironment]: "Invalid environment when attempting to create cache entry",
    [noAccountFound]: "No account found in cache for given key.",
    [noCryptoObject]: "No crypto object detected.",
    [unexpectedCredentialType]: "Unexpected credential type.",
    [invalidAssertion]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
    [invalidClientCredential]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
    [tokenRefreshRequired]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
    [userTimeoutReached]: "User defined timeout for device code polling reached",
    [tokenClaimsCnfRequiredForSignedJwt]: "Cannot generate a POP jwt if the token_claims are not populated",
    [authorizationCodeMissingFromServerResponse]: "Server response does not contain an authorization code to proceed",
    [bindingKeyNotRemoved]: "Could not remove the credential's binding key from storage.",
    [endSessionEndpointNotSupported]: "The provided authority does not support logout",
    [keyIdMissing]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
    [noNetworkConnectivity]: "No network connectivity. Check your internet connection.",
    [userCanceled]: "User cancelled the flow.",
    [missingTenantIdError]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
    [methodNotImplemented]: "This method has not been implemented",
    [nestedAppAuthBridgeDisabled]: "The nested app auth bridge is disabled"
  };
  var ClientAuthErrorMessage = {
    clientInfoDecodingError: {
      code: clientInfoDecodingError,
      desc: ClientAuthErrorMessages[clientInfoDecodingError]
    },
    clientInfoEmptyError: {
      code: clientInfoEmptyError,
      desc: ClientAuthErrorMessages[clientInfoEmptyError]
    },
    tokenParsingError: {
      code: tokenParsingError,
      desc: ClientAuthErrorMessages[tokenParsingError]
    },
    nullOrEmptyToken: {
      code: nullOrEmptyToken,
      desc: ClientAuthErrorMessages[nullOrEmptyToken]
    },
    endpointResolutionError: {
      code: endpointResolutionError,
      desc: ClientAuthErrorMessages[endpointResolutionError]
    },
    networkError: {
      code: networkError,
      desc: ClientAuthErrorMessages[networkError]
    },
    unableToGetOpenidConfigError: {
      code: openIdConfigError,
      desc: ClientAuthErrorMessages[openIdConfigError]
    },
    hashNotDeserialized: {
      code: hashNotDeserialized,
      desc: ClientAuthErrorMessages[hashNotDeserialized]
    },
    invalidStateError: {
      code: invalidState,
      desc: ClientAuthErrorMessages[invalidState]
    },
    stateMismatchError: {
      code: stateMismatch,
      desc: ClientAuthErrorMessages[stateMismatch]
    },
    stateNotFoundError: {
      code: stateNotFound,
      desc: ClientAuthErrorMessages[stateNotFound]
    },
    nonceMismatchError: {
      code: nonceMismatch,
      desc: ClientAuthErrorMessages[nonceMismatch]
    },
    authTimeNotFoundError: {
      code: authTimeNotFound,
      desc: ClientAuthErrorMessages[authTimeNotFound]
    },
    maxAgeTranspired: {
      code: maxAgeTranspired,
      desc: ClientAuthErrorMessages[maxAgeTranspired]
    },
    multipleMatchingTokens: {
      code: multipleMatchingTokens,
      desc: ClientAuthErrorMessages[multipleMatchingTokens]
    },
    multipleMatchingAccounts: {
      code: multipleMatchingAccounts,
      desc: ClientAuthErrorMessages[multipleMatchingAccounts]
    },
    multipleMatchingAppMetadata: {
      code: multipleMatchingAppMetadata,
      desc: ClientAuthErrorMessages[multipleMatchingAppMetadata]
    },
    tokenRequestCannotBeMade: {
      code: requestCannotBeMade,
      desc: ClientAuthErrorMessages[requestCannotBeMade]
    },
    removeEmptyScopeError: {
      code: cannotRemoveEmptyScope,
      desc: ClientAuthErrorMessages[cannotRemoveEmptyScope]
    },
    appendScopeSetError: {
      code: cannotAppendScopeSet,
      desc: ClientAuthErrorMessages[cannotAppendScopeSet]
    },
    emptyInputScopeSetError: {
      code: emptyInputScopeSet,
      desc: ClientAuthErrorMessages[emptyInputScopeSet]
    },
    DeviceCodePollingCancelled: {
      code: deviceCodePollingCancelled,
      desc: ClientAuthErrorMessages[deviceCodePollingCancelled]
    },
    DeviceCodeExpired: {
      code: deviceCodeExpired,
      desc: ClientAuthErrorMessages[deviceCodeExpired]
    },
    DeviceCodeUnknownError: {
      code: deviceCodeUnknownError,
      desc: ClientAuthErrorMessages[deviceCodeUnknownError]
    },
    NoAccountInSilentRequest: {
      code: noAccountInSilentRequest,
      desc: ClientAuthErrorMessages[noAccountInSilentRequest]
    },
    invalidCacheRecord: {
      code: invalidCacheRecord,
      desc: ClientAuthErrorMessages[invalidCacheRecord]
    },
    invalidCacheEnvironment: {
      code: invalidCacheEnvironment,
      desc: ClientAuthErrorMessages[invalidCacheEnvironment]
    },
    noAccountFound: {
      code: noAccountFound,
      desc: ClientAuthErrorMessages[noAccountFound]
    },
    noCryptoObj: {
      code: noCryptoObject,
      desc: ClientAuthErrorMessages[noCryptoObject]
    },
    unexpectedCredentialType: {
      code: unexpectedCredentialType,
      desc: ClientAuthErrorMessages[unexpectedCredentialType]
    },
    invalidAssertion: {
      code: invalidAssertion,
      desc: ClientAuthErrorMessages[invalidAssertion]
    },
    invalidClientCredential: {
      code: invalidClientCredential,
      desc: ClientAuthErrorMessages[invalidClientCredential]
    },
    tokenRefreshRequired: {
      code: tokenRefreshRequired,
      desc: ClientAuthErrorMessages[tokenRefreshRequired]
    },
    userTimeoutReached: {
      code: userTimeoutReached,
      desc: ClientAuthErrorMessages[userTimeoutReached]
    },
    tokenClaimsRequired: {
      code: tokenClaimsCnfRequiredForSignedJwt,
      desc: ClientAuthErrorMessages[tokenClaimsCnfRequiredForSignedJwt]
    },
    noAuthorizationCodeFromServer: {
      code: authorizationCodeMissingFromServerResponse,
      desc: ClientAuthErrorMessages[authorizationCodeMissingFromServerResponse]
    },
    bindingKeyNotRemovedError: {
      code: bindingKeyNotRemoved,
      desc: ClientAuthErrorMessages[bindingKeyNotRemoved]
    },
    logoutNotSupported: {
      code: endSessionEndpointNotSupported,
      desc: ClientAuthErrorMessages[endSessionEndpointNotSupported]
    },
    keyIdMissing: {
      code: keyIdMissing,
      desc: ClientAuthErrorMessages[keyIdMissing]
    },
    noNetworkConnectivity: {
      code: noNetworkConnectivity,
      desc: ClientAuthErrorMessages[noNetworkConnectivity]
    },
    userCanceledError: {
      code: userCanceled,
      desc: ClientAuthErrorMessages[userCanceled]
    },
    missingTenantIdError: {
      code: missingTenantIdError,
      desc: ClientAuthErrorMessages[missingTenantIdError]
    },
    nestedAppAuthBridgeDisabled: {
      code: nestedAppAuthBridgeDisabled,
      desc: ClientAuthErrorMessages[nestedAppAuthBridgeDisabled]
    }
  };
  var ClientAuthError = class _ClientAuthError extends AuthError {
    constructor(errorCode, additionalMessage) {
      super(errorCode, additionalMessage ? `${ClientAuthErrorMessages[errorCode]}: ${additionalMessage}` : ClientAuthErrorMessages[errorCode]);
      this.name = "ClientAuthError";
      Object.setPrototypeOf(this, _ClientAuthError.prototype);
    }
  };
  function createClientAuthError(errorCode, additionalMessage) {
    return new ClientAuthError(errorCode, additionalMessage);
  }

  // node_modules/@azure/msal-common/dist/crypto/ICrypto.mjs
  var DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64Decode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64Encode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    base64UrlEncode: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    encodeKid: () => {
      throw createClientAuthError(methodNotImplemented);
    },
    async getPublicKeyThumbprint() {
      throw createClientAuthError(methodNotImplemented);
    },
    async removeTokenBindingKey() {
      throw createClientAuthError(methodNotImplemented);
    },
    async clearKeystore() {
      throw createClientAuthError(methodNotImplemented);
    },
    async signJwt() {
      throw createClientAuthError(methodNotImplemented);
    },
    async hashString() {
      throw createClientAuthError(methodNotImplemented);
    }
  };

  // node_modules/@azure/msal-common/dist/logger/Logger.mjs
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["Error"] = 0] = "Error";
    LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
    LogLevel2[LogLevel2["Info"] = 2] = "Info";
    LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
    LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
  })(LogLevel || (LogLevel = {}));
  var Logger = class _Logger {
    constructor(loggerOptions, packageName, packageVersion) {
      this.level = LogLevel.Info;
      const defaultLoggerCallback = () => {
        return;
      };
      const setLoggerOptions = loggerOptions || _Logger.createDefaultLoggerOptions();
      this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
      this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
      this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
      this.correlationId = setLoggerOptions.correlationId || Constants.EMPTY_STRING;
      this.packageName = packageName || Constants.EMPTY_STRING;
      this.packageVersion = packageVersion || Constants.EMPTY_STRING;
    }
    static createDefaultLoggerOptions() {
      return {
        loggerCallback: () => {
        },
        piiLoggingEnabled: false,
        logLevel: LogLevel.Info
      };
    }
    /**
     * Create new Logger with existing configurations.
     */
    clone(packageName, packageVersion, correlationId) {
      return new _Logger({
        loggerCallback: this.localCallback,
        piiLoggingEnabled: this.piiLoggingEnabled,
        logLevel: this.level,
        correlationId: correlationId || this.correlationId
      }, packageName, packageVersion);
    }
    /**
     * Log message with required options.
     */
    logMessage(logMessage, options) {
      if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
        return;
      }
      const timestamp = (/* @__PURE__ */ new Date()).toUTCString();
      const logHeader = `[${timestamp}] : [${options.correlationId || this.correlationId || ""}]`;
      const log = `${logHeader} : ${this.packageName}@${this.packageVersion} : ${LogLevel[options.logLevel]} - ${logMessage}`;
      this.executeCallback(options.logLevel, log, options.containsPii || false);
    }
    /**
     * Execute callback with message.
     */
    executeCallback(level, message, containsPii) {
      if (this.localCallback) {
        this.localCallback(level, message, containsPii);
      }
    }
    /**
     * Logs error messages.
     */
    error(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs error messages with PII.
     */
    errorPii(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs warning messages.
     */
    warning(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs warning messages with PII.
     */
    warningPii(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs info messages.
     */
    info(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs info messages with PII.
     */
    infoPii(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs verbose messages.
     */
    verbose(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs verbose messages with PII.
     */
    verbosePii(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs trace messages.
     */
    trace(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Logs trace messages with PII.
     */
    tracePii(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    }
    /**
     * Returns whether PII Logging is enabled or not.
     */
    isPiiLoggingEnabled() {
      return this.piiLoggingEnabled || false;
    }
  };

  // node_modules/@azure/msal-common/dist/packageMetadata.mjs
  var name = "@azure/msal-common";
  var version = "15.13.0";

  // node_modules/@azure/msal-common/dist/authority/AuthorityOptions.mjs
  var AzureCloudInstance = {
    // AzureCloudInstance is not specified.
    None: "none",
    // Microsoft Azure public cloud
    AzurePublic: "https://login.microsoftonline.com",
    // Microsoft PPE
    AzurePpe: "https://login.windows-ppe.net",
    // Microsoft Chinese national/regional cloud
    AzureChina: "https://login.chinacloudapi.cn",
    // Microsoft German national/regional cloud ("Black Forest")
    AzureGermany: "https://login.microsoftonline.de",
    // US Government cloud
    AzureUsGovernment: "https://login.microsoftonline.us"
  };

  // node_modules/@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs
  var ClientConfigurationErrorCodes_exports = {};
  __export(ClientConfigurationErrorCodes_exports, {
    authorityMismatch: () => authorityMismatch,
    authorityUriInsecure: () => authorityUriInsecure,
    cannotAllowPlatformBroker: () => cannotAllowPlatformBroker,
    cannotSetOIDCOptions: () => cannotSetOIDCOptions,
    claimsRequestParsingError: () => claimsRequestParsingError,
    emptyInputScopesError: () => emptyInputScopesError,
    invalidAuthenticationHeader: () => invalidAuthenticationHeader,
    invalidAuthorityMetadata: () => invalidAuthorityMetadata,
    invalidAuthorizePostBodyParameters: () => invalidAuthorizePostBodyParameters,
    invalidClaims: () => invalidClaims,
    invalidCloudDiscoveryMetadata: () => invalidCloudDiscoveryMetadata,
    invalidCodeChallengeMethod: () => invalidCodeChallengeMethod,
    invalidRequestMethodForEAR: () => invalidRequestMethodForEAR,
    logoutRequestEmpty: () => logoutRequestEmpty,
    missingNonceAuthenticationHeader: () => missingNonceAuthenticationHeader,
    missingSshJwk: () => missingSshJwk,
    missingSshKid: () => missingSshKid,
    pkceParamsMissing: () => pkceParamsMissing,
    redirectUriEmpty: () => redirectUriEmpty,
    tokenRequestEmpty: () => tokenRequestEmpty,
    untrustedAuthority: () => untrustedAuthority,
    urlEmptyError: () => urlEmptyError,
    urlParseError: () => urlParseError
  });
  var redirectUriEmpty = "redirect_uri_empty";
  var claimsRequestParsingError = "claims_request_parsing_error";
  var authorityUriInsecure = "authority_uri_insecure";
  var urlParseError = "url_parse_error";
  var urlEmptyError = "empty_url_error";
  var emptyInputScopesError = "empty_input_scopes_error";
  var invalidClaims = "invalid_claims";
  var tokenRequestEmpty = "token_request_empty";
  var logoutRequestEmpty = "logout_request_empty";
  var invalidCodeChallengeMethod = "invalid_code_challenge_method";
  var pkceParamsMissing = "pkce_params_missing";
  var invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata";
  var invalidAuthorityMetadata = "invalid_authority_metadata";
  var untrustedAuthority = "untrusted_authority";
  var missingSshJwk = "missing_ssh_jwk";
  var missingSshKid = "missing_ssh_kid";
  var missingNonceAuthenticationHeader = "missing_nonce_authentication_header";
  var invalidAuthenticationHeader = "invalid_authentication_header";
  var cannotSetOIDCOptions = "cannot_set_OIDCOptions";
  var cannotAllowPlatformBroker = "cannot_allow_platform_broker";
  var authorityMismatch = "authority_mismatch";
  var invalidRequestMethodForEAR = "invalid_request_method_for_EAR";
  var invalidAuthorizePostBodyParameters = "invalid_authorize_post_body_parameters";

  // node_modules/@azure/msal-common/dist/error/ClientConfigurationError.mjs
  var ClientConfigurationErrorMessages = {
    [redirectUriEmpty]: "A redirect URI is required for all calls, and none has been set.",
    [claimsRequestParsingError]: "Could not parse the given claims request object.",
    [authorityUriInsecure]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    [urlParseError]: "URL could not be parsed into appropriate segments.",
    [urlEmptyError]: "URL was empty or null.",
    [emptyInputScopesError]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
    [invalidClaims]: "Given claims parameter must be a stringified JSON object.",
    [tokenRequestEmpty]: "Token request was empty and not found in cache.",
    [logoutRequestEmpty]: "The logout request was null or undefined.",
    [invalidCodeChallengeMethod]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
    [pkceParamsMissing]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
    [invalidCloudDiscoveryMetadata]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
    [invalidAuthorityMetadata]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
    [untrustedAuthority]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
    [missingSshJwk]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
    [missingSshKid]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
    [missingNonceAuthenticationHeader]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
    [invalidAuthenticationHeader]: "Invalid authentication header provided",
    [cannotSetOIDCOptions]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
    [cannotAllowPlatformBroker]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
    [authorityMismatch]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
    [invalidAuthorizePostBodyParameters]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
    [invalidRequestMethodForEAR]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
  };
  var ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
      code: redirectUriEmpty,
      desc: ClientConfigurationErrorMessages[redirectUriEmpty]
    },
    claimsRequestParsingError: {
      code: claimsRequestParsingError,
      desc: ClientConfigurationErrorMessages[claimsRequestParsingError]
    },
    authorityUriInsecure: {
      code: authorityUriInsecure,
      desc: ClientConfigurationErrorMessages[authorityUriInsecure]
    },
    urlParseError: {
      code: urlParseError,
      desc: ClientConfigurationErrorMessages[urlParseError]
    },
    urlEmptyError: {
      code: urlEmptyError,
      desc: ClientConfigurationErrorMessages[urlEmptyError]
    },
    emptyScopesError: {
      code: emptyInputScopesError,
      desc: ClientConfigurationErrorMessages[emptyInputScopesError]
    },
    invalidClaimsRequest: {
      code: invalidClaims,
      desc: ClientConfigurationErrorMessages[invalidClaims]
    },
    tokenRequestEmptyError: {
      code: tokenRequestEmpty,
      desc: ClientConfigurationErrorMessages[tokenRequestEmpty]
    },
    logoutRequestEmptyError: {
      code: logoutRequestEmpty,
      desc: ClientConfigurationErrorMessages[logoutRequestEmpty]
    },
    invalidCodeChallengeMethod: {
      code: invalidCodeChallengeMethod,
      desc: ClientConfigurationErrorMessages[invalidCodeChallengeMethod]
    },
    invalidCodeChallengeParams: {
      code: pkceParamsMissing,
      desc: ClientConfigurationErrorMessages[pkceParamsMissing]
    },
    invalidCloudDiscoveryMetadata: {
      code: invalidCloudDiscoveryMetadata,
      desc: ClientConfigurationErrorMessages[invalidCloudDiscoveryMetadata]
    },
    invalidAuthorityMetadata: {
      code: invalidAuthorityMetadata,
      desc: ClientConfigurationErrorMessages[invalidAuthorityMetadata]
    },
    untrustedAuthority: {
      code: untrustedAuthority,
      desc: ClientConfigurationErrorMessages[untrustedAuthority]
    },
    missingSshJwk: {
      code: missingSshJwk,
      desc: ClientConfigurationErrorMessages[missingSshJwk]
    },
    missingSshKid: {
      code: missingSshKid,
      desc: ClientConfigurationErrorMessages[missingSshKid]
    },
    missingNonceAuthenticationHeader: {
      code: missingNonceAuthenticationHeader,
      desc: ClientConfigurationErrorMessages[missingNonceAuthenticationHeader]
    },
    invalidAuthenticationHeader: {
      code: invalidAuthenticationHeader,
      desc: ClientConfigurationErrorMessages[invalidAuthenticationHeader]
    },
    cannotSetOIDCOptions: {
      code: cannotSetOIDCOptions,
      desc: ClientConfigurationErrorMessages[cannotSetOIDCOptions]
    },
    cannotAllowPlatformBroker: {
      code: cannotAllowPlatformBroker,
      desc: ClientConfigurationErrorMessages[cannotAllowPlatformBroker]
    },
    authorityMismatch: {
      code: authorityMismatch,
      desc: ClientConfigurationErrorMessages[authorityMismatch]
    },
    invalidAuthorizePostBodyParameters: {
      code: invalidAuthorizePostBodyParameters,
      desc: ClientConfigurationErrorMessages[invalidAuthorizePostBodyParameters]
    },
    invalidRequestMethodForEAR: {
      code: invalidRequestMethodForEAR,
      desc: ClientConfigurationErrorMessages[invalidRequestMethodForEAR]
    }
  };
  var ClientConfigurationError = class _ClientConfigurationError extends AuthError {
    constructor(errorCode) {
      super(errorCode, ClientConfigurationErrorMessages[errorCode]);
      this.name = "ClientConfigurationError";
      Object.setPrototypeOf(this, _ClientConfigurationError.prototype);
    }
  };
  function createClientConfigurationError(errorCode) {
    return new ClientConfigurationError(errorCode);
  }

  // node_modules/@azure/msal-common/dist/utils/StringUtils.mjs
  var StringUtils = class {
    /**
     * Check if stringified object is empty
     * @param strObj
     */
    static isEmptyObj(strObj) {
      if (strObj) {
        try {
          const obj = JSON.parse(strObj);
          return Object.keys(obj).length === 0;
        } catch (e) {
        }
      }
      return true;
    }
    static startsWith(str, search) {
      return str.indexOf(search) === 0;
    }
    static endsWith(str, search) {
      return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
    }
    /**
     * Parses string into an object.
     *
     * @param query
     */
    static queryStringToObject(query) {
      const obj = {};
      const params = query.split("&");
      const decode = (s) => decodeURIComponent(s.replace(/\+/g, " "));
      params.forEach((pair) => {
        if (pair.trim()) {
          const [key, value] = pair.split(/=(.+)/g, 2);
          if (key && value) {
            obj[decode(key)] = decode(value);
          }
        }
      });
      return obj;
    }
    /**
     * Trims entries in an array.
     *
     * @param arr
     */
    static trimArrayEntries(arr) {
      return arr.map((entry) => entry.trim());
    }
    /**
     * Removes empty strings from array
     * @param arr
     */
    static removeEmptyStringsFromArray(arr) {
      return arr.filter((entry) => {
        return !!entry;
      });
    }
    /**
     * Attempts to parse a string into JSON
     * @param str
     */
    static jsonParseHelper(str) {
      try {
        return JSON.parse(str);
      } catch (e) {
        return null;
      }
    }
    /**
     * Tests if a given string matches a given pattern, with support for wildcards and queries.
     * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
     * @param input String to match against
     */
    static matchPattern(pattern, input) {
      const regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return regex.test(input);
    }
  };

  // node_modules/@azure/msal-common/dist/request/ScopeSet.mjs
  var ScopeSet = class _ScopeSet {
    constructor(inputScopes) {
      const scopeArr = inputScopes ? StringUtils.trimArrayEntries([...inputScopes]) : [];
      const filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
      if (!filteredInput || !filteredInput.length) {
        throw createClientConfigurationError(emptyInputScopesError);
      }
      this.scopes = /* @__PURE__ */ new Set();
      filteredInput.forEach((scope) => this.scopes.add(scope));
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
     */
    static fromString(inputScopeString) {
      const scopeString = inputScopeString || Constants.EMPTY_STRING;
      const inputScopes = scopeString.split(" ");
      return new _ScopeSet(inputScopes);
    }
    /**
     * Creates the set of scopes to search for in cache lookups
     * @param inputScopeString
     * @returns
     */
    static createSearchScopes(inputScopeString) {
      const scopesToUse = inputScopeString && inputScopeString.length > 0 ? inputScopeString : [...OIDC_DEFAULT_SCOPES];
      const scopeSet = new _ScopeSet(scopesToUse);
      if (!scopeSet.containsOnlyOIDCScopes()) {
        scopeSet.removeOIDCScopes();
      } else {
        scopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
      }
      return scopeSet;
    }
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */
    containsScope(scope) {
      const lowerCaseScopes = this.printScopesLowerCase().split(" ");
      const lowerCaseScopesSet = new _ScopeSet(lowerCaseScopes);
      return scope ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    }
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */
    containsScopeSet(scopeSet) {
      if (!scopeSet || scopeSet.scopes.size <= 0) {
        return false;
      }
      return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every((scope) => this.containsScope(scope));
    }
    /**
     * Check if set of scopes contains only the defaults
     */
    containsOnlyOIDCScopes() {
      let defaultScopeCount = 0;
      OIDC_SCOPES.forEach((defaultScope) => {
        if (this.containsScope(defaultScope)) {
          defaultScopeCount += 1;
        }
      });
      return this.scopes.size === defaultScopeCount;
    }
    /**
     * Appends single scope if passed
     * @param newScope
     */
    appendScope(newScope) {
      if (newScope) {
        this.scopes.add(newScope.trim());
      }
    }
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */
    appendScopes(newScopes) {
      try {
        newScopes.forEach((newScope) => this.appendScope(newScope));
      } catch (e) {
        throw createClientAuthError(cannotAppendScopeSet);
      }
    }
    /**
     * Removes element from set of scopes.
     * @param scope
     */
    removeScope(scope) {
      if (!scope) {
        throw createClientAuthError(cannotRemoveEmptyScope);
      }
      this.scopes.delete(scope.trim());
    }
    /**
     * Removes default scopes from set of scopes
     * Primarily used to prevent cache misses if the default scopes are not returned from the server
     */
    removeOIDCScopes() {
      OIDC_SCOPES.forEach((defaultScope) => {
        this.scopes.delete(defaultScope);
      });
    }
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */
    unionScopeSets(otherScopes) {
      if (!otherScopes) {
        throw createClientAuthError(emptyInputScopeSet);
      }
      const unionScopes = /* @__PURE__ */ new Set();
      otherScopes.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
      this.scopes.forEach((scope) => unionScopes.add(scope.toLowerCase()));
      return unionScopes;
    }
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */
    intersectingScopeSets(otherScopes) {
      if (!otherScopes) {
        throw createClientAuthError(emptyInputScopeSet);
      }
      if (!otherScopes.containsOnlyOIDCScopes()) {
        otherScopes.removeOIDCScopes();
      }
      const unionScopes = this.unionScopeSets(otherScopes);
      const sizeOtherScopes = otherScopes.getScopeCount();
      const sizeThisScopes = this.getScopeCount();
      const sizeUnionScopes = unionScopes.size;
      return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
    }
    /**
     * Returns size of set of scopes.
     */
    getScopeCount() {
      return this.scopes.size;
    }
    /**
     * Returns the scopes as an array of string values
     */
    asArray() {
      const array = [];
      this.scopes.forEach((val) => array.push(val));
      return array;
    }
    /**
     * Prints scopes into a space-delimited string
     */
    printScopes() {
      if (this.scopes) {
        const scopeArr = this.asArray();
        return scopeArr.join(" ");
      }
      return Constants.EMPTY_STRING;
    }
    /**
     * Prints scopes into a space-delimited lower-case string (used for caching)
     */
    printScopesLowerCase() {
      return this.printScopes().toLowerCase();
    }
  };

  // node_modules/@azure/msal-common/dist/account/AccountInfo.mjs
  function tenantIdMatchesHomeTenant(tenantId, homeAccountId) {
    return !!tenantId && !!homeAccountId && tenantId === homeAccountId.split(".")[1];
  }
  function buildTenantProfile(homeAccountId, localAccountId, tenantId, idTokenClaims) {
    if (idTokenClaims) {
      const { oid, sub, tid, name: name3, tfp, acr, preferred_username, upn, login_hint } = idTokenClaims;
      const tenantId2 = tid || tfp || acr || "";
      return {
        tenantId: tenantId2,
        localAccountId: oid || sub || "",
        name: name3,
        username: preferred_username || upn || "",
        loginHint: login_hint,
        isHomeTenant: tenantIdMatchesHomeTenant(tenantId2, homeAccountId)
      };
    } else {
      return {
        tenantId,
        localAccountId,
        username: "",
        isHomeTenant: tenantIdMatchesHomeTenant(tenantId, homeAccountId)
      };
    }
  }
  function updateAccountTenantProfileData(baseAccountInfo, tenantProfile, idTokenClaims, idTokenSecret) {
    let updatedAccountInfo = baseAccountInfo;
    if (tenantProfile) {
      const { isHomeTenant, ...tenantProfileOverride } = tenantProfile;
      updatedAccountInfo = { ...baseAccountInfo, ...tenantProfileOverride };
    }
    if (idTokenClaims) {
      const { isHomeTenant, ...claimsSourcedTenantProfile } = buildTenantProfile(baseAccountInfo.homeAccountId, baseAccountInfo.localAccountId, baseAccountInfo.tenantId, idTokenClaims);
      updatedAccountInfo = {
        ...updatedAccountInfo,
        ...claimsSourcedTenantProfile,
        idTokenClaims,
        idToken: idTokenSecret
      };
      return updatedAccountInfo;
    }
    return updatedAccountInfo;
  }

  // node_modules/@azure/msal-common/dist/account/AuthToken.mjs
  var AuthToken_exports = {};
  __export(AuthToken_exports, {
    checkMaxAge: () => checkMaxAge,
    extractTokenClaims: () => extractTokenClaims,
    getJWSPayload: () => getJWSPayload
  });
  function extractTokenClaims(encodedToken, base64Decode2) {
    const jswPayload = getJWSPayload(encodedToken);
    try {
      const base64Decoded = base64Decode2(jswPayload);
      return JSON.parse(base64Decoded);
    } catch (err) {
      throw createClientAuthError(tokenParsingError);
    }
  }
  function getJWSPayload(authToken) {
    if (!authToken) {
      throw createClientAuthError(nullOrEmptyToken);
    }
    const tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
    const matches = tokenPartsRegex.exec(authToken);
    if (!matches || matches.length < 4) {
      throw createClientAuthError(tokenParsingError);
    }
    return matches[2];
  }
  function checkMaxAge(authTime, maxAge) {
    const fiveMinuteSkew = 3e5;
    if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) {
      throw createClientAuthError(maxAgeTranspired);
    }
  }

  // node_modules/@azure/msal-common/dist/utils/UrlUtils.mjs
  var UrlUtils_exports = {};
  __export(UrlUtils_exports, {
    getDeserializedResponse: () => getDeserializedResponse,
    mapToQueryString: () => mapToQueryString,
    normalizeUrlForComparison: () => normalizeUrlForComparison,
    stripLeadingHashOrQuery: () => stripLeadingHashOrQuery
  });
  function canonicalizeUrl(url) {
    if (!url) {
      return url;
    }
    let lowerCaseUrl = url.toLowerCase();
    if (StringUtils.endsWith(lowerCaseUrl, "?")) {
      lowerCaseUrl = lowerCaseUrl.slice(0, -1);
    } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
      lowerCaseUrl = lowerCaseUrl.slice(0, -2);
    }
    if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
      lowerCaseUrl += "/";
    }
    return lowerCaseUrl;
  }
  function stripLeadingHashOrQuery(responseString) {
    if (responseString.startsWith("#/")) {
      return responseString.substring(2);
    } else if (responseString.startsWith("#") || responseString.startsWith("?")) {
      return responseString.substring(1);
    }
    return responseString;
  }
  function getDeserializedResponse(responseString) {
    if (!responseString || responseString.indexOf("=") < 0) {
      return null;
    }
    try {
      const normalizedResponse = stripLeadingHashOrQuery(responseString);
      const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
      if (deserializedHash.code || deserializedHash.ear_jwe || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) {
        return deserializedHash;
      }
    } catch (e) {
      throw createClientAuthError(hashNotDeserialized);
    }
    return null;
  }
  function mapToQueryString(parameters, encodeExtraParams = true, extraQueryParameters) {
    const queryParameterArray = new Array();
    parameters.forEach((value, key) => {
      if (!encodeExtraParams && extraQueryParameters && key in extraQueryParameters) {
        queryParameterArray.push(`${key}=${value}`);
      } else {
        queryParameterArray.push(`${key}=${encodeURIComponent(value)}`);
      }
    });
    return queryParameterArray.join("&");
  }
  function normalizeUrlForComparison(url) {
    if (!url) {
      return url;
    }
    const urlWithoutHash = url.split("#")[0];
    try {
      const urlObj = new URL(urlWithoutHash);
      const normalizedUrl = urlObj.origin + urlObj.pathname + urlObj.search;
      return canonicalizeUrl(normalizedUrl);
    } catch (e) {
      return canonicalizeUrl(urlWithoutHash);
    }
  }

  // node_modules/@azure/msal-common/dist/url/UrlString.mjs
  var UrlString = class _UrlString {
    get urlString() {
      return this._urlString;
    }
    constructor(url) {
      this._urlString = url;
      if (!this._urlString) {
        throw createClientConfigurationError(urlEmptyError);
      }
      if (!url.includes("#")) {
        this._urlString = _UrlString.canonicalizeUri(url);
      }
    }
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    static canonicalizeUri(url) {
      if (url) {
        let lowerCaseUrl = url.toLowerCase();
        if (StringUtils.endsWith(lowerCaseUrl, "?")) {
          lowerCaseUrl = lowerCaseUrl.slice(0, -1);
        } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
          lowerCaseUrl = lowerCaseUrl.slice(0, -2);
        }
        if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
          lowerCaseUrl += "/";
        }
        return lowerCaseUrl;
      }
      return url;
    }
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    validateAsUri() {
      let components;
      try {
        components = this.getUrlComponents();
      } catch (e) {
        throw createClientConfigurationError(urlParseError);
      }
      if (!components.HostNameAndPort || !components.PathSegments) {
        throw createClientConfigurationError(urlParseError);
      }
      if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
        throw createClientConfigurationError(authorityUriInsecure);
      }
    }
    /**
     * Given a url and a query string return the url with provided query string appended
     * @param url
     * @param queryString
     */
    static appendQueryString(url, queryString) {
      if (!queryString) {
        return url;
      }
      return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
    }
    /**
     * Returns a url with the hash removed
     * @param url
     */
    static removeHashFromUrl(url) {
      return _UrlString.canonicalizeUri(url.split("#")[0]);
    }
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    replaceTenantPath(tenantId) {
      const urlObject = this.getUrlComponents();
      const pathArray = urlObject.PathSegments;
      if (tenantId && pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS)) {
        pathArray[0] = tenantId;
      }
      return _UrlString.constructAuthorityUriFromObject(urlObject);
    }
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    getUrlComponents() {
      const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
      const match = this.urlString.match(regEx);
      if (!match) {
        throw createClientConfigurationError(urlParseError);
      }
      const urlComponents = {
        Protocol: match[1],
        HostNameAndPort: match[4],
        AbsolutePath: match[5],
        QueryString: match[7]
      };
      let pathSegments = urlComponents.AbsolutePath.split("/");
      pathSegments = pathSegments.filter((val) => val && val.length > 0);
      urlComponents.PathSegments = pathSegments;
      if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) {
        urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
      }
      return urlComponents;
    }
    static getDomainFromUrl(url) {
      const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
      const match = url.match(regEx);
      if (!match) {
        throw createClientConfigurationError(urlParseError);
      }
      return match[2];
    }
    static getAbsoluteUrl(relativeUrl, baseUrl) {
      if (relativeUrl[0] === Constants.FORWARD_SLASH) {
        const url = new _UrlString(baseUrl);
        const baseComponents = url.getUrlComponents();
        return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
      }
      return relativeUrl;
    }
    static constructAuthorityUriFromObject(urlObject) {
      return new _UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    }
    /**
     * Check if the hash of the URL string contains known properties
     * @deprecated This API will be removed in a future version
     */
    static hashContainsKnownProperties(response) {
      return !!getDeserializedResponse(response);
    }
  };

  // node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.mjs
  var rawMetdataJSON = {
    endpointMetadata: {
      "login.microsoftonline.com": {
        token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
      },
      "login.chinacloudapi.cn": {
        token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
        authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
      },
      "login.microsoftonline.us": {
        token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
      }
    },
    instanceDiscoveryMetadata: {
      metadata: [
        {
          preferred_network: "login.microsoftonline.com",
          preferred_cache: "login.windows.net",
          aliases: [
            "login.microsoftonline.com",
            "login.windows.net",
            "login.microsoft.com",
            "sts.windows.net"
          ]
        },
        {
          preferred_network: "login.partner.microsoftonline.cn",
          preferred_cache: "login.partner.microsoftonline.cn",
          aliases: [
            "login.partner.microsoftonline.cn",
            "login.chinacloudapi.cn"
          ]
        },
        {
          preferred_network: "login.microsoftonline.de",
          preferred_cache: "login.microsoftonline.de",
          aliases: ["login.microsoftonline.de"]
        },
        {
          preferred_network: "login.microsoftonline.us",
          preferred_cache: "login.microsoftonline.us",
          aliases: [
            "login.microsoftonline.us",
            "login.usgovcloudapi.net"
          ]
        },
        {
          preferred_network: "login-us.microsoftonline.com",
          preferred_cache: "login-us.microsoftonline.com",
          aliases: ["login-us.microsoftonline.com"]
        }
      ]
    }
  };
  var EndpointMetadata = rawMetdataJSON.endpointMetadata;
  var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;
  var InstanceDiscoveryMetadataAliases = /* @__PURE__ */ new Set();
  InstanceDiscoveryMetadata.metadata.forEach((metadataEntry) => {
    metadataEntry.aliases.forEach((alias) => {
      InstanceDiscoveryMetadataAliases.add(alias);
    });
  });
  function getAliasesFromStaticSources(staticAuthorityOptions, logger) {
    let staticAliases;
    const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
    if (canonicalAuthority) {
      const authorityHost = new UrlString(canonicalAuthority).getUrlComponents().HostNameAndPort;
      staticAliases = getAliasesFromMetadata(authorityHost, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, AuthorityMetadataSource.CONFIG, logger) || getAliasesFromMetadata(authorityHost, InstanceDiscoveryMetadata.metadata, AuthorityMetadataSource.HARDCODED_VALUES, logger) || staticAuthorityOptions.knownAuthorities;
    }
    return staticAliases || [];
  }
  function getAliasesFromMetadata(authorityHost, cloudDiscoveryMetadata, source, logger) {
    logger?.trace(`getAliasesFromMetadata called with source: ${source}`);
    if (authorityHost && cloudDiscoveryMetadata) {
      const metadata = getCloudDiscoveryMetadataFromNetworkResponse(cloudDiscoveryMetadata, authorityHost);
      if (metadata) {
        logger?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${source}, returning aliases`);
        return metadata.aliases;
      } else {
        logger?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${source}`);
      }
    }
    return null;
  }
  function getCloudDiscoveryMetadataFromHardcodedValues(authorityHost) {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(InstanceDiscoveryMetadata.metadata, authorityHost);
    return metadata;
  }
  function getCloudDiscoveryMetadataFromNetworkResponse(response, authorityHost) {
    for (let i = 0; i < response.length; i++) {
      const metadata = response[i];
      if (metadata.aliases.includes(authorityHost)) {
        return metadata;
      }
    }
    return null;
  }

  // node_modules/@azure/msal-common/dist/error/CacheErrorCodes.mjs
  var CacheErrorCodes_exports = {};
  __export(CacheErrorCodes_exports, {
    cacheErrorUnknown: () => cacheErrorUnknown,
    cacheQuotaExceeded: () => cacheQuotaExceeded
  });
  var cacheQuotaExceeded = "cache_quota_exceeded";
  var cacheErrorUnknown = "cache_error_unknown";

  // node_modules/@azure/msal-common/dist/error/CacheError.mjs
  var CacheErrorMessages = {
    [cacheQuotaExceeded]: "Exceeded cache storage capacity.",
    [cacheErrorUnknown]: "Unexpected error occurred when using cache storage."
  };
  var CacheError = class _CacheError extends AuthError {
    constructor(errorCode, errorMessage) {
      const message = errorMessage || (CacheErrorMessages[errorCode] ? CacheErrorMessages[errorCode] : CacheErrorMessages[cacheErrorUnknown]);
      super(`${errorCode}: ${message}`);
      Object.setPrototypeOf(this, _CacheError.prototype);
      this.name = "CacheError";
      this.errorCode = errorCode;
      this.errorMessage = message;
    }
  };
  function createCacheError(e) {
    if (!(e instanceof Error)) {
      return new CacheError(cacheErrorUnknown);
    }
    if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) {
      return new CacheError(cacheQuotaExceeded);
    } else {
      return new CacheError(e.name, e.message);
    }
  }

  // node_modules/@azure/msal-common/dist/cache/CacheManager.mjs
  var CacheManager = class {
    constructor(clientId, cryptoImpl, logger, performanceClient, staticAuthorityOptions) {
      this.clientId = clientId;
      this.cryptoImpl = cryptoImpl;
      this.commonLogger = logger.clone(name, version);
      this.staticAuthorityOptions = staticAuthorityOptions;
      this.performanceClient = performanceClient;
    }
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */
    getAllAccounts(accountFilter, correlationId) {
      return this.buildTenantProfiles(this.getAccountsFilteredBy(accountFilter, correlationId), correlationId, accountFilter);
    }
    /**
     * Gets first tenanted AccountInfo object found based on provided filters
     */
    getAccountInfoFilteredBy(accountFilter, correlationId) {
      if (Object.keys(accountFilter).length === 0 || Object.values(accountFilter).every((value) => !value)) {
        this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null");
        return null;
      }
      const allAccounts = this.getAllAccounts(accountFilter, correlationId);
      if (allAccounts.length > 1) {
        const sortedAccounts = allAccounts.sort((account2) => {
          return account2.idTokenClaims ? -1 : 1;
        });
        return sortedAccounts[0];
      } else if (allAccounts.length === 1) {
        return allAccounts[0];
      } else {
        return null;
      }
    }
    /**
     * Returns a single matching
     * @param accountFilter
     * @returns
     */
    getBaseAccountInfo(accountFilter, correlationId) {
      const accountEntities = this.getAccountsFilteredBy(accountFilter, correlationId);
      if (accountEntities.length > 0) {
        return accountEntities[0].getAccountInfo();
      } else {
        return null;
      }
    }
    /**
     * Matches filtered account entities with cached ID tokens that match the tenant profile-specific account filters
     * and builds the account info objects from the matching ID token's claims
     * @param cachedAccounts
     * @param accountFilter
     * @returns Array of AccountInfo objects that match account and tenant profile filters
     */
    buildTenantProfiles(cachedAccounts, correlationId, accountFilter) {
      return cachedAccounts.flatMap((accountEntity) => {
        return this.getTenantProfilesFromAccountEntity(accountEntity, correlationId, accountFilter?.tenantId, accountFilter);
      });
    }
    getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter) {
      let tenantedAccountInfo = null;
      let idTokenClaims;
      if (tenantProfileFilter) {
        if (!this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter)) {
          return null;
        }
      }
      const idToken = this.getIdToken(accountInfo, correlationId, tokenKeys, tenantProfile.tenantId);
      if (idToken) {
        idTokenClaims = extractTokenClaims(idToken.secret, this.cryptoImpl.base64Decode);
        if (!this.idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter)) {
          return null;
        }
      }
      tenantedAccountInfo = updateAccountTenantProfileData(accountInfo, tenantProfile, idTokenClaims, idToken?.secret);
      return tenantedAccountInfo;
    }
    getTenantProfilesFromAccountEntity(accountEntity, correlationId, targetTenantId, tenantProfileFilter) {
      const accountInfo = accountEntity.getAccountInfo();
      let searchTenantProfiles = accountInfo.tenantProfiles || /* @__PURE__ */ new Map();
      const tokenKeys = this.getTokenKeys();
      if (targetTenantId) {
        const tenantProfile = searchTenantProfiles.get(targetTenantId);
        if (tenantProfile) {
          searchTenantProfiles = /* @__PURE__ */ new Map([
            [targetTenantId, tenantProfile]
          ]);
        } else {
          return [];
        }
      }
      const matchingTenantProfiles = [];
      searchTenantProfiles.forEach((tenantProfile) => {
        const tenantedAccountInfo = this.getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, correlationId, tenantProfileFilter);
        if (tenantedAccountInfo) {
          matchingTenantProfiles.push(tenantedAccountInfo);
        }
      });
      return matchingTenantProfiles;
    }
    tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter) {
      if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTenantProfile(tenantProfile, tenantProfileFilter.localAccountId)) {
        return false;
      }
      if (!!tenantProfileFilter.name && !(tenantProfile.name === tenantProfileFilter.name)) {
        return false;
      }
      if (tenantProfileFilter.isHomeTenant !== void 0 && !(tenantProfile.isHomeTenant === tenantProfileFilter.isHomeTenant)) {
        return false;
      }
      return true;
    }
    idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter) {
      if (tenantProfileFilter) {
        if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTokenClaims(idTokenClaims, tenantProfileFilter.localAccountId)) {
          return false;
        }
        if (!!tenantProfileFilter.loginHint && !this.matchLoginHintFromTokenClaims(idTokenClaims, tenantProfileFilter.loginHint)) {
          return false;
        }
        if (!!tenantProfileFilter.username && !this.matchUsername(idTokenClaims.preferred_username, tenantProfileFilter.username)) {
          return false;
        }
        if (!!tenantProfileFilter.name && !this.matchName(idTokenClaims, tenantProfileFilter.name)) {
          return false;
        }
        if (!!tenantProfileFilter.sid && !this.matchSid(idTokenClaims, tenantProfileFilter.sid)) {
          return false;
        }
      }
      return true;
    }
    /**
     * saves a cache record
     * @param cacheRecord {CacheRecord}
     * @param storeInCache {?StoreInCache}
     * @param correlationId {?string} correlation id
     */
    async saveCacheRecord(cacheRecord, correlationId, storeInCache) {
      if (!cacheRecord) {
        throw createClientAuthError(invalidCacheRecord);
      }
      try {
        if (!!cacheRecord.account) {
          await this.setAccount(cacheRecord.account, correlationId);
        }
        if (!!cacheRecord.idToken && storeInCache?.idToken !== false) {
          await this.setIdTokenCredential(cacheRecord.idToken, correlationId);
        }
        if (!!cacheRecord.accessToken && storeInCache?.accessToken !== false) {
          await this.saveAccessToken(cacheRecord.accessToken, correlationId);
        }
        if (!!cacheRecord.refreshToken && storeInCache?.refreshToken !== false) {
          await this.setRefreshTokenCredential(cacheRecord.refreshToken, correlationId);
        }
        if (!!cacheRecord.appMetadata) {
          this.setAppMetadata(cacheRecord.appMetadata, correlationId);
        }
      } catch (e) {
        this.commonLogger?.error(`CacheManager.saveCacheRecord: failed`);
        if (e instanceof AuthError) {
          throw e;
        } else {
          throw createCacheError(e);
        }
      }
    }
    /**
     * saves access token credential
     * @param credential
     */
    async saveAccessToken(credential, correlationId) {
      const accessTokenFilter = {
        clientId: credential.clientId,
        credentialType: credential.credentialType,
        environment: credential.environment,
        homeAccountId: credential.homeAccountId,
        realm: credential.realm,
        tokenType: credential.tokenType,
        requestedClaimsHash: credential.requestedClaimsHash
      };
      const tokenKeys = this.getTokenKeys();
      const currentScopes = ScopeSet.fromString(credential.target);
      tokenKeys.accessToken.forEach((key) => {
        if (!this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) {
          return;
        }
        const tokenEntity = this.getAccessTokenCredential(key, correlationId);
        if (tokenEntity && this.credentialMatchesFilter(tokenEntity, accessTokenFilter)) {
          const tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
          if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
            this.removeAccessToken(key, correlationId);
          }
        }
      });
      await this.setAccessTokenCredential(credential, correlationId);
    }
    /**
     * Retrieve account entities matching all provided tenant-agnostic filters; if no filter is set, get all account entities in the cache
     * Not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param accountFilter - An object containing Account properties to filter by
     */
    getAccountsFilteredBy(accountFilter, correlationId) {
      const allAccountKeys = this.getAccountKeys();
      const matchingAccounts = [];
      allAccountKeys.forEach((cacheKey) => {
        const entity = this.getAccount(cacheKey, correlationId);
        if (!entity) {
          return;
        }
        if (!!accountFilter.homeAccountId && !this.matchHomeAccountId(entity, accountFilter.homeAccountId)) {
          return;
        }
        if (!!accountFilter.username && !this.matchUsername(entity.username, accountFilter.username)) {
          return;
        }
        if (!!accountFilter.environment && !this.matchEnvironment(entity, accountFilter.environment)) {
          return;
        }
        if (!!accountFilter.realm && !this.matchRealm(entity, accountFilter.realm)) {
          return;
        }
        if (!!accountFilter.nativeAccountId && !this.matchNativeAccountId(entity, accountFilter.nativeAccountId)) {
          return;
        }
        if (!!accountFilter.authorityType && !this.matchAuthorityType(entity, accountFilter.authorityType)) {
          return;
        }
        const tenantProfileFilter = {
          localAccountId: accountFilter?.localAccountId,
          name: accountFilter?.name
        };
        const matchingTenantProfiles = entity.tenantProfiles?.filter((tenantProfile) => {
          return this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter);
        });
        if (matchingTenantProfiles && matchingTenantProfiles.length === 0) {
          return;
        }
        matchingAccounts.push(entity);
      });
      return matchingAccounts;
    }
    /**
     * Returns whether or not the given credential entity matches the filter
     * @param entity
     * @param filter
     * @returns
     */
    credentialMatchesFilter(entity, filter) {
      if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
        return false;
      }
      if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) {
        return false;
      }
      if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) {
        return false;
      }
      if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) {
        return false;
      }
      if (!!filter.realm && !this.matchRealm(entity, filter.realm)) {
        return false;
      }
      if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) {
        return false;
      }
      if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) {
        return false;
      }
      if (!!filter.target && !this.matchTarget(entity, filter.target)) {
        return false;
      }
      if (filter.requestedClaimsHash || entity.requestedClaimsHash) {
        if (entity.requestedClaimsHash !== filter.requestedClaimsHash) {
          return false;
        }
      }
      if (entity.credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
        if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) {
          return false;
        }
        if (filter.tokenType === AuthenticationScheme.SSH) {
          if (filter.keyId && !this.matchKeyId(entity, filter.keyId)) {
            return false;
          }
        }
      }
      return true;
    }
    /**
     * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
     * @param filter
     */
    getAppMetadataFilteredBy(filter) {
      const allCacheKeys = this.getKeys();
      const matchingAppMetadata = {};
      allCacheKeys.forEach((cacheKey) => {
        if (!this.isAppMetadata(cacheKey)) {
          return;
        }
        const entity = this.getAppMetadata(cacheKey);
        if (!entity) {
          return;
        }
        if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) {
          return;
        }
        if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
          return;
        }
        matchingAppMetadata[cacheKey] = entity;
      });
      return matchingAppMetadata;
    }
    /**
     * retrieve authorityMetadata that contains a matching alias
     * @param filter
     */
    getAuthorityMetadataByAlias(host) {
      const allCacheKeys = this.getAuthorityMetadataKeys();
      let matchedEntity = null;
      allCacheKeys.forEach((cacheKey) => {
        if (!this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(this.clientId) === -1) {
          return;
        }
        const entity = this.getAuthorityMetadata(cacheKey);
        if (!entity) {
          return;
        }
        if (entity.aliases.indexOf(host) === -1) {
          return;
        }
        matchedEntity = entity;
      });
      return matchedEntity;
    }
    /**
     * Removes all accounts and related tokens from cache.
     */
    removeAllAccounts(correlationId) {
      const accounts = this.getAllAccounts({}, correlationId);
      accounts.forEach((account2) => {
        this.removeAccount(account2, correlationId);
      });
    }
    /**
     * Removes the account and related tokens for a given account key
     * @param account
     */
    removeAccount(account2, correlationId) {
      this.removeAccountContext(account2, correlationId);
      const accountKeys = this.getAccountKeys();
      const keyFilter = (key) => {
        return key.includes(account2.homeAccountId) && key.includes(account2.environment);
      };
      accountKeys.filter(keyFilter).forEach((key) => {
        this.removeItem(key, correlationId);
        this.performanceClient.incrementFields({ accountsRemoved: 1 }, correlationId);
      });
    }
    /**
     * Removes credentials associated with the provided account
     * @param account
     */
    removeAccountContext(account2, correlationId) {
      const allTokenKeys = this.getTokenKeys();
      const keyFilter = (key) => {
        return key.includes(account2.homeAccountId) && key.includes(account2.environment);
      };
      allTokenKeys.idToken.filter(keyFilter).forEach((key) => {
        this.removeIdToken(key, correlationId);
      });
      allTokenKeys.accessToken.filter(keyFilter).forEach((key) => {
        this.removeAccessToken(key, correlationId);
      });
      allTokenKeys.refreshToken.filter(keyFilter).forEach((key) => {
        this.removeRefreshToken(key, correlationId);
      });
    }
    /**
     * Removes accessToken from the cache
     * @param key
     * @param correlationId
     */
    removeAccessToken(key, correlationId) {
      const credential = this.getAccessTokenCredential(key, correlationId);
      this.removeItem(key, correlationId);
      this.performanceClient.incrementFields({ accessTokensRemoved: 1 }, correlationId);
      if (!credential || credential.credentialType.toLowerCase() !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || credential.tokenType !== AuthenticationScheme.POP) {
        return;
      }
      const kid = credential.keyId;
      if (kid) {
        void this.cryptoImpl.removeTokenBindingKey(kid).catch(() => {
          this.commonLogger.error(`Failed to remove token binding key ${kid}`, correlationId);
          this.performanceClient?.incrementFields({ removeTokenBindingKeyFailure: 1 }, correlationId);
        });
      }
    }
    /**
     * Removes all app metadata objects from cache.
     */
    removeAppMetadata(correlationId) {
      const allCacheKeys = this.getKeys();
      allCacheKeys.forEach((cacheKey) => {
        if (this.isAppMetadata(cacheKey)) {
          this.removeItem(cacheKey, correlationId);
        }
      });
      return true;
    }
    /**
     * Retrieve IdTokenEntity from cache
     * @param account {AccountInfo}
     * @param tokenKeys {?TokenKeys}
     * @param targetRealm {?string}
     * @param performanceClient {?IPerformanceClient}
     * @param correlationId {?string}
     */
    getIdToken(account2, correlationId, tokenKeys, targetRealm, performanceClient) {
      this.commonLogger.trace("CacheManager - getIdToken called");
      const idTokenFilter = {
        homeAccountId: account2.homeAccountId,
        environment: account2.environment,
        credentialType: CredentialType.ID_TOKEN,
        clientId: this.clientId,
        realm: targetRealm
      };
      const idTokenMap = this.getIdTokensByFilter(idTokenFilter, correlationId, tokenKeys);
      const numIdTokens = idTokenMap.size;
      if (numIdTokens < 1) {
        this.commonLogger.info("CacheManager:getIdToken - No token found");
        return null;
      } else if (numIdTokens > 1) {
        let tokensToBeRemoved = idTokenMap;
        if (!targetRealm) {
          const homeIdTokenMap = /* @__PURE__ */ new Map();
          idTokenMap.forEach((idToken, key) => {
            if (idToken.realm === account2.tenantId) {
              homeIdTokenMap.set(key, idToken);
            }
          });
          const numHomeIdTokens = homeIdTokenMap.size;
          if (numHomeIdTokens < 1) {
            this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result");
            return idTokenMap.values().next().value;
          } else if (numHomeIdTokens === 1) {
            this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile");
            return homeIdTokenMap.values().next().value;
          } else {
            tokensToBeRemoved = homeIdTokenMap;
          }
        }
        this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them");
        tokensToBeRemoved.forEach((idToken, key) => {
          this.removeIdToken(key, correlationId);
        });
        if (performanceClient && correlationId) {
          performanceClient.addFields({ multiMatchedID: idTokenMap.size }, correlationId);
        }
        return null;
      }
      this.commonLogger.info("CacheManager:getIdToken - Returning ID token");
      return idTokenMap.values().next().value;
    }
    /**
     * Gets all idTokens matching the given filter
     * @param filter
     * @returns
     */
    getIdTokensByFilter(filter, correlationId, tokenKeys) {
      const idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
      const idTokens = /* @__PURE__ */ new Map();
      idTokenKeys.forEach((key) => {
        if (!this.idTokenKeyMatchesFilter(key, {
          clientId: this.clientId,
          ...filter
        })) {
          return;
        }
        const idToken = this.getIdTokenCredential(key, correlationId);
        if (idToken && this.credentialMatchesFilter(idToken, filter)) {
          idTokens.set(key, idToken);
        }
      });
      return idTokens;
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     * @returns
     */
    idTokenKeyMatchesFilter(inputKey, filter) {
      const key = inputKey.toLowerCase();
      if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      return true;
    }
    /**
     * Removes idToken from the cache
     * @param key
     */
    removeIdToken(key, correlationId) {
      this.removeItem(key, correlationId);
    }
    /**
     * Removes refresh token from the cache
     * @param key
     */
    removeRefreshToken(key, correlationId) {
      this.removeItem(key, correlationId);
    }
    /**
     * Retrieve AccessTokenEntity from cache
     * @param account {AccountInfo}
     * @param request {BaseAuthRequest}
     * @param correlationId {?string}
     * @param tokenKeys {?TokenKeys}
     * @param performanceClient {?IPerformanceClient}
     */
    getAccessToken(account2, request, tokenKeys, targetRealm) {
      const correlationId = request.correlationId;
      this.commonLogger.trace("CacheManager - getAccessToken called", correlationId);
      const scopes = ScopeSet.createSearchScopes(request.scopes);
      const authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
      const credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
      const accessTokenFilter = {
        homeAccountId: account2.homeAccountId,
        environment: account2.environment,
        credentialType,
        clientId: this.clientId,
        realm: targetRealm || account2.tenantId,
        target: scopes,
        tokenType: authScheme,
        keyId: request.sshKid,
        requestedClaimsHash: request.requestedClaimsHash
      };
      const accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
      const accessTokens = [];
      accessTokenKeys.forEach((key) => {
        if (this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
          const accessToken = this.getAccessTokenCredential(key, correlationId);
          if (accessToken && this.credentialMatchesFilter(accessToken, accessTokenFilter)) {
            accessTokens.push(accessToken);
          }
        }
      });
      const numAccessTokens = accessTokens.length;
      if (numAccessTokens < 1) {
        this.commonLogger.info("CacheManager:getAccessToken - No token found", correlationId);
        return null;
      } else if (numAccessTokens > 1) {
        this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", correlationId);
        accessTokens.forEach((accessToken) => {
          this.removeAccessToken(this.generateCredentialKey(accessToken), correlationId);
        });
        this.performanceClient.addFields({ multiMatchedAT: accessTokens.length }, correlationId);
        return null;
      }
      this.commonLogger.info("CacheManager:getAccessToken - Returning access token", correlationId);
      return accessTokens[0];
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     * @param keyMustContainAllScopes
     * @returns
     */
    accessTokenKeyMatchesFilter(inputKey, filter, keyMustContainAllScopes) {
      const key = inputKey.toLowerCase();
      if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) {
        return false;
      }
      if (filter.requestedClaimsHash && key.indexOf(filter.requestedClaimsHash.toLowerCase()) === -1) {
        return false;
      }
      if (filter.target) {
        const scopes = filter.target.asArray();
        for (let i = 0; i < scopes.length; i++) {
          if (keyMustContainAllScopes && !key.includes(scopes[i].toLowerCase())) {
            return false;
          } else if (!keyMustContainAllScopes && key.includes(scopes[i].toLowerCase())) {
            return true;
          }
        }
      }
      return true;
    }
    /**
     * Gets all access tokens matching the filter
     * @param filter
     * @returns
     */
    getAccessTokensByFilter(filter, correlationId) {
      const tokenKeys = this.getTokenKeys();
      const accessTokens = [];
      tokenKeys.accessToken.forEach((key) => {
        if (!this.accessTokenKeyMatchesFilter(key, filter, true)) {
          return;
        }
        const accessToken = this.getAccessTokenCredential(key, correlationId);
        if (accessToken && this.credentialMatchesFilter(accessToken, filter)) {
          accessTokens.push(accessToken);
        }
      });
      return accessTokens;
    }
    /**
     * Helper to retrieve the appropriate refresh token from cache
     * @param account {AccountInfo}
     * @param familyRT {boolean}
     * @param correlationId {?string}
     * @param tokenKeys {?TokenKeys}
     * @param performanceClient {?IPerformanceClient}
     */
    getRefreshToken(account2, familyRT, correlationId, tokenKeys, performanceClient) {
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      const id = familyRT ? THE_FAMILY_ID : void 0;
      const refreshTokenFilter = {
        homeAccountId: account2.homeAccountId,
        environment: account2.environment,
        credentialType: CredentialType.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: id
      };
      const refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
      const refreshTokens = [];
      refreshTokenKeys.forEach((key) => {
        if (this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
          const refreshToken = this.getRefreshTokenCredential(key, correlationId);
          if (refreshToken && this.credentialMatchesFilter(refreshToken, refreshTokenFilter)) {
            refreshTokens.push(refreshToken);
          }
        }
      });
      const numRefreshTokens = refreshTokens.length;
      if (numRefreshTokens < 1) {
        this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.");
        return null;
      }
      if (numRefreshTokens > 1 && performanceClient && correlationId) {
        performanceClient.addFields({ multiMatchedRT: numRefreshTokens }, correlationId);
      }
      this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token");
      return refreshTokens[0];
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     */
    refreshTokenKeyMatchesFilter(inputKey, filter) {
      const key = inputKey.toLowerCase();
      if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) {
        return false;
      }
      if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      return true;
    }
    /**
     * Retrieve AppMetadataEntity from cache
     */
    readAppMetadataFromCache(environment) {
      const appMetadataFilter = {
        environment,
        clientId: this.clientId
      };
      const appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
      const appMetadataEntries = Object.keys(appMetadata).map((key) => appMetadata[key]);
      const numAppMetadata = appMetadataEntries.length;
      if (numAppMetadata < 1) {
        return null;
      } else if (numAppMetadata > 1) {
        throw createClientAuthError(multipleMatchingAppMetadata);
      }
      return appMetadataEntries[0];
    }
    /**
     * Return the family_id value associated  with FOCI
     * @param environment
     * @param clientId
     */
    isAppMetadataFOCI(environment) {
      const appMetadata = this.readAppMetadataFromCache(environment);
      return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
    }
    /**
     * helper to match account ids
     * @param value
     * @param homeAccountId
     */
    matchHomeAccountId(entity, homeAccountId) {
      return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
    }
    /**
     * helper to match account ids
     * @param entity
     * @param localAccountId
     * @returns
     */
    matchLocalAccountIdFromTokenClaims(tokenClaims, localAccountId) {
      const idTokenLocalAccountId = tokenClaims.oid || tokenClaims.sub;
      return localAccountId === idTokenLocalAccountId;
    }
    matchLocalAccountIdFromTenantProfile(tenantProfile, localAccountId) {
      return tenantProfile.localAccountId === localAccountId;
    }
    /**
     * helper to match names
     * @param entity
     * @param name
     * @returns true if the downcased name properties are present and match in the filter and the entity
     */
    matchName(claims, name3) {
      return !!(name3.toLowerCase() === claims.name?.toLowerCase());
    }
    /**
     * helper to match usernames
     * @param entity
     * @param username
     * @returns
     */
    matchUsername(cachedUsername, filterUsername) {
      return !!(cachedUsername && typeof cachedUsername === "string" && filterUsername?.toLowerCase() === cachedUsername.toLowerCase());
    }
    /**
     * helper to match assertion
     * @param value
     * @param oboAssertion
     */
    matchUserAssertionHash(entity, userAssertionHash) {
      return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
    }
    /**
     * helper to match environment
     * @param value
     * @param environment
     */
    matchEnvironment(entity, environment) {
      if (this.staticAuthorityOptions) {
        const staticAliases = getAliasesFromStaticSources(this.staticAuthorityOptions, this.commonLogger);
        if (staticAliases.includes(environment) && staticAliases.includes(entity.environment)) {
          return true;
        }
      }
      const cloudMetadata = this.getAuthorityMetadataByAlias(environment);
      if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
        return true;
      }
      return false;
    }
    /**
     * helper to match credential type
     * @param entity
     * @param credentialType
     */
    matchCredentialType(entity, credentialType) {
      return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
    }
    /**
     * helper to match client ids
     * @param entity
     * @param clientId
     */
    matchClientId(entity, clientId) {
      return !!(entity.clientId && clientId === entity.clientId);
    }
    /**
     * helper to match family ids
     * @param entity
     * @param familyId
     */
    matchFamilyId(entity, familyId) {
      return !!(entity.familyId && familyId === entity.familyId);
    }
    /**
     * helper to match realm
     * @param entity
     * @param realm
     */
    matchRealm(entity, realm) {
      return !!(entity.realm?.toLowerCase() === realm.toLowerCase());
    }
    /**
     * helper to match nativeAccountId
     * @param entity
     * @param nativeAccountId
     * @returns boolean indicating the match result
     */
    matchNativeAccountId(entity, nativeAccountId) {
      return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
    }
    /**
     * helper to match loginHint which can be either:
     * 1. login_hint ID token claim
     * 2. username in cached account object
     * 3. upn in ID token claims
     * @param entity
     * @param loginHint
     * @returns
     */
    matchLoginHintFromTokenClaims(tokenClaims, loginHint) {
      if (tokenClaims.login_hint === loginHint) {
        return true;
      }
      if (tokenClaims.preferred_username === loginHint) {
        return true;
      }
      if (tokenClaims.upn === loginHint) {
        return true;
      }
      return false;
    }
    /**
     * Helper to match sid
     * @param entity
     * @param sid
     * @returns true if the sid claim is present and matches the filter
     */
    matchSid(idTokenClaims, sid) {
      return idTokenClaims.sid === sid;
    }
    matchAuthorityType(entity, authorityType) {
      return !!(entity.authorityType && authorityType.toLowerCase() === entity.authorityType.toLowerCase());
    }
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */
    matchTarget(entity, target) {
      const isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (isNotAccessTokenCredential || !entity.target) {
        return false;
      }
      const entityScopeSet = ScopeSet.fromString(entity.target);
      return entityScopeSet.containsScopeSet(target);
    }
    /**
     * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
     * @param entity
     * @param tokenType
     */
    matchTokenType(entity, tokenType) {
      return !!(entity.tokenType && entity.tokenType === tokenType);
    }
    /**
     * Returns true if the credential's keyId matches the one in the request, false otherwise
     * @param entity
     * @param keyId
     */
    matchKeyId(entity, keyId) {
      return !!(entity.keyId && entity.keyId === keyId);
    }
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */
    isAppMetadata(key) {
      return key.indexOf(APP_METADATA) !== -1;
    }
    /**
     * returns if a given cache entity is of the type authoritymetadata
     * @param key
     */
    isAuthorityMetadata(key) {
      return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
    }
    /**
     * returns cache key used for cloud instance metadata
     */
    generateAuthorityMetadataCacheKey(authority) {
      return `${AUTHORITY_METADATA_CONSTANTS.CACHE_KEY}-${this.clientId}-${authority}`;
    }
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */
    static toObject(obj, json) {
      for (const propertyName in json) {
        obj[propertyName] = json[propertyName];
      }
      return obj;
    }
  };
  var DefaultStorageClass = class extends CacheManager {
    async setAccount() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccount() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setIdTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getIdTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setAccessTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccessTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    async setRefreshTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    getRefreshTokenCredential() {
      throw createClientAuthError(methodNotImplemented);
    }
    setAppMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAppMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    setServerTelemetry() {
      throw createClientAuthError(methodNotImplemented);
    }
    getServerTelemetry() {
      throw createClientAuthError(methodNotImplemented);
    }
    setAuthorityMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAuthorityMetadata() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAuthorityMetadataKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    setThrottlingCache() {
      throw createClientAuthError(methodNotImplemented);
    }
    getThrottlingCache() {
      throw createClientAuthError(methodNotImplemented);
    }
    removeItem() {
      throw createClientAuthError(methodNotImplemented);
    }
    getKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    getAccountKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    getTokenKeys() {
      throw createClientAuthError(methodNotImplemented);
    }
    generateCredentialKey() {
      throw createClientAuthError(methodNotImplemented);
    }
    generateAccountKey() {
      throw createClientAuthError(methodNotImplemented);
    }
  };

  // node_modules/@azure/msal-common/dist/authority/ProtocolMode.mjs
  var ProtocolMode = {
    /**
     * Auth Code + PKCE with Entra ID (formerly AAD) specific optimizations and features
     */
    AAD: "AAD",
    /**
     * Auth Code + PKCE without Entra ID specific optimizations and features. For use only with non-Microsoft owned authorities.
     * Support is limited for this mode.
     */
    OIDC: "OIDC",
    /**
     * Encrypted Authorize Response (EAR) with Entra ID specific optimizations and features
     */
    EAR: "EAR"
  };

  // node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs
  var PerformanceEvents = {
    /**
     * acquireTokenByCode API (msal-browser and msal-node).
     * Used to acquire tokens by trading an authorization code against the token endpoint.
     */
    AcquireTokenByCode: "acquireTokenByCode",
    /**
     * acquireTokenByRefreshToken API (msal-browser and msal-node).
     * Used to renew an access token using a refresh token against the token endpoint.
     */
    AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
    /**
     * acquireTokenSilent API (msal-browser and msal-node).
     * Used to silently acquire a new access token (from the cache or the network).
     */
    AcquireTokenSilent: "acquireTokenSilent",
    /**
     * acquireTokenSilentAsync (msal-browser).
     * Internal API for acquireTokenSilent.
     */
    AcquireTokenSilentAsync: "acquireTokenSilentAsync",
    /**
     * acquireTokenPopup (msal-browser).
     * Used to acquire a new access token interactively through pop ups
     */
    AcquireTokenPopup: "acquireTokenPopup",
    /**
     * acquireTokenPreRedirect (msal-browser).
     * First part of the redirect flow.
     * Used to acquire a new access token interactively through redirects.
     */
    AcquireTokenPreRedirect: "acquireTokenPreRedirect",
    /**
     * acquireTokenRedirect (msal-browser).
     * Second part of the redirect flow.
     * Used to acquire a new access token interactively through redirects.
     */
    AcquireTokenRedirect: "acquireTokenRedirect",
    /**
     * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
     * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
     */
    CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
    /**
     * signJwt API in CryptoOpts class (msal-browser).
     * Used to signed a pop token.
     */
    CryptoOptsSignJwt: "cryptoOptsSignJwt",
    /**
     * acquireToken API in the SilentCacheClient class (msal-browser).
     * Used to read access tokens from the cache.
     */
    SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
    /**
     * acquireToken API in the SilentIframeClient class (msal-browser).
     * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
     */
    SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
    AwaitConcurrentIframe: "awaitConcurrentIframe",
    /**
     * acquireToken API in SilentRereshClient (msal-browser).
     * Used to acquire a new set of tokens from the token endpoint using a refresh token.
     */
    SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
    /**
     * ssoSilent API (msal-browser).
     * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
     */
    SsoSilent: "ssoSilent",
    /**
     * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
     * Used to load authority metadata for a request.
     */
    StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
    /**
     * acquireToken APIs in msal-browser.
     * Used to make an /authorize endpoint call with native brokering enabled.
     */
    FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
    /**
     * acquireToken API in NativeInteractionClient class (msal-browser).
     * Used to acquire a token from Native component when native brokering is enabled.
     */
    NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
    /**
     * Time spent creating default headers for requests to token endpoint
     */
    BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
    /**
     * Time spent sending/waiting for the response of a request to the token endpoint
     */
    NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
    RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
    AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
    /**
     * Used to measure the time taken for completing embedded-broker handshake (PW-Broker).
     */
    BrokerHandhshake: "brokerHandshake",
    /**
     * acquireTokenByRefreshToken API in BrokerClientApplication (PW-Broker) .
     */
    AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
    /**
     * Time taken for token acquisition by broker
     */
    AcquireTokenByBroker: "acquireTokenByBroker",
    /**
     * Time spent on the network for refresh token acquisition
     */
    RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
    /**
     * Time taken for acquiring refresh token , records RT size
     */
    RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
    /**
     * Time taken for acquiring cached refresh token
     */
    RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
    /**
     * acquireTokenByRefreshToken API in RefreshTokenClient (msal-common).
     */
    RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
    /**
     * Helper function to create token request body in RefreshTokenClient (msal-common).
     */
    RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
    /**
     * acquireTokenFromCache (msal-browser).
     * Internal API for acquiring token from cache
     */
    AcquireTokenFromCache: "acquireTokenFromCache",
    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
    SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
    /**
     * acquireTokenBySilentIframe (msal-browser).
     * Internal API for acquiring token by silent Iframe
     */
    AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
    /**
     * Internal API for initializing base request in BaseInteractionClient (msal-browser)
     */
    InitializeBaseRequest: "initializeBaseRequest",
    /**
     * Internal API for initializing silent request in SilentCacheClient (msal-browser)
     */
    InitializeSilentRequest: "initializeSilentRequest",
    InitializeClientApplication: "initializeClientApplication",
    InitializeCache: "initializeCache",
    /**
     * Helper function in SilentIframeClient class (msal-browser).
     */
    SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
    /**
     * SilentHandler
     */
    SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
    /**
     * Helper functions in StandardInteractionClient class (msal-browser)
     */
    StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
    StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
    StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
    /**
     * getAuthCodeUrl API (msal-browser and msal-node).
     */
    GetAuthCodeUrl: "getAuthCodeUrl",
    GetStandardParams: "getStandardParams",
    /**
     * Functions from InteractionHandler (msal-browser)
     */
    HandleCodeResponseFromServer: "handleCodeResponseFromServer",
    HandleCodeResponse: "handleCodeResponse",
    HandleResponseEar: "handleResponseEar",
    HandleResponsePlatformBroker: "handleResponsePlatformBroker",
    HandleResponseCode: "handleResponseCode",
    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
    /**
     * APIs in Authorization Code Client (msal-common)
     */
    AuthClientAcquireToken: "authClientAcquireToken",
    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
    /**
     * Generate functions in PopTokenGenerator (msal-common)
     */
    PopTokenGenerateCnf: "popTokenGenerateCnf",
    PopTokenGenerateKid: "popTokenGenerateKid",
    /**
     * handleServerTokenResponse API in ResponseHandler (msal-common)
     */
    HandleServerTokenResponse: "handleServerTokenResponse",
    DeserializeResponse: "deserializeResponse",
    /**
     * Authority functions
     */
    AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
    AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
    AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
    AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
    AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
    AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
    /**
     * Region Discovery functions
     */
    RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
    GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
    UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
    NativeGenerateAuthResult: "nativeGenerateAuthResult",
    RemoveHiddenIframe: "removeHiddenIframe",
    /**
     * Cache operations
     */
    ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
    ImportExistingCache: "importExistingCache",
    SetUserData: "setUserData",
    LocalStorageUpdated: "localStorageUpdated",
    /**
     * Crypto Operations
     */
    GeneratePkceCodes: "generatePkceCodes",
    GenerateCodeVerifier: "generateCodeVerifier",
    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
    Sha256Digest: "sha256Digest",
    GetRandomValues: "getRandomValues",
    GenerateHKDF: "generateHKDF",
    GenerateBaseKey: "generateBaseKey",
    Base64Decode: "base64Decode",
    UrlEncodeArr: "urlEncodeArr",
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    GenerateEarKey: "generateEarKey",
    DecryptEarResponse: "decryptEarResponse"
  };
  var PerformanceEventAbbreviations = /* @__PURE__ */ new Map([
    [PerformanceEvents.AcquireTokenByCode, "ATByCode"],
    [PerformanceEvents.AcquireTokenByRefreshToken, "ATByRT"],
    [PerformanceEvents.AcquireTokenSilent, "ATS"],
    [PerformanceEvents.AcquireTokenSilentAsync, "ATSAsync"],
    [PerformanceEvents.AcquireTokenPopup, "ATPopup"],
    [PerformanceEvents.AcquireTokenRedirect, "ATRedirect"],
    [
      PerformanceEvents.CryptoOptsGetPublicKeyThumbprint,
      "CryptoGetPKThumb"
    ],
    [PerformanceEvents.CryptoOptsSignJwt, "CryptoSignJwt"],
    [PerformanceEvents.SilentCacheClientAcquireToken, "SltCacheClientAT"],
    [PerformanceEvents.SilentIframeClientAcquireToken, "SltIframeClientAT"],
    [PerformanceEvents.SilentRefreshClientAcquireToken, "SltRClientAT"],
    [PerformanceEvents.SsoSilent, "SsoSlt"],
    [
      PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority,
      "StdIntClientGetDiscAuth"
    ],
    [
      PerformanceEvents.FetchAccountIdWithNativeBroker,
      "FetchAccIdWithNtvBroker"
    ],
    [
      PerformanceEvents.NativeInteractionClientAcquireToken,
      "NtvIntClientAT"
    ],
    [
      PerformanceEvents.BaseClientCreateTokenRequestHeaders,
      "BaseClientCreateTReqHead"
    ],
    [
      PerformanceEvents.NetworkClientSendPostRequestAsync,
      "NetClientSendPost"
    ],
    [
      PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint,
      "RTClientExecPost"
    ],
    [
      PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint,
      "AuthCodeClientExecPost"
    ],
    [PerformanceEvents.BrokerHandhshake, "BrokerHandshake"],
    [
      PerformanceEvents.AcquireTokenByRefreshTokenInBroker,
      "ATByRTInBroker"
    ],
    [PerformanceEvents.AcquireTokenByBroker, "ATByBroker"],
    [
      PerformanceEvents.RefreshTokenClientExecuteTokenRequest,
      "RTClientExecTReq"
    ],
    [PerformanceEvents.RefreshTokenClientAcquireToken, "RTClientAT"],
    [
      PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
      "RTClientATWithCachedRT"
    ],
    [
      PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken,
      "RTClientATByRT"
    ],
    [
      PerformanceEvents.RefreshTokenClientCreateTokenRequestBody,
      "RTClientCreateTReqBody"
    ],
    [PerformanceEvents.AcquireTokenFromCache, "ATFromCache"],
    [
      PerformanceEvents.SilentFlowClientAcquireCachedToken,
      "SltFlowClientATCached"
    ],
    [
      PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord,
      "SltFlowClientGenResFromCache"
    ],
    [PerformanceEvents.AcquireTokenBySilentIframe, "ATBySltIframe"],
    [PerformanceEvents.InitializeBaseRequest, "InitBaseReq"],
    [PerformanceEvents.InitializeSilentRequest, "InitSltReq"],
    [
      PerformanceEvents.InitializeClientApplication,
      "InitClientApplication"
    ],
    [PerformanceEvents.InitializeCache, "InitCache"],
    [PerformanceEvents.ImportExistingCache, "importCache"],
    [PerformanceEvents.SetUserData, "setUserData"],
    [PerformanceEvents.LocalStorageUpdated, "localStorageUpdated"],
    [PerformanceEvents.SilentIframeClientTokenHelper, "SIClientTHelper"],
    [
      PerformanceEvents.SilentHandlerInitiateAuthRequest,
      "SHandlerInitAuthReq"
    ],
    [
      PerformanceEvents.SilentHandlerMonitorIframeForHash,
      "SltHandlerMonitorIframeForHash"
    ],
    [PerformanceEvents.SilentHandlerLoadFrame, "SHandlerLoadFrame"],
    [PerformanceEvents.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"],
    [
      PerformanceEvents.StandardInteractionClientCreateAuthCodeClient,
      "StdIntClientCreateAuthCodeClient"
    ],
    [
      PerformanceEvents.StandardInteractionClientGetClientConfiguration,
      "StdIntClientGetClientConf"
    ],
    [
      PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest,
      "StdIntClientInitAuthReq"
    ],
    [PerformanceEvents.GetAuthCodeUrl, "GetAuthCodeUrl"],
    [
      PerformanceEvents.HandleCodeResponseFromServer,
      "HandleCodeResFromServer"
    ],
    [PerformanceEvents.HandleCodeResponse, "HandleCodeResp"],
    [PerformanceEvents.HandleResponseEar, "HandleRespEar"],
    [PerformanceEvents.HandleResponseCode, "HandleRespCode"],
    [
      PerformanceEvents.HandleResponsePlatformBroker,
      "HandleRespPlatBroker"
    ],
    [PerformanceEvents.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"],
    [PerformanceEvents.AuthClientAcquireToken, "AuthClientAT"],
    [PerformanceEvents.AuthClientExecuteTokenRequest, "AuthClientExecTReq"],
    [
      PerformanceEvents.AuthClientCreateTokenRequestBody,
      "AuthClientCreateTReqBody"
    ],
    [PerformanceEvents.PopTokenGenerateCnf, "PopTGenCnf"],
    [PerformanceEvents.PopTokenGenerateKid, "PopTGenKid"],
    [PerformanceEvents.HandleServerTokenResponse, "HandleServerTRes"],
    [PerformanceEvents.DeserializeResponse, "DeserializeRes"],
    [
      PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance,
      "AuthFactCreateDiscInst"
    ],
    [
      PerformanceEvents.AuthorityResolveEndpointsAsync,
      "AuthResolveEndpointsAsync"
    ],
    [
      PerformanceEvents.AuthorityResolveEndpointsFromLocalSources,
      "AuthResolveEndpointsFromLocal"
    ],
    [
      PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork,
      "AuthGetCDMetaFromNet"
    ],
    [
      PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata,
      "AuthUpdCDMeta"
    ],
    [
      PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork,
      "AuthUpdCDMetaFromNet"
    ],
    [
      PerformanceEvents.AuthorityUpdateEndpointMetadata,
      "AuthUpdEndpointMeta"
    ],
    [
      PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation,
      "AuthUpdMetaWithRegInfo"
    ],
    [PerformanceEvents.RegionDiscoveryDetectRegion, "RegDiscDetectReg"],
    [
      PerformanceEvents.RegionDiscoveryGetRegionFromIMDS,
      "RegDiscGetRegFromIMDS"
    ],
    [
      PerformanceEvents.RegionDiscoveryGetCurrentVersion,
      "RegDiscGetCurrentVer"
    ],
    [PerformanceEvents.AcquireTokenByCodeAsync, "ATByCodeAsync"],
    [
      PerformanceEvents.GetEndpointMetadataFromNetwork,
      "GetEndpointMetaFromNet"
    ],
    [
      PerformanceEvents.GetCloudDiscoveryMetadataFromNetworkMeasurement,
      "GetCDMetaFromNet"
    ],
    [
      PerformanceEvents.HandleRedirectPromiseMeasurement,
      "HandleRedirectPromise"
    ],
    [
      PerformanceEvents.HandleNativeRedirectPromiseMeasurement,
      "HandleNtvRedirectPromise"
    ],
    [
      PerformanceEvents.UpdateCloudDiscoveryMetadataMeasurement,
      "UpdateCDMeta"
    ],
    [
      PerformanceEvents.UsernamePasswordClientAcquireToken,
      "UserPassClientAT"
    ],
    [
      PerformanceEvents.NativeMessageHandlerHandshake,
      "NtvMsgHandlerHandshake"
    ],
    [PerformanceEvents.NativeGenerateAuthResult, "NtvGenAuthRes"],
    [PerformanceEvents.RemoveHiddenIframe, "RemoveHiddenIframe"],
    [
      PerformanceEvents.ClearTokensAndKeysWithClaims,
      "ClearTAndKeysWithClaims"
    ],
    [PerformanceEvents.CacheManagerGetRefreshToken, "CacheManagerGetRT"],
    [PerformanceEvents.GeneratePkceCodes, "GenPkceCodes"],
    [PerformanceEvents.GenerateCodeVerifier, "GenCodeVerifier"],
    [
      PerformanceEvents.GenerateCodeChallengeFromVerifier,
      "GenCodeChallengeFromVerifier"
    ],
    [PerformanceEvents.Sha256Digest, "Sha256Digest"],
    [PerformanceEvents.GetRandomValues, "GetRandomValues"],
    [PerformanceEvents.GenerateHKDF, "genHKDF"],
    [PerformanceEvents.GenerateBaseKey, "genBaseKey"],
    [PerformanceEvents.Base64Decode, "b64Decode"],
    [PerformanceEvents.UrlEncodeArr, "urlEncArr"],
    [PerformanceEvents.Encrypt, "encrypt"],
    [PerformanceEvents.Decrypt, "decrypt"],
    [PerformanceEvents.GenerateEarKey, "genEarKey"],
    [PerformanceEvents.DecryptEarResponse, "decryptEarResp"]
  ]);
  var PerformanceEventStatus = {
    NotStarted: 0,
    InProgress: 1,
    Completed: 2
  };
  var IntFields = /* @__PURE__ */ new Set([
    "accessTokenSize",
    "durationMs",
    "idTokenSize",
    "matsSilentStatus",
    "matsHttpStatus",
    "refreshTokenSize",
    "queuedTimeMs",
    "startTimeMs",
    "status",
    "multiMatchedAT",
    "multiMatchedID",
    "multiMatchedRT",
    "unencryptedCacheCount",
    "encryptedCacheExpiredCount",
    "oldAccountCount",
    "oldAccessCount",
    "oldIdCount",
    "oldRefreshCount",
    "currAccountCount",
    "currAccessCount",
    "currIdCount",
    "currRefreshCount",
    "expiredCacheRemovedCount",
    "upgradedCacheCount"
  ]);

  // node_modules/@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.mjs
  var StubPerformanceMeasurement = class {
    startMeasurement() {
      return;
    }
    endMeasurement() {
      return;
    }
    flushMeasurement() {
      return null;
    }
  };
  var StubPerformanceClient = class {
    generateId() {
      return "callback-id";
    }
    startMeasurement(measureName, correlationId) {
      return {
        end: () => null,
        discard: () => {
        },
        add: () => {
        },
        increment: () => {
        },
        event: {
          eventId: this.generateId(),
          status: PerformanceEventStatus.InProgress,
          authority: "",
          libraryName: "",
          libraryVersion: "",
          clientId: "",
          name: measureName,
          startTimeMs: Date.now(),
          correlationId: correlationId || ""
        },
        measurement: new StubPerformanceMeasurement()
      };
    }
    startPerformanceMeasurement() {
      return new StubPerformanceMeasurement();
    }
    calculateQueuedTime() {
      return 0;
    }
    addQueueMeasurement() {
      return;
    }
    setPreQueueTime() {
      return;
    }
    endMeasurement() {
      return null;
    }
    discardMeasurements() {
      return;
    }
    removePerformanceCallback() {
      return true;
    }
    addPerformanceCallback() {
      return "";
    }
    emitEvents() {
      return;
    }
    addFields() {
      return;
    }
    incrementFields() {
      return;
    }
    cacheEventByCorrelationId() {
      return;
    }
  };

  // node_modules/@azure/msal-common/dist/config/ClientConfiguration.mjs
  var DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
    preventCorsPreflight: false
  };
  var DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: () => {
    },
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info,
    correlationId: Constants.EMPTY_STRING
  };
  var DEFAULT_CACHE_OPTIONS = {
    claimsBasedCachingEnabled: false
  };
  var DEFAULT_NETWORK_IMPLEMENTATION = {
    async sendGetRequestAsync() {
      throw createClientAuthError(methodNotImplemented);
    },
    async sendPostRequestAsync() {
      throw createClientAuthError(methodNotImplemented);
    }
  };
  var DEFAULT_LIBRARY_INFO = {
    sku: Constants.SKU,
    version,
    cpu: Constants.EMPTY_STRING,
    os: Constants.EMPTY_STRING
  };
  var DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: Constants.EMPTY_STRING,
    clientAssertion: void 0
  };
  var DEFAULT_AZURE_CLOUD_OPTIONS = {
    azureCloudInstance: AzureCloudInstance.None,
    tenant: `${Constants.DEFAULT_COMMON_TENANT}`
  };
  var DEFAULT_TELEMETRY_OPTIONS = {
    application: {
      appName: "",
      appVersion: ""
    }
  };
  function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, cacheOptions: userCacheOptions, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, clientCredentials, libraryInfo, telemetry, serverTelemetryManager, persistencePlugin, serializableCache }) {
    const loggerOptions = {
      ...DEFAULT_LOGGER_IMPLEMENTATION,
      ...userLoggerOption
    };
    return {
      authOptions: buildAuthOptions(userAuthOptions),
      systemOptions: { ...DEFAULT_SYSTEM_OPTIONS, ...userSystemOptions },
      loggerOptions,
      cacheOptions: { ...DEFAULT_CACHE_OPTIONS, ...userCacheOptions },
      storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION, new Logger(loggerOptions), new StubPerformanceClient()),
      networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
      cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
      clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
      libraryInfo: { ...DEFAULT_LIBRARY_INFO, ...libraryInfo },
      telemetry: { ...DEFAULT_TELEMETRY_OPTIONS, ...telemetry },
      serverTelemetryManager: serverTelemetryManager || null,
      persistencePlugin: persistencePlugin || null,
      serializableCache: serializableCache || null
    };
  }
  function buildAuthOptions(authOptions) {
    return {
      clientCapabilities: [],
      azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS,
      skipAuthorityMetadataCache: false,
      instanceAware: false,
      encodeExtraQueryParams: false,
      ...authOptions
    };
  }
  function isOidcProtocolMode(config) {
    return config.authOptions.authority.options.protocolMode === ProtocolMode.OIDC;
  }

  // node_modules/@azure/msal-common/dist/account/CcsCredential.mjs
  var CcsCredentialType = {
    HOME_ACCOUNT_ID: "home_account_id",
    UPN: "UPN"
  };

  // node_modules/@azure/msal-common/dist/account/ClientInfo.mjs
  function buildClientInfo(rawClientInfo, base64Decode2) {
    if (!rawClientInfo) {
      throw createClientAuthError(clientInfoEmptyError);
    }
    try {
      const decodedClientInfo = base64Decode2(rawClientInfo);
      return JSON.parse(decodedClientInfo);
    } catch (e) {
      throw createClientAuthError(clientInfoDecodingError);
    }
  }
  function buildClientInfoFromHomeAccountId(homeAccountId) {
    if (!homeAccountId) {
      throw createClientAuthError(clientInfoDecodingError);
    }
    const clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
    return {
      uid: clientInfoParts[0],
      utid: clientInfoParts.length < 2 ? Constants.EMPTY_STRING : clientInfoParts[1]
    };
  }

  // node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.mjs
  var RequestParameterBuilder_exports = {};
  __export(RequestParameterBuilder_exports, {
    addApplicationTelemetry: () => addApplicationTelemetry,
    addAuthorizationCode: () => addAuthorizationCode,
    addBrokerParameters: () => addBrokerParameters,
    addCcsOid: () => addCcsOid,
    addCcsUpn: () => addCcsUpn,
    addClaims: () => addClaims,
    addClientAssertion: () => addClientAssertion,
    addClientAssertionType: () => addClientAssertionType,
    addClientCapabilitiesToClaims: () => addClientCapabilitiesToClaims,
    addClientId: () => addClientId,
    addClientInfo: () => addClientInfo,
    addClientSecret: () => addClientSecret,
    addCodeChallengeParams: () => addCodeChallengeParams,
    addCodeVerifier: () => addCodeVerifier,
    addCorrelationId: () => addCorrelationId,
    addDeviceCode: () => addDeviceCode,
    addDomainHint: () => addDomainHint,
    addEARParameters: () => addEARParameters,
    addExtraQueryParameters: () => addExtraQueryParameters,
    addGrantType: () => addGrantType,
    addIdTokenHint: () => addIdTokenHint,
    addInstanceAware: () => addInstanceAware,
    addLibraryInfo: () => addLibraryInfo,
    addLoginHint: () => addLoginHint,
    addLogoutHint: () => addLogoutHint,
    addNativeBroker: () => addNativeBroker,
    addNonce: () => addNonce,
    addOboAssertion: () => addOboAssertion,
    addPassword: () => addPassword,
    addPopToken: () => addPopToken,
    addPostBodyParameters: () => addPostBodyParameters,
    addPostLogoutRedirectUri: () => addPostLogoutRedirectUri,
    addPrompt: () => addPrompt,
    addRedirectUri: () => addRedirectUri,
    addRefreshToken: () => addRefreshToken,
    addRequestTokenUse: () => addRequestTokenUse,
    addResponseMode: () => addResponseMode,
    addResponseType: () => addResponseType,
    addScopes: () => addScopes,
    addServerTelemetry: () => addServerTelemetry,
    addSid: () => addSid,
    addSshJwk: () => addSshJwk,
    addState: () => addState,
    addThrottling: () => addThrottling,
    addUsername: () => addUsername,
    instrumentBrokerParams: () => instrumentBrokerParams
  });

  // node_modules/@azure/msal-common/dist/constants/AADServerParamKeys.mjs
  var AADServerParamKeys_exports = {};
  __export(AADServerParamKeys_exports, {
    ACCESS_TOKEN: () => ACCESS_TOKEN,
    BROKER_CLIENT_ID: () => BROKER_CLIENT_ID,
    BROKER_REDIRECT_URI: () => BROKER_REDIRECT_URI,
    CCS_HEADER: () => CCS_HEADER,
    CLAIMS: () => CLAIMS,
    CLIENT_ASSERTION: () => CLIENT_ASSERTION,
    CLIENT_ASSERTION_TYPE: () => CLIENT_ASSERTION_TYPE,
    CLIENT_ID: () => CLIENT_ID,
    CLIENT_INFO: () => CLIENT_INFO2,
    CLIENT_REQUEST_ID: () => CLIENT_REQUEST_ID,
    CLIENT_SECRET: () => CLIENT_SECRET,
    CODE: () => CODE,
    CODE_CHALLENGE: () => CODE_CHALLENGE,
    CODE_CHALLENGE_METHOD: () => CODE_CHALLENGE_METHOD,
    CODE_VERIFIER: () => CODE_VERIFIER,
    DEVICE_CODE: () => DEVICE_CODE,
    DOMAIN_HINT: () => DOMAIN_HINT,
    EAR_JWE_CRYPTO: () => EAR_JWE_CRYPTO,
    EAR_JWK: () => EAR_JWK,
    ERROR: () => ERROR,
    ERROR_DESCRIPTION: () => ERROR_DESCRIPTION,
    EXPIRES_IN: () => EXPIRES_IN,
    FOCI: () => FOCI,
    GRANT_TYPE: () => GRANT_TYPE,
    ID_TOKEN: () => ID_TOKEN,
    ID_TOKEN_HINT: () => ID_TOKEN_HINT,
    INSTANCE_AWARE: () => INSTANCE_AWARE,
    LOGIN_HINT: () => LOGIN_HINT,
    LOGOUT_HINT: () => LOGOUT_HINT,
    NATIVE_BROKER: () => NATIVE_BROKER,
    NONCE: () => NONCE,
    OBO_ASSERTION: () => OBO_ASSERTION,
    ON_BEHALF_OF: () => ON_BEHALF_OF,
    POST_LOGOUT_URI: () => POST_LOGOUT_URI,
    PROMPT: () => PROMPT,
    REDIRECT_URI: () => REDIRECT_URI,
    REFRESH_TOKEN: () => REFRESH_TOKEN,
    REFRESH_TOKEN_EXPIRES_IN: () => REFRESH_TOKEN_EXPIRES_IN,
    REQUESTED_TOKEN_USE: () => REQUESTED_TOKEN_USE,
    REQ_CNF: () => REQ_CNF,
    RESPONSE_MODE: () => RESPONSE_MODE,
    RESPONSE_TYPE: () => RESPONSE_TYPE,
    RETURN_SPA_CODE: () => RETURN_SPA_CODE,
    SCOPE: () => SCOPE,
    SESSION_STATE: () => SESSION_STATE,
    SID: () => SID,
    STATE: () => STATE,
    TOKEN_TYPE: () => TOKEN_TYPE,
    X_APP_NAME: () => X_APP_NAME,
    X_APP_VER: () => X_APP_VER,
    X_CLIENT_CPU: () => X_CLIENT_CPU,
    X_CLIENT_CURR_TELEM: () => X_CLIENT_CURR_TELEM,
    X_CLIENT_EXTRA_SKU: () => X_CLIENT_EXTRA_SKU,
    X_CLIENT_LAST_TELEM: () => X_CLIENT_LAST_TELEM,
    X_CLIENT_OS: () => X_CLIENT_OS,
    X_CLIENT_SKU: () => X_CLIENT_SKU,
    X_CLIENT_VER: () => X_CLIENT_VER,
    X_MS_LIB_CAPABILITY: () => X_MS_LIB_CAPABILITY
  });
  var CLIENT_ID = "client_id";
  var REDIRECT_URI = "redirect_uri";
  var RESPONSE_TYPE = "response_type";
  var RESPONSE_MODE = "response_mode";
  var GRANT_TYPE = "grant_type";
  var CLAIMS = "claims";
  var SCOPE = "scope";
  var ERROR = "error";
  var ERROR_DESCRIPTION = "error_description";
  var ACCESS_TOKEN = "access_token";
  var ID_TOKEN = "id_token";
  var REFRESH_TOKEN = "refresh_token";
  var EXPIRES_IN = "expires_in";
  var REFRESH_TOKEN_EXPIRES_IN = "refresh_token_expires_in";
  var STATE = "state";
  var NONCE = "nonce";
  var PROMPT = "prompt";
  var SESSION_STATE = "session_state";
  var CLIENT_INFO2 = "client_info";
  var CODE = "code";
  var CODE_CHALLENGE = "code_challenge";
  var CODE_CHALLENGE_METHOD = "code_challenge_method";
  var CODE_VERIFIER = "code_verifier";
  var CLIENT_REQUEST_ID = "client-request-id";
  var X_CLIENT_SKU = "x-client-SKU";
  var X_CLIENT_VER = "x-client-VER";
  var X_CLIENT_OS = "x-client-OS";
  var X_CLIENT_CPU = "x-client-CPU";
  var X_CLIENT_CURR_TELEM = "x-client-current-telemetry";
  var X_CLIENT_LAST_TELEM = "x-client-last-telemetry";
  var X_MS_LIB_CAPABILITY = "x-ms-lib-capability";
  var X_APP_NAME = "x-app-name";
  var X_APP_VER = "x-app-ver";
  var POST_LOGOUT_URI = "post_logout_redirect_uri";
  var ID_TOKEN_HINT = "id_token_hint";
  var DEVICE_CODE = "device_code";
  var CLIENT_SECRET = "client_secret";
  var CLIENT_ASSERTION = "client_assertion";
  var CLIENT_ASSERTION_TYPE = "client_assertion_type";
  var TOKEN_TYPE = "token_type";
  var REQ_CNF = "req_cnf";
  var OBO_ASSERTION = "assertion";
  var REQUESTED_TOKEN_USE = "requested_token_use";
  var ON_BEHALF_OF = "on_behalf_of";
  var FOCI = "foci";
  var CCS_HEADER = "X-AnchorMailbox";
  var RETURN_SPA_CODE = "return_spa_code";
  var NATIVE_BROKER = "nativebroker";
  var LOGOUT_HINT = "logout_hint";
  var SID = "sid";
  var LOGIN_HINT = "login_hint";
  var DOMAIN_HINT = "domain_hint";
  var X_CLIENT_EXTRA_SKU = "x-client-xtra-sku";
  var BROKER_CLIENT_ID = "brk_client_id";
  var BROKER_REDIRECT_URI = "brk_redirect_uri";
  var INSTANCE_AWARE = "instance_aware";
  var EAR_JWK = "ear_jwk";
  var EAR_JWE_CRYPTO = "ear_jwe_crypto";

  // node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.mjs
  function instrumentBrokerParams(parameters, correlationId, performanceClient) {
    if (!correlationId) {
      return;
    }
    const clientId = parameters.get(CLIENT_ID);
    if (clientId && parameters.has(BROKER_CLIENT_ID)) {
      performanceClient?.addFields({
        embeddedClientId: clientId,
        embeddedRedirectUri: parameters.get(REDIRECT_URI)
      }, correlationId);
    }
  }
  function addResponseType(parameters, responseType) {
    parameters.set(RESPONSE_TYPE, responseType);
  }
  function addResponseMode(parameters, responseMode) {
    parameters.set(RESPONSE_MODE, responseMode ? responseMode : ResponseMode.QUERY);
  }
  function addNativeBroker(parameters) {
    parameters.set(NATIVE_BROKER, "1");
  }
  function addScopes(parameters, scopes, addOidcScopes = true, defaultScopes = OIDC_DEFAULT_SCOPES) {
    if (addOidcScopes && !defaultScopes.includes("openid") && !scopes.includes("openid")) {
      defaultScopes.push("openid");
    }
    const requestScopes = addOidcScopes ? [...scopes || [], ...defaultScopes] : scopes || [];
    const scopeSet = new ScopeSet(requestScopes);
    parameters.set(SCOPE, scopeSet.printScopes());
  }
  function addClientId(parameters, clientId) {
    parameters.set(CLIENT_ID, clientId);
  }
  function addRedirectUri(parameters, redirectUri) {
    parameters.set(REDIRECT_URI, redirectUri);
  }
  function addPostLogoutRedirectUri(parameters, redirectUri) {
    parameters.set(POST_LOGOUT_URI, redirectUri);
  }
  function addIdTokenHint(parameters, idTokenHint) {
    parameters.set(ID_TOKEN_HINT, idTokenHint);
  }
  function addDomainHint(parameters, domainHint) {
    parameters.set(DOMAIN_HINT, domainHint);
  }
  function addLoginHint(parameters, loginHint) {
    parameters.set(LOGIN_HINT, loginHint);
  }
  function addCcsUpn(parameters, loginHint) {
    parameters.set(HeaderNames.CCS_HEADER, `UPN:${loginHint}`);
  }
  function addCcsOid(parameters, clientInfo) {
    parameters.set(HeaderNames.CCS_HEADER, `Oid:${clientInfo.uid}@${clientInfo.utid}`);
  }
  function addSid(parameters, sid) {
    parameters.set(SID, sid);
  }
  function addClaims(parameters, claims, clientCapabilities) {
    const mergedClaims = addClientCapabilitiesToClaims(claims, clientCapabilities);
    try {
      JSON.parse(mergedClaims);
    } catch (e) {
      throw createClientConfigurationError(invalidClaims);
    }
    parameters.set(CLAIMS, mergedClaims);
  }
  function addCorrelationId(parameters, correlationId) {
    parameters.set(CLIENT_REQUEST_ID, correlationId);
  }
  function addLibraryInfo(parameters, libraryInfo) {
    parameters.set(X_CLIENT_SKU, libraryInfo.sku);
    parameters.set(X_CLIENT_VER, libraryInfo.version);
    if (libraryInfo.os) {
      parameters.set(X_CLIENT_OS, libraryInfo.os);
    }
    if (libraryInfo.cpu) {
      parameters.set(X_CLIENT_CPU, libraryInfo.cpu);
    }
  }
  function addApplicationTelemetry(parameters, appTelemetry) {
    if (appTelemetry?.appName) {
      parameters.set(X_APP_NAME, appTelemetry.appName);
    }
    if (appTelemetry?.appVersion) {
      parameters.set(X_APP_VER, appTelemetry.appVersion);
    }
  }
  function addPrompt(parameters, prompt) {
    parameters.set(PROMPT, prompt);
  }
  function addState(parameters, state) {
    if (state) {
      parameters.set(STATE, state);
    }
  }
  function addNonce(parameters, nonce) {
    parameters.set(NONCE, nonce);
  }
  function addCodeChallengeParams(parameters, codeChallenge, codeChallengeMethod) {
    if (codeChallenge && codeChallengeMethod) {
      parameters.set(CODE_CHALLENGE, codeChallenge);
      parameters.set(CODE_CHALLENGE_METHOD, codeChallengeMethod);
    } else {
      throw createClientConfigurationError(pkceParamsMissing);
    }
  }
  function addAuthorizationCode(parameters, code) {
    parameters.set(CODE, code);
  }
  function addDeviceCode(parameters, code) {
    parameters.set(DEVICE_CODE, code);
  }
  function addRefreshToken(parameters, refreshToken) {
    parameters.set(REFRESH_TOKEN, refreshToken);
  }
  function addCodeVerifier(parameters, codeVerifier) {
    parameters.set(CODE_VERIFIER, codeVerifier);
  }
  function addClientSecret(parameters, clientSecret) {
    parameters.set(CLIENT_SECRET, clientSecret);
  }
  function addClientAssertion(parameters, clientAssertion) {
    if (clientAssertion) {
      parameters.set(CLIENT_ASSERTION, clientAssertion);
    }
  }
  function addClientAssertionType(parameters, clientAssertionType) {
    if (clientAssertionType) {
      parameters.set(CLIENT_ASSERTION_TYPE, clientAssertionType);
    }
  }
  function addOboAssertion(parameters, oboAssertion) {
    parameters.set(OBO_ASSERTION, oboAssertion);
  }
  function addRequestTokenUse(parameters, tokenUse) {
    parameters.set(REQUESTED_TOKEN_USE, tokenUse);
  }
  function addGrantType(parameters, grantType) {
    parameters.set(GRANT_TYPE, grantType);
  }
  function addClientInfo(parameters) {
    parameters.set(CLIENT_INFO, "1");
  }
  function addInstanceAware(parameters) {
    if (!parameters.has(INSTANCE_AWARE)) {
      parameters.set(INSTANCE_AWARE, "true");
    }
  }
  function addExtraQueryParameters(parameters, eQParams) {
    Object.entries(eQParams).forEach(([key, value]) => {
      if (!parameters.has(key) && value) {
        parameters.set(key, value);
      }
    });
  }
  function addClientCapabilitiesToClaims(claims, clientCapabilities) {
    let mergedClaims;
    if (!claims) {
      mergedClaims = {};
    } else {
      try {
        mergedClaims = JSON.parse(claims);
      } catch (e) {
        throw createClientConfigurationError(invalidClaims);
      }
    }
    if (clientCapabilities && clientCapabilities.length > 0) {
      if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
        mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
      }
      mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
        values: clientCapabilities
      };
    }
    return JSON.stringify(mergedClaims);
  }
  function addUsername(parameters, username) {
    parameters.set(PasswordGrantConstants.username, username);
  }
  function addPassword(parameters, password) {
    parameters.set(PasswordGrantConstants.password, password);
  }
  function addPopToken(parameters, cnfString) {
    if (cnfString) {
      parameters.set(TOKEN_TYPE, AuthenticationScheme.POP);
      parameters.set(REQ_CNF, cnfString);
    }
  }
  function addSshJwk(parameters, sshJwkString) {
    if (sshJwkString) {
      parameters.set(TOKEN_TYPE, AuthenticationScheme.SSH);
      parameters.set(REQ_CNF, sshJwkString);
    }
  }
  function addServerTelemetry(parameters, serverTelemetryManager) {
    parameters.set(X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
    parameters.set(X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
  }
  function addThrottling(parameters) {
    parameters.set(X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
  }
  function addLogoutHint(parameters, logoutHint) {
    parameters.set(LOGOUT_HINT, logoutHint);
  }
  function addBrokerParameters(parameters, brokerClientId, brokerRedirectUri) {
    if (!parameters.has(BROKER_CLIENT_ID)) {
      parameters.set(BROKER_CLIENT_ID, brokerClientId);
    }
    if (!parameters.has(BROKER_REDIRECT_URI)) {
      parameters.set(BROKER_REDIRECT_URI, brokerRedirectUri);
    }
  }
  function addEARParameters(parameters, jwk) {
    parameters.set(EAR_JWK, encodeURIComponent(jwk));
    const jweCryptoB64Encoded = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0";
    parameters.set(EAR_JWE_CRYPTO, jweCryptoB64Encoded);
  }
  function addPostBodyParameters(parameters, bodyParameters) {
    Object.entries(bodyParameters).forEach(([key, value]) => {
      if (value) {
        parameters.set(key, value);
      }
    });
  }

  // node_modules/@azure/msal-common/dist/authority/AuthorityFactory.mjs
  var AuthorityFactory_exports = {};
  __export(AuthorityFactory_exports, {
    createDiscoveredInstance: () => createDiscoveredInstance
  });

  // node_modules/@azure/msal-common/dist/authority/AuthorityType.mjs
  var AuthorityType = {
    Default: 0,
    Adfs: 1,
    Dsts: 2,
    Ciam: 3
  };

  // node_modules/@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs
  function isOpenIdConfigResponse(response) {
    return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
  }

  // node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs
  function isCloudInstanceDiscoveryResponse(response) {
    return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
  }

  // node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs
  function isCloudInstanceDiscoveryErrorResponse(response) {
    return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
  }

  // node_modules/@azure/msal-common/dist/utils/FunctionWrappers.mjs
  var invoke = (callback, eventName, logger, telemetryClient, correlationId) => {
    return (...args) => {
      logger.trace(`Executing function ${eventName}`);
      const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
      if (correlationId) {
        const eventCount = eventName + "CallCount";
        telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
      }
      try {
        const result = callback(...args);
        inProgressEvent?.end({
          success: true
        });
        logger.trace(`Returning result from ${eventName}`);
        return result;
      } catch (e) {
        logger.trace(`Error occurred in ${eventName}`);
        try {
          logger.trace(JSON.stringify(e));
        } catch (e2) {
          logger.trace("Unable to print error message.");
        }
        inProgressEvent?.end({
          success: false
        }, e);
        throw e;
      }
    };
  };
  var invokeAsync = (callback, eventName, logger, telemetryClient, correlationId) => {
    return (...args) => {
      logger.trace(`Executing function ${eventName}`);
      const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
      if (correlationId) {
        const eventCount = eventName + "CallCount";
        telemetryClient?.incrementFields({ [eventCount]: 1 }, correlationId);
      }
      telemetryClient?.setPreQueueTime(eventName, correlationId);
      return callback(...args).then((response) => {
        logger.trace(`Returning result from ${eventName}`);
        inProgressEvent?.end({
          success: true
        });
        return response;
      }).catch((e) => {
        logger.trace(`Error occurred in ${eventName}`);
        try {
          logger.trace(JSON.stringify(e));
        } catch (e2) {
          logger.trace("Unable to print error message.");
        }
        inProgressEvent?.end({
          success: false
        }, e);
        throw e;
      });
    };
  };

  // node_modules/@azure/msal-common/dist/authority/RegionDiscovery.mjs
  var RegionDiscovery = class _RegionDiscovery {
    constructor(networkInterface, logger, performanceClient, correlationId) {
      this.networkInterface = networkInterface;
      this.logger = logger;
      this.performanceClient = performanceClient;
      this.correlationId = correlationId;
    }
    /**
     * Detect the region from the application's environment.
     *
     * @returns Promise<string | null>
     */
    async detectRegion(environmentRegion, regionDiscoveryMetadata) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryDetectRegion, this.correlationId);
      let autodetectedRegionName = environmentRegion;
      if (!autodetectedRegionName) {
        const options = _RegionDiscovery.IMDS_OPTIONS;
        try {
          const localIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(Constants.IMDS_VERSION, options);
          if (localIMDSVersionResponse.status === HttpStatus.SUCCESS) {
            autodetectedRegionName = localIMDSVersionResponse.body;
            regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
          }
          if (localIMDSVersionResponse.status === HttpStatus.BAD_REQUEST) {
            const currentIMDSVersion = await invokeAsync(this.getCurrentVersion.bind(this), PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(options);
            if (!currentIMDSVersion) {
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
              return null;
            }
            const currentIMDSVersionResponse = await invokeAsync(this.getRegionFromIMDS.bind(this), PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(currentIMDSVersion, options);
            if (currentIMDSVersionResponse.status === HttpStatus.SUCCESS) {
              autodetectedRegionName = currentIMDSVersionResponse.body;
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
            }
          }
        } catch (e) {
          regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
          return null;
        }
      } else {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
      }
      if (!autodetectedRegionName) {
        regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
      }
      return autodetectedRegionName || null;
    }
    /**
     * Make the call to the IMDS endpoint
     *
     * @param imdsEndpointUrl
     * @returns Promise<NetworkResponse<string>>
     */
    async getRegionFromIMDS(version3, options) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
      return this.networkInterface.sendGetRequestAsync(`${Constants.IMDS_ENDPOINT}?api-version=${version3}&format=text`, options, Constants.IMDS_TIMEOUT);
    }
    /**
     * Get the most recent version of the IMDS endpoint available
     *
     * @returns Promise<string | null>
     */
    async getCurrentVersion(options) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.correlationId);
      try {
        const response = await this.networkInterface.sendGetRequestAsync(`${Constants.IMDS_ENDPOINT}?format=json`, options);
        if (response.status === HttpStatus.BAD_REQUEST && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
          return response.body["newest-versions"][0];
        }
        return null;
      } catch (e) {
        return null;
      }
    }
  };
  RegionDiscovery.IMDS_OPTIONS = {
    headers: {
      Metadata: "true"
    }
  };

  // node_modules/@azure/msal-common/dist/cache/utils/CacheHelpers.mjs
  var CacheHelpers_exports = {};
  __export(CacheHelpers_exports, {
    createAccessTokenEntity: () => createAccessTokenEntity,
    createIdTokenEntity: () => createIdTokenEntity,
    createRefreshTokenEntity: () => createRefreshTokenEntity,
    generateAppMetadataKey: () => generateAppMetadataKey,
    generateAuthorityMetadataExpiresAt: () => generateAuthorityMetadataExpiresAt,
    isAccessTokenEntity: () => isAccessTokenEntity,
    isAppMetadataEntity: () => isAppMetadataEntity,
    isAuthorityMetadataEntity: () => isAuthorityMetadataEntity,
    isAuthorityMetadataExpired: () => isAuthorityMetadataExpired,
    isCredentialEntity: () => isCredentialEntity,
    isIdTokenEntity: () => isIdTokenEntity,
    isRefreshTokenEntity: () => isRefreshTokenEntity,
    isServerTelemetryEntity: () => isServerTelemetryEntity,
    isThrottlingEntity: () => isThrottlingEntity,
    updateAuthorityEndpointMetadata: () => updateAuthorityEndpointMetadata,
    updateCloudDiscoveryMetadata: () => updateCloudDiscoveryMetadata
  });

  // node_modules/@azure/msal-common/dist/utils/TimeUtils.mjs
  var TimeUtils_exports = {};
  __export(TimeUtils_exports, {
    delay: () => delay,
    isCacheExpired: () => isCacheExpired,
    isTokenExpired: () => isTokenExpired,
    nowSeconds: () => nowSeconds,
    toDateFromSeconds: () => toDateFromSeconds,
    toSecondsFromDate: () => toSecondsFromDate,
    wasClockTurnedBack: () => wasClockTurnedBack
  });
  function nowSeconds() {
    return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
  }
  function toSecondsFromDate(date) {
    return date.getTime() / 1e3;
  }
  function toDateFromSeconds(seconds) {
    if (seconds) {
      return new Date(Number(seconds) * 1e3);
    }
    return /* @__PURE__ */ new Date();
  }
  function isTokenExpired(expiresOn, offset) {
    const expirationSec = Number(expiresOn) || 0;
    const offsetCurrentTimeSec = nowSeconds() + offset;
    return offsetCurrentTimeSec > expirationSec;
  }
  function isCacheExpired(lastUpdatedAt, cacheRetentionDays) {
    const cacheExpirationTimestamp = Number(lastUpdatedAt) + cacheRetentionDays * 24 * 60 * 60 * 1e3;
    return Date.now() > cacheExpirationTimestamp;
  }
  function wasClockTurnedBack(cachedAt) {
    const cachedAtSec = Number(cachedAt);
    return cachedAtSec > nowSeconds();
  }
  function delay(t, value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), t));
  }

  // node_modules/@azure/msal-common/dist/cache/utils/CacheHelpers.mjs
  function createIdTokenEntity(homeAccountId, environment, idToken, clientId, tenantId) {
    const idTokenEntity = {
      credentialType: CredentialType.ID_TOKEN,
      homeAccountId,
      environment,
      clientId,
      secret: idToken,
      realm: tenantId,
      lastUpdatedAt: Date.now().toString()
      // Set the last updated time to now
    };
    return idTokenEntity;
  }
  function createAccessTokenEntity(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, base64Decode2, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
    const atEntity = {
      homeAccountId,
      credentialType: CredentialType.ACCESS_TOKEN,
      secret: accessToken,
      cachedAt: nowSeconds().toString(),
      expiresOn: expiresOn.toString(),
      extendedExpiresOn: extExpiresOn.toString(),
      environment,
      clientId,
      realm: tenantId,
      target: scopes,
      tokenType: tokenType || AuthenticationScheme.BEARER,
      lastUpdatedAt: Date.now().toString()
      // Set the last updated time to now
    };
    if (userAssertionHash) {
      atEntity.userAssertionHash = userAssertionHash;
    }
    if (refreshOn) {
      atEntity.refreshOn = refreshOn.toString();
    }
    if (requestedClaims) {
      atEntity.requestedClaims = requestedClaims;
      atEntity.requestedClaimsHash = requestedClaimsHash;
    }
    if (atEntity.tokenType?.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) {
      atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      switch (atEntity.tokenType) {
        case AuthenticationScheme.POP:
          const tokenClaims = extractTokenClaims(accessToken, base64Decode2);
          if (!tokenClaims?.cnf?.kid) {
            throw createClientAuthError(tokenClaimsCnfRequiredForSignedJwt);
          }
          atEntity.keyId = tokenClaims.cnf.kid;
          break;
        case AuthenticationScheme.SSH:
          atEntity.keyId = keyId;
      }
    }
    return atEntity;
  }
  function createRefreshTokenEntity(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash, expiresOn) {
    const rtEntity = {
      credentialType: CredentialType.REFRESH_TOKEN,
      homeAccountId,
      environment,
      clientId,
      secret: refreshToken,
      lastUpdatedAt: Date.now().toString()
    };
    if (userAssertionHash) {
      rtEntity.userAssertionHash = userAssertionHash;
    }
    if (familyId) {
      rtEntity.familyId = familyId;
    }
    if (expiresOn) {
      rtEntity.expiresOn = expiresOn.toString();
    }
    return rtEntity;
  }
  function isCredentialEntity(entity) {
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret");
  }
  function isAccessTokenEntity(entity) {
    if (!entity) {
      return false;
    }
    return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
  }
  function isIdTokenEntity(entity) {
    if (!entity) {
      return false;
    }
    return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity["credentialType"] === CredentialType.ID_TOKEN;
  }
  function isRefreshTokenEntity(entity) {
    if (!entity) {
      return false;
    }
    return isCredentialEntity(entity) && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
  }
  function isServerTelemetryEntity(key, entity) {
    const validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
    let validateEntity = true;
    if (entity) {
      validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
    }
    return validateKey && validateEntity;
  }
  function isThrottlingEntity(key, entity) {
    let validateKey = false;
    if (key) {
      validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
    }
    let validateEntity = true;
    if (entity) {
      validateEntity = entity.hasOwnProperty("throttleTime");
    }
    return validateKey && validateEntity;
  }
  function generateAppMetadataKey({ environment, clientId }) {
    const appMetaDataKeyArray = [
      APP_METADATA,
      environment,
      clientId
    ];
    return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
  }
  function isAppMetadataEntity(key, entity) {
    if (!entity) {
      return false;
    }
    return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
  }
  function isAuthorityMetadataEntity(key, entity) {
    if (!entity) {
      return false;
    }
    return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
  }
  function generateAuthorityMetadataExpiresAt() {
    return nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
  }
  function updateAuthorityEndpointMetadata(authorityMetadata, updatedValues, fromNetwork) {
    authorityMetadata.authorization_endpoint = updatedValues.authorization_endpoint;
    authorityMetadata.token_endpoint = updatedValues.token_endpoint;
    authorityMetadata.end_session_endpoint = updatedValues.end_session_endpoint;
    authorityMetadata.issuer = updatedValues.issuer;
    authorityMetadata.endpointsFromNetwork = fromNetwork;
    authorityMetadata.jwks_uri = updatedValues.jwks_uri;
  }
  function updateCloudDiscoveryMetadata(authorityMetadata, updatedValues, fromNetwork) {
    authorityMetadata.aliases = updatedValues.aliases;
    authorityMetadata.preferred_cache = updatedValues.preferred_cache;
    authorityMetadata.preferred_network = updatedValues.preferred_network;
    authorityMetadata.aliasesFromNetwork = fromNetwork;
  }
  function isAuthorityMetadataExpired(metadata) {
    return metadata.expiresAt <= nowSeconds();
  }

  // node_modules/@azure/msal-common/dist/authority/Authority.mjs
  var Authority = class _Authority {
    constructor(authority, networkInterface, cacheManager, authorityOptions, logger, correlationId, performanceClient, managedIdentity) {
      this.canonicalAuthority = authority;
      this._canonicalAuthority.validateAsUri();
      this.networkInterface = networkInterface;
      this.cacheManager = cacheManager;
      this.authorityOptions = authorityOptions;
      this.regionDiscoveryMetadata = {
        region_used: void 0,
        region_source: void 0,
        region_outcome: void 0
      };
      this.logger = logger;
      this.performanceClient = performanceClient;
      this.correlationId = correlationId;
      this.managedIdentity = managedIdentity || false;
      this.regionDiscovery = new RegionDiscovery(networkInterface, this.logger, this.performanceClient, this.correlationId);
    }
    /**
     * Get {@link AuthorityType}
     * @param authorityUri {@link IUri}
     * @private
     */
    getAuthorityType(authorityUri) {
      if (authorityUri.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
        return AuthorityType.Ciam;
      }
      const pathSegments = authorityUri.PathSegments;
      if (pathSegments.length) {
        switch (pathSegments[0].toLowerCase()) {
          case Constants.ADFS:
            return AuthorityType.Adfs;
          case Constants.DSTS:
            return AuthorityType.Dsts;
        }
      }
      return AuthorityType.Default;
    }
    // See above for AuthorityType
    get authorityType() {
      return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
    }
    /**
     * ProtocolMode enum representing the way endpoints are constructed.
     */
    get protocolMode() {
      return this.authorityOptions.protocolMode;
    }
    /**
     * Returns authorityOptions which can be used to reinstantiate a new authority instance
     */
    get options() {
      return this.authorityOptions;
    }
    /**
     * A URL that is the authority set by the developer
     */
    get canonicalAuthority() {
      return this._canonicalAuthority.urlString;
    }
    /**
     * Sets canonical authority.
     */
    set canonicalAuthority(url) {
      this._canonicalAuthority = new UrlString(url);
      this._canonicalAuthority.validateAsUri();
      this._canonicalAuthorityUrlComponents = null;
    }
    /**
     * Get authority components.
     */
    get canonicalAuthorityUrlComponents() {
      if (!this._canonicalAuthorityUrlComponents) {
        this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
      }
      return this._canonicalAuthorityUrlComponents;
    }
    /**
     * Get hostname and port i.e. login.microsoftonline.com
     */
    get hostnameAndPort() {
      return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
    }
    /**
     * Get tenant for authority.
     */
    get tenant() {
      return this.canonicalAuthorityUrlComponents.PathSegments[0];
    }
    /**
     * OAuth /authorize endpoint for requests
     */
    get authorizationEndpoint() {
      if (this.discoveryComplete()) {
        return this.replacePath(this.metadata.authorization_endpoint);
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * OAuth /token endpoint for requests
     */
    get tokenEndpoint() {
      if (this.discoveryComplete()) {
        return this.replacePath(this.metadata.token_endpoint);
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    get deviceCodeEndpoint() {
      if (this.discoveryComplete()) {
        return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * OAuth logout endpoint for requests
     */
    get endSessionEndpoint() {
      if (this.discoveryComplete()) {
        if (!this.metadata.end_session_endpoint) {
          throw createClientAuthError(endSessionEndpointNotSupported);
        }
        return this.replacePath(this.metadata.end_session_endpoint);
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * OAuth issuer for requests
     */
    get selfSignedJwtAudience() {
      if (this.discoveryComplete()) {
        return this.replacePath(this.metadata.issuer);
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * Jwks_uri for token signing keys
     */
    get jwksUri() {
      if (this.discoveryComplete()) {
        return this.replacePath(this.metadata.jwks_uri);
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * Returns a flag indicating that tenant name can be replaced in authority {@link IUri}
     * @param authorityUri {@link IUri}
     * @private
     */
    canReplaceTenant(authorityUri) {
      return authorityUri.PathSegments.length === 1 && !_Authority.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === AuthorityType.Default && this.protocolMode !== ProtocolMode.OIDC;
    }
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    replaceTenant(urlString) {
      return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    }
    /**
     * Replaces path such as tenant or policy with the current tenant or policy.
     * @param urlString
     */
    replacePath(urlString) {
      let endpoint = urlString;
      const cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
      const cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
      const cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
      const currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
      currentAuthorityParts.forEach((currentPart, index) => {
        let cachedPart = cachedAuthorityParts[index];
        if (index === 0 && this.canReplaceTenant(cachedAuthorityUrlComponents)) {
          const tenantId = new UrlString(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          if (cachedPart !== tenantId) {
            this.logger.verbose(`Replacing tenant domain name ${cachedPart} with id ${tenantId}`);
            cachedPart = tenantId;
          }
        }
        if (currentPart !== cachedPart) {
          endpoint = endpoint.replace(`/${cachedPart}/`, `/${currentPart}/`);
        }
      });
      return this.replaceTenant(endpoint);
    }
    /**
     * The default open id configuration endpoint for any canonical authority.
     */
    get defaultOpenIdConfigurationEndpoint() {
      const canonicalAuthorityHost = this.hostnameAndPort;
      if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC && !this.isAliasOfKnownMicrosoftAuthority(canonicalAuthorityHost)) {
        return `${this.canonicalAuthority}.well-known/openid-configuration`;
      }
      return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
    }
    /**
     * Boolean that returns whether or not tenant discovery has been completed.
     */
    discoveryComplete() {
      return !!this.metadata;
    }
    /**
     * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
     * and the /authorize, /token and logout endpoints.
     */
    async resolveEndpointsAsync() {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityResolveEndpointsAsync, this.correlationId);
      const metadataEntity = this.getCurrentMetadataEntity();
      const cloudDiscoverySource = await invokeAsync(this.updateCloudDiscoveryMetadata.bind(this), PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
      this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
      const endpointSource = await invokeAsync(this.updateEndpointMetadata.bind(this), PerformanceEvents.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
      this.updateCachedMetadata(metadataEntity, cloudDiscoverySource, {
        source: endpointSource
      });
      this.performanceClient?.addFields({
        cloudDiscoverySource,
        authorityEndpointSource: endpointSource
      }, this.correlationId);
    }
    /**
     * Returns metadata entity from cache if it exists, otherwiser returns a new metadata entity built
     * from the configured canonical authority
     * @returns
     */
    getCurrentMetadataEntity() {
      let metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
      if (!metadataEntity) {
        metadataEntity = {
          aliases: [],
          preferred_cache: this.hostnameAndPort,
          preferred_network: this.hostnameAndPort,
          canonical_authority: this.canonicalAuthority,
          authorization_endpoint: "",
          token_endpoint: "",
          end_session_endpoint: "",
          issuer: "",
          aliasesFromNetwork: false,
          endpointsFromNetwork: false,
          expiresAt: generateAuthorityMetadataExpiresAt(),
          jwks_uri: ""
        };
      }
      return metadataEntity;
    }
    /**
     * Updates cached metadata based on metadata source and sets the instance's metadata
     * property to the same value
     * @param metadataEntity
     * @param cloudDiscoverySource
     * @param endpointMetadataResult
     */
    updateCachedMetadata(metadataEntity, cloudDiscoverySource, endpointMetadataResult) {
      if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointMetadataResult?.source !== AuthorityMetadataSource.CACHE) {
        metadataEntity.expiresAt = generateAuthorityMetadataExpiresAt();
        metadataEntity.canonical_authority = this.canonicalAuthority;
      }
      const cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
      this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
      this.metadata = metadataEntity;
    }
    /**
     * Update AuthorityMetadataEntity with new endpoints and return where the information came from
     * @param metadataEntity
     */
    async updateEndpointMetadata(metadataEntity) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateEndpointMetadata, this.correlationId);
      const localMetadata = this.updateEndpointMetadataFromLocalSources(metadataEntity);
      if (localMetadata) {
        if (localMetadata.source === AuthorityMetadataSource.HARDCODED_VALUES) {
          if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
            if (localMetadata.metadata) {
              const hardcodedMetadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(localMetadata.metadata);
              updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
              metadataEntity.canonical_authority = this.canonicalAuthority;
            }
          }
        }
        return localMetadata.source;
      }
      let metadata = await invokeAsync(this.getEndpointMetadataFromNetwork.bind(this), PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
      if (metadata) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          metadata = await invokeAsync(this.updateMetadataWithRegionalInformation.bind(this), PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(metadata);
        }
        updateAuthorityEndpointMetadata(metadataEntity, metadata, true);
        return AuthorityMetadataSource.NETWORK;
      } else {
        throw createClientAuthError(openIdConfigError, this.defaultOpenIdConfigurationEndpoint);
      }
    }
    /**
     * Updates endpoint metadata from local sources and returns where the information was retrieved from and the metadata config
     * response if the source is hardcoded metadata
     * @param metadataEntity
     * @returns
     */
    updateEndpointMetadataFromLocalSources(metadataEntity) {
      this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
      const configMetadata = this.getEndpointMetadataFromConfig();
      if (configMetadata) {
        this.logger.verbose("Found endpoint metadata in authority configuration");
        updateAuthorityEndpointMetadata(metadataEntity, configMetadata, false);
        return {
          source: AuthorityMetadataSource.CONFIG
        };
      }
      this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values.");
      if (this.authorityOptions.skipAuthorityMetadataCache) {
        this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
      } else {
        const hardcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
        if (hardcodedMetadata) {
          updateAuthorityEndpointMetadata(metadataEntity, hardcodedMetadata, false);
          return {
            source: AuthorityMetadataSource.HARDCODED_VALUES,
            metadata: hardcodedMetadata
          };
        } else {
          this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
        }
      }
      const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
      if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntityExpired) {
        this.logger.verbose("Found endpoint metadata in the cache.");
        return { source: AuthorityMetadataSource.CACHE };
      } else if (metadataEntityExpired) {
        this.logger.verbose("The metadata entity is expired.");
      }
      return null;
    }
    /**
     * Compares the number of url components after the domain to determine if the cached
     * authority metadata can be used for the requested authority. Protects against same domain different
     * authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
     * @param metadataEntity
     */
    isAuthoritySameType(metadataEntity) {
      const cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
      const cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
      return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }
    /**
     * Parse authorityMetadata config option
     */
    getEndpointMetadataFromConfig() {
      if (this.authorityOptions.authorityMetadata) {
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch (e) {
          throw createClientConfigurationError(invalidAuthorityMetadata);
        }
      }
      return null;
    }
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     *
     * @param hasHardcodedMetadata boolean
     */
    async getEndpointMetadataFromNetwork() {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
      const options = {};
      const openIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
      this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${openIdConfigurationEndpoint}`);
      try {
        const response = await this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint, options);
        const isValidResponse = isOpenIdConfigResponse(response.body);
        if (isValidResponse) {
          return response.body;
        } else {
          this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration`);
          return null;
        }
      } catch (e) {
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${e}`);
        return null;
      }
    }
    /**
     * Get OAuth endpoints for common authorities.
     */
    getEndpointMetadataFromHardcodedValues() {
      if (this.hostnameAndPort in EndpointMetadata) {
        return EndpointMetadata[this.hostnameAndPort];
      }
      return null;
    }
    /**
     * Update the retrieved metadata with regional information.
     * User selected Azure region will be used if configured.
     */
    async updateMetadataWithRegionalInformation(metadata) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
      const userConfiguredAzureRegion = this.authorityOptions.azureRegionConfiguration?.azureRegion;
      if (userConfiguredAzureRegion) {
        if (userConfiguredAzureRegion !== Constants.AZURE_REGION_AUTO_DISCOVER_FLAG) {
          this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
          this.regionDiscoveryMetadata.region_used = userConfiguredAzureRegion;
          return _Authority.replaceWithRegionalInformation(metadata, userConfiguredAzureRegion);
        }
        const autodetectedRegionName = await invokeAsync(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), PerformanceEvents.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
        if (autodetectedRegionName) {
          this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL;
          this.regionDiscoveryMetadata.region_used = autodetectedRegionName;
          return _Authority.replaceWithRegionalInformation(metadata, autodetectedRegionName);
        }
        this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
      }
      return metadata;
    }
    /**
     * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache
     * and returns where the information was retrieved from
     * @param metadataEntity
     * @returns AuthorityMetadataSource
     */
    async updateCloudDiscoveryMetadata(metadataEntity) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
      const localMetadataSource = this.updateCloudDiscoveryMetadataFromLocalSources(metadataEntity);
      if (localMetadataSource) {
        return localMetadataSource;
      }
      const metadata = await invokeAsync(this.getCloudDiscoveryMetadataFromNetwork.bind(this), PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
      if (metadata) {
        updateCloudDiscoveryMetadata(metadataEntity, metadata, true);
        return AuthorityMetadataSource.NETWORK;
      }
      throw createClientConfigurationError(untrustedAuthority);
    }
    updateCloudDiscoveryMetadataFromLocalSources(metadataEntity) {
      this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration");
      this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || Constants.NOT_APPLICABLE}`);
      this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || Constants.NOT_APPLICABLE}`);
      this.logger.verbosePii(`Canonical Authority: ${metadataEntity.canonical_authority || Constants.NOT_APPLICABLE}`);
      const metadata = this.getCloudDiscoveryMetadataFromConfig();
      if (metadata) {
        this.logger.verbose("Found cloud discovery metadata in authority configuration");
        updateCloudDiscoveryMetadata(metadataEntity, metadata, false);
        return AuthorityMetadataSource.CONFIG;
      }
      this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values.");
      if (this.options.skipAuthorityMetadataCache) {
        this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
      } else {
        const hardcodedMetadata = getCloudDiscoveryMetadataFromHardcodedValues(this.hostnameAndPort);
        if (hardcodedMetadata) {
          this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
          updateCloudDiscoveryMetadata(metadataEntity, hardcodedMetadata, false);
          return AuthorityMetadataSource.HARDCODED_VALUES;
        }
        this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
      }
      const metadataEntityExpired = isAuthorityMetadataExpired(metadataEntity);
      if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
        this.logger.verbose("Found cloud discovery metadata in the cache.");
        return AuthorityMetadataSource.CACHE;
      } else if (metadataEntityExpired) {
        this.logger.verbose("The metadata entity is expired.");
      }
      return null;
    }
    /**
     * Parse cloudDiscoveryMetadata config or check knownAuthorities
     */
    getCloudDiscoveryMetadataFromConfig() {
      if (this.authorityType === AuthorityType.Ciam) {
        this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.");
        return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      if (this.authorityOptions.cloudDiscoveryMetadata) {
        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
        try {
          this.logger.verbose("Attempting to parse the cloud discovery metadata.");
          const parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
          const metadata = getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
          this.logger.verbose("Parsed the cloud discovery metadata.");
          if (metadata) {
            this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
            return metadata;
          } else {
            this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
          }
        } catch (e) {
          this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
          throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
        }
      }
      if (this.isInKnownAuthorities()) {
        this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
        return _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      return null;
    }
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     *
     * @param hasHardcodedMetadata boolean
     */
    async getCloudDiscoveryMetadataFromNetwork() {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
      const instanceDiscoveryEndpoint = `${Constants.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
      const options = {};
      let match = null;
      try {
        const response = await this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options);
        let typedResponseBody;
        let metadata;
        if (isCloudInstanceDiscoveryResponse(response.body)) {
          typedResponseBody = response.body;
          metadata = typedResponseBody.metadata;
          this.logger.verbosePii(`tenant_discovery_endpoint is: ${typedResponseBody.tenant_discovery_endpoint}`);
        } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
          this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${response.status}`);
          typedResponseBody = response.body;
          if (typedResponseBody.error === Constants.INVALID_INSTANCE) {
            this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
            return null;
          }
          this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${typedResponseBody.error}`);
          this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${typedResponseBody.error_description}`);
          this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
          metadata = [];
        } else {
          this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
          return null;
        }
        this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
        match = getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
      } catch (error) {
        if (error instanceof AuthError) {
          this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${error.errorCode}
Error Description: ${error.errorMessage}`);
        } else {
          const typedError = error;
          this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${typedError.name}
Error Description: ${typedError.message}`);
        }
        return null;
      }
      if (!match) {
        this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
        this.logger.verbose("Creating custom Authority for custom domain scenario.");
        match = _Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      return match;
    }
    /**
     * Helper function to determine if this host is included in the knownAuthorities config option
     */
    isInKnownAuthorities() {
      const matches = this.authorityOptions.knownAuthorities.filter((authority) => {
        return authority && UrlString.getDomainFromUrl(authority).toLowerCase() === this.hostnameAndPort;
      });
      return matches.length > 0;
    }
    /**
     * helper function to populate the authority based on azureCloudOptions
     * @param authorityString
     * @param azureCloudOptions
     */
    static generateAuthority(authorityString, azureCloudOptions) {
      let authorityAzureCloudInstance;
      if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
        const tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants.DEFAULT_COMMON_TENANT;
        authorityAzureCloudInstance = `${azureCloudOptions.azureCloudInstance}/${tenant}/`;
      }
      return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
    }
    /**
     * Creates cloud discovery metadata object from a given host
     * @param host
     */
    static createCloudDiscoveryMetadataFromHost(host) {
      return {
        preferred_network: host,
        preferred_cache: host,
        aliases: [host]
      };
    }
    /**
     * helper function to generate environment from authority object
     */
    getPreferredCache() {
      if (this.managedIdentity) {
        return Constants.DEFAULT_AUTHORITY_HOST;
      } else if (this.discoveryComplete()) {
        return this.metadata.preferred_cache;
      } else {
        throw createClientAuthError(endpointResolutionError);
      }
    }
    /**
     * Returns whether or not the provided host is an alias of this authority instance
     * @param host
     */
    isAlias(host) {
      return this.metadata.aliases.indexOf(host) > -1;
    }
    /**
     * Returns whether or not the provided host is an alias of a known Microsoft authority for purposes of endpoint discovery
     * @param host
     */
    isAliasOfKnownMicrosoftAuthority(host) {
      return InstanceDiscoveryMetadataAliases.has(host);
    }
    /**
     * Checks whether the provided host is that of a public cloud authority
     *
     * @param authority string
     * @returns bool
     */
    static isPublicCloudAuthority(host) {
      return Constants.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
    }
    /**
     * Rebuild the authority string with the region
     *
     * @param host string
     * @param region string
     */
    static buildRegionalAuthorityString(host, region, queryString) {
      const authorityUrlInstance = new UrlString(host);
      authorityUrlInstance.validateAsUri();
      const authorityUrlParts = authorityUrlInstance.getUrlComponents();
      let hostNameAndPort = `${region}.${authorityUrlParts.HostNameAndPort}`;
      if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
        hostNameAndPort = `${region}.${Constants.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
      }
      const url = UrlString.constructAuthorityUriFromObject({
        ...authorityUrlInstance.getUrlComponents(),
        HostNameAndPort: hostNameAndPort
      }).urlString;
      if (queryString)
        return `${url}?${queryString}`;
      return url;
    }
    /**
     * Replace the endpoints in the metadata object with their regional equivalents.
     *
     * @param metadata OpenIdConfigResponse
     * @param azureRegion string
     */
    static replaceWithRegionalInformation(metadata, azureRegion) {
      const regionalMetadata = { ...metadata };
      regionalMetadata.authorization_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.authorization_endpoint, azureRegion);
      regionalMetadata.token_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.token_endpoint, azureRegion);
      if (regionalMetadata.end_session_endpoint) {
        regionalMetadata.end_session_endpoint = _Authority.buildRegionalAuthorityString(regionalMetadata.end_session_endpoint, azureRegion);
      }
      return regionalMetadata;
    }
    /**
     * Transform CIAM_AUTHORIY as per the below rules:
     * If no path segments found and it is a CIAM authority (hostname ends with .ciamlogin.com), then transform it
     *
     * NOTE: The transformation path should go away once STS supports CIAM with the format: `tenantIdorDomain.ciamlogin.com`
     * `ciamlogin.com` can also change in the future and we should accommodate the same
     *
     * @param authority
     */
    static transformCIAMAuthority(authority) {
      let ciamAuthority = authority;
      const authorityUrl = new UrlString(authority);
      const authorityUrlComponents = authorityUrl.getUrlComponents();
      if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
        const tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
        ciamAuthority = `${ciamAuthority}${tenantIdOrDomain}${Constants.AAD_TENANT_DOMAIN_SUFFIX}`;
      }
      return ciamAuthority;
    }
  };
  Authority.reservedTenantDomains = /* @__PURE__ */ new Set([
    "{tenant}",
    "{tenantid}",
    AADAuthorityConstants.COMMON,
    AADAuthorityConstants.CONSUMERS,
    AADAuthorityConstants.ORGANIZATIONS
  ]);
  function getTenantFromAuthorityString(authority) {
    const authorityUrl = new UrlString(authority);
    const authorityUrlComponents = authorityUrl.getUrlComponents();
    const tenantId = authorityUrlComponents.PathSegments.slice(-1)[0]?.toLowerCase();
    switch (tenantId) {
      case AADAuthorityConstants.COMMON:
      case AADAuthorityConstants.ORGANIZATIONS:
      case AADAuthorityConstants.CONSUMERS:
        return void 0;
      default:
        return tenantId;
    }
  }
  function formatAuthorityUri(authorityUri) {
    return authorityUri.endsWith(Constants.FORWARD_SLASH) ? authorityUri : `${authorityUri}${Constants.FORWARD_SLASH}`;
  }
  function buildStaticAuthorityOptions(authOptions) {
    const rawCloudDiscoveryMetadata = authOptions.cloudDiscoveryMetadata;
    let cloudDiscoveryMetadata = void 0;
    if (rawCloudDiscoveryMetadata) {
      try {
        cloudDiscoveryMetadata = JSON.parse(rawCloudDiscoveryMetadata);
      } catch (e) {
        throw createClientConfigurationError(invalidCloudDiscoveryMetadata);
      }
    }
    return {
      canonicalAuthority: authOptions.authority ? formatAuthorityUri(authOptions.authority) : void 0,
      knownAuthorities: authOptions.knownAuthorities,
      cloudDiscoveryMetadata
    };
  }

  // node_modules/@azure/msal-common/dist/authority/AuthorityFactory.mjs
  async function createDiscoveredInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient) {
    performanceClient?.addQueueMeasurement(PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, correlationId);
    const authorityUriFinal = Authority.transformCIAMAuthority(formatAuthorityUri(authorityUri));
    const acquireTokenAuthority = new Authority(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient);
    try {
      await invokeAsync(acquireTokenAuthority.resolveEndpointsAsync.bind(acquireTokenAuthority), PerformanceEvents.AuthorityResolveEndpointsAsync, logger, performanceClient, correlationId)();
      return acquireTokenAuthority;
    } catch (e) {
      throw createClientAuthError(endpointResolutionError);
    }
  }

  // node_modules/@azure/msal-common/dist/error/ServerError.mjs
  var ServerError = class _ServerError extends AuthError {
    constructor(errorCode, errorMessage, subError, errorNo, status) {
      super(errorCode, errorMessage, subError);
      this.name = "ServerError";
      this.errorNo = errorNo;
      this.status = status;
      Object.setPrototypeOf(this, _ServerError.prototype);
    }
  };

  // node_modules/@azure/msal-common/dist/network/RequestThumbprint.mjs
  function getRequestThumbprint(clientId, request, homeAccountId) {
    return {
      clientId,
      authority: request.authority,
      scopes: request.scopes,
      homeAccountIdentifier: homeAccountId,
      claims: request.claims,
      authenticationScheme: request.authenticationScheme,
      resourceRequestMethod: request.resourceRequestMethod,
      resourceRequestUri: request.resourceRequestUri,
      shrClaims: request.shrClaims,
      sshKid: request.sshKid,
      embeddedClientId: request.embeddedClientId || request.tokenBodyParameters?.clientId
    };
  }

  // node_modules/@azure/msal-common/dist/network/ThrottlingUtils.mjs
  var ThrottlingUtils = class _ThrottlingUtils {
    /**
     * Prepares a RequestThumbprint to be stored as a key.
     * @param thumbprint
     */
    static generateThrottlingStorageKey(thumbprint) {
      return `${ThrottlingConstants.THROTTLING_PREFIX}.${JSON.stringify(thumbprint)}`;
    }
    /**
     * Performs necessary throttling checks before a network request.
     * @param cacheManager
     * @param thumbprint
     */
    static preProcess(cacheManager, thumbprint, correlationId) {
      const key = _ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
      const value = cacheManager.getThrottlingCache(key);
      if (value) {
        if (value.throttleTime < Date.now()) {
          cacheManager.removeItem(key, correlationId);
          return;
        }
        throw new ServerError(value.errorCodes?.join(" ") || Constants.EMPTY_STRING, value.errorMessage, value.subError);
      }
    }
    /**
     * Performs necessary throttling checks after a network request.
     * @param cacheManager
     * @param thumbprint
     * @param response
     */
    static postProcess(cacheManager, thumbprint, response, correlationId) {
      if (_ThrottlingUtils.checkResponseStatus(response) || _ThrottlingUtils.checkResponseForRetryAfter(response)) {
        const thumbprintValue = {
          throttleTime: _ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
          error: response.body.error,
          errorCodes: response.body.error_codes,
          errorMessage: response.body.error_description,
          subError: response.body.suberror
        };
        cacheManager.setThrottlingCache(_ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue, correlationId);
      }
    }
    /**
     * Checks a NetworkResponse object's status codes against 429 or 5xx
     * @param response
     */
    static checkResponseStatus(response) {
      return response.status === 429 || response.status >= 500 && response.status < 600;
    }
    /**
     * Checks a NetworkResponse object's RetryAfter header
     * @param response
     */
    static checkResponseForRetryAfter(response) {
      if (response.headers) {
        return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
      }
      return false;
    }
    /**
     * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
     * @param throttleTime
     */
    static calculateThrottleTime(throttleTime) {
      const time = throttleTime <= 0 ? 0 : throttleTime;
      const currentSeconds = Date.now() / 1e3;
      return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    }
    static removeThrottle(cacheManager, clientId, request, homeAccountIdentifier) {
      const thumbprint = getRequestThumbprint(clientId, request, homeAccountIdentifier);
      const key = this.generateThrottlingStorageKey(thumbprint);
      cacheManager.removeItem(key, request.correlationId);
    }
  };

  // node_modules/@azure/msal-common/dist/error/NetworkError.mjs
  var NetworkError = class _NetworkError extends AuthError {
    constructor(error, httpStatus, responseHeaders) {
      super(error.errorCode, error.errorMessage, error.subError);
      Object.setPrototypeOf(this, _NetworkError.prototype);
      this.name = "NetworkError";
      this.error = error;
      this.httpStatus = httpStatus;
      this.responseHeaders = responseHeaders;
    }
  };
  function createNetworkError(error, httpStatus, responseHeaders, additionalError) {
    error.errorMessage = `${error.errorMessage}, additionalErrorInfo: error.name:${additionalError?.name}, error.message:${additionalError?.message}`;
    return new NetworkError(error, httpStatus, responseHeaders);
  }

  // node_modules/@azure/msal-common/dist/client/BaseClient.mjs
  var BaseClient = class {
    constructor(configuration, performanceClient) {
      this.config = buildClientConfiguration(configuration);
      this.logger = new Logger(this.config.loggerOptions, name, version);
      this.cryptoUtils = this.config.cryptoInterface;
      this.cacheManager = this.config.storageInterface;
      this.networkClient = this.config.networkInterface;
      this.serverTelemetryManager = this.config.serverTelemetryManager;
      this.authority = this.config.authOptions.authority;
      this.performanceClient = performanceClient;
    }
    /**
     * Creates default headers for requests to token endpoint
     */
    createTokenRequestHeaders(ccsCred) {
      const headers = {};
      headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
      if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
        switch (ccsCred.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
              headers[HeaderNames.CCS_HEADER] = `Oid:${clientInfo.uid}@${clientInfo.utid}`;
            } catch (e) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
            }
            break;
          case CcsCredentialType.UPN:
            headers[HeaderNames.CCS_HEADER] = `UPN: ${ccsCred.credential}`;
            break;
        }
      }
      return headers;
    }
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     * @param thumbprint
     */
    async executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, queuedEvent) {
      if (queuedEvent) {
        this.performanceClient?.addQueueMeasurement(queuedEvent, correlationId);
      }
      const response = await this.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers }, correlationId);
      if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
        this.config.serverTelemetryManager.clearTelemetryCache();
      }
      return response;
    }
    /**
     * Wraps sendPostRequestAsync with necessary preflight and postflight logic
     * @param thumbprint - Request thumbprint for throttling
     * @param tokenEndpoint - Endpoint to make the POST to
     * @param options - Body and Headers to include on the POST request
     * @param correlationId - CorrelationId for telemetry
     */
    async sendPostRequest(thumbprint, tokenEndpoint, options, correlationId) {
      ThrottlingUtils.preProcess(this.cacheManager, thumbprint, correlationId);
      let response;
      try {
        response = await invokeAsync(this.networkClient.sendPostRequestAsync.bind(this.networkClient), PerformanceEvents.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, correlationId)(tokenEndpoint, options);
        const responseHeaders = response.headers || {};
        this.performanceClient?.addFields({
          refreshTokenSize: response.body.refresh_token?.length || 0,
          httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
          requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || ""
        }, correlationId);
      } catch (e) {
        if (e instanceof NetworkError) {
          const responseHeaders = e.responseHeaders;
          if (responseHeaders) {
            this.performanceClient?.addFields({
              httpVerToken: responseHeaders[HeaderNames.X_MS_HTTP_VERSION] || "",
              requestId: responseHeaders[HeaderNames.X_MS_REQUEST_ID] || "",
              contentTypeHeader: responseHeaders[HeaderNames.CONTENT_TYPE] || void 0,
              contentLengthHeader: responseHeaders[HeaderNames.CONTENT_LENGTH] || void 0,
              httpStatus: e.httpStatus
            }, correlationId);
          }
          throw e.error;
        }
        if (e instanceof AuthError) {
          throw e;
        } else {
          throw createClientAuthError(networkError);
        }
      }
      ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response, correlationId);
      return response;
    }
    /**
     * Updates the authority object of the client. Endpoint discovery must be completed.
     * @param updatedAuthority
     */
    async updateAuthority(cloudInstanceHostname, correlationId) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.UpdateTokenEndpointAuthority, correlationId);
      const cloudInstanceAuthorityUri = `https://${cloudInstanceHostname}/${this.authority.tenant}/`;
      const cloudInstanceAuthority = await createDiscoveredInstance(cloudInstanceAuthorityUri, this.networkClient, this.cacheManager, this.authority.options, this.logger, correlationId, this.performanceClient);
      this.authority = cloudInstanceAuthority;
    }
    /**
     * Creates query string for the /token request
     * @param request
     */
    createTokenQueryParameters(request) {
      const parameters = /* @__PURE__ */ new Map();
      if (request.embeddedClientId) {
        addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      }
      if (request.tokenQueryParameters) {
        addExtraQueryParameters(parameters, request.tokenQueryParameters);
      }
      addCorrelationId(parameters, request.correlationId);
      instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
      return mapToQueryString(parameters);
    }
  };

  // node_modules/@azure/msal-common/dist/account/TokenClaims.mjs
  function getTenantIdFromIdTokenClaims(idTokenClaims) {
    if (idTokenClaims) {
      const tenantId = idTokenClaims.tid || idTokenClaims.tfp || idTokenClaims.acr;
      return tenantId || null;
    }
    return null;
  }

  // node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.mjs
  var AccountEntity = class _AccountEntity {
    /**
     * Returns the AccountInfo interface for this account.
     */
    getAccountInfo() {
      return {
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId,
        loginHint: this.loginHint,
        name: this.name,
        nativeAccountId: this.nativeAccountId,
        authorityType: this.authorityType,
        // Deserialize tenant profiles array into a Map
        tenantProfiles: new Map((this.tenantProfiles || []).map((tenantProfile) => {
          return [tenantProfile.tenantId, tenantProfile];
        })),
        dataBoundary: this.dataBoundary
      };
    }
    /**
     * Returns true if the account entity is in single tenant format (outdated), false otherwise
     */
    isSingleTenant() {
      return !this.tenantProfiles;
    }
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
     * @param accountDetails
     */
    static createAccount(accountDetails, authority, base64Decode2) {
      const account2 = new _AccountEntity();
      if (authority.authorityType === AuthorityType.Adfs) {
        account2.authorityType = CacheAccountType.ADFS_ACCOUNT_TYPE;
      } else if (authority.protocolMode === ProtocolMode.OIDC) {
        account2.authorityType = CacheAccountType.GENERIC_ACCOUNT_TYPE;
      } else {
        account2.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
      }
      let clientInfo;
      if (accountDetails.clientInfo && base64Decode2) {
        clientInfo = buildClientInfo(accountDetails.clientInfo, base64Decode2);
        if (clientInfo.xms_tdbr) {
          account2.dataBoundary = clientInfo.xms_tdbr === "EU" ? "EU" : "None";
        }
      }
      account2.clientInfo = accountDetails.clientInfo;
      account2.homeAccountId = accountDetails.homeAccountId;
      account2.nativeAccountId = accountDetails.nativeAccountId;
      const env = accountDetails.environment || authority && authority.getPreferredCache();
      if (!env) {
        throw createClientAuthError(invalidCacheEnvironment);
      }
      account2.environment = env;
      account2.realm = clientInfo?.utid || getTenantIdFromIdTokenClaims(accountDetails.idTokenClaims) || "";
      account2.localAccountId = clientInfo?.uid || accountDetails.idTokenClaims?.oid || accountDetails.idTokenClaims?.sub || "";
      const preferredUsername = accountDetails.idTokenClaims?.preferred_username || accountDetails.idTokenClaims?.upn;
      const email = accountDetails.idTokenClaims?.emails ? accountDetails.idTokenClaims.emails[0] : null;
      account2.username = preferredUsername || email || "";
      account2.loginHint = accountDetails.idTokenClaims?.login_hint;
      account2.name = accountDetails.idTokenClaims?.name || "";
      account2.cloudGraphHostName = accountDetails.cloudGraphHostName;
      account2.msGraphHost = accountDetails.msGraphHost;
      if (accountDetails.tenantProfiles) {
        account2.tenantProfiles = accountDetails.tenantProfiles;
      } else {
        const tenantProfile = buildTenantProfile(accountDetails.homeAccountId, account2.localAccountId, account2.realm, accountDetails.idTokenClaims);
        account2.tenantProfiles = [tenantProfile];
      }
      return account2;
    }
    /**
     * Creates an AccountEntity object from AccountInfo
     * @param accountInfo
     * @param cloudGraphHostName
     * @param msGraphHost
     * @returns
     */
    static createFromAccountInfo(accountInfo, cloudGraphHostName, msGraphHost) {
      const account2 = new _AccountEntity();
      account2.authorityType = accountInfo.authorityType || CacheAccountType.GENERIC_ACCOUNT_TYPE;
      account2.homeAccountId = accountInfo.homeAccountId;
      account2.localAccountId = accountInfo.localAccountId;
      account2.nativeAccountId = accountInfo.nativeAccountId;
      account2.realm = accountInfo.tenantId;
      account2.environment = accountInfo.environment;
      account2.username = accountInfo.username;
      account2.name = accountInfo.name;
      account2.loginHint = accountInfo.loginHint;
      account2.cloudGraphHostName = cloudGraphHostName;
      account2.msGraphHost = msGraphHost;
      account2.tenantProfiles = Array.from(accountInfo.tenantProfiles?.values() || []);
      account2.dataBoundary = accountInfo.dataBoundary;
      return account2;
    }
    /**
     * Generate HomeAccountId from server response
     * @param serverClientInfo
     * @param authType
     */
    static generateHomeAccountId(serverClientInfo, authType, logger, cryptoObj, idTokenClaims) {
      if (!(authType === AuthorityType.Adfs || authType === AuthorityType.Dsts)) {
        if (serverClientInfo) {
          try {
            const clientInfo = buildClientInfo(serverClientInfo, cryptoObj.base64Decode);
            if (clientInfo.uid && clientInfo.utid) {
              return `${clientInfo.uid}.${clientInfo.utid}`;
            }
          } catch (e) {
          }
        }
        logger.warning("No client info in response");
      }
      return idTokenClaims?.sub || "";
    }
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    static isAccountEntity(entity) {
      if (!entity) {
        return false;
      }
      return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
    }
    /**
     * Helper function to determine whether 2 accountInfo objects represent the same account
     * @param accountA
     * @param accountB
     * @param compareClaims - If set to true idTokenClaims will also be compared to determine account equality
     */
    static accountInfoIsEqual(accountA, accountB, compareClaims) {
      if (!accountA || !accountB) {
        return false;
      }
      let claimsMatch = true;
      if (compareClaims) {
        const accountAClaims = accountA.idTokenClaims || {};
        const accountBClaims = accountB.idTokenClaims || {};
        claimsMatch = accountAClaims.iat === accountBClaims.iat && accountAClaims.nonce === accountBClaims.nonce;
      }
      return accountA.homeAccountId === accountB.homeAccountId && accountA.localAccountId === accountB.localAccountId && accountA.username === accountB.username && accountA.tenantId === accountB.tenantId && accountA.loginHint === accountB.loginHint && accountA.environment === accountB.environment && accountA.nativeAccountId === accountB.nativeAccountId && claimsMatch;
    }
  };

  // node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs
  var InteractionRequiredAuthErrorCodes_exports = {};
  __export(InteractionRequiredAuthErrorCodes_exports, {
    badToken: () => badToken,
    consentRequired: () => consentRequired,
    interactionRequired: () => interactionRequired,
    loginRequired: () => loginRequired,
    nativeAccountUnavailable: () => nativeAccountUnavailable,
    noTokensFound: () => noTokensFound,
    refreshTokenExpired: () => refreshTokenExpired,
    uxNotAllowed: () => uxNotAllowed
  });
  var noTokensFound = "no_tokens_found";
  var nativeAccountUnavailable = "native_account_unavailable";
  var refreshTokenExpired = "refresh_token_expired";
  var uxNotAllowed = "ux_not_allowed";
  var interactionRequired = "interaction_required";
  var consentRequired = "consent_required";
  var loginRequired = "login_required";
  var badToken = "bad_token";

  // node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs
  var InteractionRequiredServerErrorMessage = [
    interactionRequired,
    consentRequired,
    loginRequired,
    badToken,
    uxNotAllowed
  ];
  var InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required",
    "bad_token"
  ];
  var InteractionRequiredAuthErrorMessages = {
    [noTokensFound]: "No refresh token found in the cache. Please sign-in.",
    [nativeAccountUnavailable]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [refreshTokenExpired]: "Refresh token has expired.",
    [badToken]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
    [uxNotAllowed]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
  };
  var InteractionRequiredAuthErrorMessage = {
    noTokensFoundError: {
      code: noTokensFound,
      desc: InteractionRequiredAuthErrorMessages[noTokensFound]
    },
    native_account_unavailable: {
      code: nativeAccountUnavailable,
      desc: InteractionRequiredAuthErrorMessages[nativeAccountUnavailable]
    },
    bad_token: {
      code: badToken,
      desc: InteractionRequiredAuthErrorMessages[badToken]
    }
  };
  var InteractionRequiredAuthError = class _InteractionRequiredAuthError extends AuthError {
    constructor(errorCode, errorMessage, subError, timestamp, traceId, correlationId, claims, errorNo) {
      super(errorCode, errorMessage, subError);
      Object.setPrototypeOf(this, _InteractionRequiredAuthError.prototype);
      this.timestamp = timestamp || Constants.EMPTY_STRING;
      this.traceId = traceId || Constants.EMPTY_STRING;
      this.correlationId = correlationId || Constants.EMPTY_STRING;
      this.claims = claims || Constants.EMPTY_STRING;
      this.name = "InteractionRequiredAuthError";
      this.errorNo = errorNo;
    }
  };
  function isInteractionRequiredError(errorCode, errorString, subError) {
    const isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
    const isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
    const isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some((irErrorCode) => {
      return errorString.indexOf(irErrorCode) > -1;
    });
    return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
  }
  function createInteractionRequiredAuthError(errorCode) {
    return new InteractionRequiredAuthError(errorCode, InteractionRequiredAuthErrorMessages[errorCode]);
  }

  // node_modules/@azure/msal-common/dist/utils/ProtocolUtils.mjs
  var ProtocolUtils = class _ProtocolUtils {
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */
    static setRequestState(cryptoObj, userState, meta) {
      const libraryState = _ProtocolUtils.generateLibraryState(cryptoObj, meta);
      return userState ? `${libraryState}${Constants.RESOURCE_DELIM}${userState}` : libraryState;
    }
    /**
     * Generates the state value used by the common library.
     * @param randomGuid
     * @param cryptoObj
     */
    static generateLibraryState(cryptoObj, meta) {
      if (!cryptoObj) {
        throw createClientAuthError(noCryptoObject);
      }
      const stateObj = {
        id: cryptoObj.createNewGuid()
      };
      if (meta) {
        stateObj.meta = meta;
      }
      const stateString = JSON.stringify(stateObj);
      return cryptoObj.base64Encode(stateString);
    }
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */
    static parseRequestState(cryptoObj, state) {
      if (!cryptoObj) {
        throw createClientAuthError(noCryptoObject);
      }
      if (!state) {
        throw createClientAuthError(invalidState);
      }
      try {
        const splitState = state.split(Constants.RESOURCE_DELIM);
        const libraryState = splitState[0];
        const userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : Constants.EMPTY_STRING;
        const libraryStateString = cryptoObj.base64Decode(libraryState);
        const libraryStateObj = JSON.parse(libraryStateString);
        return {
          userRequestState: userState || Constants.EMPTY_STRING,
          libraryState: libraryStateObj
        };
      } catch (e) {
        throw createClientAuthError(invalidState);
      }
    }
  };

  // node_modules/@azure/msal-common/dist/crypto/PopTokenGenerator.mjs
  var KeyLocation = {
    SW: "sw"
  };
  var PopTokenGenerator = class {
    constructor(cryptoUtils, performanceClient) {
      this.cryptoUtils = cryptoUtils;
      this.performanceClient = performanceClient;
    }
    /**
     * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
     * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
     * @param request
     * @returns
     */
    async generateCnf(request, logger) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.PopTokenGenerateCnf, request.correlationId);
      const reqCnf = await invokeAsync(this.generateKid.bind(this), PerformanceEvents.PopTokenGenerateCnf, logger, this.performanceClient, request.correlationId)(request);
      const reqCnfString = this.cryptoUtils.base64UrlEncode(JSON.stringify(reqCnf));
      return {
        kid: reqCnf.kid,
        reqCnfString
      };
    }
    /**
     * Generates key_id for a SHR token request
     * @param request
     * @returns
     */
    async generateKid(request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.PopTokenGenerateKid, request.correlationId);
      const kidThumbprint = await this.cryptoUtils.getPublicKeyThumbprint(request);
      return {
        kid: kidThumbprint,
        xms_ksl: KeyLocation.SW
      };
    }
    /**
     * Signs the POP access_token with the local generated key-pair
     * @param accessToken
     * @param request
     * @returns
     */
    async signPopToken(accessToken, keyId, request) {
      return this.signPayload(accessToken, keyId, request);
    }
    /**
     * Utility function to generate the signed JWT for an access_token
     * @param payload
     * @param kid
     * @param request
     * @param claims
     * @returns
     */
    async signPayload(payload, keyId, request, claims) {
      const { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = request;
      const resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri) : void 0;
      const resourceUrlComponents = resourceUrlString?.getUrlComponents();
      return this.cryptoUtils.signJwt({
        at: payload,
        ts: nowSeconds(),
        m: resourceRequestMethod?.toUpperCase(),
        u: resourceUrlComponents?.HostNameAndPort,
        nonce: shrNonce || this.cryptoUtils.createNewGuid(),
        p: resourceUrlComponents?.AbsolutePath,
        q: resourceUrlComponents?.QueryString ? [[], resourceUrlComponents.QueryString] : void 0,
        client_claims: shrClaims || void 0,
        ...claims
      }, keyId, shrOptions, request.correlationId);
    }
  };

  // node_modules/@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs
  var TokenCacheContext = class {
    constructor(tokenCache, hasChanged) {
      this.cache = tokenCache;
      this.hasChanged = hasChanged;
    }
    /**
     * boolean which indicates the changes in cache
     */
    get cacheHasChanged() {
      return this.hasChanged;
    }
    /**
     * function to retrieve the token cache
     */
    get tokenCache() {
      return this.cache;
    }
  };

  // node_modules/@azure/msal-common/dist/response/ResponseHandler.mjs
  var ResponseHandler = class _ResponseHandler {
    constructor(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin, performanceClient) {
      this.clientId = clientId;
      this.cacheStorage = cacheStorage;
      this.cryptoObj = cryptoObj;
      this.logger = logger;
      this.serializableCache = serializableCache;
      this.persistencePlugin = persistencePlugin;
      this.performanceClient = performanceClient;
    }
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     * @param refreshAccessToken
     */
    validateTokenResponse(serverResponse, refreshAccessToken) {
      if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
        const errString = `Error(s): ${serverResponse.error_codes || Constants.NOT_AVAILABLE} - Timestamp: ${serverResponse.timestamp || Constants.NOT_AVAILABLE} - Description: ${serverResponse.error_description || Constants.NOT_AVAILABLE} - Correlation ID: ${serverResponse.correlation_id || Constants.NOT_AVAILABLE} - Trace ID: ${serverResponse.trace_id || Constants.NOT_AVAILABLE}`;
        const serverErrorNo = serverResponse.error_codes?.length ? serverResponse.error_codes[0] : void 0;
        const serverError = new ServerError(serverResponse.error, errString, serverResponse.suberror, serverErrorNo, serverResponse.status);
        if (refreshAccessToken && serverResponse.status && serverResponse.status >= HttpStatus.SERVER_ERROR_RANGE_START && serverResponse.status <= HttpStatus.SERVER_ERROR_RANGE_END) {
          this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${serverError}`);
          return;
        } else if (refreshAccessToken && serverResponse.status && serverResponse.status >= HttpStatus.CLIENT_ERROR_RANGE_START && serverResponse.status <= HttpStatus.CLIENT_ERROR_RANGE_END) {
          this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${serverError}`);
          return;
        }
        if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
          throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || Constants.EMPTY_STRING, serverResponse.trace_id || Constants.EMPTY_STRING, serverResponse.correlation_id || Constants.EMPTY_STRING, serverResponse.claims || Constants.EMPTY_STRING, serverErrorNo);
        }
        throw serverError;
      }
    }
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */
    async handleServerTokenResponse(serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.HandleServerTokenResponse, serverTokenResponse.correlation_id);
      let idTokenClaims;
      if (serverTokenResponse.id_token) {
        idTokenClaims = extractTokenClaims(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj.base64Decode);
        if (authCodePayload && authCodePayload.nonce) {
          if (idTokenClaims.nonce !== authCodePayload.nonce) {
            throw createClientAuthError(nonceMismatch);
          }
        }
        if (request.maxAge || request.maxAge === 0) {
          const authTime = idTokenClaims.auth_time;
          if (!authTime) {
            throw createClientAuthError(authTimeNotFound);
          }
          checkMaxAge(authTime, request.maxAge);
        }
      }
      this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
      let requestStateObj;
      if (!!authCodePayload && !!authCodePayload.state) {
        requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
      }
      serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || void 0;
      const cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload);
      let cacheContext;
      try {
        if (this.persistencePlugin && this.serializableCache) {
          this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
          cacheContext = new TokenCacheContext(this.serializableCache, true);
          await this.persistencePlugin.beforeCacheAccess(cacheContext);
        }
        if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
          const key = this.cacheStorage.generateAccountKey(cacheRecord.account.getAccountInfo());
          const account2 = this.cacheStorage.getAccount(key, request.correlationId);
          if (!account2) {
            this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
            return await _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, void 0, serverRequestId);
          }
        }
        await this.cacheStorage.saveCacheRecord(cacheRecord, request.correlationId, request.storeInCache);
      } finally {
        if (this.persistencePlugin && this.serializableCache && cacheContext) {
          this.logger.verbose("Persistence enabled, calling afterCacheAccess");
          await this.persistencePlugin.afterCacheAccess(cacheContext);
        }
      }
      return _ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, serverTokenResponse, serverRequestId);
    }
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */
    generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload) {
      const env = authority.getPreferredCache();
      if (!env) {
        throw createClientAuthError(invalidCacheEnvironment);
      }
      const claimsTenantId = getTenantIdFromIdTokenClaims(idTokenClaims);
      let cachedIdToken;
      let cachedAccount;
      if (serverTokenResponse.id_token && !!idTokenClaims) {
        cachedIdToken = createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, claimsTenantId || "");
        cachedAccount = buildAccountToCache(
          this.cacheStorage,
          authority,
          this.homeAccountIdentifier,
          this.cryptoObj.base64Decode,
          request.correlationId,
          idTokenClaims,
          serverTokenResponse.client_info,
          env,
          claimsTenantId,
          authCodePayload,
          void 0,
          // nativeAccountId
          this.logger
        );
      }
      let cachedAccessToken = null;
      if (serverTokenResponse.access_token) {
        const responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
        const expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
        const extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
        const refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || void 0;
        const tokenExpirationSeconds = reqTimestamp + expiresIn;
        const extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
        const refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : void 0;
        cachedAccessToken = createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, claimsTenantId || authority.tenant || "", responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj.base64Decode, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
      }
      let cachedRefreshToken = null;
      if (serverTokenResponse.refresh_token) {
        let rtExpiresOn;
        if (serverTokenResponse.refresh_token_expires_in) {
          const rtExpiresIn = typeof serverTokenResponse.refresh_token_expires_in === "string" ? parseInt(serverTokenResponse.refresh_token_expires_in, 10) : serverTokenResponse.refresh_token_expires_in;
          rtExpiresOn = reqTimestamp + rtExpiresIn;
        }
        cachedRefreshToken = createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci, userAssertionHash, rtExpiresOn);
      }
      let cachedAppMetadata = null;
      if (serverTokenResponse.foci) {
        cachedAppMetadata = {
          clientId: this.clientId,
          environment: env,
          familyId: serverTokenResponse.foci
        };
      }
      return {
        account: cachedAccount,
        idToken: cachedIdToken,
        accessToken: cachedAccessToken,
        refreshToken: cachedRefreshToken,
        appMetadata: cachedAppMetadata
      };
    }
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */
    static async generateAuthenticationResult(cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenClaims, requestState, serverTokenResponse, requestId) {
      let accessToken = Constants.EMPTY_STRING;
      let responseScopes = [];
      let expiresOn = null;
      let extExpiresOn;
      let refreshOn;
      let familyId = Constants.EMPTY_STRING;
      if (cacheRecord.accessToken) {
        if (cacheRecord.accessToken.tokenType === AuthenticationScheme.POP && !request.popKid) {
          const popTokenGenerator = new PopTokenGenerator(cryptoObj);
          const { secret, keyId } = cacheRecord.accessToken;
          if (!keyId) {
            throw createClientAuthError(keyIdMissing);
          }
          accessToken = await popTokenGenerator.signPopToken(secret, keyId, request);
        } else {
          accessToken = cacheRecord.accessToken.secret;
        }
        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
        expiresOn = toDateFromSeconds(cacheRecord.accessToken.expiresOn);
        extExpiresOn = toDateFromSeconds(cacheRecord.accessToken.extendedExpiresOn);
        if (cacheRecord.accessToken.refreshOn) {
          refreshOn = toDateFromSeconds(cacheRecord.accessToken.refreshOn);
        }
      }
      if (cacheRecord.appMetadata) {
        familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : "";
      }
      const uid = idTokenClaims?.oid || idTokenClaims?.sub || "";
      const tid = idTokenClaims?.tid || "";
      if (serverTokenResponse?.spa_accountid && !!cacheRecord.account) {
        cacheRecord.account.nativeAccountId = serverTokenResponse?.spa_accountid;
      }
      const accountInfo = cacheRecord.account ? updateAccountTenantProfileData(
        cacheRecord.account.getAccountInfo(),
        void 0,
        // tenantProfile optional
        idTokenClaims,
        cacheRecord.idToken?.secret
      ) : null;
      return {
        authority: authority.canonicalAuthority,
        uniqueId: uid,
        tenantId: tid,
        scopes: responseScopes,
        account: accountInfo,
        idToken: cacheRecord?.idToken?.secret || "",
        idTokenClaims: idTokenClaims || {},
        accessToken,
        fromCache: fromTokenCache,
        expiresOn,
        extExpiresOn,
        refreshOn,
        correlationId: request.correlationId,
        requestId: requestId || Constants.EMPTY_STRING,
        familyId,
        tokenType: cacheRecord.accessToken?.tokenType || Constants.EMPTY_STRING,
        state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
        cloudGraphHostName: cacheRecord.account?.cloudGraphHostName || Constants.EMPTY_STRING,
        msGraphHost: cacheRecord.account?.msGraphHost || Constants.EMPTY_STRING,
        code: serverTokenResponse?.spa_code,
        fromNativeBroker: false
      };
    }
  };
  function buildAccountToCache(cacheStorage, authority, homeAccountId, base64Decode2, correlationId, idTokenClaims, clientInfo, environment, claimsTenantId, authCodePayload, nativeAccountId, logger) {
    logger?.verbose("setCachedAccount called");
    const accountKeys = cacheStorage.getAccountKeys();
    const baseAccountKey = accountKeys.find((accountKey) => {
      return accountKey.startsWith(homeAccountId);
    });
    let cachedAccount = null;
    if (baseAccountKey) {
      cachedAccount = cacheStorage.getAccount(baseAccountKey, correlationId);
    }
    const baseAccount = cachedAccount || AccountEntity.createAccount({
      homeAccountId,
      idTokenClaims,
      clientInfo,
      environment,
      cloudGraphHostName: authCodePayload?.cloud_graph_host_name,
      msGraphHost: authCodePayload?.msgraph_host,
      nativeAccountId
    }, authority, base64Decode2);
    const tenantProfiles = baseAccount.tenantProfiles || [];
    const tenantId = claimsTenantId || baseAccount.realm;
    if (tenantId && !tenantProfiles.find((tenantProfile) => {
      return tenantProfile.tenantId === tenantId;
    })) {
      const newTenantProfile = buildTenantProfile(homeAccountId, baseAccount.localAccountId, tenantId, idTokenClaims);
      tenantProfiles.push(newTenantProfile);
    }
    baseAccount.tenantProfiles = tenantProfiles;
    return baseAccount;
  }

  // node_modules/@azure/msal-common/dist/utils/ClientAssertionUtils.mjs
  async function getClientAssertion(clientAssertion, clientId, tokenEndpoint) {
    if (typeof clientAssertion === "string") {
      return clientAssertion;
    } else {
      const config = {
        clientId,
        tokenEndpoint
      };
      return clientAssertion(config);
    }
  }

  // node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.mjs
  var AuthorizationCodeClient = class extends BaseClient {
    constructor(configuration, performanceClient) {
      super(configuration, performanceClient);
      this.includeRedirectUri = true;
      this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
    }
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */
    async acquireToken(request, authCodePayload) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientAcquireToken, request.correlationId);
      if (!request.code) {
        throw createClientAuthError(requestCannotBeMade);
      }
      const reqTimestamp = nowSeconds();
      const response = await invokeAsync(this.executeTokenRequest.bind(this), PerformanceEvents.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(this.authority, request);
      const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
      responseHandler.validateTokenResponse(response.body);
      return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents.HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, authCodePayload, void 0, void 0, void 0, requestId);
    }
    /**
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */
    getLogoutUri(logoutRequest) {
      if (!logoutRequest) {
        throw createClientConfigurationError(logoutRequestEmpty);
      }
      const queryString = this.createLogoutUrlQueryString(logoutRequest);
      return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
    }
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    async executeTokenRequest(authority, request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientExecuteTokenRequest, request.correlationId);
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), PerformanceEvents.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
      let ccsCredential = void 0;
      if (request.clientInfo) {
        try {
          const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
          ccsCredential = {
            credential: `${clientInfo.uid}${Separators.CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
            type: CcsCredentialType.HOME_ACCOUNT_ID
          };
        } catch (e) {
          this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
      }
      const headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
      const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
      return invokeAsync(this.executePostToTokenEndpoint.bind(this), PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, PerformanceEvents.AuthorizationCodeClientExecutePostToTokenEndpoint);
    }
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    async createTokenRequestBody(request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.AuthClientCreateTokenRequestBody, request.correlationId);
      const parameters = /* @__PURE__ */ new Map();
      addClientId(parameters, request.embeddedClientId || request.tokenBodyParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
      if (!this.includeRedirectUri) {
        if (!request.redirectUri) {
          throw createClientConfigurationError(redirectUriEmpty);
        }
      } else {
        addRedirectUri(parameters, request.redirectUri);
      }
      addScopes(parameters, request.scopes, true, this.oidcDefaultScopes);
      addAuthorizationCode(parameters, request.code);
      addLibraryInfo(parameters, this.config.libraryInfo);
      addApplicationTelemetry(parameters, this.config.telemetry.application);
      addThrottling(parameters);
      if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
        addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      if (request.codeVerifier) {
        addCodeVerifier(parameters, request.codeVerifier);
      }
      if (this.config.clientCredentials.clientSecret) {
        addClientSecret(parameters, this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        const clientAssertion = this.config.clientCredentials.clientAssertion;
        addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        addClientAssertionType(parameters, clientAssertion.assertionType);
      }
      addGrantType(parameters, GrantType.AUTHORIZATION_CODE_GRANT);
      addClientInfo(parameters);
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
        let reqCnfData;
        if (!request.popKid) {
          const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
          reqCnfData = generatedReqCnfData.reqCnfString;
        } else {
          reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
        }
        addPopToken(parameters, reqCnfData);
      } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
        if (request.sshJwk) {
          addSshJwk(parameters, request.sshJwk);
        } else {
          throw createClientConfigurationError(missingSshJwk);
        }
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      let ccsCred = void 0;
      if (request.clientInfo) {
        try {
          const clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils.base64Decode);
          ccsCred = {
            credential: `${clientInfo.uid}${Separators.CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
            type: CcsCredentialType.HOME_ACCOUNT_ID
          };
        } catch (e) {
          this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
      } else {
        ccsCred = request.ccsCredential;
      }
      if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
        switch (ccsCred.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
              addCcsOid(parameters, clientInfo);
            } catch (e) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
            }
            break;
          case CcsCredentialType.UPN:
            addCcsUpn(parameters, ccsCred.credential);
            break;
        }
      }
      if (request.embeddedClientId) {
        addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      }
      if (request.tokenBodyParameters) {
        addExtraQueryParameters(parameters, request.tokenBodyParameters);
      }
      if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[RETURN_SPA_CODE])) {
        addExtraQueryParameters(parameters, {
          [RETURN_SPA_CODE]: "1"
        });
      }
      instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
      return mapToQueryString(parameters);
    }
    /**
     * This API validates the `EndSessionRequest` and creates a URL
     * @param request
     */
    createLogoutUrlQueryString(request) {
      const parameters = /* @__PURE__ */ new Map();
      if (request.postLogoutRedirectUri) {
        addPostLogoutRedirectUri(parameters, request.postLogoutRedirectUri);
      }
      if (request.correlationId) {
        addCorrelationId(parameters, request.correlationId);
      }
      if (request.idTokenHint) {
        addIdTokenHint(parameters, request.idTokenHint);
      }
      if (request.state) {
        addState(parameters, request.state);
      }
      if (request.logoutHint) {
        addLogoutHint(parameters, request.logoutHint);
      }
      if (request.extraQueryParameters) {
        addExtraQueryParameters(parameters, request.extraQueryParameters);
      }
      if (this.config.authOptions.instanceAware) {
        addInstanceAware(parameters);
      }
      return mapToQueryString(parameters, this.config.authOptions.encodeExtraQueryParams, request.extraQueryParameters);
    }
  };

  // node_modules/@azure/msal-common/dist/client/RefreshTokenClient.mjs
  var DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS = 300;
  var RefreshTokenClient = class extends BaseClient {
    constructor(configuration, performanceClient) {
      super(configuration, performanceClient);
    }
    async acquireToken(request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
      const reqTimestamp = nowSeconds();
      const response = await invokeAsync(this.executeTokenRequest.bind(this), PerformanceEvents.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(request, this.authority);
      const requestId = response.headers?.[HeaderNames.X_MS_REQUEST_ID];
      const responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
      responseHandler.validateTokenResponse(response.body);
      return invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents.HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, void 0, void 0, true, request.forceCache, requestId);
    }
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */
    async acquireTokenByRefreshToken(request) {
      if (!request) {
        throw createClientConfigurationError(tokenRequestEmpty);
      }
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, request.correlationId);
      if (!request.account) {
        throw createClientAuthError(noAccountInSilentRequest);
      }
      const isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment);
      if (isFOCI) {
        try {
          return await invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, true);
        } catch (e) {
          const noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === noTokensFound;
          const clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
          if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
            return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
          } else {
            throw e;
          }
        }
      }
      return invokeAsync(this.acquireTokenWithCachedRefreshToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
    }
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */
    async acquireTokenWithCachedRefreshToken(request, foci) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
      const refreshToken = invoke(this.cacheManager.getRefreshToken.bind(this.cacheManager), PerformanceEvents.CacheManagerGetRefreshToken, this.logger, this.performanceClient, request.correlationId)(request.account, foci, request.correlationId, void 0, this.performanceClient);
      if (!refreshToken) {
        throw createInteractionRequiredAuthError(noTokensFound);
      }
      if (refreshToken.expiresOn && isTokenExpired(refreshToken.expiresOn, request.refreshTokenExpirationOffsetSeconds || DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS)) {
        this.performanceClient?.addFields({ rtExpiresOnMs: Number(refreshToken.expiresOn) }, request.correlationId);
        throw createInteractionRequiredAuthError(refreshTokenExpired);
      }
      const refreshTokenRequest = {
        ...request,
        refreshToken: refreshToken.secret,
        authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER,
        ccsCredential: {
          credential: request.account.homeAccountId,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        }
      };
      try {
        return await invokeAsync(this.acquireToken.bind(this), PerformanceEvents.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(refreshTokenRequest);
      } catch (e) {
        if (e instanceof InteractionRequiredAuthError) {
          this.performanceClient?.addFields({ rtExpiresOnMs: Number(refreshToken.expiresOn) }, request.correlationId);
          if (e.subError === badToken) {
            this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
            const badRefreshTokenKey = this.cacheManager.generateCredentialKey(refreshToken);
            this.cacheManager.removeRefreshToken(badRefreshTokenKey, request.correlationId);
          }
        }
        throw e;
      }
    }
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */
    async executeTokenRequest(request, authority) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
      const queryParametersString = this.createTokenQueryParameters(request);
      const endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
      const requestBody = await invokeAsync(this.createTokenRequestBody.bind(this), PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
      const headers = this.createTokenRequestHeaders(request.ccsCredential);
      const thumbprint = getRequestThumbprint(this.config.authOptions.clientId, request);
      return invokeAsync(this.executePostToTokenEndpoint.bind(this), PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, PerformanceEvents.RefreshTokenClientExecutePostToTokenEndpoint);
    }
    /**
     * Helper function to create the token request body
     * @param request
     */
    async createTokenRequestBody(request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, request.correlationId);
      const parameters = /* @__PURE__ */ new Map();
      addClientId(parameters, request.embeddedClientId || request.tokenBodyParameters?.[CLIENT_ID] || this.config.authOptions.clientId);
      if (request.redirectUri) {
        addRedirectUri(parameters, request.redirectUri);
      }
      addScopes(parameters, request.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
      addGrantType(parameters, GrantType.REFRESH_TOKEN_GRANT);
      addClientInfo(parameters);
      addLibraryInfo(parameters, this.config.libraryInfo);
      addApplicationTelemetry(parameters, this.config.telemetry.application);
      addThrottling(parameters);
      if (this.serverTelemetryManager && !isOidcProtocolMode(this.config)) {
        addServerTelemetry(parameters, this.serverTelemetryManager);
      }
      addRefreshToken(parameters, request.refreshToken);
      if (this.config.clientCredentials.clientSecret) {
        addClientSecret(parameters, this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        const clientAssertion = this.config.clientCredentials.clientAssertion;
        addClientAssertion(parameters, await getClientAssertion(clientAssertion.assertion, this.config.authOptions.clientId, request.resourceRequestUri));
        addClientAssertionType(parameters, clientAssertion.assertionType);
      }
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
        let reqCnfData;
        if (!request.popKid) {
          const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
          reqCnfData = generatedReqCnfData.reqCnfString;
        } else {
          reqCnfData = this.cryptoUtils.encodeKid(request.popKid);
        }
        addPopToken(parameters, reqCnfData);
      } else if (request.authenticationScheme === AuthenticationScheme.SSH) {
        if (request.sshJwk) {
          addSshJwk(parameters, request.sshJwk);
        } else {
          throw createClientConfigurationError(missingSshJwk);
        }
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        addClaims(parameters, request.claims, this.config.authOptions.clientCapabilities);
      }
      if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
        switch (request.ccsCredential.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              const clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
              addCcsOid(parameters, clientInfo);
            } catch (e) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
            }
            break;
          case CcsCredentialType.UPN:
            addCcsUpn(parameters, request.ccsCredential.credential);
            break;
        }
      }
      if (request.embeddedClientId) {
        addBrokerParameters(parameters, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
      }
      if (request.tokenBodyParameters) {
        addExtraQueryParameters(parameters, request.tokenBodyParameters);
      }
      instrumentBrokerParams(parameters, request.correlationId, this.performanceClient);
      return mapToQueryString(parameters);
    }
  };

  // node_modules/@azure/msal-common/dist/client/SilentFlowClient.mjs
  var SilentFlowClient = class extends BaseClient {
    constructor(configuration, performanceClient) {
      super(configuration, performanceClient);
    }
    /**
     * Retrieves token from cache or throws an error if it must be refreshed.
     * @param request
     */
    async acquireCachedToken(request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.SilentFlowClientAcquireCachedToken, request.correlationId);
      let lastCacheOutcome = CacheOutcome.NOT_APPLICABLE;
      if (request.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !StringUtils.isEmptyObj(request.claims)) {
        this.setCacheOutcome(CacheOutcome.FORCE_REFRESH_OR_CLAIMS, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      }
      if (!request.account) {
        throw createClientAuthError(noAccountInSilentRequest);
      }
      const requestTenantId = request.account.tenantId || getTenantFromAuthorityString(request.authority);
      const tokenKeys = this.cacheManager.getTokenKeys();
      const cachedAccessToken = this.cacheManager.getAccessToken(request.account, request, tokenKeys, requestTenantId);
      if (!cachedAccessToken) {
        this.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      } else if (wasClockTurnedBack(cachedAccessToken.cachedAt) || isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
        this.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED, request.correlationId);
        throw createClientAuthError(tokenRefreshRequired);
      } else if (cachedAccessToken.refreshOn && isTokenExpired(cachedAccessToken.refreshOn, 0)) {
        lastCacheOutcome = CacheOutcome.PROACTIVELY_REFRESHED;
      }
      const environment = request.authority || this.authority.getPreferredCache();
      const cacheRecord = {
        account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(request.account), request.correlationId),
        accessToken: cachedAccessToken,
        idToken: this.cacheManager.getIdToken(request.account, request.correlationId, tokenKeys, requestTenantId, this.performanceClient),
        refreshToken: null,
        appMetadata: this.cacheManager.readAppMetadataFromCache(environment)
      };
      this.setCacheOutcome(lastCacheOutcome, request.correlationId);
      if (this.config.serverTelemetryManager) {
        this.config.serverTelemetryManager.incrementCacheHits();
      }
      return [
        await invokeAsync(this.generateResultFromCacheRecord.bind(this), PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, request.correlationId)(cacheRecord, request),
        lastCacheOutcome
      ];
    }
    setCacheOutcome(cacheOutcome, correlationId) {
      this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
      this.performanceClient?.addFields({
        cacheOutcome
      }, correlationId);
      if (cacheOutcome !== CacheOutcome.NOT_APPLICABLE) {
        this.logger.info(`Token refresh is required due to cache outcome: ${cacheOutcome}`);
      }
    }
    /**
     * Helper function to build response object from the CacheRecord
     * @param cacheRecord
     */
    async generateResultFromCacheRecord(cacheRecord, request) {
      this.performanceClient?.addQueueMeasurement(PerformanceEvents.SilentFlowClientGenerateResultFromCacheRecord, request.correlationId);
      let idTokenClaims;
      if (cacheRecord.idToken) {
        idTokenClaims = extractTokenClaims(cacheRecord.idToken.secret, this.config.cryptoInterface.base64Decode);
      }
      if (request.maxAge || request.maxAge === 0) {
        const authTime = idTokenClaims?.auth_time;
        if (!authTime) {
          throw createClientAuthError(authTimeNotFound);
        }
        checkMaxAge(authTime, request.maxAge);
      }
      return ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenClaims);
    }
  };

  // node_modules/@azure/msal-common/dist/network/INetworkModule.mjs
  var StubbedNetworkModule = {
    sendGetRequestAsync: () => {
      return Promise.reject(createClientAuthError(methodNotImplemented));
    },
    sendPostRequestAsync: () => {
      return Promise.reject(createClientAuthError(methodNotImplemented));
    }
  };

  // node_modules/@azure/msal-common/dist/protocol/Authorize.mjs
  var Authorize_exports = {};
  __export(Authorize_exports, {
    getAuthorizationCodePayload: () => getAuthorizationCodePayload,
    getAuthorizeUrl: () => getAuthorizeUrl,
    getStandardAuthorizeRequestParameters: () => getStandardAuthorizeRequestParameters,
    validateAuthorizationResponse: () => validateAuthorizationResponse
  });
  function getStandardAuthorizeRequestParameters(authOptions, request, logger, performanceClient) {
    const correlationId = request.correlationId;
    const parameters = /* @__PURE__ */ new Map();
    addClientId(parameters, request.embeddedClientId || request.extraQueryParameters?.[CLIENT_ID] || authOptions.clientId);
    const requestScopes = [
      ...request.scopes || [],
      ...request.extraScopesToConsent || []
    ];
    addScopes(parameters, requestScopes, true, authOptions.authority.options.OIDCOptions?.defaultScopes);
    addRedirectUri(parameters, request.redirectUri);
    addCorrelationId(parameters, correlationId);
    addResponseMode(parameters, request.responseMode);
    addClientInfo(parameters);
    if (request.prompt) {
      addPrompt(parameters, request.prompt);
      performanceClient?.addFields({ prompt: request.prompt }, correlationId);
    }
    if (request.domainHint) {
      addDomainHint(parameters, request.domainHint);
      performanceClient?.addFields({ domainHintFromRequest: true }, correlationId);
    }
    if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
      if (request.sid && request.prompt === PromptValue.NONE) {
        logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
        addSid(parameters, request.sid);
        performanceClient?.addFields({ sidFromRequest: true }, correlationId);
      } else if (request.account) {
        const accountSid = extractAccountSid(request.account);
        let accountLoginHintClaim = extractLoginHint(request.account);
        if (accountLoginHintClaim && request.domainHint) {
          logger.warning(`AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint`);
          accountLoginHintClaim = null;
        }
        if (accountLoginHintClaim) {
          logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
          addLoginHint(parameters, accountLoginHintClaim);
          performanceClient?.addFields({ loginHintFromClaim: true }, correlationId);
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
          }
        } else if (accountSid && request.prompt === PromptValue.NONE) {
          logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
          addSid(parameters, accountSid);
          performanceClient?.addFields({ sidFromClaim: true }, correlationId);
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
          }
        } else if (request.loginHint) {
          logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
          addLoginHint(parameters, request.loginHint);
          addCcsUpn(parameters, request.loginHint);
          performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
        } else if (request.account.username) {
          logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
          addLoginHint(parameters, request.account.username);
          performanceClient?.addFields({ loginHintFromUpn: true }, correlationId);
          try {
            const clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
            addCcsOid(parameters, clientInfo);
          } catch (e) {
            logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
          }
        }
      } else if (request.loginHint) {
        logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
        addLoginHint(parameters, request.loginHint);
        addCcsUpn(parameters, request.loginHint);
        performanceClient?.addFields({ loginHintFromRequest: true }, correlationId);
      }
    } else {
      logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
    }
    if (request.nonce) {
      addNonce(parameters, request.nonce);
    }
    if (request.state) {
      addState(parameters, request.state);
    }
    if (request.claims || authOptions.clientCapabilities && authOptions.clientCapabilities.length > 0) {
      addClaims(parameters, request.claims, authOptions.clientCapabilities);
    }
    if (request.embeddedClientId) {
      addBrokerParameters(parameters, authOptions.clientId, authOptions.redirectUri);
    }
    if (authOptions.instanceAware && (!request.extraQueryParameters || !Object.keys(request.extraQueryParameters).includes(INSTANCE_AWARE))) {
      addInstanceAware(parameters);
    }
    return parameters;
  }
  function getAuthorizeUrl(authority, requestParameters, encodeParams, extraQueryParameters) {
    const queryString = mapToQueryString(requestParameters, encodeParams, extraQueryParameters);
    return UrlString.appendQueryString(authority.authorizationEndpoint, queryString);
  }
  function getAuthorizationCodePayload(serverParams, cachedState) {
    validateAuthorizationResponse(serverParams, cachedState);
    if (!serverParams.code) {
      throw createClientAuthError(authorizationCodeMissingFromServerResponse);
    }
    return serverParams;
  }
  function validateAuthorizationResponse(serverResponse, requestState) {
    if (!serverResponse.state || !requestState) {
      throw serverResponse.state ? createClientAuthError(stateNotFound, "Cached State") : createClientAuthError(stateNotFound, "Server State");
    }
    let decodedServerResponseState;
    let decodedRequestState;
    try {
      decodedServerResponseState = decodeURIComponent(serverResponse.state);
    } catch (e) {
      throw createClientAuthError(invalidState, serverResponse.state);
    }
    try {
      decodedRequestState = decodeURIComponent(requestState);
    } catch (e) {
      throw createClientAuthError(invalidState, serverResponse.state);
    }
    if (decodedServerResponseState !== decodedRequestState) {
      throw createClientAuthError(stateMismatch);
    }
    if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
      const serverErrorNo = parseServerErrorNo(serverResponse);
      if (isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
        throw new InteractionRequiredAuthError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.correlation_id || "", serverResponse.claims || "", serverErrorNo);
      }
      throw new ServerError(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverErrorNo);
    }
  }
  function parseServerErrorNo(serverResponse) {
    const errorCodePrefix = "code=";
    const errorCodePrefixIndex = serverResponse.error_uri?.lastIndexOf(errorCodePrefix);
    return errorCodePrefixIndex && errorCodePrefixIndex >= 0 ? serverResponse.error_uri?.substring(errorCodePrefixIndex + errorCodePrefix.length) : void 0;
  }
  function extractAccountSid(account2) {
    return account2.idTokenClaims?.sid || null;
  }
  function extractLoginHint(account2) {
    return account2.loginHint || account2.idTokenClaims?.login_hint || null;
  }

  // node_modules/@azure/msal-common/dist/request/AuthenticationHeaderParser.mjs
  var AuthenticationHeaderParser = class {
    constructor(headers) {
      this.headers = headers;
    }
    /**
     * This method parses the SHR nonce value out of either the Authentication-Info or WWW-Authenticate authentication headers.
     * @returns
     */
    getShrNonce() {
      const authenticationInfo = this.headers[HeaderNames.AuthenticationInfo];
      if (authenticationInfo) {
        const authenticationInfoChallenges = this.parseChallenges(authenticationInfo);
        if (authenticationInfoChallenges.nextnonce) {
          return authenticationInfoChallenges.nextnonce;
        }
        throw createClientConfigurationError(invalidAuthenticationHeader);
      }
      const wwwAuthenticate = this.headers[HeaderNames.WWWAuthenticate];
      if (wwwAuthenticate) {
        const wwwAuthenticateChallenges = this.parseChallenges(wwwAuthenticate);
        if (wwwAuthenticateChallenges.nonce) {
          return wwwAuthenticateChallenges.nonce;
        }
        throw createClientConfigurationError(invalidAuthenticationHeader);
      }
      throw createClientConfigurationError(missingNonceAuthenticationHeader);
    }
    /**
     * Parses an HTTP header's challenge set into a key/value map.
     * @param header
     * @returns
     */
    parseChallenges(header) {
      const schemeSeparator = header.indexOf(" ");
      const challenges = header.substr(schemeSeparator + 1).split(",");
      const challengeMap = {};
      challenges.forEach((challenge) => {
        const [key, value] = challenge.split("=");
        challengeMap[key] = unescape(value.replace(/['"]+/g, Constants.EMPTY_STRING));
      });
      return challengeMap;
    }
  };

  // node_modules/@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs
  var skuGroupSeparator = ",";
  var skuValueSeparator = "|";
  function makeExtraSkuString(params) {
    const { skus, libraryName, libraryVersion, extensionName, extensionVersion } = params;
    const skuMap = /* @__PURE__ */ new Map([
      [0, [libraryName, libraryVersion]],
      [2, [extensionName, extensionVersion]]
    ]);
    let skuArr = [];
    if (skus?.length) {
      skuArr = skus.split(skuGroupSeparator);
      if (skuArr.length < 4) {
        return skus;
      }
    } else {
      skuArr = Array.from({ length: 4 }, () => skuValueSeparator);
    }
    skuMap.forEach((value, key) => {
      if (value.length === 2 && value[0]?.length && value[1]?.length) {
        setSku({
          skuArr,
          index: key,
          skuName: value[0],
          skuVersion: value[1]
        });
      }
    });
    return skuArr.join(skuGroupSeparator);
  }
  function setSku(params) {
    const { skuArr, index, skuName, skuVersion } = params;
    if (index >= skuArr.length) {
      return;
    }
    skuArr[index] = [skuName, skuVersion].join(skuValueSeparator);
  }
  var ServerTelemetryManager = class _ServerTelemetryManager {
    constructor(telemetryRequest, cacheManager) {
      this.cacheOutcome = CacheOutcome.NOT_APPLICABLE;
      this.cacheManager = cacheManager;
      this.apiId = telemetryRequest.apiId;
      this.correlationId = telemetryRequest.correlationId;
      this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
      this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
      this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    /**
     * API to add MSER Telemetry to request
     */
    generateCurrentRequestHeaderValue() {
      const request = `${this.apiId}${SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR}${this.cacheOutcome}`;
      const platformFieldsArr = [this.wrapperSKU, this.wrapperVer];
      const nativeBrokerErrorCode = this.getNativeBrokerErrorCode();
      if (nativeBrokerErrorCode?.length) {
        platformFieldsArr.push(`broker_error=${nativeBrokerErrorCode}`);
      }
      const platformFields = platformFieldsArr.join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      const regionDiscoveryFields = this.getRegionDiscoveryFields();
      const requestWithRegionDiscoveryFields = [
        request,
        regionDiscoveryFields
      ].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      return [
        SERVER_TELEM_CONSTANTS.SCHEMA_VERSION,
        requestWithRegionDiscoveryFields,
        platformFields
      ].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    }
    /**
     * API to add MSER Telemetry for the last failed request
     */
    generateLastRequestHeaderValue() {
      const lastRequests = this.getLastRequests();
      const maxErrors = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
      const failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      const errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      const errorCount = lastRequests.errors.length;
      const overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
      const platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      return [
        SERVER_TELEM_CONSTANTS.SCHEMA_VERSION,
        lastRequests.cacheHits,
        failedRequests,
        errors,
        platformFields
      ].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    }
    /**
     * API to cache token failures for MSER data capture
     * @param error
     */
    cacheFailedRequest(error) {
      const lastRequests = this.getLastRequests();
      if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
        lastRequests.failedRequests.shift();
        lastRequests.failedRequests.shift();
        lastRequests.errors.shift();
      }
      lastRequests.failedRequests.push(this.apiId, this.correlationId);
      if (error instanceof Error && !!error && error.toString()) {
        if (error instanceof AuthError) {
          if (error.subError) {
            lastRequests.errors.push(error.subError);
          } else if (error.errorCode) {
            lastRequests.errors.push(error.errorCode);
          } else {
            lastRequests.errors.push(error.toString());
          }
        } else {
          lastRequests.errors.push(error.toString());
        }
      } else {
        lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
      }
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
      return;
    }
    /**
     * Update server telemetry cache entry by incrementing cache hit counter
     */
    incrementCacheHits() {
      const lastRequests = this.getLastRequests();
      lastRequests.cacheHits += 1;
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
      return lastRequests.cacheHits;
    }
    /**
     * Get the server telemetry entity from cache or initialize a new one
     */
    getLastRequests() {
      const initialValue = {
        failedRequests: [],
        errors: [],
        cacheHits: 0
      };
      const lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return lastRequests || initialValue;
    }
    /**
     * Remove server telemetry cache entry
     */
    clearTelemetryCache() {
      const lastRequests = this.getLastRequests();
      const numErrorsFlushed = _ServerTelemetryManager.maxErrorsToSend(lastRequests);
      const errorCount = lastRequests.errors.length;
      if (numErrorsFlushed === errorCount) {
        this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
      } else {
        const serverTelemEntity = {
          failedRequests: lastRequests.failedRequests.slice(numErrorsFlushed * 2),
          errors: lastRequests.errors.slice(numErrorsFlushed),
          cacheHits: 0
        };
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity, this.correlationId);
      }
    }
    /**
     * Returns the maximum number of errors that can be flushed to the server in the next network request
     * @param serverTelemetryEntity
     */
    static maxErrorsToSend(serverTelemetryEntity) {
      let i;
      let maxErrors = 0;
      let dataSize = 0;
      const errorCount = serverTelemetryEntity.errors.length;
      for (i = 0; i < errorCount; i++) {
        const apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
        const correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
        const errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
        dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
        if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
          maxErrors += 1;
        } else {
          break;
        }
      }
      return maxErrors;
    }
    /**
     * Get the region discovery fields
     *
     * @returns string
     */
    getRegionDiscoveryFields() {
      const regionDiscoveryFields = [];
      regionDiscoveryFields.push(this.regionUsed || Constants.EMPTY_STRING);
      regionDiscoveryFields.push(this.regionSource || Constants.EMPTY_STRING);
      regionDiscoveryFields.push(this.regionOutcome || Constants.EMPTY_STRING);
      return regionDiscoveryFields.join(",");
    }
    /**
     * Update the region discovery metadata
     *
     * @param regionDiscoveryMetadata
     * @returns void
     */
    updateRegionDiscoveryMetadata(regionDiscoveryMetadata) {
      this.regionUsed = regionDiscoveryMetadata.region_used;
      this.regionSource = regionDiscoveryMetadata.region_source;
      this.regionOutcome = regionDiscoveryMetadata.region_outcome;
    }
    /**
     * Set cache outcome
     */
    setCacheOutcome(cacheOutcome) {
      this.cacheOutcome = cacheOutcome;
    }
    setNativeBrokerErrorCode(errorCode) {
      const lastRequests = this.getLastRequests();
      lastRequests.nativeBrokerErrorCode = errorCode;
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    }
    getNativeBrokerErrorCode() {
      return this.getLastRequests().nativeBrokerErrorCode;
    }
    clearNativeBrokerErrorCode() {
      const lastRequests = this.getLastRequests();
      delete lastRequests.nativeBrokerErrorCode;
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests, this.correlationId);
    }
    static makeExtraSkuString(params) {
      return makeExtraSkuString(params);
    }
  };

  // node_modules/@azure/msal-common/dist/error/JoseHeaderErrorCodes.mjs
  var missingKidError = "missing_kid_error";
  var missingAlgError = "missing_alg_error";

  // node_modules/@azure/msal-common/dist/error/JoseHeaderError.mjs
  var JoseHeaderErrorMessages = {
    [missingKidError]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
    [missingAlgError]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  };
  var JoseHeaderError = class _JoseHeaderError extends AuthError {
    constructor(errorCode, errorMessage) {
      super(errorCode, errorMessage);
      this.name = "JoseHeaderError";
      Object.setPrototypeOf(this, _JoseHeaderError.prototype);
    }
  };
  function createJoseHeaderError(code) {
    return new JoseHeaderError(code, JoseHeaderErrorMessages[code]);
  }

  // node_modules/@azure/msal-common/dist/crypto/JoseHeader.mjs
  var JoseHeader = class _JoseHeader {
    constructor(options) {
      this.typ = options.typ;
      this.alg = options.alg;
      this.kid = options.kid;
    }
    /**
     * Builds SignedHttpRequest formatted JOSE Header from the
     * JOSE Header options provided or previously set on the object and returns
     * the stringified header object.
     * Throws if keyId or algorithm aren't provided since they are required for Access Token Binding.
     * @param shrHeaderOptions
     * @returns
     */
    static getShrHeaderString(shrHeaderOptions) {
      if (!shrHeaderOptions.kid) {
        throw createJoseHeaderError(missingKidError);
      }
      if (!shrHeaderOptions.alg) {
        throw createJoseHeaderError(missingAlgError);
      }
      const shrHeader = new _JoseHeader({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: shrHeaderOptions.typ || JsonWebTokenTypes.Pop,
        kid: shrHeaderOptions.kid,
        alg: shrHeaderOptions.alg
      });
      return JSON.stringify(shrHeader);
    }
  };

  // node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceClient.mjs
  function startContext(event, abbreviations, stack) {
    if (!stack) {
      return;
    }
    stack.push({
      name: abbreviations.get(event.name) || event.name
    });
  }
  function endContext(event, abbreviations, stack, error) {
    if (!stack?.length) {
      return;
    }
    const peek = (stack2) => {
      return stack2.length ? stack2[stack2.length - 1] : void 0;
    };
    const abbrEventName = abbreviations.get(event.name) || event.name;
    const top = peek(stack);
    if (top?.name !== abbrEventName) {
      return;
    }
    const current = stack?.pop();
    if (!current) {
      return;
    }
    const errorCode = error instanceof AuthError ? error.errorCode : error instanceof Error ? error.name : void 0;
    const subErr = error instanceof AuthError ? error.subError : void 0;
    if (errorCode && current.childErr !== errorCode) {
      current.err = errorCode;
      if (subErr) {
        current.subErr = subErr;
      }
    }
    delete current.name;
    delete current.childErr;
    const context = {
      ...current,
      dur: event.durationMs
    };
    if (!event.success) {
      context.fail = 1;
    }
    const parent = peek(stack);
    if (!parent) {
      return { [abbrEventName]: context };
    }
    if (errorCode) {
      parent.childErr = errorCode;
    }
    let childName;
    if (!parent[abbrEventName]) {
      childName = abbrEventName;
    } else {
      const siblings = Object.keys(parent).filter((key) => key.startsWith(abbrEventName)).length;
      childName = `${abbrEventName}_${siblings + 1}`;
    }
    parent[childName] = context;
    return parent;
  }
  function addError(error, logger, event, stackMaxSize = 5) {
    if (!(error instanceof Error)) {
      logger.trace("PerformanceClient.addErrorStack: Input error is not instance of Error", event.correlationId);
      return;
    } else if (error instanceof AuthError) {
      event.errorCode = error.errorCode;
      event.subErrorCode = error.subError;
      if (error instanceof ServerError || error instanceof InteractionRequiredAuthError) {
        event.serverErrorNo = error.errorNo;
      }
      return;
    } else if (error instanceof CacheError) {
      event.errorCode = error.errorCode;
      return;
    } else if (event.errorStack?.length) {
      logger.trace("PerformanceClient.addErrorStack: Stack already exist", event.correlationId);
      return;
    } else if (!error.stack?.length) {
      logger.trace("PerformanceClient.addErrorStack: Input stack is empty", event.correlationId);
      return;
    }
    if (error.stack) {
      event.errorStack = compactStack(error.stack, stackMaxSize);
    }
    event.errorName = error.name;
  }
  function compactStack(stack, stackMaxSize) {
    if (stackMaxSize < 0) {
      return [];
    }
    const stackArr = stack.split("\n") || [];
    const res = [];
    const firstLine = stackArr[0];
    if (firstLine.startsWith("TypeError: Cannot read property") || firstLine.startsWith("TypeError: Cannot read properties of") || firstLine.startsWith("TypeError: Cannot set property") || firstLine.startsWith("TypeError: Cannot set properties of") || firstLine.endsWith("is not a function")) {
      res.push(compactStackLine(firstLine));
    } else if (firstLine.startsWith("SyntaxError") || firstLine.startsWith("TypeError")) {
      res.push(compactStackLine(
        // Example: SyntaxError: Unexpected token 'e', "test" is not valid JSON -> SyntaxError: Unexpected token <redacted>, <redacted> is not valid JSON
        firstLine.replace(/['].*[']|["].*["]/g, "<redacted>")
      ));
    }
    for (let ix = 1; ix < stackArr.length; ix++) {
      if (res.length >= stackMaxSize) {
        break;
      }
      const line = stackArr[ix];
      res.push(compactStackLine(line));
    }
    return res;
  }
  function compactStackLine(line) {
    const filePathIx = line.lastIndexOf(" ") + 1;
    if (filePathIx < 1) {
      return line;
    }
    const filePath = line.substring(filePathIx);
    let fileNameIx = filePath.lastIndexOf("/");
    fileNameIx = fileNameIx < 0 ? filePath.lastIndexOf("\\") : fileNameIx;
    if (fileNameIx >= 0) {
      return (line.substring(0, filePathIx) + "(" + filePath.substring(fileNameIx + 1) + (filePath.charAt(filePath.length - 1) === ")" ? "" : ")")).trimStart();
    }
    return line.trimStart();
  }
  function getAccountType(account2) {
    const idTokenClaims = account2?.idTokenClaims;
    if (idTokenClaims?.tfp || idTokenClaims?.acr) {
      return "B2C";
    }
    if (!idTokenClaims?.tid) {
      return void 0;
    } else if (idTokenClaims?.tid === "9188040d-6c67-4c5b-b112-36a304b66dad") {
      return "MSA";
    }
    return "AAD";
  }
  var PerformanceClient = class {
    /**
     * Creates an instance of PerformanceClient,
     * an abstract class containing core performance telemetry logic.
     *
     * @constructor
     * @param {string} clientId Client ID of the application
     * @param {string} authority Authority used by the application
     * @param {Logger} logger Logger used by the application
     * @param {string} libraryName Name of the library
     * @param {string} libraryVersion Version of the library
     * @param {ApplicationTelemetry} applicationTelemetry application name and version
     * @param {Set<String>} intFields integer fields to be truncated
     * @param {Map<string, string>} abbreviations event name abbreviations
     */
    constructor(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry, intFields, abbreviations) {
      this.authority = authority;
      this.libraryName = libraryName;
      this.libraryVersion = libraryVersion;
      this.applicationTelemetry = applicationTelemetry;
      this.clientId = clientId;
      this.logger = logger;
      this.callbacks = /* @__PURE__ */ new Map();
      this.eventsByCorrelationId = /* @__PURE__ */ new Map();
      this.eventStack = /* @__PURE__ */ new Map();
      this.queueMeasurements = /* @__PURE__ */ new Map();
      this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
      this.intFields = intFields || /* @__PURE__ */ new Set();
      for (const item of IntFields) {
        this.intFields.add(item);
      }
      this.abbreviations = abbreviations || /* @__PURE__ */ new Map();
      for (const [key, value] of PerformanceEventAbbreviations) {
        this.abbreviations.set(key, value);
      }
    }
    /**
     * Starts and returns an platform-specific implementation of IPerformanceMeasurement.
     * Note: this function can be changed to abstract at the next major version bump.
     *
     * @param {string} measureName
     * @param {string} correlationId
     * @returns {IPerformanceMeasurement}
     * @deprecated This method will be removed in the next major version
     */
    startPerformanceMeasurement(measureName, correlationId) {
      return {};
    }
    /**
     * Gets map of pre-queue times by correlation Id
     *
     * @param {PerformanceEvents} eventName
     * @param {string} correlationId
     * @returns {number}
     */
    getPreQueueTime(eventName, correlationId) {
      const preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
      if (!preQueueEvent) {
        this.logger.trace(`PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: ${correlationId}, unable to add queue measurement`);
        return;
      } else if (preQueueEvent.name !== eventName) {
        this.logger.trace(`PerformanceClient.getPreQueueTime: no pre-queue time found for ${eventName}, unable to add queue measurement`);
        return;
      }
      return preQueueEvent.time;
    }
    /**
     * Calculates the difference between current time and time when function was queued.
     * Note: It is possible to have 0 as the queue time if the current time and the queued time was the same.
     *
     * @param {number} preQueueTime
     * @param {number} currentTime
     * @returns {number}
     */
    calculateQueuedTime(preQueueTime, currentTime) {
      if (preQueueTime < 1) {
        this.logger.trace(`PerformanceClient: preQueueTime should be a positive integer and not ${preQueueTime}`);
        return 0;
      }
      if (currentTime < 1) {
        this.logger.trace(`PerformanceClient: currentTime should be a positive integer and not ${currentTime}`);
        return 0;
      }
      if (currentTime < preQueueTime) {
        this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved");
        return 0;
      }
      return currentTime - preQueueTime;
    }
    /**
     * Adds queue measurement time to QueueMeasurements array for given correlation ID.
     *
     * @param {PerformanceEvents} eventName
     * @param {?string} correlationId
     * @param {?number} queueTime
     * @param {?boolean} manuallyCompleted - indicator for manually completed queue measurements
     * @returns
     */
    addQueueMeasurement(eventName, correlationId, queueTime, manuallyCompleted) {
      if (!correlationId) {
        this.logger.trace(`PerformanceClient.addQueueMeasurement: correlationId not provided for ${eventName}, cannot add queue measurement`);
        return;
      }
      if (queueTime === 0) {
        this.logger.trace(`PerformanceClient.addQueueMeasurement: queue time provided for ${eventName} is ${queueTime}`);
      } else if (!queueTime) {
        this.logger.trace(`PerformanceClient.addQueueMeasurement: no queue time provided for ${eventName}`);
        return;
      }
      const queueMeasurement = {
        eventName,
        // Always default queue time to 0 for manually completed (improperly instrumented)
        queueTime: manuallyCompleted ? 0 : queueTime,
        manuallyCompleted
      };
      const existingMeasurements = this.queueMeasurements.get(correlationId);
      if (existingMeasurements) {
        existingMeasurements.push(queueMeasurement);
        this.queueMeasurements.set(correlationId, existingMeasurements);
      } else {
        this.logger.trace(`PerformanceClient.addQueueMeasurement: adding correlationId ${correlationId} to queue measurements`);
        const measurementArray = [queueMeasurement];
        this.queueMeasurements.set(correlationId, measurementArray);
      }
      this.preQueueTimeByCorrelationId.delete(correlationId);
    }
    /**
     * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
     *
     * @param {PerformanceEvents} measureName
     * @param {?string} [correlationId]
     * @returns {InProgressPerformanceEvent}
     */
    startMeasurement(measureName, correlationId) {
      const eventCorrelationId = correlationId || this.generateId();
      if (!correlationId) {
        this.logger.info(`PerformanceClient: No correlation id provided for ${measureName}, generating`, eventCorrelationId);
      }
      this.logger.trace(`PerformanceClient: Performance measurement started for ${measureName}`, eventCorrelationId);
      const inProgressEvent = {
        eventId: this.generateId(),
        status: PerformanceEventStatus.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: measureName,
        startTimeMs: Date.now(),
        correlationId: eventCorrelationId,
        appName: this.applicationTelemetry?.appName,
        appVersion: this.applicationTelemetry?.appVersion
      };
      this.cacheEventByCorrelationId(inProgressEvent);
      startContext(inProgressEvent, this.abbreviations, this.eventStack.get(eventCorrelationId));
      return {
        end: (event, error, account2) => {
          return this.endMeasurement({
            // Initial set of event properties
            ...inProgressEvent,
            // Properties set when event ends
            ...event
          }, error, account2);
        },
        discard: () => {
          return this.discardMeasurements(inProgressEvent.correlationId);
        },
        add: (fields) => {
          return this.addFields(fields, inProgressEvent.correlationId);
        },
        increment: (fields) => {
          return this.incrementFields(fields, inProgressEvent.correlationId);
        },
        event: inProgressEvent,
        measurement: new StubPerformanceMeasurement()
      };
    }
    /**
     * Stops measuring the performance for an operation. Should only be called directly by PerformanceClient classes,
     * as consumers should instead use the function returned by startMeasurement.
     * Adds a new field named as "[event name]DurationMs" for sub-measurements, completes and emits an event
     * otherwise.
     *
     * @param {PerformanceEvent} event
     * @param {unknown} error
     * @param {AccountInfo?} account
     * @returns {(PerformanceEvent | null)}
     */
    endMeasurement(event, error, account2) {
      const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
      if (!rootEvent) {
        this.logger.trace(`PerformanceClient: Measurement not found for ${event.eventId}`, event.correlationId);
        return null;
      }
      const isRoot = event.eventId === rootEvent.eventId;
      let queueInfo = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      event.durationMs = Math.round(event.durationMs || this.getDurationMs(event.startTimeMs));
      const context = JSON.stringify(endContext(event, this.abbreviations, this.eventStack.get(rootEvent.correlationId), error));
      if (isRoot) {
        queueInfo = this.getQueueInfo(event.correlationId);
        this.discardMeasurements(rootEvent.correlationId);
      } else {
        rootEvent.incompleteSubMeasurements?.delete(event.eventId);
      }
      this.logger.trace(`PerformanceClient: Performance measurement ended for ${event.name}: ${event.durationMs} ms`, event.correlationId);
      if (error) {
        addError(error, this.logger, rootEvent);
      }
      if (!isRoot) {
        rootEvent[event.name + "DurationMs"] = Math.floor(event.durationMs);
        return { ...rootEvent };
      }
      if (isRoot && !error && (rootEvent.errorCode || rootEvent.subErrorCode)) {
        this.logger.trace(`PerformanceClient: Remove error and sub-error codes for root event ${event.name} as intermediate error was successfully handled`, event.correlationId);
        rootEvent.errorCode = void 0;
        rootEvent.subErrorCode = void 0;
      }
      let finalEvent = { ...rootEvent, ...event };
      let incompleteSubsCount = 0;
      finalEvent.incompleteSubMeasurements?.forEach((subMeasurement) => {
        this.logger.trace(`PerformanceClient: Incomplete submeasurement ${subMeasurement.name} found for ${event.name}`, finalEvent.correlationId);
        incompleteSubsCount++;
      });
      finalEvent.incompleteSubMeasurements = void 0;
      finalEvent = {
        ...finalEvent,
        queuedTimeMs: queueInfo.totalQueueTime,
        queuedCount: queueInfo.totalQueueCount,
        queuedManuallyCompletedCount: queueInfo.manuallyCompletedCount,
        status: PerformanceEventStatus.Completed,
        incompleteSubsCount,
        context
      };
      if (account2) {
        finalEvent.accountType = getAccountType(account2);
        finalEvent.dataBoundary = account2.dataBoundary;
      }
      this.truncateIntegralFields(finalEvent);
      this.emitEvents([finalEvent], event.correlationId);
      return finalEvent;
    }
    /**
     * Saves extra information to be emitted when the measurements are flushed
     * @param fields
     * @param correlationId
     */
    addFields(fields, correlationId) {
      this.logger.trace("PerformanceClient: Updating static fields");
      const event = this.eventsByCorrelationId.get(correlationId);
      if (event) {
        this.eventsByCorrelationId.set(correlationId, {
          ...event,
          ...fields
        });
      } else {
        this.logger.trace("PerformanceClient: Event not found for", correlationId);
      }
    }
    /**
     * Increment counters to be emitted when the measurements are flushed
     * @param fields {string[]}
     * @param correlationId {string} correlation identifier
     */
    incrementFields(fields, correlationId) {
      this.logger.trace("PerformanceClient: Updating counters");
      const event = this.eventsByCorrelationId.get(correlationId);
      if (event) {
        for (const counter in fields) {
          if (!event.hasOwnProperty(counter)) {
            event[counter] = 0;
          } else if (isNaN(Number(event[counter]))) {
            return;
          }
          event[counter] += fields[counter];
        }
      } else {
        this.logger.trace("PerformanceClient: Event not found for", correlationId);
      }
    }
    /**
     * Upserts event into event cache.
     * First key is the correlation id, second key is the event id.
     * Allows for events to be grouped by correlation id,
     * and to easily allow for properties on them to be updated.
     *
     * @private
     * @param {PerformanceEvent} event
     */
    cacheEventByCorrelationId(event) {
      const rootEvent = this.eventsByCorrelationId.get(event.correlationId);
      if (rootEvent) {
        this.logger.trace(`PerformanceClient: Performance measurement for ${event.name} added/updated`, event.correlationId);
        rootEvent.incompleteSubMeasurements = rootEvent.incompleteSubMeasurements || /* @__PURE__ */ new Map();
        rootEvent.incompleteSubMeasurements.set(event.eventId, {
          name: event.name,
          startTimeMs: event.startTimeMs
        });
      } else {
        this.logger.trace(`PerformanceClient: Performance measurement for ${event.name} started`, event.correlationId);
        this.eventsByCorrelationId.set(event.correlationId, { ...event });
        this.eventStack.set(event.correlationId, []);
      }
    }
    getQueueInfo(correlationId) {
      const queueMeasurementForCorrelationId = this.queueMeasurements.get(correlationId);
      if (!queueMeasurementForCorrelationId) {
        this.logger.trace(`PerformanceClient: no queue measurements found for for correlationId: ${correlationId}`);
      }
      let totalQueueTime = 0;
      let totalQueueCount = 0;
      let manuallyCompletedCount = 0;
      queueMeasurementForCorrelationId?.forEach((measurement) => {
        totalQueueTime += measurement.queueTime;
        totalQueueCount++;
        manuallyCompletedCount += measurement.manuallyCompleted ? 1 : 0;
      });
      return {
        totalQueueTime,
        totalQueueCount,
        manuallyCompletedCount
      };
    }
    /**
     * Removes measurements and aux data for a given correlation id.
     *
     * @param {string} correlationId
     */
    discardMeasurements(correlationId) {
      this.logger.trace("PerformanceClient: Performance measurements discarded", correlationId);
      this.eventsByCorrelationId.delete(correlationId);
      this.logger.trace("PerformanceClient: QueueMeasurements discarded", correlationId);
      this.queueMeasurements.delete(correlationId);
      this.logger.trace("PerformanceClient: Pre-queue times discarded", correlationId);
      this.preQueueTimeByCorrelationId.delete(correlationId);
      this.logger.trace("PerformanceClient: Event stack discarded", correlationId);
      this.eventStack.delete(correlationId);
    }
    /**
     * Registers a callback function to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */
    addPerformanceCallback(callback) {
      for (const [id, cb] of this.callbacks) {
        if (cb.toString() === callback.toString()) {
          this.logger.warning(`PerformanceClient: Performance callback is already registered with id: ${id}`);
          return id;
        }
      }
      const callbackId = this.generateId();
      this.callbacks.set(callbackId, callback);
      this.logger.verbose(`PerformanceClient: Performance callback registered with id: ${callbackId}`);
      return callbackId;
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */
    removePerformanceCallback(callbackId) {
      const result = this.callbacks.delete(callbackId);
      if (result) {
        this.logger.verbose(`PerformanceClient: Performance callback ${callbackId} removed.`);
      } else {
        this.logger.verbose(`PerformanceClient: Performance callback ${callbackId} not removed.`);
      }
      return result;
    }
    /**
     * Emits events to all registered callbacks.
     *
     * @param {PerformanceEvent[]} events
     * @param {?string} [correlationId]
     */
    emitEvents(events, correlationId) {
      this.logger.verbose("PerformanceClient: Emitting performance events", correlationId);
      this.callbacks.forEach((callback, callbackId) => {
        this.logger.trace(`PerformanceClient: Emitting event to callback ${callbackId}`, correlationId);
        callback.apply(null, [events]);
      });
    }
    /**
     * Enforce truncation of integral fields in performance event.
     * @param {PerformanceEvent} event performance event to update.
     */
    truncateIntegralFields(event) {
      this.intFields.forEach((key) => {
        if (key in event && typeof event[key] === "number") {
          event[key] = Math.floor(event[key]);
        }
      });
    }
    /**
     * Returns event duration in milliseconds
     * @param startTimeMs {number}
     * @returns {number}
     */
    getDurationMs(startTimeMs) {
      const durationMs = Date.now() - startTimeMs;
      return durationMs < 0 ? durationMs : 0;
    }
  };

  // node_modules/@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs
  var BrowserAuthErrorCodes_exports = {};
  __export(BrowserAuthErrorCodes_exports, {
    authCodeOrNativeAccountIdRequired: () => authCodeOrNativeAccountIdRequired,
    authCodeRequired: () => authCodeRequired,
    authRequestNotSetError: () => authRequestNotSetError,
    blockIframeReload: () => blockIframeReload,
    blockNestedPopups: () => blockNestedPopups,
    cryptoKeyNotFound: () => cryptoKeyNotFound,
    cryptoNonExistent: () => cryptoNonExistent,
    databaseNotOpen: () => databaseNotOpen,
    databaseUnavailable: () => databaseUnavailable,
    earJweEmpty: () => earJweEmpty,
    earJwkEmpty: () => earJwkEmpty,
    emptyNavigateUri: () => emptyNavigateUri,
    emptyWindowError: () => emptyWindowError,
    failedToBuildHeaders: () => failedToBuildHeaders,
    failedToDecryptEarResponse: () => failedToDecryptEarResponse,
    failedToParseHeaders: () => failedToParseHeaders,
    failedToParseResponse: () => failedToParseResponse,
    getRequestFailed: () => getRequestFailed,
    hashDoesNotContainKnownProperties: () => hashDoesNotContainKnownProperties,
    hashEmptyError: () => hashEmptyError,
    iframeClosedPrematurely: () => iframeClosedPrematurely,
    interactionInProgress: () => interactionInProgress,
    invalidBase64String: () => invalidBase64String,
    invalidCacheType: () => invalidCacheType,
    invalidPopTokenRequest: () => invalidPopTokenRequest,
    monitorPopupTimeout: () => monitorPopupTimeout,
    monitorWindowTimeout: () => monitorWindowTimeout,
    nativeConnectionNotEstablished: () => nativeConnectionNotEstablished,
    nativeExtensionNotInstalled: () => nativeExtensionNotInstalled,
    nativeHandshakeTimeout: () => nativeHandshakeTimeout,
    nativePromptNotSupported: () => nativePromptNotSupported,
    noAccountError: () => noAccountError,
    noNetworkConnectivity: () => noNetworkConnectivity2,
    noStateInHash: () => noStateInHash,
    noTokenRequestCacheError: () => noTokenRequestCacheError,
    nonBrowserEnvironment: () => nonBrowserEnvironment,
    pkceNotCreated: () => pkceNotCreated,
    popupWindowError: () => popupWindowError,
    postRequestFailed: () => postRequestFailed2,
    redirectInIframe: () => redirectInIframe,
    silentLogoutUnsupported: () => silentLogoutUnsupported,
    silentPromptValueError: () => silentPromptValueError,
    spaCodeAndNativeAccountIdPresent: () => spaCodeAndNativeAccountIdPresent,
    stateInteractionTypeMismatch: () => stateInteractionTypeMismatch,
    timedOut: () => timedOut,
    unableToAcquireTokenFromNativePlatform: () => unableToAcquireTokenFromNativePlatform,
    unableToLoadToken: () => unableToLoadToken,
    unableToParseState: () => unableToParseState,
    unableToParseTokenRequestCacheError: () => unableToParseTokenRequestCacheError,
    uninitializedPublicClientApplication: () => uninitializedPublicClientApplication,
    userCancelled: () => userCancelled
  });
  var pkceNotCreated = "pkce_not_created";
  var earJwkEmpty = "ear_jwk_empty";
  var earJweEmpty = "ear_jwe_empty";
  var cryptoNonExistent = "crypto_nonexistent";
  var emptyNavigateUri = "empty_navigate_uri";
  var hashEmptyError = "hash_empty_error";
  var noStateInHash = "no_state_in_hash";
  var hashDoesNotContainKnownProperties = "hash_does_not_contain_known_properties";
  var unableToParseState = "unable_to_parse_state";
  var stateInteractionTypeMismatch = "state_interaction_type_mismatch";
  var interactionInProgress = "interaction_in_progress";
  var popupWindowError = "popup_window_error";
  var emptyWindowError = "empty_window_error";
  var userCancelled = "user_cancelled";
  var monitorPopupTimeout = "monitor_popup_timeout";
  var monitorWindowTimeout = "monitor_window_timeout";
  var redirectInIframe = "redirect_in_iframe";
  var blockIframeReload = "block_iframe_reload";
  var blockNestedPopups = "block_nested_popups";
  var iframeClosedPrematurely = "iframe_closed_prematurely";
  var silentLogoutUnsupported = "silent_logout_unsupported";
  var noAccountError = "no_account_error";
  var silentPromptValueError = "silent_prompt_value_error";
  var noTokenRequestCacheError = "no_token_request_cache_error";
  var unableToParseTokenRequestCacheError = "unable_to_parse_token_request_cache_error";
  var authRequestNotSetError = "auth_request_not_set_error";
  var invalidCacheType = "invalid_cache_type";
  var nonBrowserEnvironment = "non_browser_environment";
  var databaseNotOpen = "database_not_open";
  var noNetworkConnectivity2 = "no_network_connectivity";
  var postRequestFailed2 = "post_request_failed";
  var getRequestFailed = "get_request_failed";
  var failedToParseResponse = "failed_to_parse_response";
  var unableToLoadToken = "unable_to_load_token";
  var cryptoKeyNotFound = "crypto_key_not_found";
  var authCodeRequired = "auth_code_required";
  var authCodeOrNativeAccountIdRequired = "auth_code_or_nativeAccountId_required";
  var spaCodeAndNativeAccountIdPresent = "spa_code_and_nativeAccountId_present";
  var databaseUnavailable = "database_unavailable";
  var unableToAcquireTokenFromNativePlatform = "unable_to_acquire_token_from_native_platform";
  var nativeHandshakeTimeout = "native_handshake_timeout";
  var nativeExtensionNotInstalled = "native_extension_not_installed";
  var nativeConnectionNotEstablished = "native_connection_not_established";
  var uninitializedPublicClientApplication = "uninitialized_public_client_application";
  var nativePromptNotSupported = "native_prompt_not_supported";
  var invalidBase64String = "invalid_base64_string";
  var invalidPopTokenRequest = "invalid_pop_token_request";
  var failedToBuildHeaders = "failed_to_build_headers";
  var failedToParseHeaders = "failed_to_parse_headers";
  var failedToDecryptEarResponse = "failed_to_decrypt_ear_response";
  var timedOut = "timed_out";

  // node_modules/@azure/msal-browser/dist/error/BrowserAuthError.mjs
  var ErrorLink = "For more visit: aka.ms/msaljs/browser-errors";
  var BrowserAuthErrorMessages = {
    [pkceNotCreated]: "The PKCE code challenge and verifier could not be generated.",
    [earJwkEmpty]: "No EAR encryption key provided. This is unexpected.",
    [earJweEmpty]: "Server response does not contain ear_jwe property. This is unexpected.",
    [cryptoNonExistent]: "The crypto object or function is not available.",
    [emptyNavigateUri]: "Navigation URI is empty. Please check stack trace for more info.",
    [hashEmptyError]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${ErrorLink}`,
    [noStateInHash]: "Hash does not contain state. Please verify that the request originated from msal.",
    [hashDoesNotContainKnownProperties]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${ErrorLink}`,
    [unableToParseState]: "Unable to parse state. Please verify that the request originated from msal.",
    [stateInteractionTypeMismatch]: "Hash contains state but the interaction type does not match the caller.",
    [interactionInProgress]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${ErrorLink}`,
    [popupWindowError]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
    [emptyWindowError]: "window.open returned null or undefined window object.",
    [userCancelled]: "User cancelled the flow.",
    [monitorPopupTimeout]: `Token acquisition in popup failed due to timeout.  ${ErrorLink}`,
    [monitorWindowTimeout]: `Token acquisition in iframe failed due to timeout.  ${ErrorLink}`,
    [redirectInIframe]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
    [blockIframeReload]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${ErrorLink}`,
    [blockNestedPopups]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
    [iframeClosedPrematurely]: "The iframe being monitored was closed prematurely.",
    [silentLogoutUnsupported]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
    [noAccountError]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
    [silentPromptValueError]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
    [noTokenRequestCacheError]: "No token request found in cache.",
    [unableToParseTokenRequestCacheError]: "The cached token request could not be parsed.",
    [authRequestNotSetError]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
    [invalidCacheType]: "Invalid cache type",
    [nonBrowserEnvironment]: "Login and token requests are not supported in non-browser environments.",
    [databaseNotOpen]: "Database is not open!",
    [noNetworkConnectivity2]: "No network connectivity. Check your internet connection.",
    [postRequestFailed2]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
    [getRequestFailed]: "Network request failed. Please check the network trace to determine root cause.",
    [failedToParseResponse]: "Failed to parse network response. Check network trace.",
    [unableToLoadToken]: "Error loading token to cache.",
    [cryptoKeyNotFound]: "Cryptographic Key or Keypair not found in browser storage.",
    [authCodeRequired]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
    [authCodeOrNativeAccountIdRequired]: "An authorization code or nativeAccountId must be provided to this flow.",
    [spaCodeAndNativeAccountIdPresent]: "Request cannot contain both spa code and native account id.",
    [databaseUnavailable]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
    [unableToAcquireTokenFromNativePlatform]: `Unable to acquire token from native platform.  ${ErrorLink}`,
    [nativeHandshakeTimeout]: "Timed out while attempting to establish connection to browser extension",
    [nativeExtensionNotInstalled]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
    [nativeConnectionNotEstablished]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${ErrorLink}`,
    [uninitializedPublicClientApplication]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${ErrorLink}`,
    [nativePromptNotSupported]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
    [invalidBase64String]: "Invalid base64 encoded string.",
    [invalidPopTokenRequest]: "Invalid PoP token request. The request should not have both a popKid value and signPopToken set to true.",
    [failedToBuildHeaders]: "Failed to build request headers object.",
    [failedToParseHeaders]: "Failed to parse response headers",
    [failedToDecryptEarResponse]: "Failed to decrypt ear response",
    [timedOut]: "The request timed out."
  };
  var BrowserAuthErrorMessage = {
    pkceNotGenerated: {
      code: pkceNotCreated,
      desc: BrowserAuthErrorMessages[pkceNotCreated]
    },
    cryptoDoesNotExist: {
      code: cryptoNonExistent,
      desc: BrowserAuthErrorMessages[cryptoNonExistent]
    },
    emptyNavigateUriError: {
      code: emptyNavigateUri,
      desc: BrowserAuthErrorMessages[emptyNavigateUri]
    },
    hashEmptyError: {
      code: hashEmptyError,
      desc: BrowserAuthErrorMessages[hashEmptyError]
    },
    hashDoesNotContainStateError: {
      code: noStateInHash,
      desc: BrowserAuthErrorMessages[noStateInHash]
    },
    hashDoesNotContainKnownPropertiesError: {
      code: hashDoesNotContainKnownProperties,
      desc: BrowserAuthErrorMessages[hashDoesNotContainKnownProperties]
    },
    unableToParseStateError: {
      code: unableToParseState,
      desc: BrowserAuthErrorMessages[unableToParseState]
    },
    stateInteractionTypeMismatchError: {
      code: stateInteractionTypeMismatch,
      desc: BrowserAuthErrorMessages[stateInteractionTypeMismatch]
    },
    interactionInProgress: {
      code: interactionInProgress,
      desc: BrowserAuthErrorMessages[interactionInProgress]
    },
    popupWindowError: {
      code: popupWindowError,
      desc: BrowserAuthErrorMessages[popupWindowError]
    },
    emptyWindowError: {
      code: emptyWindowError,
      desc: BrowserAuthErrorMessages[emptyWindowError]
    },
    userCancelledError: {
      code: userCancelled,
      desc: BrowserAuthErrorMessages[userCancelled]
    },
    monitorPopupTimeoutError: {
      code: monitorPopupTimeout,
      desc: BrowserAuthErrorMessages[monitorPopupTimeout]
    },
    monitorIframeTimeoutError: {
      code: monitorWindowTimeout,
      desc: BrowserAuthErrorMessages[monitorWindowTimeout]
    },
    redirectInIframeError: {
      code: redirectInIframe,
      desc: BrowserAuthErrorMessages[redirectInIframe]
    },
    blockTokenRequestsInHiddenIframeError: {
      code: blockIframeReload,
      desc: BrowserAuthErrorMessages[blockIframeReload]
    },
    blockAcquireTokenInPopupsError: {
      code: blockNestedPopups,
      desc: BrowserAuthErrorMessages[blockNestedPopups]
    },
    iframeClosedPrematurelyError: {
      code: iframeClosedPrematurely,
      desc: BrowserAuthErrorMessages[iframeClosedPrematurely]
    },
    silentLogoutUnsupportedError: {
      code: silentLogoutUnsupported,
      desc: BrowserAuthErrorMessages[silentLogoutUnsupported]
    },
    noAccountError: {
      code: noAccountError,
      desc: BrowserAuthErrorMessages[noAccountError]
    },
    silentPromptValueError: {
      code: silentPromptValueError,
      desc: BrowserAuthErrorMessages[silentPromptValueError]
    },
    noTokenRequestCacheError: {
      code: noTokenRequestCacheError,
      desc: BrowserAuthErrorMessages[noTokenRequestCacheError]
    },
    unableToParseTokenRequestCacheError: {
      code: unableToParseTokenRequestCacheError,
      desc: BrowserAuthErrorMessages[unableToParseTokenRequestCacheError]
    },
    authRequestNotSet: {
      code: authRequestNotSetError,
      desc: BrowserAuthErrorMessages[authRequestNotSetError]
    },
    invalidCacheType: {
      code: invalidCacheType,
      desc: BrowserAuthErrorMessages[invalidCacheType]
    },
    notInBrowserEnvironment: {
      code: nonBrowserEnvironment,
      desc: BrowserAuthErrorMessages[nonBrowserEnvironment]
    },
    databaseNotOpen: {
      code: databaseNotOpen,
      desc: BrowserAuthErrorMessages[databaseNotOpen]
    },
    noNetworkConnectivity: {
      code: noNetworkConnectivity2,
      desc: BrowserAuthErrorMessages[noNetworkConnectivity2]
    },
    postRequestFailed: {
      code: postRequestFailed2,
      desc: BrowserAuthErrorMessages[postRequestFailed2]
    },
    getRequestFailed: {
      code: getRequestFailed,
      desc: BrowserAuthErrorMessages[getRequestFailed]
    },
    failedToParseNetworkResponse: {
      code: failedToParseResponse,
      desc: BrowserAuthErrorMessages[failedToParseResponse]
    },
    unableToLoadTokenError: {
      code: unableToLoadToken,
      desc: BrowserAuthErrorMessages[unableToLoadToken]
    },
    signingKeyNotFoundInStorage: {
      code: cryptoKeyNotFound,
      desc: BrowserAuthErrorMessages[cryptoKeyNotFound]
    },
    authCodeRequired: {
      code: authCodeRequired,
      desc: BrowserAuthErrorMessages[authCodeRequired]
    },
    authCodeOrNativeAccountRequired: {
      code: authCodeOrNativeAccountIdRequired,
      desc: BrowserAuthErrorMessages[authCodeOrNativeAccountIdRequired]
    },
    spaCodeAndNativeAccountPresent: {
      code: spaCodeAndNativeAccountIdPresent,
      desc: BrowserAuthErrorMessages[spaCodeAndNativeAccountIdPresent]
    },
    databaseUnavailable: {
      code: databaseUnavailable,
      desc: BrowserAuthErrorMessages[databaseUnavailable]
    },
    unableToAcquireTokenFromNativePlatform: {
      code: unableToAcquireTokenFromNativePlatform,
      desc: BrowserAuthErrorMessages[unableToAcquireTokenFromNativePlatform]
    },
    nativeHandshakeTimeout: {
      code: nativeHandshakeTimeout,
      desc: BrowserAuthErrorMessages[nativeHandshakeTimeout]
    },
    nativeExtensionNotInstalled: {
      code: nativeExtensionNotInstalled,
      desc: BrowserAuthErrorMessages[nativeExtensionNotInstalled]
    },
    nativeConnectionNotEstablished: {
      code: nativeConnectionNotEstablished,
      desc: BrowserAuthErrorMessages[nativeConnectionNotEstablished]
    },
    uninitializedPublicClientApplication: {
      code: uninitializedPublicClientApplication,
      desc: BrowserAuthErrorMessages[uninitializedPublicClientApplication]
    },
    nativePromptNotSupported: {
      code: nativePromptNotSupported,
      desc: BrowserAuthErrorMessages[nativePromptNotSupported]
    },
    invalidBase64StringError: {
      code: invalidBase64String,
      desc: BrowserAuthErrorMessages[invalidBase64String]
    },
    invalidPopTokenRequest: {
      code: invalidPopTokenRequest,
      desc: BrowserAuthErrorMessages[invalidPopTokenRequest]
    }
  };
  var BrowserAuthError = class _BrowserAuthError extends AuthError {
    constructor(errorCode, subError) {
      super(errorCode, BrowserAuthErrorMessages[errorCode], subError);
      Object.setPrototypeOf(this, _BrowserAuthError.prototype);
      this.name = "BrowserAuthError";
    }
  };
  function createBrowserAuthError(errorCode, subError) {
    return new BrowserAuthError(errorCode, subError);
  }

  // node_modules/@azure/msal-browser/dist/utils/BrowserConstants.mjs
  var BrowserConstants = {
    /**
     * Invalid grant error code
     */
    INVALID_GRANT_ERROR: "invalid_grant",
    /**
     * Default popup window width
     */
    POPUP_WIDTH: 483,
    /**
     * Default popup window height
     */
    POPUP_HEIGHT: 600,
    /**
     * Name of the popup window starts with
     */
    POPUP_NAME_PREFIX: "msal",
    /**
     * Default popup monitor poll interval in milliseconds
     */
    DEFAULT_POLL_INTERVAL_MS: 30,
    /**
     * Msal-browser SKU
     */
    MSAL_SKU: "msal.js.browser"
  };
  var PlatformAuthConstants = {
    CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
    PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
    MATS_TELEMETRY: "MATS",
    MICROSOFT_ENTRA_BROKERID: "MicrosoftEntra",
    DOM_API_NAME: "DOM API",
    PLATFORM_DOM_APIS: "get-token-and-sign-out",
    PLATFORM_DOM_PROVIDER: "PlatformAuthDOMHandler",
    PLATFORM_EXTENSION_PROVIDER: "PlatformAuthExtensionHandler"
  };
  var NativeExtensionMethod = {
    HandshakeRequest: "Handshake",
    HandshakeResponse: "HandshakeResponse",
    GetToken: "GetToken",
    Response: "Response"
  };
  var BrowserCacheLocation = {
    LocalStorage: "localStorage",
    SessionStorage: "sessionStorage",
    MemoryStorage: "memoryStorage"
  };
  var HTTP_REQUEST_TYPE = {
    GET: "GET",
    POST: "POST"
  };
  var INTERACTION_TYPE = {
    SIGNIN: "signin",
    SIGNOUT: "signout"
  };
  var TemporaryCacheKeys = {
    ORIGIN_URI: "request.origin",
    URL_HASH: "urlHash",
    REQUEST_PARAMS: "request.params",
    VERIFIER: "code.verifier",
    INTERACTION_STATUS_KEY: "interaction.status",
    NATIVE_REQUEST: "request.native"
  };
  var InMemoryCacheKeys = {
    WRAPPER_SKU: "wrapper.sku",
    WRAPPER_VER: "wrapper.version"
  };
  var ApiId = {
    acquireTokenRedirect: 861,
    acquireTokenPopup: 862,
    ssoSilent: 863,
    acquireTokenSilent_authCode: 864,
    handleRedirectPromise: 865,
    acquireTokenByCode: 866,
    acquireTokenSilent_silentFlow: 61,
    logout: 961,
    logoutPopup: 962
  };
  var InteractionType;
  (function(InteractionType2) {
    InteractionType2["Redirect"] = "redirect";
    InteractionType2["Popup"] = "popup";
    InteractionType2["Silent"] = "silent";
    InteractionType2["None"] = "none";
  })(InteractionType || (InteractionType = {}));
  var InteractionStatus = {
    /**
     * Initial status before interaction occurs
     */
    Startup: "startup",
    /**
     * Status set when all login calls occuring
     */
    Login: "login",
    /**
     * Status set when logout call occuring
     */
    Logout: "logout",
    /**
     * Status set for acquireToken calls
     */
    AcquireToken: "acquireToken",
    /**
     * Status set for ssoSilent calls
     */
    SsoSilent: "ssoSilent",
    /**
     * Status set when handleRedirect in progress
     */
    HandleRedirect: "handleRedirect",
    /**
     * Status set when interaction is complete
     */
    None: "none"
  };
  var DEFAULT_REQUEST = {
    scopes: OIDC_DEFAULT_SCOPES
  };
  var KEY_FORMAT_JWK = "jwk";
  var WrapperSKU = {
    React: "@azure/msal-react",
    Angular: "@azure/msal-angular"
  };
  var DB_NAME = "msal.db";
  var DB_VERSION = 1;
  var DB_TABLE_NAME = `${DB_NAME}.keys`;
  var CacheLookupPolicy = {
    /*
     * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired
     * or cannot be found the refresh token will be used to acquire a new one. Finally, if the refresh token
     * is expired acquireTokenSilent will attempt to acquire new access and refresh tokens.
     */
    Default: 0,
    /*
     * acquireTokenSilent will only look for access tokens in the cache. It will not attempt to renew access or
     * refresh tokens.
     */
    AccessToken: 1,
    /*
     * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired or
     * cannot be found, the refresh token will be used to acquire a new one. If the refresh token is expired, it
     * will not be renewed and acquireTokenSilent will fail.
     */
    AccessTokenAndRefreshToken: 2,
    /*
     * acquireTokenSilent will not attempt to retrieve access tokens from the cache and will instead attempt to
     * exchange the cached refresh token for a new access token. If the refresh token is expired, it will not be
     * renewed and acquireTokenSilent will fail.
     */
    RefreshToken: 3,
    /*
     * acquireTokenSilent will not look in the cache for the access token. It will go directly to network with the
     * cached refresh token. If the refresh token is expired an attempt will be made to renew it. This is equivalent to
     * setting "forceRefresh: true".
     */
    RefreshTokenAndNetwork: 4,
    /*
     * acquireTokenSilent will attempt to renew both access and refresh tokens. It will not look in the cache. This will
     * always fail if 3rd party cookies are blocked by the browser.
     */
    Skip: 5
  };
  var iFrameRenewalPolicies = [
    CacheLookupPolicy.Default,
    CacheLookupPolicy.Skip,
    CacheLookupPolicy.RefreshTokenAndNetwork
  ];

  // node_modules/@azure/msal-browser/dist/encode/Base64Encode.mjs
  function urlEncode(input) {
    return encodeURIComponent(base64Encode(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
  }
  function urlEncodeArr(inputArr) {
    return base64EncArr(inputArr).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function base64Encode(input) {
    return base64EncArr(new TextEncoder().encode(input));
  }
  function base64EncArr(aBytes) {
    const binString = Array.from(aBytes, (x) => String.fromCodePoint(x)).join("");
    return btoa(binString);
  }

  // node_modules/@azure/msal-browser/dist/encode/Base64Decode.mjs
  function base64Decode(input) {
    return new TextDecoder().decode(base64DecToArr(input));
  }
  function base64DecToArr(base64String) {
    let encodedString = base64String.replace(/-/g, "+").replace(/_/g, "/");
    switch (encodedString.length % 4) {
      case 0:
        break;
      case 2:
        encodedString += "==";
        break;
      case 3:
        encodedString += "=";
        break;
      default:
        throw createBrowserAuthError(invalidBase64String);
    }
    const binString = atob(encodedString);
    return Uint8Array.from(binString, (m) => m.codePointAt(0) || 0);
  }

  // node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.mjs
  var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
  var AES_GCM = "AES-GCM";
  var HKDF = "HKDF";
  var S256_HASH_ALG = "SHA-256";
  var MODULUS_LENGTH = 2048;
  var PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
  var UUID_CHARS = "0123456789abcdef";
  var UINT32_ARR = new Uint32Array(1);
  var RAW = "raw";
  var ENCRYPT = "encrypt";
  var DECRYPT = "decrypt";
  var DERIVE_KEY = "deriveKey";
  var SUBTLE_SUBERROR = "crypto_subtle_undefined";
  var keygenAlgorithmOptions = {
    name: PKCS1_V15_KEYGEN_ALG,
    hash: S256_HASH_ALG,
    modulusLength: MODULUS_LENGTH,
    publicExponent: PUBLIC_EXPONENT
  };
  function validateCryptoAvailable(skipValidateSubtleCrypto) {
    if (!window) {
      throw createBrowserAuthError(nonBrowserEnvironment);
    }
    if (!window.crypto) {
      throw createBrowserAuthError(cryptoNonExistent);
    }
    if (!skipValidateSubtleCrypto && !window.crypto.subtle) {
      throw createBrowserAuthError(cryptoNonExistent, SUBTLE_SUBERROR);
    }
  }
  async function sha256Digest(dataString, performanceClient, correlationId) {
    performanceClient?.addQueueMeasurement(PerformanceEvents.Sha256Digest, correlationId);
    const encoder = new TextEncoder();
    const data = encoder.encode(dataString);
    return window.crypto.subtle.digest(S256_HASH_ALG, data);
  }
  function getRandomValues(dataBuffer) {
    return window.crypto.getRandomValues(dataBuffer);
  }
  function getRandomUint32() {
    window.crypto.getRandomValues(UINT32_ARR);
    return UINT32_ARR[0];
  }
  function createNewGuid() {
    const currentTimestamp = Date.now();
    const baseRand = getRandomUint32() * 1024 + (getRandomUint32() & 1023);
    const bytes = new Uint8Array(16);
    const randA = Math.trunc(baseRand / 2 ** 30);
    const randBHi = baseRand & 2 ** 30 - 1;
    const randBLo = getRandomUint32();
    bytes[0] = currentTimestamp / 2 ** 40;
    bytes[1] = currentTimestamp / 2 ** 32;
    bytes[2] = currentTimestamp / 2 ** 24;
    bytes[3] = currentTimestamp / 2 ** 16;
    bytes[4] = currentTimestamp / 2 ** 8;
    bytes[5] = currentTimestamp;
    bytes[6] = 112 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 128 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    let text = "";
    for (let i = 0; i < bytes.length; i++) {
      text += UUID_CHARS.charAt(bytes[i] >>> 4);
      text += UUID_CHARS.charAt(bytes[i] & 15);
      if (i === 3 || i === 5 || i === 7 || i === 9) {
        text += "-";
      }
    }
    return text;
  }
  async function generateKeyPair(extractable, usages) {
    return window.crypto.subtle.generateKey(keygenAlgorithmOptions, extractable, usages);
  }
  async function exportJwk(key) {
    return window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key);
  }
  async function importJwk(key, extractable, usages) {
    return window.crypto.subtle.importKey(KEY_FORMAT_JWK, key, keygenAlgorithmOptions, extractable, usages);
  }
  async function sign(key, data) {
    return window.crypto.subtle.sign(keygenAlgorithmOptions, key, data);
  }
  async function generateEarKey() {
    const key = await generateBaseKey();
    const keyStr = urlEncodeArr(new Uint8Array(key));
    const jwk = {
      alg: "dir",
      kty: "oct",
      k: keyStr
    };
    return base64Encode(JSON.stringify(jwk));
  }
  async function importEarKey(earJwk) {
    const b64DecodedJwk = base64Decode(earJwk);
    const jwkJson = JSON.parse(b64DecodedJwk);
    const rawKey = jwkJson.k;
    const keyBuffer = base64DecToArr(rawKey);
    return window.crypto.subtle.importKey(RAW, keyBuffer, AES_GCM, false, [
      DECRYPT
    ]);
  }
  async function decryptEarResponse(earJwk, earJwe) {
    const earJweParts = earJwe.split(".");
    if (earJweParts.length !== 5) {
      throw createBrowserAuthError(failedToDecryptEarResponse, "jwe_length");
    }
    const key = await importEarKey(earJwk).catch(() => {
      throw createBrowserAuthError(failedToDecryptEarResponse, "import_key");
    });
    try {
      const header = new TextEncoder().encode(earJweParts[0]);
      const iv = base64DecToArr(earJweParts[2]);
      const ciphertext = base64DecToArr(earJweParts[3]);
      const tag = base64DecToArr(earJweParts[4]);
      const tagLengthBits = tag.byteLength * 8;
      const encryptedData = new Uint8Array(ciphertext.length + tag.length);
      encryptedData.set(ciphertext);
      encryptedData.set(tag, ciphertext.length);
      const decryptedData = await window.crypto.subtle.decrypt({
        name: AES_GCM,
        iv,
        tagLength: tagLengthBits,
        additionalData: header
      }, key, encryptedData);
      return new TextDecoder().decode(decryptedData);
    } catch (e) {
      throw createBrowserAuthError(failedToDecryptEarResponse, "decrypt");
    }
  }
  async function generateBaseKey() {
    const key = await window.crypto.subtle.generateKey({
      name: AES_GCM,
      length: 256
    }, true, [ENCRYPT, DECRYPT]);
    return window.crypto.subtle.exportKey(RAW, key);
  }
  async function generateHKDF(baseKey) {
    return window.crypto.subtle.importKey(RAW, baseKey, HKDF, false, [
      DERIVE_KEY
    ]);
  }
  async function deriveKey(baseKey, nonce, context) {
    return window.crypto.subtle.deriveKey({
      name: HKDF,
      salt: nonce,
      hash: S256_HASH_ALG,
      info: new TextEncoder().encode(context)
    }, baseKey, { name: AES_GCM, length: 256 }, false, [ENCRYPT, DECRYPT]);
  }
  async function encrypt(baseKey, rawData, context) {
    const encodedData = new TextEncoder().encode(rawData);
    const nonce = window.crypto.getRandomValues(new Uint8Array(16));
    const derivedKey = await deriveKey(baseKey, nonce, context);
    const encryptedData = await window.crypto.subtle.encrypt({
      name: AES_GCM,
      iv: new Uint8Array(12)
      // New key is derived for every encrypt so we don't need a new nonce
    }, derivedKey, encodedData);
    return {
      data: urlEncodeArr(new Uint8Array(encryptedData)),
      nonce: urlEncodeArr(nonce)
    };
  }
  async function decrypt(baseKey, nonce, context, encryptedData) {
    const encodedData = base64DecToArr(encryptedData);
    const derivedKey = await deriveKey(baseKey, base64DecToArr(nonce), context);
    const decryptedData = await window.crypto.subtle.decrypt({
      name: AES_GCM,
      iv: new Uint8Array(12)
      // New key is derived for every encrypt so we don't need a new nonce
    }, derivedKey, encodedData);
    return new TextDecoder().decode(decryptedData);
  }
  async function hashString(plainText) {
    const hashBuffer = await sha256Digest(plainText);
    const hashBytes = new Uint8Array(hashBuffer);
    return urlEncodeArr(hashBytes);
  }

  // node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs
  var BrowserConfigurationAuthErrorCodes_exports = {};
  __export(BrowserConfigurationAuthErrorCodes_exports, {
    inMemRedirectUnavailable: () => inMemRedirectUnavailable,
    storageNotSupported: () => storageNotSupported,
    stubbedPublicClientApplicationCalled: () => stubbedPublicClientApplicationCalled
  });
  var storageNotSupported = "storage_not_supported";
  var stubbedPublicClientApplicationCalled = "stubbed_public_client_application_called";
  var inMemRedirectUnavailable = "in_mem_redirect_unavailable";

  // node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs
  var BrowserConfigurationAuthErrorMessages = {
    [storageNotSupported]: "Given storage configuration option was not supported.",
    [stubbedPublicClientApplicationCalled]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
    [inMemRedirectUnavailable]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
  };
  var BrowserConfigurationAuthErrorMessage = {
    storageNotSupportedError: {
      code: storageNotSupported,
      desc: BrowserConfigurationAuthErrorMessages[storageNotSupported]
    },
    stubPcaInstanceCalled: {
      code: stubbedPublicClientApplicationCalled,
      desc: BrowserConfigurationAuthErrorMessages[stubbedPublicClientApplicationCalled]
    },
    inMemRedirectUnavailable: {
      code: inMemRedirectUnavailable,
      desc: BrowserConfigurationAuthErrorMessages[inMemRedirectUnavailable]
    }
  };
  var BrowserConfigurationAuthError = class _BrowserConfigurationAuthError extends AuthError {
    constructor(errorCode, errorMessage) {
      super(errorCode, errorMessage);
      this.name = "BrowserConfigurationAuthError";
      Object.setPrototypeOf(this, _BrowserConfigurationAuthError.prototype);
    }
  };
  function createBrowserConfigurationAuthError(errorCode) {
    return new BrowserConfigurationAuthError(errorCode, BrowserConfigurationAuthErrorMessages[errorCode]);
  }

  // node_modules/@azure/msal-browser/dist/utils/BrowserUtils.mjs
  function clearHash(contentWindow) {
    contentWindow.location.hash = "";
    if (typeof contentWindow.history.replaceState === "function") {
      contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}${contentWindow.location.search}`);
    }
  }
  function replaceHash(url) {
    const urlParts = url.split("#");
    urlParts.shift();
    window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
  }
  function isInIframe() {
    return window.parent !== window;
  }
  function isInPopup() {
    return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(`${BrowserConstants.POPUP_NAME_PREFIX}.`) === 0;
  }
  function getCurrentUri() {
    return typeof window !== "undefined" && window.location ? window.location.href.split("?")[0].split("#")[0] : "";
  }
  function getHomepage() {
    const currentUrl = new UrlString(window.location.href);
    const urlComponents = currentUrl.getUrlComponents();
    return `${urlComponents.Protocol}//${urlComponents.HostNameAndPort}/`;
  }
  function blockReloadInHiddenIframes() {
    const isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
    if (isResponseHash && isInIframe()) {
      throw createBrowserAuthError(blockIframeReload);
    }
  }
  function blockRedirectInIframe(allowRedirectInIframe) {
    if (isInIframe() && !allowRedirectInIframe) {
      throw createBrowserAuthError(redirectInIframe);
    }
  }
  function blockAcquireTokenInPopups() {
    if (isInPopup()) {
      throw createBrowserAuthError(blockNestedPopups);
    }
  }
  function blockNonBrowserEnvironment() {
    if (typeof window === "undefined") {
      throw createBrowserAuthError(nonBrowserEnvironment);
    }
  }
  function blockAPICallsBeforeInitialize(initialized) {
    if (!initialized) {
      throw createBrowserAuthError(uninitializedPublicClientApplication);
    }
  }
  function preflightCheck(initialized) {
    blockNonBrowserEnvironment();
    blockReloadInHiddenIframes();
    blockAcquireTokenInPopups();
    blockAPICallsBeforeInitialize(initialized);
  }
  function redirectPreflightCheck(initialized, config) {
    preflightCheck(initialized);
    blockRedirectInIframe(config.system.allowRedirectInIframe);
    if (config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage && !config.cache.storeAuthStateInCookie) {
      throw createBrowserConfigurationAuthError(inMemRedirectUnavailable);
    }
  }
  function preconnect(authority) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = new URL(authority).origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    window.setTimeout(() => {
      try {
        document.head.removeChild(link);
      } catch {
      }
    }, 1e4);
  }
  function createGuid() {
    return createNewGuid();
  }
  var addClientCapabilitiesToClaims2 = RequestParameterBuilder_exports.addClientCapabilitiesToClaims;

  // node_modules/@azure/msal-browser/dist/navigation/NavigationClient.mjs
  var NavigationClient = class _NavigationClient {
    /**
     * Navigates to other pages within the same web application
     * @param url
     * @param options
     */
    navigateInternal(url, options) {
      return _NavigationClient.defaultNavigateWindow(url, options);
    }
    /**
     * Navigates to other pages outside the web application i.e. the Identity Provider
     * @param url
     * @param options
     */
    navigateExternal(url, options) {
      return _NavigationClient.defaultNavigateWindow(url, options);
    }
    /**
     * Default navigation implementation invoked by the internal and external functions
     * @param url
     * @param options
     */
    static defaultNavigateWindow(url, options) {
      if (options.noHistory) {
        window.location.replace(url);
      } else {
        window.location.assign(url);
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(createBrowserAuthError(timedOut, "failed_to_redirect"));
        }, options.timeout);
      });
    }
  };

  // node_modules/@azure/msal-browser/dist/network/FetchClient.mjs
  var FetchClient = class {
    /**
     * Fetch Client for REST endpoints - Get request
     * @param url
     * @param headers
     * @param body
     */
    async sendGetRequestAsync(url, options) {
      let response;
      let responseHeaders = {};
      let responseStatus = 0;
      const reqHeaders = getFetchHeaders(options);
      try {
        response = await fetch(url, {
          method: HTTP_REQUEST_TYPE.GET,
          headers: reqHeaders
        });
      } catch (e) {
        throw createNetworkError(createBrowserAuthError(window.navigator.onLine ? getRequestFailed : noNetworkConnectivity2), void 0, void 0, e);
      }
      responseHeaders = getHeaderDict(response.headers);
      try {
        responseStatus = response.status;
        return {
          headers: responseHeaders,
          body: await response.json(),
          status: responseStatus
        };
      } catch (e) {
        throw createNetworkError(createBrowserAuthError(failedToParseResponse), responseStatus, responseHeaders, e);
      }
    }
    /**
     * Fetch Client for REST endpoints - Post request
     * @param url
     * @param headers
     * @param body
     */
    async sendPostRequestAsync(url, options) {
      const reqBody = options && options.body || "";
      const reqHeaders = getFetchHeaders(options);
      let response;
      let responseStatus = 0;
      let responseHeaders = {};
      try {
        response = await fetch(url, {
          method: HTTP_REQUEST_TYPE.POST,
          headers: reqHeaders,
          body: reqBody
        });
      } catch (e) {
        throw createNetworkError(createBrowserAuthError(window.navigator.onLine ? postRequestFailed2 : noNetworkConnectivity2), void 0, void 0, e);
      }
      responseHeaders = getHeaderDict(response.headers);
      try {
        responseStatus = response.status;
        return {
          headers: responseHeaders,
          body: await response.json(),
          status: responseStatus
        };
      } catch (e) {
        throw createNetworkError(createBrowserAuthError(failedToParseResponse), responseStatus, responseHeaders, e);
      }
    }
  };
  function getFetchHeaders(options) {
    try {
      const headers = new Headers();
      if (!(options && options.headers)) {
        return headers;
      }
      const optionsHeaders = options.headers;
      Object.entries(optionsHeaders).forEach(([key, value]) => {
        headers.append(key, value);
      });
      return headers;
    } catch (e) {
      throw createNetworkError(createBrowserAuthError(failedToBuildHeaders), void 0, void 0, e);
    }
  }
  function getHeaderDict(headers) {
    try {
      const headerDict = {};
      headers.forEach((value, key) => {
        headerDict[key] = value;
      });
      return headerDict;
    } catch (e) {
      throw createBrowserAuthError(failedToParseHeaders);
    }
  }

  // node_modules/@azure/msal-browser/dist/config/Configuration.mjs
  var DEFAULT_POPUP_TIMEOUT_MS = 6e4;
  var DEFAULT_IFRAME_TIMEOUT_MS = 1e4;
  var DEFAULT_REDIRECT_TIMEOUT_MS = 3e4;
  var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2e3;
  function buildConfiguration({ auth: userInputAuth, cache: userInputCache, system: userInputSystem, telemetry: userInputTelemetry }, isBrowserEnvironment) {
    const DEFAULT_AUTH_OPTIONS = {
      clientId: Constants.EMPTY_STRING,
      authority: `${Constants.DEFAULT_AUTHORITY}`,
      knownAuthorities: [],
      cloudDiscoveryMetadata: Constants.EMPTY_STRING,
      authorityMetadata: Constants.EMPTY_STRING,
      redirectUri: typeof window !== "undefined" ? getCurrentUri() : "",
      postLogoutRedirectUri: Constants.EMPTY_STRING,
      navigateToLoginRequestUrl: true,
      clientCapabilities: [],
      protocolMode: ProtocolMode.AAD,
      OIDCOptions: {
        serverResponseType: ServerResponseType.FRAGMENT,
        defaultScopes: [
          Constants.OPENID_SCOPE,
          Constants.PROFILE_SCOPE,
          Constants.OFFLINE_ACCESS_SCOPE
        ]
      },
      azureCloudOptions: {
        azureCloudInstance: AzureCloudInstance.None,
        tenant: Constants.EMPTY_STRING
      },
      skipAuthorityMetadataCache: false,
      supportsNestedAppAuth: false,
      instanceAware: false,
      encodeExtraQueryParams: false
    };
    const DEFAULT_CACHE_OPTIONS2 = {
      cacheLocation: BrowserCacheLocation.SessionStorage,
      cacheRetentionDays: 5,
      temporaryCacheLocation: BrowserCacheLocation.SessionStorage,
      storeAuthStateInCookie: false,
      secureCookies: false,
      // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
      cacheMigrationEnabled: userInputCache && userInputCache.cacheLocation === BrowserCacheLocation.LocalStorage ? true : false,
      claimsBasedCachingEnabled: false
    };
    const DEFAULT_LOGGER_OPTIONS = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      loggerCallback: () => {
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false
    };
    const DEFAULT_BROWSER_SYSTEM_OPTIONS = {
      ...DEFAULT_SYSTEM_OPTIONS,
      loggerOptions: DEFAULT_LOGGER_OPTIONS,
      networkClient: isBrowserEnvironment ? new FetchClient() : StubbedNetworkModule,
      navigationClient: new NavigationClient(),
      loadFrameTimeout: 0,
      // If loadFrameTimeout is provided, use that as default.
      windowHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_POPUP_TIMEOUT_MS,
      iframeHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_IFRAME_TIMEOUT_MS,
      navigateFrameWait: 0,
      redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
      asyncPopups: false,
      allowRedirectInIframe: false,
      allowPlatformBroker: false,
      nativeBrokerHandshakeTimeout: userInputSystem?.nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
      pollIntervalMilliseconds: BrowserConstants.DEFAULT_POLL_INTERVAL_MS
    };
    const providedSystemOptions = {
      ...DEFAULT_BROWSER_SYSTEM_OPTIONS,
      ...userInputSystem,
      loggerOptions: userInputSystem?.loggerOptions || DEFAULT_LOGGER_OPTIONS
    };
    const DEFAULT_TELEMETRY_OPTIONS2 = {
      application: {
        appName: Constants.EMPTY_STRING,
        appVersion: Constants.EMPTY_STRING
      },
      client: new StubPerformanceClient()
    };
    if (userInputAuth?.protocolMode !== ProtocolMode.OIDC && userInputAuth?.OIDCOptions) {
      const logger = new Logger(providedSystemOptions.loggerOptions);
      logger.warning(JSON.stringify(createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotSetOIDCOptions)));
    }
    if (userInputAuth?.protocolMode && userInputAuth.protocolMode === ProtocolMode.OIDC && providedSystemOptions?.allowPlatformBroker) {
      throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.cannotAllowPlatformBroker);
    }
    const overlayedConfig = {
      auth: {
        ...DEFAULT_AUTH_OPTIONS,
        ...userInputAuth,
        OIDCOptions: {
          ...DEFAULT_AUTH_OPTIONS.OIDCOptions,
          ...userInputAuth?.OIDCOptions
        }
      },
      cache: { ...DEFAULT_CACHE_OPTIONS2, ...userInputCache },
      system: providedSystemOptions,
      telemetry: { ...DEFAULT_TELEMETRY_OPTIONS2, ...userInputTelemetry }
    };
    return overlayedConfig;
  }

  // node_modules/@azure/msal-browser/dist/packageMetadata.mjs
  var name2 = "@azure/msal-browser";
  var version2 = "4.24.0";

  // node_modules/@azure/msal-browser/dist/cache/CacheKeys.mjs
  var PREFIX = "msal";
  var BROWSER_PREFIX = "browser";
  var CACHE_KEY_SEPARATOR = "-";
  var CREDENTIAL_SCHEMA_VERSION = 1;
  var ACCOUNT_SCHEMA_VERSION = 1;
  var LOG_LEVEL_CACHE_KEY = `${PREFIX}.${BROWSER_PREFIX}.log.level`;
  var LOG_PII_CACHE_KEY = `${PREFIX}.${BROWSER_PREFIX}.log.pii`;
  var BROWSER_PERF_ENABLED_KEY = `${PREFIX}.${BROWSER_PREFIX}.performance.enabled`;
  var PLATFORM_AUTH_DOM_SUPPORT = `${PREFIX}.${BROWSER_PREFIX}.platform.auth.dom`;
  var VERSION_CACHE_KEY = `${PREFIX}.version`;
  var ACCOUNT_KEYS = "account.keys";
  var TOKEN_KEYS = "token.keys";
  function getAccountKeysCacheKey(schema = ACCOUNT_SCHEMA_VERSION) {
    if (schema < 1) {
      return `${PREFIX}.${ACCOUNT_KEYS}`;
    }
    return `${PREFIX}.${schema}.${ACCOUNT_KEYS}`;
  }
  function getTokenKeysCacheKey(clientId, schema = CREDENTIAL_SCHEMA_VERSION) {
    if (schema < 1) {
      return `${PREFIX}.${TOKEN_KEYS}.${clientId}`;
    }
    return `${PREFIX}.${schema}.${TOKEN_KEYS}.${clientId}`;
  }

  // node_modules/@azure/msal-browser/dist/operatingcontext/BaseOperatingContext.mjs
  var BaseOperatingContext = class _BaseOperatingContext {
    static loggerCallback(level, message) {
      switch (level) {
        case LogLevel.Error:
          console.error(message);
          return;
        case LogLevel.Info:
          console.info(message);
          return;
        case LogLevel.Verbose:
          console.debug(message);
          return;
        case LogLevel.Warning:
          console.warn(message);
          return;
        default:
          console.log(message);
          return;
      }
    }
    constructor(config) {
      this.browserEnvironment = typeof window !== "undefined";
      this.config = buildConfiguration(config, this.browserEnvironment);
      let sessionStorage;
      try {
        sessionStorage = window[BrowserCacheLocation.SessionStorage];
      } catch (e) {
      }
      const logLevelKey = sessionStorage?.getItem(LOG_LEVEL_CACHE_KEY);
      const piiLoggingKey = sessionStorage?.getItem(LOG_PII_CACHE_KEY)?.toLowerCase();
      const piiLoggingEnabled = piiLoggingKey === "true" ? true : piiLoggingKey === "false" ? false : void 0;
      const loggerOptions = { ...this.config.system.loggerOptions };
      const logLevel = logLevelKey && Object.keys(LogLevel).includes(logLevelKey) ? LogLevel[logLevelKey] : void 0;
      if (logLevel) {
        loggerOptions.loggerCallback = _BaseOperatingContext.loggerCallback;
        loggerOptions.logLevel = logLevel;
      }
      if (piiLoggingEnabled !== void 0) {
        loggerOptions.piiLoggingEnabled = piiLoggingEnabled;
      }
      this.logger = new Logger(loggerOptions, name2, version2);
      this.available = false;
    }
    /**
     * Return the MSAL config
     * @returns BrowserConfiguration
     */
    getConfig() {
      return this.config;
    }
    /**
     * Returns the MSAL Logger
     * @returns Logger
     */
    getLogger() {
      return this.logger;
    }
    isAvailable() {
      return this.available;
    }
    isBrowserEnvironment() {
      return this.browserEnvironment;
    }
  };

  // node_modules/@azure/msal-browser/dist/naa/BridgeStatusCode.mjs
  var BridgeStatusCode = {
    UserInteractionRequired: "USER_INTERACTION_REQUIRED",
    UserCancel: "USER_CANCEL",
    NoNetwork: "NO_NETWORK",
    TransientError: "TRANSIENT_ERROR",
    PersistentError: "PERSISTENT_ERROR",
    Disabled: "DISABLED",
    AccountUnavailable: "ACCOUNT_UNAVAILABLE",
    NestedAppAuthUnavailable: "NESTED_APP_AUTH_UNAVAILABLE"
    // NAA is unavailable in the current context, can retry with standard browser based auth
  };

  // node_modules/@azure/msal-browser/dist/naa/BridgeProxy.mjs
  var BridgeProxy = class _BridgeProxy {
    /**
     * initializeNestedAppAuthBridge - Initializes the bridge to the host app
     * @returns a promise that resolves to an InitializeBridgeResponse or rejects with an Error
     * @remarks This method will be called by the create factory method
     * @remarks If the bridge is not available, this method will throw an error
     */
    static async initializeNestedAppAuthBridge() {
      if (window === void 0) {
        throw new Error("window is undefined");
      }
      if (window.nestedAppAuthBridge === void 0) {
        throw new Error("window.nestedAppAuthBridge is undefined");
      }
      try {
        window.nestedAppAuthBridge.addEventListener("message", (response) => {
          const responsePayload = typeof response === "string" ? response : response.data;
          const responseEnvelope = JSON.parse(responsePayload);
          const request = _BridgeProxy.bridgeRequests.find((element) => element.requestId === responseEnvelope.requestId);
          if (request !== void 0) {
            _BridgeProxy.bridgeRequests.splice(_BridgeProxy.bridgeRequests.indexOf(request), 1);
            if (responseEnvelope.success) {
              request.resolve(responseEnvelope);
            } else {
              request.reject(responseEnvelope.error);
            }
          }
        });
        const bridgeResponse = await new Promise((resolve, reject) => {
          const message = _BridgeProxy.buildRequest("GetInitContext");
          const request = {
            requestId: message.requestId,
            method: message.method,
            resolve,
            reject
          };
          _BridgeProxy.bridgeRequests.push(request);
          window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
        });
        return _BridgeProxy.validateBridgeResultOrThrow(bridgeResponse.initContext);
      } catch (error) {
        window.console.log(error);
        throw error;
      }
    }
    /**
     * getTokenInteractive - Attempts to get a token interactively from the bridge
     * @param request A token request
     * @returns a promise that resolves to an auth result or rejects with a BridgeError
     */
    getTokenInteractive(request) {
      return this.getToken("GetTokenPopup", request);
    }
    /**
     * getTokenSilent Attempts to get a token silently from the bridge
     * @param request A token request
     * @returns a promise that resolves to an auth result or rejects with a BridgeError
     */
    getTokenSilent(request) {
      return this.getToken("GetToken", request);
    }
    async getToken(requestType, request) {
      const result = await this.sendRequest(requestType, {
        tokenParams: request
      });
      return {
        token: _BridgeProxy.validateBridgeResultOrThrow(result.token),
        account: _BridgeProxy.validateBridgeResultOrThrow(result.account)
      };
    }
    getHostCapabilities() {
      return this.capabilities ?? null;
    }
    getAccountContext() {
      return this.accountContext ? this.accountContext : null;
    }
    static buildRequest(method, requestParams) {
      return {
        messageType: "NestedAppAuthRequest",
        method,
        requestId: createNewGuid(),
        sendTime: Date.now(),
        clientLibrary: BrowserConstants.MSAL_SKU,
        clientLibraryVersion: version2,
        ...requestParams
      };
    }
    /**
     * A method used to send a request to the bridge
     * @param request A token request
     * @returns a promise that resolves to a response of provided type or rejects with a BridgeError
     */
    sendRequest(method, requestParams) {
      const message = _BridgeProxy.buildRequest(method, requestParams);
      const promise = new Promise((resolve, reject) => {
        const request = {
          requestId: message.requestId,
          method: message.method,
          resolve,
          reject
        };
        _BridgeProxy.bridgeRequests.push(request);
        window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
      });
      return promise;
    }
    static validateBridgeResultOrThrow(input) {
      if (input === void 0) {
        const bridgeError = {
          status: BridgeStatusCode.NestedAppAuthUnavailable
        };
        throw bridgeError;
      }
      return input;
    }
    /**
     * Private constructor for BridgeProxy
     * @param sdkName The name of the SDK being used to make requests on behalf of the app
     * @param sdkVersion The version of the SDK being used to make requests on behalf of the app
     * @param capabilities The capabilities of the bridge / SDK / platform broker
     */
    constructor(sdkName, sdkVersion, accountContext, capabilities) {
      this.sdkName = sdkName;
      this.sdkVersion = sdkVersion;
      this.accountContext = accountContext;
      this.capabilities = capabilities;
    }
    /**
     * Factory method for creating an implementation of IBridgeProxy
     * @returns A promise that resolves to a BridgeProxy implementation
     */
    static async create() {
      const response = await _BridgeProxy.initializeNestedAppAuthBridge();
      return new _BridgeProxy(response.sdkName, response.sdkVersion, response.accountContext, response.capabilities);
    }
  };
  BridgeProxy.bridgeRequests = [];

  // node_modules/@azure/msal-browser/dist/operatingcontext/NestedAppOperatingContext.mjs
  var NestedAppOperatingContext = class _NestedAppOperatingContext extends BaseOperatingContext {
    constructor() {
      super(...arguments);
      this.bridgeProxy = void 0;
      this.accountContext = null;
    }
    /**
     * Return the module name.  Intended for use with import() to enable dynamic import
     * of the implementation associated with this operating context
     * @returns
     */
    getModuleName() {
      return _NestedAppOperatingContext.MODULE_NAME;
    }
    /**
     * Returns the unique identifier for this operating context
     * @returns string
     */
    getId() {
      return _NestedAppOperatingContext.ID;
    }
    /**
     * Returns the current BridgeProxy
     * @returns IBridgeProxy | undefined
     */
    getBridgeProxy() {
      return this.bridgeProxy;
    }
    /**
     * Checks whether the operating context is available.
     * Confirms that the code is running a browser rather.  This is required.
     * @returns Promise<boolean> indicating whether this operating context is currently available.
     */
    async initialize() {
      try {
        if (typeof window !== "undefined") {
          if (typeof window.__initializeNestedAppAuth === "function") {
            await window.__initializeNestedAppAuth();
          }
          const bridgeProxy = await BridgeProxy.create();
          this.accountContext = bridgeProxy.getAccountContext();
          this.bridgeProxy = bridgeProxy;
          this.available = bridgeProxy !== void 0;
        }
      } catch (ex) {
        this.logger.infoPii(`Could not initialize Nested App Auth bridge (${ex})`);
      }
      this.logger.info(`Nested App Auth Bridge available: ${this.available}`);
      return this.available;
    }
  };
  NestedAppOperatingContext.MODULE_NAME = "";
  NestedAppOperatingContext.ID = "NestedAppOperatingContext";

  // node_modules/@azure/msal-browser/dist/operatingcontext/StandardOperatingContext.mjs
  var StandardOperatingContext = class _StandardOperatingContext extends BaseOperatingContext {
    /**
     * Return the module name.  Intended for use with import() to enable dynamic import
     * of the implementation associated with this operating context
     * @returns
     */
    getModuleName() {
      return _StandardOperatingContext.MODULE_NAME;
    }
    /**
     * Returns the unique identifier for this operating context
     * @returns string
     */
    getId() {
      return _StandardOperatingContext.ID;
    }
    /**
     * Checks whether the operating context is available.
     * Confirms that the code is running a browser rather.  This is required.
     * @returns Promise<boolean> indicating whether this operating context is currently available.
     */
    async initialize() {
      this.available = typeof window !== "undefined";
      return this.available;
    }
  };
  StandardOperatingContext.MODULE_NAME = "";
  StandardOperatingContext.ID = "StandardOperatingContext";

  // node_modules/@azure/msal-browser/dist/cache/DatabaseStorage.mjs
  var DatabaseStorage = class {
    constructor() {
      this.dbName = DB_NAME;
      this.version = DB_VERSION;
      this.tableName = DB_TABLE_NAME;
      this.dbOpen = false;
    }
    /**
     * Opens IndexedDB instance.
     */
    async open() {
      return new Promise((resolve, reject) => {
        const openDB = window.indexedDB.open(this.dbName, this.version);
        openDB.addEventListener("upgradeneeded", (e) => {
          const event = e;
          event.target.result.createObjectStore(this.tableName);
        });
        openDB.addEventListener("success", (e) => {
          const event = e;
          this.db = event.target.result;
          this.dbOpen = true;
          resolve();
        });
        openDB.addEventListener("error", () => reject(createBrowserAuthError(databaseUnavailable)));
      });
    }
    /**
     * Closes the connection to IndexedDB database when all pending transactions
     * complete.
     */
    closeConnection() {
      const db = this.db;
      if (db && this.dbOpen) {
        db.close();
        this.dbOpen = false;
      }
    }
    /**
     * Opens database if it's not already open
     */
    async validateDbIsOpen() {
      if (!this.dbOpen) {
        return this.open();
      }
    }
    /**
     * Retrieves item from IndexedDB instance.
     * @param key
     */
    async getItem(key) {
      await this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbGet = objectStore.get(key);
        dbGet.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result);
        });
        dbGet.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    }
    /**
     * Adds item to IndexedDB under given key
     * @param key
     * @param payload
     */
    async setItem(key, payload) {
      await this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readwrite");
        const objectStore = transaction.objectStore(this.tableName);
        const dbPut = objectStore.put(payload, key);
        dbPut.addEventListener("success", () => {
          this.closeConnection();
          resolve();
        });
        dbPut.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    }
    /**
     * Removes item from IndexedDB under given key
     * @param key
     */
    async removeItem(key) {
      await this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readwrite");
        const objectStore = transaction.objectStore(this.tableName);
        const dbDelete = objectStore.delete(key);
        dbDelete.addEventListener("success", () => {
          this.closeConnection();
          resolve();
        });
        dbDelete.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    }
    /**
     * Get all the keys from the storage object as an iterable array of strings.
     */
    async getKeys() {
      await this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbGetKeys = objectStore.getAllKeys();
        dbGetKeys.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result);
        });
        dbGetKeys.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    }
    /**
     *
     * Checks whether there is an object under the search key in the object store
     */
    async containsKey(key) {
      await this.validateDbIsOpen();
      return new Promise((resolve, reject) => {
        if (!this.db) {
          return reject(createBrowserAuthError(databaseNotOpen));
        }
        const transaction = this.db.transaction([this.tableName], "readonly");
        const objectStore = transaction.objectStore(this.tableName);
        const dbContainsKey = objectStore.count(key);
        dbContainsKey.addEventListener("success", (e) => {
          const event = e;
          this.closeConnection();
          resolve(event.target.result === 1);
        });
        dbContainsKey.addEventListener("error", (e) => {
          this.closeConnection();
          reject(e);
        });
      });
    }
    /**
     * Deletes the MSAL database. The database is deleted rather than cleared to make it possible
     * for client applications to downgrade to a previous MSAL version without worrying about forward compatibility issues
     * with IndexedDB database versions.
     */
    async deleteDatabase() {
      if (this.db && this.dbOpen) {
        this.closeConnection();
      }
      return new Promise((resolve, reject) => {
        const deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
        const id = setTimeout(() => reject(false), 200);
        deleteDbRequest.addEventListener("success", () => {
          clearTimeout(id);
          return resolve(true);
        });
        deleteDbRequest.addEventListener("blocked", () => {
          clearTimeout(id);
          return resolve(true);
        });
        deleteDbRequest.addEventListener("error", () => {
          clearTimeout(id);
          return reject(false);
        });
      });
    }
  };

  // node_modules/@azure/msal-browser/dist/cache/MemoryStorage.mjs
  var MemoryStorage = class {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
    }
    async initialize() {
    }
    getItem(key) {
      return this.cache.get(key) || null;
    }
    getUserData(key) {
      return this.getItem(key);
    }
    setItem(key, value) {
      this.cache.set(key, value);
    }
    async setUserData(key, value) {
      this.setItem(key, value);
    }
    removeItem(key) {
      this.cache.delete(key);
    }
    getKeys() {
      const cacheKeys = [];
      this.cache.forEach((value, key) => {
        cacheKeys.push(key);
      });
      return cacheKeys;
    }
    containsKey(key) {
      return this.cache.has(key);
    }
    clear() {
      this.cache.clear();
    }
    decryptData() {
      return Promise.resolve(null);
    }
  };

  // node_modules/@azure/msal-browser/dist/cache/AsyncMemoryStorage.mjs
  var AsyncMemoryStorage = class {
    constructor(logger) {
      this.inMemoryCache = new MemoryStorage();
      this.indexedDBCache = new DatabaseStorage();
      this.logger = logger;
    }
    handleDatabaseAccessError(error) {
      if (error instanceof BrowserAuthError && error.errorCode === databaseUnavailable) {
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      } else {
        throw error;
      }
    }
    /**
     * Get the item matching the given key. Tries in-memory cache first, then in the asynchronous
     * storage object if item isn't found in-memory.
     * @param key
     */
    async getItem(key) {
      const item = this.inMemoryCache.getItem(key);
      if (!item) {
        try {
          this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
          return await this.indexedDBCache.getItem(key);
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return item;
    }
    /**
     * Sets the item in the in-memory cache and then tries to set it in the asynchronous
     * storage object with the given key.
     * @param key
     * @param value
     */
    async setItem(key, value) {
      this.inMemoryCache.setItem(key, value);
      try {
        await this.indexedDBCache.setItem(key, value);
      } catch (e) {
        this.handleDatabaseAccessError(e);
      }
    }
    /**
     * Removes the item matching the key from the in-memory cache, then tries to remove it from the asynchronous storage object.
     * @param key
     */
    async removeItem(key) {
      this.inMemoryCache.removeItem(key);
      try {
        await this.indexedDBCache.removeItem(key);
      } catch (e) {
        this.handleDatabaseAccessError(e);
      }
    }
    /**
     * Get all the keys from the in-memory cache as an iterable array of strings. If no keys are found, query the keys in the
     * asynchronous storage object.
     */
    async getKeys() {
      const cacheKeys = this.inMemoryCache.getKeys();
      if (cacheKeys.length === 0) {
        try {
          this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
          return await this.indexedDBCache.getKeys();
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return cacheKeys;
    }
    /**
     * Returns true or false if the given key is present in the cache.
     * @param key
     */
    async containsKey(key) {
      const containsKey = this.inMemoryCache.containsKey(key);
      if (!containsKey) {
        try {
          this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
          return await this.indexedDBCache.containsKey(key);
        } catch (e) {
          this.handleDatabaseAccessError(e);
        }
      }
      return containsKey;
    }
    /**
     * Clears in-memory Map
     */
    clearInMemory() {
      this.logger.verbose(`Deleting in-memory keystore`);
      this.inMemoryCache.clear();
      this.logger.verbose(`In-memory keystore deleted`);
    }
    /**
     * Tries to delete the IndexedDB database
     * @returns
     */
    async clearPersistent() {
      try {
        this.logger.verbose("Deleting persistent keystore");
        const dbDeleted = await this.indexedDBCache.deleteDatabase();
        if (dbDeleted) {
          this.logger.verbose("Persistent keystore deleted");
        }
        return dbDeleted;
      } catch (e) {
        this.handleDatabaseAccessError(e);
        return false;
      }
    }
  };

  // node_modules/@azure/msal-browser/dist/crypto/CryptoOps.mjs
  var CryptoOps = class _CryptoOps {
    constructor(logger, performanceClient, skipValidateSubtleCrypto) {
      this.logger = logger;
      validateCryptoAvailable(skipValidateSubtleCrypto ?? false);
      this.cache = new AsyncMemoryStorage(this.logger);
      this.performanceClient = performanceClient;
    }
    /**
     * Creates a new random GUID - used to populate state and nonce.
     * @returns string (GUID)
     */
    createNewGuid() {
      return createNewGuid();
    }
    /**
     * Encodes input string to base64.
     * @param input
     */
    base64Encode(input) {
      return base64Encode(input);
    }
    /**
     * Decodes input string from base64.
     * @param input
     */
    base64Decode(input) {
      return base64Decode(input);
    }
    /**
     * Encodes input string to base64 URL safe string.
     * @param input
     */
    base64UrlEncode(input) {
      return urlEncode(input);
    }
    /**
     * Stringifies and base64Url encodes input public key
     * @param inputKid
     * @returns Base64Url encoded public key
     */
    encodeKid(inputKid) {
      return this.base64UrlEncode(JSON.stringify({ kid: inputKid }));
    }
    /**
     * Generates a keypair, stores it and returns a thumbprint
     * @param request
     */
    async getPublicKeyThumbprint(request) {
      const publicKeyThumbMeasurement = this.performanceClient?.startMeasurement(PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, request.correlationId);
      const keyPair = await generateKeyPair(_CryptoOps.EXTRACTABLE, _CryptoOps.POP_KEY_USAGES);
      const publicKeyJwk = await exportJwk(keyPair.publicKey);
      const pubKeyThumprintObj = {
        e: publicKeyJwk.e,
        kty: publicKeyJwk.kty,
        n: publicKeyJwk.n
      };
      const publicJwkString = getSortedObjectString(pubKeyThumprintObj);
      const publicJwkHash = await this.hashString(publicJwkString);
      const privateKeyJwk = await exportJwk(keyPair.privateKey);
      const unextractablePrivateKey = await importJwk(privateKeyJwk, false, ["sign"]);
      await this.cache.setItem(publicJwkHash, {
        privateKey: unextractablePrivateKey,
        publicKey: keyPair.publicKey,
        requestMethod: request.resourceRequestMethod,
        requestUri: request.resourceRequestUri
      });
      if (publicKeyThumbMeasurement) {
        publicKeyThumbMeasurement.end({
          success: true
        });
      }
      return publicJwkHash;
    }
    /**
     * Removes cryptographic keypair from key store matching the keyId passed in
     * @param kid
     */
    async removeTokenBindingKey(kid) {
      await this.cache.removeItem(kid);
      const keyFound = await this.cache.containsKey(kid);
      if (keyFound) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.bindingKeyNotRemoved);
      }
    }
    /**
     * Removes all cryptographic keys from IndexedDB storage
     */
    async clearKeystore() {
      this.cache.clearInMemory();
      try {
        await this.cache.clearPersistent();
        return true;
      } catch (e) {
        if (e instanceof Error) {
          this.logger.error(`Clearing keystore failed with error: ${e.message}`);
        } else {
          this.logger.error("Clearing keystore failed with unknown error");
        }
        return false;
      }
    }
    /**
     * Signs the given object as a jwt payload with private key retrieved by given kid.
     * @param payload
     * @param kid
     */
    async signJwt(payload, kid, shrOptions, correlationId) {
      const signJwtMeasurement = this.performanceClient?.startMeasurement(PerformanceEvents.CryptoOptsSignJwt, correlationId);
      const cachedKeyPair = await this.cache.getItem(kid);
      if (!cachedKeyPair) {
        throw createBrowserAuthError(cryptoKeyNotFound);
      }
      const publicKeyJwk = await exportJwk(cachedKeyPair.publicKey);
      const publicKeyJwkString = getSortedObjectString(publicKeyJwk);
      const encodedKeyIdThumbprint = urlEncode(JSON.stringify({ kid }));
      const shrHeader = JoseHeader.getShrHeaderString({
        ...shrOptions?.header,
        alg: publicKeyJwk.alg,
        kid: encodedKeyIdThumbprint
      });
      const encodedShrHeader = urlEncode(shrHeader);
      payload.cnf = {
        jwk: JSON.parse(publicKeyJwkString)
      };
      const encodedPayload = urlEncode(JSON.stringify(payload));
      const tokenString = `${encodedShrHeader}.${encodedPayload}`;
      const encoder = new TextEncoder();
      const tokenBuffer = encoder.encode(tokenString);
      const signatureBuffer = await sign(cachedKeyPair.privateKey, tokenBuffer);
      const encodedSignature = urlEncodeArr(new Uint8Array(signatureBuffer));
      const signedJwt = `${tokenString}.${encodedSignature}`;
      if (signJwtMeasurement) {
        signJwtMeasurement.end({
          success: true
        });
      }
      return signedJwt;
    }
    /**
     * Returns the SHA-256 hash of an input string
     * @param plainText
     */
    async hashString(plainText) {
      return hashString(plainText);
    }
  };
  CryptoOps.POP_KEY_USAGES = ["sign", "verify"];
  CryptoOps.EXTRACTABLE = true;
  function getSortedObjectString(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
  }

  // node_modules/@azure/msal-browser/dist/cache/CookieStorage.mjs
  var COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3;
  var SameSiteOptions = {
    Lax: "Lax",
    None: "None"
  };
  var CookieStorage = class {
    initialize() {
      return Promise.resolve();
    }
    getItem(key) {
      const name3 = `${encodeURIComponent(key)}`;
      const cookieList = document.cookie.split(";");
      for (let i = 0; i < cookieList.length; i++) {
        const cookie = cookieList[i];
        const [key2, ...rest] = decodeURIComponent(cookie).trim().split("=");
        const value = rest.join("=");
        if (key2 === name3) {
          return value;
        }
      }
      return "";
    }
    getUserData() {
      throw createClientAuthError(ClientAuthErrorCodes_exports.methodNotImplemented);
    }
    setItem(key, value, cookieLifeDays, secure = true, sameSite = SameSiteOptions.Lax) {
      let cookieStr = `${encodeURIComponent(key)}=${encodeURIComponent(value)};path=/;SameSite=${sameSite};`;
      if (cookieLifeDays) {
        const expireTime = getCookieExpirationTime(cookieLifeDays);
        cookieStr += `expires=${expireTime};`;
      }
      if (secure || sameSite === SameSiteOptions.None) {
        cookieStr += "Secure;";
      }
      document.cookie = cookieStr;
    }
    async setUserData() {
      return Promise.reject(createClientAuthError(ClientAuthErrorCodes_exports.methodNotImplemented));
    }
    removeItem(key) {
      this.setItem(key, "", -1);
    }
    getKeys() {
      const cookieList = document.cookie.split(";");
      const keys = [];
      cookieList.forEach((cookie) => {
        const cookieParts = decodeURIComponent(cookie).trim().split("=");
        keys.push(cookieParts[0]);
      });
      return keys;
    }
    containsKey(key) {
      return this.getKeys().includes(key);
    }
    decryptData() {
      return Promise.resolve(null);
    }
  };
  function getCookieExpirationTime(cookieLifeDays) {
    const today = /* @__PURE__ */ new Date();
    const expr = new Date(today.getTime() + cookieLifeDays * COOKIE_LIFE_MULTIPLIER);
    return expr.toUTCString();
  }

  // node_modules/@azure/msal-browser/dist/cache/CacheHelpers.mjs
  function getAccountKeys(storage, schemaVersion) {
    const accountKeys = storage.getItem(getAccountKeysCacheKey(schemaVersion));
    if (accountKeys) {
      return JSON.parse(accountKeys);
    }
    return [];
  }
  function getTokenKeys(clientId, storage, schemaVersion) {
    const item = storage.getItem(getTokenKeysCacheKey(clientId, schemaVersion));
    if (item) {
      const tokenKeys = JSON.parse(item);
      if (tokenKeys && tokenKeys.hasOwnProperty("idToken") && tokenKeys.hasOwnProperty("accessToken") && tokenKeys.hasOwnProperty("refreshToken")) {
        return tokenKeys;
      }
    }
    return {
      idToken: [],
      accessToken: [],
      refreshToken: []
    };
  }

  // node_modules/@azure/msal-browser/dist/cache/EncryptedData.mjs
  function isEncrypted(data) {
    return data.hasOwnProperty("id") && data.hasOwnProperty("nonce") && data.hasOwnProperty("data");
  }

  // node_modules/@azure/msal-browser/dist/cache/LocalStorage.mjs
  var ENCRYPTION_KEY = "msal.cache.encryption";
  var BROADCAST_CHANNEL_NAME = "msal.broadcast.cache";
  var LocalStorage = class {
    constructor(clientId, logger, performanceClient) {
      if (!window.localStorage) {
        throw createBrowserConfigurationAuthError(storageNotSupported);
      }
      this.memoryStorage = new MemoryStorage();
      this.initialized = false;
      this.clientId = clientId;
      this.logger = logger;
      this.performanceClient = performanceClient;
      this.broadcast = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
    }
    async initialize(correlationId) {
      const cookies = new CookieStorage();
      const cookieString = cookies.getItem(ENCRYPTION_KEY);
      let parsedCookie = { key: "", id: "" };
      if (cookieString) {
        try {
          parsedCookie = JSON.parse(cookieString);
        } catch (e) {
        }
      }
      if (parsedCookie.key && parsedCookie.id) {
        const baseKey = invoke(base64DecToArr, PerformanceEvents.Base64Decode, this.logger, this.performanceClient, correlationId)(parsedCookie.key);
        this.encryptionCookie = {
          id: parsedCookie.id,
          key: await invokeAsync(generateHKDF, PerformanceEvents.GenerateHKDF, this.logger, this.performanceClient, correlationId)(baseKey)
        };
      } else {
        const id = createNewGuid();
        const baseKey = await invokeAsync(generateBaseKey, PerformanceEvents.GenerateBaseKey, this.logger, this.performanceClient, correlationId)();
        const keyStr = invoke(urlEncodeArr, PerformanceEvents.UrlEncodeArr, this.logger, this.performanceClient, correlationId)(new Uint8Array(baseKey));
        this.encryptionCookie = {
          id,
          key: await invokeAsync(generateHKDF, PerformanceEvents.GenerateHKDF, this.logger, this.performanceClient, correlationId)(baseKey)
        };
        const cookieData = {
          id,
          key: keyStr
        };
        cookies.setItem(
          ENCRYPTION_KEY,
          JSON.stringify(cookieData),
          0,
          // Expiration - 0 means cookie will be cleared at the end of the browser session
          true,
          // Secure flag
          SameSiteOptions.None
          // SameSite must be None to support iframed apps
        );
      }
      await invokeAsync(this.importExistingCache.bind(this), PerformanceEvents.ImportExistingCache, this.logger, this.performanceClient, correlationId)(correlationId);
      this.broadcast.addEventListener("message", this.updateCache.bind(this));
      this.initialized = true;
    }
    getItem(key) {
      return window.localStorage.getItem(key);
    }
    getUserData(key) {
      if (!this.initialized) {
        throw createBrowserAuthError(uninitializedPublicClientApplication);
      }
      return this.memoryStorage.getItem(key);
    }
    async decryptData(key, data, correlationId) {
      if (!this.initialized || !this.encryptionCookie) {
        throw createBrowserAuthError(uninitializedPublicClientApplication);
      }
      if (data.id !== this.encryptionCookie.id) {
        this.performanceClient.incrementFields({ encryptedCacheExpiredCount: 1 }, correlationId);
        return null;
      }
      const decryptedData = await invokeAsync(decrypt, PerformanceEvents.Decrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, data.nonce, this.getContext(key), data.data);
      if (!decryptedData) {
        return null;
      }
      try {
        return JSON.parse(decryptedData);
      } catch (e) {
        this.performanceClient.incrementFields({ encryptedCacheCorruptionCount: 1 }, correlationId);
        return null;
      }
    }
    setItem(key, value) {
      window.localStorage.setItem(key, value);
    }
    async setUserData(key, value, correlationId, timestamp) {
      if (!this.initialized || !this.encryptionCookie) {
        throw createBrowserAuthError(uninitializedPublicClientApplication);
      }
      const { data, nonce } = await invokeAsync(encrypt, PerformanceEvents.Encrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, value, this.getContext(key));
      const encryptedData = {
        id: this.encryptionCookie.id,
        nonce,
        data,
        lastUpdatedAt: timestamp
      };
      this.memoryStorage.setItem(key, value);
      this.setItem(key, JSON.stringify(encryptedData));
      this.broadcast.postMessage({
        key,
        value,
        context: this.getContext(key)
      });
    }
    removeItem(key) {
      if (this.memoryStorage.containsKey(key)) {
        this.memoryStorage.removeItem(key);
        this.broadcast.postMessage({
          key,
          value: null,
          context: this.getContext(key)
        });
      }
      window.localStorage.removeItem(key);
    }
    getKeys() {
      return Object.keys(window.localStorage);
    }
    containsKey(key) {
      return window.localStorage.hasOwnProperty(key);
    }
    /**
     * Removes all known MSAL keys from the cache
     */
    clear() {
      this.memoryStorage.clear();
      const accountKeys = getAccountKeys(this);
      accountKeys.forEach((key) => this.removeItem(key));
      const tokenKeys = getTokenKeys(this.clientId, this);
      tokenKeys.idToken.forEach((key) => this.removeItem(key));
      tokenKeys.accessToken.forEach((key) => this.removeItem(key));
      tokenKeys.refreshToken.forEach((key) => this.removeItem(key));
      this.getKeys().forEach((cacheKey) => {
        if (cacheKey.startsWith(PREFIX) || cacheKey.indexOf(this.clientId) !== -1) {
          this.removeItem(cacheKey);
        }
      });
    }
    /**
     * Helper to decrypt all known MSAL keys in localStorage and save them to inMemory storage
     * @returns
     */
    async importExistingCache(correlationId) {
      if (!this.encryptionCookie) {
        return;
      }
      let accountKeys = getAccountKeys(this);
      accountKeys = await this.importArray(accountKeys, correlationId);
      if (accountKeys.length) {
        this.setItem(getAccountKeysCacheKey(), JSON.stringify(accountKeys));
      } else {
        this.removeItem(getAccountKeysCacheKey());
      }
      const tokenKeys = getTokenKeys(this.clientId, this);
      tokenKeys.idToken = await this.importArray(tokenKeys.idToken, correlationId);
      tokenKeys.accessToken = await this.importArray(tokenKeys.accessToken, correlationId);
      tokenKeys.refreshToken = await this.importArray(tokenKeys.refreshToken, correlationId);
      if (tokenKeys.idToken.length || tokenKeys.accessToken.length || tokenKeys.refreshToken.length) {
        this.setItem(getTokenKeysCacheKey(this.clientId), JSON.stringify(tokenKeys));
      } else {
        this.removeItem(getTokenKeysCacheKey(this.clientId));
      }
    }
    /**
     * Helper to decrypt and save cache entries
     * @param key
     * @returns
     */
    async getItemFromEncryptedCache(key, correlationId) {
      if (!this.encryptionCookie) {
        return null;
      }
      const rawCache = this.getItem(key);
      if (!rawCache) {
        return null;
      }
      let encObj;
      try {
        encObj = JSON.parse(rawCache);
      } catch (e) {
        return null;
      }
      if (!isEncrypted(encObj)) {
        this.performanceClient.incrementFields({ unencryptedCacheCount: 1 }, correlationId);
        return encObj;
      }
      if (encObj.id !== this.encryptionCookie.id) {
        this.performanceClient.incrementFields({ encryptedCacheExpiredCount: 1 }, correlationId);
        return null;
      }
      return invokeAsync(decrypt, PerformanceEvents.Decrypt, this.logger, this.performanceClient, correlationId)(this.encryptionCookie.key, encObj.nonce, this.getContext(key), encObj.data);
    }
    /**
     * Helper to decrypt and save an array of cache keys
     * @param arr
     * @returns Array of keys successfully imported
     */
    async importArray(arr, correlationId) {
      const importedArr = [];
      const promiseArr = [];
      arr.forEach((key) => {
        const promise = this.getItemFromEncryptedCache(key, correlationId).then((value) => {
          if (value) {
            this.memoryStorage.setItem(key, value);
            importedArr.push(key);
          } else {
            this.removeItem(key);
          }
        });
        promiseArr.push(promise);
      });
      await Promise.all(promiseArr);
      return importedArr;
    }
    /**
     * Gets encryption context for a given cache entry. This is clientId for app specific entries, empty string for shared entries
     * @param key
     * @returns
     */
    getContext(key) {
      let context = "";
      if (key.includes(this.clientId)) {
        context = this.clientId;
      }
      return context;
    }
    updateCache(event) {
      this.logger.trace("Updating internal cache from broadcast event");
      const perfMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.LocalStorageUpdated);
      perfMeasurement.add({ isBackground: true });
      const { key, value, context } = event.data;
      if (!key) {
        this.logger.error("Broadcast event missing key");
        perfMeasurement.end({ success: false, errorCode: "noKey" });
        return;
      }
      if (context && context !== this.clientId) {
        this.logger.trace(`Ignoring broadcast event from clientId: ${context}`);
        perfMeasurement.end({
          success: false,
          errorCode: "contextMismatch"
        });
        return;
      }
      if (!value) {
        this.memoryStorage.removeItem(key);
        this.logger.verbose("Removed item from internal cache");
      } else {
        this.memoryStorage.setItem(key, value);
        this.logger.verbose("Updated item in internal cache");
      }
      perfMeasurement.end({ success: true });
    }
  };

  // node_modules/@azure/msal-browser/dist/cache/SessionStorage.mjs
  var SessionStorage = class {
    constructor() {
      if (!window.sessionStorage) {
        throw createBrowserConfigurationAuthError(storageNotSupported);
      }
    }
    async initialize() {
    }
    getItem(key) {
      return window.sessionStorage.getItem(key);
    }
    getUserData(key) {
      return this.getItem(key);
    }
    setItem(key, value) {
      window.sessionStorage.setItem(key, value);
    }
    async setUserData(key, value) {
      this.setItem(key, value);
    }
    removeItem(key) {
      window.sessionStorage.removeItem(key);
    }
    getKeys() {
      return Object.keys(window.sessionStorage);
    }
    containsKey(key) {
      return window.sessionStorage.hasOwnProperty(key);
    }
    decryptData() {
      return Promise.resolve(null);
    }
  };

  // node_modules/@azure/msal-browser/dist/event/EventType.mjs
  var EventType = {
    INITIALIZE_START: "msal:initializeStart",
    INITIALIZE_END: "msal:initializeEnd",
    ACCOUNT_ADDED: "msal:accountAdded",
    ACCOUNT_REMOVED: "msal:accountRemoved",
    ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
    LOGIN_START: "msal:loginStart",
    LOGIN_SUCCESS: "msal:loginSuccess",
    LOGIN_FAILURE: "msal:loginFailure",
    ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
    ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
    ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
    ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
    SSO_SILENT_START: "msal:ssoSilentStart",
    SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
    SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
    ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
    ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
    ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
    HANDLE_REDIRECT_START: "msal:handleRedirectStart",
    HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
    POPUP_OPENED: "msal:popupOpened",
    LOGOUT_START: "msal:logoutStart",
    LOGOUT_SUCCESS: "msal:logoutSuccess",
    LOGOUT_FAILURE: "msal:logoutFailure",
    LOGOUT_END: "msal:logoutEnd",
    RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache",
    BROKER_CONNECTION_ESTABLISHED: "msal:brokerConnectionEstablished"
  };

  // node_modules/@azure/msal-browser/dist/utils/Helpers.mjs
  function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  // node_modules/@azure/msal-browser/dist/cache/BrowserCacheManager.mjs
  var BrowserCacheManager = class extends CacheManager {
    constructor(clientId, cacheConfig, cryptoImpl, logger, performanceClient, eventHandler, staticAuthorityOptions) {
      super(clientId, cryptoImpl, logger, performanceClient, staticAuthorityOptions);
      this.cacheConfig = cacheConfig;
      this.logger = logger;
      this.internalStorage = new MemoryStorage();
      this.browserStorage = getStorageImplementation(clientId, cacheConfig.cacheLocation, logger, performanceClient);
      this.temporaryCacheStorage = getStorageImplementation(clientId, cacheConfig.temporaryCacheLocation, logger, performanceClient);
      this.cookieStorage = new CookieStorage();
      this.eventHandler = eventHandler;
    }
    async initialize(correlationId) {
      this.performanceClient.addFields({
        cacheLocation: this.cacheConfig.cacheLocation,
        cacheRetentionDays: this.cacheConfig.cacheRetentionDays
      }, correlationId);
      await this.browserStorage.initialize(correlationId);
      await this.migrateExistingCache(correlationId);
      this.trackVersionChanges(correlationId);
    }
    /**
     * Migrates any existing cache data from previous versions of MSAL.js into the current cache structure.
     */
    async migrateExistingCache(correlationId) {
      const accountKeys0 = getAccountKeys(this.browserStorage, 0);
      const tokenKeys0 = getTokenKeys(this.clientId, this.browserStorage, 0);
      this.performanceClient.addFields({
        oldAccountCount: accountKeys0.length,
        oldAccessCount: tokenKeys0.accessToken.length,
        oldIdCount: tokenKeys0.idToken.length,
        oldRefreshCount: tokenKeys0.refreshToken.length
      }, correlationId);
      const accountKeys1 = getAccountKeys(this.browserStorage, 1);
      const tokenKeys1 = getTokenKeys(this.clientId, this.browserStorage, 1);
      this.performanceClient.addFields({
        currAccountCount: accountKeys1.length,
        currAccessCount: tokenKeys1.accessToken.length,
        currIdCount: tokenKeys1.idToken.length,
        currRefreshCount: tokenKeys1.refreshToken.length
      }, correlationId);
      await Promise.all([
        this.updateV0ToCurrent(ACCOUNT_SCHEMA_VERSION, accountKeys0, accountKeys1, correlationId),
        this.updateV0ToCurrent(CREDENTIAL_SCHEMA_VERSION, tokenKeys0.idToken, tokenKeys1.idToken, correlationId),
        this.updateV0ToCurrent(CREDENTIAL_SCHEMA_VERSION, tokenKeys0.accessToken, tokenKeys1.accessToken, correlationId),
        this.updateV0ToCurrent(CREDENTIAL_SCHEMA_VERSION, tokenKeys0.refreshToken, tokenKeys1.refreshToken, correlationId)
      ]);
      if (accountKeys0.length > 0) {
        this.browserStorage.setItem(getAccountKeysCacheKey(0), JSON.stringify(accountKeys0));
      } else {
        this.browserStorage.removeItem(getAccountKeysCacheKey(0));
      }
      if (accountKeys1.length > 0) {
        this.browserStorage.setItem(getAccountKeysCacheKey(1), JSON.stringify(accountKeys1));
      } else {
        this.browserStorage.removeItem(getAccountKeysCacheKey(1));
      }
      this.setTokenKeys(tokenKeys0, correlationId, 0);
      this.setTokenKeys(tokenKeys1, correlationId, 1);
    }
    async updateV0ToCurrent(currentSchema, v0Keys, v1Keys, correlationId) {
      const upgradePromises = [];
      for (const v0Key of [...v0Keys]) {
        const rawV0Value = this.browserStorage.getItem(v0Key);
        const parsedV0Value = this.validateAndParseJson(rawV0Value || "");
        if (!parsedV0Value) {
          removeElementFromArray(v0Keys, v0Key);
          continue;
        }
        if (!parsedV0Value.lastUpdatedAt) {
          parsedV0Value.lastUpdatedAt = Date.now().toString();
          this.setItem(v0Key, JSON.stringify(parsedV0Value), correlationId);
        }
        const decryptedData = isEncrypted(parsedV0Value) ? await this.browserStorage.decryptData(v0Key, parsedV0Value, correlationId) : parsedV0Value;
        let expirationTime;
        if (decryptedData) {
          if (CacheHelpers_exports.isAccessTokenEntity(decryptedData)) {
            expirationTime = decryptedData.expiresOn;
          } else if (CacheHelpers_exports.isRefreshTokenEntity(decryptedData)) {
            expirationTime = decryptedData.expiresOn;
          }
        }
        if (!decryptedData || TimeUtils_exports.isCacheExpired(parsedV0Value.lastUpdatedAt, this.cacheConfig.cacheRetentionDays) || expirationTime && TimeUtils_exports.isTokenExpired(expirationTime, DEFAULT_TOKEN_RENEWAL_OFFSET_SEC)) {
          this.browserStorage.removeItem(v0Key);
          removeElementFromArray(v0Keys, v0Key);
          this.performanceClient.incrementFields({ expiredCacheRemovedCount: 1 }, correlationId);
          continue;
        }
        if (this.cacheConfig.cacheLocation !== BrowserCacheLocation.LocalStorage || isEncrypted(parsedV0Value)) {
          const v1Key = `${PREFIX}.${currentSchema}${CACHE_KEY_SEPARATOR}${v0Key}`;
          const rawV1Entry = this.browserStorage.getItem(v1Key);
          if (!rawV1Entry) {
            upgradePromises.push(this.setUserData(v1Key, JSON.stringify(decryptedData), correlationId, parsedV0Value.lastUpdatedAt).then(() => {
              v1Keys.push(v1Key);
              this.performanceClient.incrementFields({ upgradedCacheCount: 1 }, correlationId);
            }));
            continue;
          } else {
            const parsedV1Entry = this.validateAndParseJson(rawV1Entry);
            if (Number(parsedV0Value.lastUpdatedAt) > Number(parsedV1Entry.lastUpdatedAt)) {
              upgradePromises.push(this.setUserData(v1Key, JSON.stringify(decryptedData), correlationId, parsedV0Value.lastUpdatedAt).then(() => {
                this.performanceClient.incrementFields({ updatedCacheFromV0Count: 1 }, correlationId);
              }));
              continue;
            }
          }
        }
      }
      return Promise.all(upgradePromises);
    }
    /**
     * Tracks upgrades and downgrades for telemetry and debugging purposes
     */
    trackVersionChanges(correlationId) {
      const previousVersion = this.browserStorage.getItem(VERSION_CACHE_KEY);
      if (previousVersion) {
        this.logger.info(`MSAL.js was last initialized by version: ${previousVersion}`);
        this.performanceClient.addFields({ previousLibraryVersion: previousVersion }, correlationId);
      }
      if (previousVersion !== version2) {
        this.setItem(VERSION_CACHE_KEY, version2, correlationId);
      }
    }
    /**
     * Parses passed value as JSON object, JSON.parse() will throw an error.
     * @param input
     */
    validateAndParseJson(jsonValue) {
      if (!jsonValue) {
        return null;
      }
      try {
        const parsedJson = JSON.parse(jsonValue);
        return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
      } catch (error) {
        return null;
      }
    }
    /**
     * Helper to setItem in browser storage, with cleanup in case of quota errors
     * @param key
     * @param value
     */
    setItem(key, value, correlationId) {
      let tokenKeysV0Count = 0;
      let accessTokenKeys = [];
      const maxRetries = 20;
      for (let i = 0; i <= maxRetries; i++) {
        try {
          this.browserStorage.setItem(key, value);
          if (i > 0) {
            if (i <= tokenKeysV0Count) {
              this.removeAccessTokenKeys(accessTokenKeys.slice(0, i), correlationId, 0);
            } else {
              this.removeAccessTokenKeys(accessTokenKeys.slice(0, tokenKeysV0Count), correlationId, 0);
              this.removeAccessTokenKeys(accessTokenKeys.slice(tokenKeysV0Count, i), correlationId);
            }
          }
          break;
        } catch (e) {
          const cacheError = createCacheError(e);
          if (cacheError.errorCode === CacheErrorCodes_exports.cacheQuotaExceeded && i < maxRetries) {
            if (!accessTokenKeys.length) {
              const tokenKeys0 = key === getTokenKeysCacheKey(this.clientId, 0) ? JSON.parse(value).accessToken : this.getTokenKeys(0).accessToken;
              const tokenKeys1 = key === getTokenKeysCacheKey(this.clientId) ? JSON.parse(value).accessToken : this.getTokenKeys().accessToken;
              accessTokenKeys = [...tokenKeys0, ...tokenKeys1];
              tokenKeysV0Count = tokenKeys0.length;
            }
            if (accessTokenKeys.length <= i) {
              throw cacheError;
            }
            this.removeAccessToken(
              accessTokenKeys[i],
              correlationId,
              false
              // Don't save token keys yet, do it at the end
            );
          } else {
            throw cacheError;
          }
        }
      }
    }
    /**
     * Helper to setUserData in browser storage, with cleanup in case of quota errors
     * @param key
     * @param value
     * @param correlationId
     */
    async setUserData(key, value, correlationId, timestamp) {
      let tokenKeysV0Count = 0;
      let accessTokenKeys = [];
      const maxRetries = 20;
      for (let i = 0; i <= maxRetries; i++) {
        try {
          await invokeAsync(this.browserStorage.setUserData.bind(this.browserStorage), PerformanceEvents.SetUserData, this.logger, this.performanceClient)(key, value, correlationId, timestamp);
          if (i > 0) {
            if (i <= tokenKeysV0Count) {
              this.removeAccessTokenKeys(accessTokenKeys.slice(0, i), correlationId, 0);
            } else {
              this.removeAccessTokenKeys(accessTokenKeys.slice(0, tokenKeysV0Count), correlationId, 0);
              this.removeAccessTokenKeys(accessTokenKeys.slice(tokenKeysV0Count, i), correlationId);
            }
          }
          break;
        } catch (e) {
          const cacheError = createCacheError(e);
          if (cacheError.errorCode === CacheErrorCodes_exports.cacheQuotaExceeded && i < maxRetries) {
            if (!accessTokenKeys.length) {
              const tokenKeys0 = this.getTokenKeys(0).accessToken;
              const tokenKeys1 = this.getTokenKeys().accessToken;
              accessTokenKeys = [...tokenKeys0, ...tokenKeys1];
              tokenKeysV0Count = tokenKeys0.length;
            }
            if (accessTokenKeys.length <= i) {
              throw cacheError;
            }
            this.removeAccessToken(
              accessTokenKeys[i],
              correlationId,
              false
              // Don't save token keys yet, do it at the end
            );
          } else {
            throw cacheError;
          }
        }
      }
    }
    /**
     * Reads account from cache, deserializes it into an account entity and returns it.
     * If account is not found from the key, returns null and removes key from map.
     * @param accountKey
     * @returns
     */
    getAccount(accountKey, correlationId) {
      this.logger.trace("BrowserCacheManager.getAccount called");
      const serializedAccount = this.browserStorage.getUserData(accountKey);
      if (!serializedAccount) {
        this.removeAccountKeyFromMap(accountKey, correlationId);
        return null;
      }
      const parsedAccount = this.validateAndParseJson(serializedAccount);
      if (!parsedAccount || !AccountEntity.isAccountEntity(parsedAccount)) {
        return null;
      }
      return CacheManager.toObject(new AccountEntity(), parsedAccount);
    }
    /**
     * set account entity in the platform cache
     * @param account
     */
    async setAccount(account2, correlationId) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      const key = this.generateAccountKey(account2.getAccountInfo());
      const timestamp = Date.now().toString();
      account2.lastUpdatedAt = timestamp;
      await this.setUserData(key, JSON.stringify(account2), correlationId, timestamp);
      const wasAdded = this.addAccountKeyToMap(key, correlationId);
      if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage && wasAdded) {
        this.eventHandler.emitEvent(EventType.ACCOUNT_ADDED, void 0, account2.getAccountInfo());
      }
    }
    /**
     * Returns the array of account keys currently cached
     * @returns
     */
    getAccountKeys() {
      return getAccountKeys(this.browserStorage);
    }
    /**
     * Add a new account to the key map
     * @param key
     */
    addAccountKeyToMap(key, correlationId) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called");
      this.logger.tracePii(`BrowserCacheManager.addAccountKeyToMap called with key: ${key}`);
      const accountKeys = this.getAccountKeys();
      if (accountKeys.indexOf(key) === -1) {
        accountKeys.push(key);
        this.setItem(getAccountKeysCacheKey(), JSON.stringify(accountKeys), correlationId);
        this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added");
        return true;
      } else {
        this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
        return false;
      }
    }
    /**
     * Remove an account from the key map
     * @param key
     */
    removeAccountKeyFromMap(key, correlationId) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called");
      this.logger.tracePii(`BrowserCacheManager.removeAccountKeyFromMap called with key: ${key}`);
      const accountKeys = this.getAccountKeys();
      const removalIndex = accountKeys.indexOf(key);
      if (removalIndex > -1) {
        accountKeys.splice(removalIndex, 1);
        if (accountKeys.length === 0) {
          this.removeItem(getAccountKeysCacheKey());
          return;
        } else {
          this.setItem(getAccountKeysCacheKey(), JSON.stringify(accountKeys), correlationId);
        }
        this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed");
      } else {
        this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
      }
    }
    /**
     * Extends inherited removeAccount function to include removal of the account key from the map
     * @param key
     */
    removeAccount(account2, correlationId) {
      const activeAccount = this.getActiveAccount(correlationId);
      if (activeAccount?.homeAccountId === account2.homeAccountId && activeAccount?.environment === account2.environment) {
        this.setActiveAccount(null, correlationId);
      }
      super.removeAccount(account2, correlationId);
      this.removeAccountKeyFromMap(this.generateAccountKey(account2), correlationId);
      this.browserStorage.getKeys().forEach((key) => {
        if (key.includes(account2.homeAccountId) && key.includes(account2.environment)) {
          this.browserStorage.removeItem(key);
        }
      });
      if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
        this.eventHandler.emitEvent(EventType.ACCOUNT_REMOVED, void 0, account2);
      }
    }
    /**
     * Removes given idToken from the cache and from the key map
     * @param key
     */
    removeIdToken(key, correlationId) {
      super.removeIdToken(key, correlationId);
      const tokenKeys = this.getTokenKeys();
      const idRemoval = tokenKeys.idToken.indexOf(key);
      if (idRemoval > -1) {
        this.logger.info("idToken removed from tokenKeys map");
        tokenKeys.idToken.splice(idRemoval, 1);
        this.setTokenKeys(tokenKeys, correlationId);
      }
    }
    /**
     * Removes given accessToken from the cache and from the key map
     * @param key
     */
    removeAccessToken(key, correlationId, updateTokenKeys = true) {
      super.removeAccessToken(key, correlationId);
      updateTokenKeys && this.removeAccessTokenKeys([key], correlationId);
    }
    /**
     * Remove access token key from the key map
     * @param key
     * @param correlationId
     * @param tokenKeys
     */
    removeAccessTokenKeys(keys, correlationId, schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
      this.logger.trace("removeAccessTokenKey called");
      const tokenKeys = this.getTokenKeys(schemaVersion);
      let keysRemoved = 0;
      keys.forEach((key) => {
        const accessRemoval = tokenKeys.accessToken.indexOf(key);
        if (accessRemoval > -1) {
          tokenKeys.accessToken.splice(accessRemoval, 1);
          keysRemoved++;
        }
      });
      if (keysRemoved > 0) {
        this.logger.info(`removed ${keysRemoved} accessToken keys from tokenKeys map`);
        this.setTokenKeys(tokenKeys, correlationId, schemaVersion);
        return;
      }
    }
    /**
     * Removes given refreshToken from the cache and from the key map
     * @param key
     */
    removeRefreshToken(key, correlationId) {
      super.removeRefreshToken(key, correlationId);
      const tokenKeys = this.getTokenKeys();
      const refreshRemoval = tokenKeys.refreshToken.indexOf(key);
      if (refreshRemoval > -1) {
        this.logger.info("refreshToken removed from tokenKeys map");
        tokenKeys.refreshToken.splice(refreshRemoval, 1);
        this.setTokenKeys(tokenKeys, correlationId);
      }
    }
    /**
     * Gets the keys for the cached tokens associated with this clientId
     * @returns
     */
    getTokenKeys(schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
      return getTokenKeys(this.clientId, this.browserStorage, schemaVersion);
    }
    /**
     * Stores the token keys in the cache
     * @param tokenKeys
     * @param correlationId
     * @returns
     */
    setTokenKeys(tokenKeys, correlationId, schemaVersion = CREDENTIAL_SCHEMA_VERSION) {
      if (tokenKeys.idToken.length === 0 && tokenKeys.accessToken.length === 0 && tokenKeys.refreshToken.length === 0) {
        this.removeItem(getTokenKeysCacheKey(this.clientId, schemaVersion));
        return;
      } else {
        this.setItem(getTokenKeysCacheKey(this.clientId, schemaVersion), JSON.stringify(tokenKeys), correlationId);
      }
    }
    /**
     * generates idToken entity from a string
     * @param idTokenKey
     */
    getIdTokenCredential(idTokenKey, correlationId) {
      const value = this.browserStorage.getUserData(idTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
        this.removeIdToken(idTokenKey, correlationId);
        return null;
      }
      const parsedIdToken = this.validateAndParseJson(value);
      if (!parsedIdToken || !CacheHelpers_exports.isIdTokenEntity(parsedIdToken)) {
        this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
      return parsedIdToken;
    }
    /**
     * set IdToken credential to the platform cache
     * @param idToken
     */
    async setIdTokenCredential(idToken, correlationId) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      const idTokenKey = this.generateCredentialKey(idToken);
      const timestamp = Date.now().toString();
      idToken.lastUpdatedAt = timestamp;
      await this.setUserData(idTokenKey, JSON.stringify(idToken), correlationId, timestamp);
      const tokenKeys = this.getTokenKeys();
      if (tokenKeys.idToken.indexOf(idTokenKey) === -1) {
        this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map");
        tokenKeys.idToken.push(idTokenKey);
        this.setTokenKeys(tokenKeys, correlationId);
      }
    }
    /**
     * generates accessToken entity from a string
     * @param key
     */
    getAccessTokenCredential(accessTokenKey, correlationId) {
      const value = this.browserStorage.getUserData(accessTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
        this.removeAccessTokenKeys([accessTokenKey], correlationId);
        return null;
      }
      const parsedAccessToken = this.validateAndParseJson(value);
      if (!parsedAccessToken || !CacheHelpers_exports.isAccessTokenEntity(parsedAccessToken)) {
        this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
      return parsedAccessToken;
    }
    /**
     * set accessToken credential to the platform cache
     * @param accessToken
     */
    async setAccessTokenCredential(accessToken, correlationId) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      const accessTokenKey = this.generateCredentialKey(accessToken);
      const timestamp = Date.now().toString();
      accessToken.lastUpdatedAt = timestamp;
      await this.setUserData(accessTokenKey, JSON.stringify(accessToken), correlationId, timestamp);
      const tokenKeys = this.getTokenKeys();
      const index = tokenKeys.accessToken.indexOf(accessTokenKey);
      if (index !== -1) {
        tokenKeys.accessToken.splice(index, 1);
      }
      this.logger.trace(`access token ${index === -1 ? "added to" : "updated in"} map`);
      tokenKeys.accessToken.push(accessTokenKey);
      this.setTokenKeys(tokenKeys, correlationId);
    }
    /**
     * generates refreshToken entity from a string
     * @param refreshTokenKey
     */
    getRefreshTokenCredential(refreshTokenKey, correlationId) {
      const value = this.browserStorage.getUserData(refreshTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
        this.removeRefreshToken(refreshTokenKey, correlationId);
        return null;
      }
      const parsedRefreshToken = this.validateAndParseJson(value);
      if (!parsedRefreshToken || !CacheHelpers_exports.isRefreshTokenEntity(parsedRefreshToken)) {
        this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
      return parsedRefreshToken;
    }
    /**
     * set refreshToken credential to the platform cache
     * @param refreshToken
     */
    async setRefreshTokenCredential(refreshToken, correlationId) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      const refreshTokenKey = this.generateCredentialKey(refreshToken);
      const timestamp = Date.now().toString();
      refreshToken.lastUpdatedAt = timestamp;
      await this.setUserData(refreshTokenKey, JSON.stringify(refreshToken), correlationId, timestamp);
      const tokenKeys = this.getTokenKeys();
      if (tokenKeys.refreshToken.indexOf(refreshTokenKey) === -1) {
        this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map");
        tokenKeys.refreshToken.push(refreshTokenKey);
        this.setTokenKeys(tokenKeys, correlationId);
      }
    }
    /**
     * fetch appMetadata entity from the platform cache
     * @param appMetadataKey
     */
    getAppMetadata(appMetadataKey) {
      const value = this.browserStorage.getItem(appMetadataKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
        return null;
      }
      const parsedMetadata = this.validateAndParseJson(value);
      if (!parsedMetadata || !CacheHelpers_exports.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
        this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
      return parsedMetadata;
    }
    /**
     * set appMetadata entity to the platform cache
     * @param appMetadata
     */
    setAppMetadata(appMetadata, correlationId) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      const appMetadataKey = CacheHelpers_exports.generateAppMetadataKey(appMetadata);
      this.setItem(appMetadataKey, JSON.stringify(appMetadata), correlationId);
    }
    /**
     * fetch server telemetry entity from the platform cache
     * @param serverTelemetryKey
     */
    getServerTelemetry(serverTelemetryKey) {
      const value = this.browserStorage.getItem(serverTelemetryKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
        return null;
      }
      const parsedEntity = this.validateAndParseJson(value);
      if (!parsedEntity || !CacheHelpers_exports.isServerTelemetryEntity(serverTelemetryKey, parsedEntity)) {
        this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
      return parsedEntity;
    }
    /**
     * set server telemetry entity to the platform cache
     * @param serverTelemetryKey
     * @param serverTelemetry
     */
    setServerTelemetry(serverTelemetryKey, serverTelemetry, correlationId) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called");
      this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry), correlationId);
    }
    /**
     *
     */
    getAuthorityMetadata(key) {
      const value = this.internalStorage.getItem(key);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
        return null;
      }
      const parsedMetadata = this.validateAndParseJson(value);
      if (parsedMetadata && CacheHelpers_exports.isAuthorityMetadataEntity(key, parsedMetadata)) {
        this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
        return parsedMetadata;
      }
      return null;
    }
    /**
     *
     */
    getAuthorityMetadataKeys() {
      const allKeys = this.internalStorage.getKeys();
      return allKeys.filter((key) => {
        return this.isAuthorityMetadata(key);
      });
    }
    /**
     * Sets wrapper metadata in memory
     * @param wrapperSKU
     * @param wrapperVersion
     */
    setWrapperMetadata(wrapperSKU, wrapperVersion) {
      this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
      this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
    }
    /**
     * Returns wrapper metadata from in-memory storage
     */
    getWrapperMetadata() {
      const sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || Constants.EMPTY_STRING;
      const version3 = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || Constants.EMPTY_STRING;
      return [sku, version3];
    }
    /**
     *
     * @param entity
     */
    setAuthorityMetadata(key, entity) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
      this.internalStorage.setItem(key, JSON.stringify(entity));
    }
    /**
     * Gets the active account
     */
    getActiveAccount(correlationId) {
      const activeAccountKeyFilters = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
      const activeAccountValueFilters = this.browserStorage.getItem(activeAccountKeyFilters);
      if (!activeAccountValueFilters) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters found");
        return null;
      }
      const activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
      if (activeAccountValueObj) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found");
        return this.getAccountInfoFilteredBy({
          homeAccountId: activeAccountValueObj.homeAccountId,
          localAccountId: activeAccountValueObj.localAccountId,
          tenantId: activeAccountValueObj.tenantId
        }, correlationId);
      }
      this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
      return null;
    }
    /**
     * Sets the active account's localAccountId in cache
     * @param account
     */
    setActiveAccount(account2, correlationId) {
      const activeAccountKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
      if (account2) {
        this.logger.verbose("setActiveAccount: Active account set");
        const activeAccountValue = {
          homeAccountId: account2.homeAccountId,
          localAccountId: account2.localAccountId,
          tenantId: account2.tenantId,
          lastUpdatedAt: TimeUtils_exports.nowSeconds().toString()
        };
        this.setItem(activeAccountKey, JSON.stringify(activeAccountValue), correlationId);
      } else {
        this.logger.verbose("setActiveAccount: No account passed, active account not set");
        this.browserStorage.removeItem(activeAccountKey);
      }
      this.eventHandler.emitEvent(EventType.ACTIVE_ACCOUNT_CHANGED);
    }
    /**
     * fetch throttling entity from the platform cache
     * @param throttlingCacheKey
     */
    getThrottlingCache(throttlingCacheKey) {
      const value = this.browserStorage.getItem(throttlingCacheKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
        return null;
      }
      const parsedThrottlingCache = this.validateAndParseJson(value);
      if (!parsedThrottlingCache || !CacheHelpers_exports.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
        this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
      return parsedThrottlingCache;
    }
    /**
     * set throttling entity to the platform cache
     * @param throttlingCacheKey
     * @param throttlingCache
     */
    setThrottlingCache(throttlingCacheKey, throttlingCache, correlationId) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called");
      this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache), correlationId);
    }
    /**
     * Gets cache item with given key.
     * Will retrieve from cookies if storeAuthStateInCookie is set to true.
     * @param key
     */
    getTemporaryCache(cacheKey, generateKey) {
      const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
      if (this.cacheConfig.storeAuthStateInCookie) {
        const itemCookie = this.cookieStorage.getItem(key);
        if (itemCookie) {
          this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
          return itemCookie;
        }
      }
      const value = this.temporaryCacheStorage.getItem(key);
      if (!value) {
        if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
          const item = this.browserStorage.getItem(key);
          if (item) {
            this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
            return item;
          }
        }
        this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
      return value;
    }
    /**
     * Sets the cache item with the key and value given.
     * Stores in cookie if storeAuthStateInCookie is set to true.
     * This can cause cookie overflow if used incorrectly.
     * @param key
     * @param value
     */
    setTemporaryCache(cacheKey, value, generateKey) {
      const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
      this.temporaryCacheStorage.setItem(key, value);
      if (this.cacheConfig.storeAuthStateInCookie) {
        this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
        this.cookieStorage.setItem(key, value, void 0, this.cacheConfig.secureCookies);
      }
    }
    /**
     * Removes the cache item with the given key.
     * @param key
     */
    removeItem(key) {
      this.browserStorage.removeItem(key);
    }
    /**
     * Removes the temporary cache item with the given key.
     * Will also clear the cookie item if storeAuthStateInCookie is set to true.
     * @param key
     */
    removeTemporaryItem(key) {
      this.temporaryCacheStorage.removeItem(key);
      if (this.cacheConfig.storeAuthStateInCookie) {
        this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
        this.cookieStorage.removeItem(key);
      }
    }
    /**
     * Gets all keys in window.
     */
    getKeys() {
      return this.browserStorage.getKeys();
    }
    /**
     * Clears all cache entries created by MSAL.
     */
    clear(correlationId) {
      this.removeAllAccounts(correlationId);
      this.removeAppMetadata(correlationId);
      this.temporaryCacheStorage.getKeys().forEach((cacheKey) => {
        if (cacheKey.indexOf(PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
          this.removeTemporaryItem(cacheKey);
        }
      });
      this.browserStorage.getKeys().forEach((cacheKey) => {
        if (cacheKey.indexOf(PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1) {
          this.browserStorage.removeItem(cacheKey);
        }
      });
      this.internalStorage.clear();
    }
    /**
     * Clears all access tokes that have claims prior to saving the current one
     * @param performanceClient {IPerformanceClient}
     * @param correlationId {string} correlation id
     * @returns
     */
    clearTokensAndKeysWithClaims(correlationId) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.ClearTokensAndKeysWithClaims, correlationId);
      const tokenKeys = this.getTokenKeys();
      let removedAccessTokens = 0;
      tokenKeys.accessToken.forEach((key) => {
        const credential = this.getAccessTokenCredential(key, correlationId);
        if (credential?.requestedClaimsHash && key.includes(credential.requestedClaimsHash.toLowerCase())) {
          this.removeAccessToken(key, correlationId);
          removedAccessTokens++;
        }
      });
      if (removedAccessTokens > 0) {
        this.logger.warning(`${removedAccessTokens} access tokens with claims in the cache keys have been removed from the cache.`);
      }
    }
    /**
     * Prepend msal.<client-id> to each key
     * @param key
     * @param addInstanceId
     */
    generateCacheKey(key) {
      if (StringUtils.startsWith(key, PREFIX)) {
        return key;
      }
      return `${PREFIX}.${this.clientId}.${key}`;
    }
    /**
     * Cache Key: msal.<schema_version>-<home_account_id>-<environment>-<credential_type>-<client_id or familyId>-<realm>-<scopes>-<claims hash>-<scheme>
     * IdToken Example: uid.utid-login.microsoftonline.com-idtoken-app_client_id-contoso.com
     * AccessToken Example: uid.utid-login.microsoftonline.com-accesstoken-app_client_id-contoso.com-scope1 scope2--pop
     * RefreshToken Example: uid.utid-login.microsoftonline.com-refreshtoken-1-contoso.com
     * @param credentialEntity
     * @returns
     */
    generateCredentialKey(credential) {
      const familyId = credential.credentialType === CredentialType.REFRESH_TOKEN && credential.familyId || credential.clientId;
      const scheme = credential.tokenType && credential.tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? credential.tokenType.toLowerCase() : "";
      const credentialKey = [
        `${PREFIX}.${CREDENTIAL_SCHEMA_VERSION}`,
        credential.homeAccountId,
        credential.environment,
        credential.credentialType,
        familyId,
        credential.realm || "",
        credential.target || "",
        credential.requestedClaimsHash || "",
        scheme
      ];
      return credentialKey.join(CACHE_KEY_SEPARATOR).toLowerCase();
    }
    /**
     * Cache Key: msal.<schema_version>.<home_account_id>.<environment>.<tenant_id>
     * @param account
     * @returns
     */
    generateAccountKey(account2) {
      const homeTenantId = account2.homeAccountId.split(".")[1];
      const accountKey = [
        `${PREFIX}.${ACCOUNT_SCHEMA_VERSION}`,
        account2.homeAccountId,
        account2.environment,
        homeTenantId || account2.tenantId || ""
      ];
      return accountKey.join(CACHE_KEY_SEPARATOR).toLowerCase();
    }
    /**
     * Reset all temporary cache items
     * @param state
     */
    resetRequestCache() {
      this.logger.trace("BrowserCacheManager.resetRequestCache called");
      this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
      this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.VERIFIER));
      this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
      this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
      this.removeTemporaryItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
      this.setInteractionInProgress(false);
    }
    cacheAuthorizeRequest(authCodeRequest, codeVerifier) {
      this.logger.trace("BrowserCacheManager.cacheAuthorizeRequest called");
      const encodedValue = base64Encode(JSON.stringify(authCodeRequest));
      this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
      if (codeVerifier) {
        const encodedVerifier = base64Encode(codeVerifier);
        this.setTemporaryCache(TemporaryCacheKeys.VERIFIER, encodedVerifier, true);
      }
    }
    /**
     * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
     */
    getCachedRequest() {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      const encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
      if (!encodedTokenRequest) {
        throw createBrowserAuthError(noTokenRequestCacheError);
      }
      const encodedVerifier = this.getTemporaryCache(TemporaryCacheKeys.VERIFIER, true);
      let parsedRequest;
      let verifier = "";
      try {
        parsedRequest = JSON.parse(base64Decode(encodedTokenRequest));
        if (encodedVerifier) {
          verifier = base64Decode(encodedVerifier);
        }
      } catch (e) {
        this.logger.errorPii(`Attempted to parse: ${encodedTokenRequest}`);
        this.logger.error(`Parsing cached token request threw with error: ${e}`);
        throw createBrowserAuthError(unableToParseTokenRequestCacheError);
      }
      return [parsedRequest, verifier];
    }
    /**
     * Gets cached native request for redirect flows
     */
    getCachedNativeRequest() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      const cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, true);
      if (!cachedRequest) {
        this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
        return null;
      }
      const parsedRequest = this.validateAndParseJson(cachedRequest);
      if (!parsedRequest) {
        this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
        return null;
      }
      return parsedRequest;
    }
    isInteractionInProgress(matchClientId) {
      const clientId = this.getInteractionInProgress()?.clientId;
      if (matchClientId) {
        return clientId === this.clientId;
      } else {
        return !!clientId;
      }
    }
    getInteractionInProgress() {
      const key = `${PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
      const value = this.getTemporaryCache(key, false);
      try {
        return value ? JSON.parse(value) : null;
      } catch (e) {
        this.logger.error(`Cannot parse interaction status. Removing temporary cache items and clearing url hash. Retrying interaction should fix the error`);
        this.removeTemporaryItem(key);
        this.resetRequestCache();
        clearHash(window);
        return null;
      }
    }
    setInteractionInProgress(inProgress, type = INTERACTION_TYPE.SIGNIN) {
      const key = `${PREFIX}.${TemporaryCacheKeys.INTERACTION_STATUS_KEY}`;
      if (inProgress) {
        if (this.getInteractionInProgress()) {
          throw createBrowserAuthError(interactionInProgress);
        } else {
          this.setTemporaryCache(key, JSON.stringify({ clientId: this.clientId, type }), false);
        }
      } else if (!inProgress && this.getInteractionInProgress()?.clientId === this.clientId) {
        this.removeTemporaryItem(key);
      }
    }
    /**
     * Builds credential entities from AuthenticationResult object and saves the resulting credentials to the cache
     * @param result
     * @param request
     */
    async hydrateCache(result, request) {
      const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(result.account?.homeAccountId, result.account?.environment, result.idToken, this.clientId, result.tenantId);
      let claimsHash;
      if (request.claims) {
        claimsHash = await this.cryptoImpl.hashString(request.claims);
      }
      const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(
        result.account?.homeAccountId,
        result.account.environment,
        result.accessToken,
        this.clientId,
        result.tenantId,
        result.scopes.join(" "),
        // Access token expiresOn stored in seconds, converting from AuthenticationResult expiresOn stored as Date
        result.expiresOn ? TimeUtils_exports.toSecondsFromDate(result.expiresOn) : 0,
        result.extExpiresOn ? TimeUtils_exports.toSecondsFromDate(result.extExpiresOn) : 0,
        base64Decode,
        void 0,
        // refreshOn
        result.tokenType,
        void 0,
        // userAssertionHash
        request.sshKid,
        request.claims,
        claimsHash
      );
      const cacheRecord = {
        idToken: idTokenEntity,
        accessToken: accessTokenEntity
      };
      return this.saveCacheRecord(cacheRecord, result.correlationId);
    }
    /**
     * saves a cache record
     * @param cacheRecord {CacheRecord}
     * @param storeInCache {?StoreInCache}
     * @param correlationId {?string} correlation id
     */
    async saveCacheRecord(cacheRecord, correlationId, storeInCache) {
      try {
        await super.saveCacheRecord(cacheRecord, correlationId, storeInCache);
      } catch (e) {
        if (e instanceof CacheError && this.performanceClient && correlationId) {
          try {
            const tokenKeys = this.getTokenKeys();
            this.performanceClient.addFields({
              cacheRtCount: tokenKeys.refreshToken.length,
              cacheIdCount: tokenKeys.idToken.length,
              cacheAtCount: tokenKeys.accessToken.length
            }, correlationId);
          } catch (e2) {
          }
        }
        throw e;
      }
    }
  };
  function getStorageImplementation(clientId, cacheLocation, logger, performanceClient) {
    try {
      switch (cacheLocation) {
        case BrowserCacheLocation.LocalStorage:
          return new LocalStorage(clientId, logger, performanceClient);
        case BrowserCacheLocation.SessionStorage:
          return new SessionStorage();
        case BrowserCacheLocation.MemoryStorage:
        default:
          break;
      }
    } catch (e) {
      logger.error(e);
    }
    return new MemoryStorage();
  }
  var DEFAULT_BROWSER_CACHE_MANAGER = (clientId, logger, performanceClient, eventHandler) => {
    const cacheOptions = {
      cacheLocation: BrowserCacheLocation.MemoryStorage,
      cacheRetentionDays: 5,
      temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
      storeAuthStateInCookie: false,
      secureCookies: false,
      cacheMigrationEnabled: false,
      claimsBasedCachingEnabled: false
    };
    return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger, performanceClient, eventHandler);
  };

  // node_modules/@azure/msal-browser/dist/cache/AccountManager.mjs
  function getAllAccounts(logger, browserStorage, isInBrowser, correlationId, accountFilter) {
    logger.verbose("getAllAccounts called");
    return isInBrowser ? browserStorage.getAllAccounts(accountFilter || {}, correlationId) : [];
  }
  function getAccount(accountFilter, logger, browserStorage, correlationId) {
    const account2 = browserStorage.getAccountInfoFilteredBy(accountFilter, correlationId);
    if (account2) {
      logger.verbose("getAccount: Account matching provided filter found, returning");
      return account2;
    } else {
      logger.verbose("getAccount: No matching account found, returning null");
      return null;
    }
  }
  function getAccountByUsername(username, logger, browserStorage, correlationId) {
    logger.trace("getAccountByUsername called");
    if (!username) {
      logger.warning("getAccountByUsername: No username provided");
      return null;
    }
    const account2 = browserStorage.getAccountInfoFilteredBy({
      username
    }, correlationId);
    if (account2) {
      logger.verbose("getAccountByUsername: Account matching username found, returning");
      logger.verbosePii(`getAccountByUsername: Returning signed-in accounts matching username: ${username}`);
      return account2;
    } else {
      logger.verbose("getAccountByUsername: No matching account found, returning null");
      return null;
    }
  }
  function getAccountByHomeId(homeAccountId, logger, browserStorage, correlationId) {
    logger.trace("getAccountByHomeId called");
    if (!homeAccountId) {
      logger.warning("getAccountByHomeId: No homeAccountId provided");
      return null;
    }
    const account2 = browserStorage.getAccountInfoFilteredBy({
      homeAccountId
    }, correlationId);
    if (account2) {
      logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning");
      logger.verbosePii(`getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${homeAccountId}`);
      return account2;
    } else {
      logger.verbose("getAccountByHomeId: No matching account found, returning null");
      return null;
    }
  }
  function getAccountByLocalId(localAccountId, logger, browserStorage, correlationId) {
    logger.trace("getAccountByLocalId called");
    if (!localAccountId) {
      logger.warning("getAccountByLocalId: No localAccountId provided");
      return null;
    }
    const account2 = browserStorage.getAccountInfoFilteredBy({
      localAccountId
    }, correlationId);
    if (account2) {
      logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning");
      logger.verbosePii(`getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${localAccountId}`);
      return account2;
    } else {
      logger.verbose("getAccountByLocalId: No matching account found, returning null");
      return null;
    }
  }
  function setActiveAccount(account2, browserStorage, correlationId) {
    browserStorage.setActiveAccount(account2, correlationId);
  }
  function getActiveAccount(browserStorage, correlationId) {
    return browserStorage.getActiveAccount(correlationId);
  }

  // node_modules/@azure/msal-browser/dist/event/EventHandler.mjs
  var BROADCAST_CHANNEL_NAME2 = "msal.broadcast.event";
  var EventHandler = class {
    constructor(logger) {
      this.eventCallbacks = /* @__PURE__ */ new Map();
      this.logger = logger || new Logger({});
      if (typeof BroadcastChannel !== "undefined") {
        this.broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME2);
      }
      this.invokeCrossTabCallbacks = this.invokeCrossTabCallbacks.bind(this);
    }
    /**
     * Adds event callbacks to array
     * @param callback - callback to be invoked when an event is raised
     * @param eventTypes - list of events that this callback will be invoked for, if not provided callback will be invoked for all events
     * @param callbackId - Identifier for the callback, used to locate and remove the callback when no longer required
     */
    addEventCallback(callback, eventTypes, callbackId) {
      if (typeof window !== "undefined") {
        const id = callbackId || createGuid();
        if (this.eventCallbacks.has(id)) {
          this.logger.error(`Event callback with id: ${id} is already registered. Please provide a unique id or remove the existing callback and try again.`);
          return null;
        }
        this.eventCallbacks.set(id, [callback, eventTypes || []]);
        this.logger.verbose(`Event callback registered with id: ${id}`);
        return id;
      }
      return null;
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */
    removeEventCallback(callbackId) {
      this.eventCallbacks.delete(callbackId);
      this.logger.verbose(`Event callback ${callbackId} removed.`);
    }
    /**
     * Emits events by calling callback with event message
     * @param eventType
     * @param interactionType
     * @param payload
     * @param error
     */
    emitEvent(eventType, interactionType, payload, error) {
      const message = {
        eventType,
        interactionType: interactionType || null,
        payload: payload || null,
        error: error || null,
        timestamp: Date.now()
      };
      switch (eventType) {
        case EventType.ACCOUNT_ADDED:
        case EventType.ACCOUNT_REMOVED:
        case EventType.ACTIVE_ACCOUNT_CHANGED:
          this.broadcastChannel?.postMessage(message);
          break;
        default:
          this.invokeCallbacks(message);
          break;
      }
    }
    /**
     * Invoke registered callbacks
     * @param message
     */
    invokeCallbacks(message) {
      this.eventCallbacks.forEach(([callback, eventTypes], callbackId) => {
        if (eventTypes.length === 0 || eventTypes.includes(message.eventType)) {
          this.logger.verbose(`Emitting event to callback ${callbackId}: ${message.eventType}`);
          callback.apply(null, [message]);
        }
      });
    }
    /**
     * Wrapper around invokeCallbacks to handle broadcast events received from other tabs/instances
     * @param event
     */
    invokeCrossTabCallbacks(event) {
      const message = event.data;
      this.invokeCallbacks(message);
    }
    /**
     * Listen for events broadcasted from other tabs/instances
     */
    subscribeCrossTab() {
      this.broadcastChannel?.addEventListener("message", this.invokeCrossTabCallbacks);
    }
    /**
     * Unsubscribe from broadcast events
     */
    unsubscribeCrossTab() {
      this.broadcastChannel?.removeEventListener("message", this.invokeCrossTabCallbacks);
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/BaseInteractionClient.mjs
  var BaseInteractionClient = class {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, platformAuthProvider, correlationId) {
      this.config = config;
      this.browserStorage = storageImpl;
      this.browserCrypto = browserCrypto;
      this.networkClient = this.config.system.networkClient;
      this.eventHandler = eventHandler;
      this.navigationClient = navigationClient;
      this.platformAuthProvider = platformAuthProvider;
      this.correlationId = correlationId || createNewGuid();
      this.logger = logger.clone(BrowserConstants.MSAL_SKU, version2, this.correlationId);
      this.performanceClient = performanceClient;
    }
    async clearCacheOnLogout(correlationId, account2) {
      if (account2) {
        try {
          this.browserStorage.removeAccount(account2, correlationId);
          this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
        } catch (error) {
          this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
        }
      } else {
        try {
          this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
          this.browserStorage.clear(correlationId);
          await this.browserCrypto.clearKeystore();
        } catch (e) {
          this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
        }
      }
    }
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * @param requestRedirectUri
     * @returns Redirect URL
     *
     */
    getRedirectUri(requestRedirectUri) {
      this.logger.verbose("getRedirectUri called");
      const redirectUri = requestRedirectUri || this.config.auth.redirectUri;
      return UrlString.getAbsoluteUrl(redirectUri, getCurrentUri());
    }
    /**
     *
     * @param apiId
     * @param correlationId
     * @param forceRefresh
     */
    initializeServerTelemetryManager(apiId, forceRefresh) {
      this.logger.verbose("initializeServerTelemetryManager called");
      const telemetryPayload = {
        clientId: this.config.auth.clientId,
        correlationId: this.correlationId,
        apiId,
        forceRefresh: forceRefresh || false,
        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
      };
      return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
    }
    /**
     * Used to get a discovered version of the default authority.
     * @param params {
     *         requestAuthority?: string;
     *         requestAzureCloudOptions?: AzureCloudOptions;
     *         requestExtraQueryParameters?: StringDict;
     *         account?: AccountInfo;
     *        }
     */
    async getDiscoveredAuthority(params) {
      const { account: account2 } = params;
      const instanceAwareEQ = params.requestExtraQueryParameters && params.requestExtraQueryParameters.hasOwnProperty("instance_aware") ? params.requestExtraQueryParameters["instance_aware"] : void 0;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
      const authorityOptions = {
        protocolMode: this.config.auth.protocolMode,
        OIDCOptions: this.config.auth.OIDCOptions,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
      const resolvedAuthority = params.requestAuthority || this.config.auth.authority;
      const resolvedInstanceAware = instanceAwareEQ?.length ? instanceAwareEQ === "true" : this.config.auth.instanceAware;
      const userAuthority = account2 && resolvedInstanceAware ? this.config.auth.authority.replace(UrlString.getDomainFromUrl(resolvedAuthority), account2.environment) : resolvedAuthority;
      const builtAuthority = Authority.generateAuthority(userAuthority, params.requestAzureCloudOptions || this.config.auth.azureCloudOptions);
      const discoveredAuthority = await invokeAsync(AuthorityFactory_exports.createDiscoveredInstance, PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, this.logger, this.performanceClient, this.correlationId)(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger, this.correlationId, this.performanceClient);
      if (account2 && !discoveredAuthority.isAlias(account2.environment)) {
        throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.authorityMismatch);
      }
      return discoveredAuthority;
    }
  };

  // node_modules/@azure/msal-browser/dist/request/RequestHelpers.mjs
  async function initializeBaseRequest(request, config, performanceClient, logger) {
    performanceClient.addQueueMeasurement(PerformanceEvents.InitializeBaseRequest, request.correlationId);
    const authority = request.authority || config.auth.authority;
    const scopes = [...request && request.scopes || []];
    const validatedRequest = {
      ...request,
      correlationId: request.correlationId,
      authority,
      scopes
    };
    if (!validatedRequest.authenticationScheme) {
      validatedRequest.authenticationScheme = AuthenticationScheme.BEARER;
      logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
    } else {
      if (validatedRequest.authenticationScheme === AuthenticationScheme.SSH) {
        if (!request.sshJwk) {
          throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshJwk);
        }
        if (!request.sshKid) {
          throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.missingSshKid);
        }
      }
      logger.verbose(`Authentication Scheme set to "${validatedRequest.authenticationScheme}" as configured in Auth request`);
    }
    if (config.cache.claimsBasedCachingEnabled && request.claims && // Checks for empty stringified object "{}" which doesn't qualify as requested claims
    !StringUtils.isEmptyObj(request.claims)) {
      validatedRequest.requestedClaimsHash = await hashString(request.claims);
    }
    return validatedRequest;
  }
  async function initializeSilentRequest(request, account2, config, performanceClient, logger) {
    performanceClient.addQueueMeasurement(PerformanceEvents.InitializeSilentRequest, request.correlationId);
    const baseRequest = await invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, logger, performanceClient, request.correlationId)(request, config, performanceClient, logger);
    return {
      ...request,
      ...baseRequest,
      account: account2,
      forceRefresh: request.forceRefresh || false
    };
  }
  function validateRequestMethod(interactionRequest, protocolMode) {
    let httpMethod;
    const requestMethod = interactionRequest.httpMethod;
    if (protocolMode === ProtocolMode.EAR) {
      httpMethod = requestMethod || HttpMethod.POST;
      if (httpMethod !== HttpMethod.POST) {
        throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.invalidRequestMethodForEAR);
      }
    } else {
      httpMethod = requestMethod || HttpMethod.GET;
    }
    if (interactionRequest.authorizePostBodyParameters && httpMethod !== HttpMethod.POST) {
      throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.invalidAuthorizePostBodyParameters);
    }
    return httpMethod;
  }

  // node_modules/@azure/msal-browser/dist/interaction_client/StandardInteractionClient.mjs
  var StandardInteractionClient = class extends BaseInteractionClient {
    /**
     * Initializer for the logout request.
     * @param logoutRequest
     */
    initializeLogoutRequest(logoutRequest) {
      this.logger.verbose("initializeLogoutRequest called", logoutRequest?.correlationId);
      const validLogoutRequest = {
        correlationId: this.correlationId || createNewGuid(),
        ...logoutRequest
      };
      if (logoutRequest) {
        if (!logoutRequest.logoutHint) {
          if (logoutRequest.account) {
            const logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
            if (logoutHint) {
              this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
              validLogoutRequest.logoutHint = logoutHint;
            }
          } else {
            this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
          }
        } else {
          this.logger.verbose("logoutHint has already been set in logoutRequest");
        }
      } else {
        this.logger.verbose("logoutHint will not be set since no logout request was configured");
      }
      if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
        if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
          this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, getCurrentUri());
        } else if (this.config.auth.postLogoutRedirectUri === null) {
          this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
        } else if (this.config.auth.postLogoutRedirectUri) {
          this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, getCurrentUri());
        } else {
          this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(getCurrentUri(), getCurrentUri());
        }
      } else {
        this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
      }
      return validLogoutRequest;
    }
    /**
     * Parses login_hint ID Token Claim out of AccountInfo object to be used as
     * logout_hint in end session request.
     * @param account
     */
    getLogoutHintFromIdTokenClaims(account2) {
      const idTokenClaims = account2.idTokenClaims;
      if (idTokenClaims) {
        if (idTokenClaims.login_hint) {
          return idTokenClaims.login_hint;
        } else {
          this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
        }
      } else {
        this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
      }
      return null;
    }
    /**
     * Creates an Authorization Code Client with the given authority, or the default authority.
     * @param params {
     *         serverTelemetryManager: ServerTelemetryManager;
     *         authorityUrl?: string;
     *         requestAzureCloudOptions?: AzureCloudOptions;
     *         requestExtraQueryParameters?: StringDict;
     *         account?: AccountInfo;
     *        }
     */
    async createAuthCodeClient(params) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.correlationId);
      const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(params);
      return new AuthorizationCodeClient(clientConfig, this.performanceClient);
    }
    /**
     * Creates a Client Configuration object with the given request authority, or the default authority.
     * @param params {
     *         serverTelemetryManager: ServerTelemetryManager;
     *         requestAuthority?: string;
     *         requestAzureCloudOptions?: AzureCloudOptions;
     *         requestExtraQueryParameters?: boolean;
     *         account?: AccountInfo;
     *        }
     */
    async getClientConfiguration(params) {
      const { serverTelemetryManager, requestAuthority, requestAzureCloudOptions, requestExtraQueryParameters, account: account2 } = params;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)({
        requestAuthority,
        requestAzureCloudOptions,
        requestExtraQueryParameters,
        account: account2
      });
      const logger = this.config.system.loggerOptions;
      return {
        authOptions: {
          clientId: this.config.auth.clientId,
          authority: discoveredAuthority,
          clientCapabilities: this.config.auth.clientCapabilities,
          redirectUri: this.config.auth.redirectUri
        },
        systemOptions: {
          tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
          preventCorsPreflight: true
        },
        loggerOptions: {
          loggerCallback: logger.loggerCallback,
          piiLoggingEnabled: logger.piiLoggingEnabled,
          logLevel: logger.logLevel,
          correlationId: this.correlationId
        },
        cacheOptions: {
          claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
        },
        cryptoInterface: this.browserCrypto,
        networkInterface: this.networkClient,
        storageInterface: this.browserStorage,
        serverTelemetryManager,
        libraryInfo: {
          sku: BrowserConstants.MSAL_SKU,
          version: version2,
          cpu: Constants.EMPTY_STRING,
          os: Constants.EMPTY_STRING
        },
        telemetry: this.config.telemetry
      };
    }
    /**
     * Helper to initialize required request parameters for interactive APIs and ssoSilent()
     * @param request
     * @param interactionType
     */
    async initializeAuthorizationRequest(request, interactionType) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
      const redirectUri = this.getRedirectUri(request.redirectUri);
      const browserState = {
        interactionType
      };
      const state = ProtocolUtils.setRequestState(this.browserCrypto, request && request.state || Constants.EMPTY_STRING, browserState);
      const baseRequest = await invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)({ ...request, correlationId: this.correlationId }, this.config, this.performanceClient, this.logger);
      const interactionRequest = {
        ...baseRequest,
        redirectUri,
        state,
        nonce: request.nonce || createNewGuid(),
        responseMode: this.config.auth.OIDCOptions.serverResponseType
      };
      const validatedRequest = {
        ...interactionRequest,
        httpMethod: validateRequestMethod(interactionRequest, this.config.auth.protocolMode)
      };
      if (request.loginHint || request.sid) {
        return validatedRequest;
      }
      const account2 = request.account || this.browserStorage.getActiveAccount(this.correlationId);
      if (account2) {
        this.logger.verbose("Setting validated request account", this.correlationId);
        this.logger.verbosePii(`Setting validated request account: ${account2.homeAccountId}`, this.correlationId);
        validatedRequest.account = account2;
      }
      return validatedRequest;
    }
  };

  // node_modules/@azure/msal-browser/dist/utils/BrowserProtocolUtils.mjs
  function extractBrowserRequestState(browserCrypto, state) {
    if (!state) {
      return null;
    }
    try {
      const requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
      return requestStateObj.libraryState.meta;
    } catch (e) {
      throw createClientAuthError(ClientAuthErrorCodes_exports.invalidState);
    }
  }

  // node_modules/@azure/msal-browser/dist/response/ResponseHandler.mjs
  function deserializeResponse(responseString, responseLocation, logger) {
    const serverParams = UrlUtils_exports.getDeserializedResponse(responseString);
    if (!serverParams) {
      if (!UrlUtils_exports.stripLeadingHashOrQuery(responseString)) {
        logger.error(`The request has returned to the redirectUri but a ${responseLocation} is not present. It's likely that the ${responseLocation} has been removed or the page has been redirected by code running on the redirectUri page.`);
        throw createBrowserAuthError(hashEmptyError);
      } else {
        logger.error(`A ${responseLocation} is present in the iframe but it does not contain known properties. It's likely that the ${responseLocation} has been replaced by code running on the redirectUri page.`);
        logger.errorPii(`The ${responseLocation} detected is: ${responseString}`);
        throw createBrowserAuthError(hashDoesNotContainKnownProperties);
      }
    }
    return serverParams;
  }
  function validateInteractionType(response, browserCrypto, interactionType) {
    if (!response.state) {
      throw createBrowserAuthError(noStateInHash);
    }
    const platformStateObj = extractBrowserRequestState(browserCrypto, response.state);
    if (!platformStateObj) {
      throw createBrowserAuthError(unableToParseState);
    }
    if (platformStateObj.interactionType !== interactionType) {
      throw createBrowserAuthError(stateInteractionTypeMismatch);
    }
  }

  // node_modules/@azure/msal-browser/dist/interaction_handler/InteractionHandler.mjs
  var InteractionHandler = class {
    constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
      this.authModule = authCodeModule;
      this.browserStorage = storageImpl;
      this.authCodeRequest = authCodeRequest;
      this.logger = logger;
      this.performanceClient = performanceClient;
    }
    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */
    async handleCodeResponse(response, request) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponse, request.correlationId);
      let authCodeResponse;
      try {
        authCodeResponse = Authorize_exports.getAuthorizationCodePayload(response, request.state);
      } catch (e) {
        if (e instanceof ServerError && e.subError === userCancelled) {
          throw createBrowserAuthError(userCancelled);
        } else {
          throw e;
        }
      }
      return invokeAsync(this.handleCodeResponseFromServer.bind(this), PerformanceEvents.HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)(authCodeResponse, request);
    }
    /**
     * Process auth code response from AAD
     * @param authCodeResponse
     * @param state
     * @param authority
     * @param networkModule
     * @returns
     */
    async handleCodeResponseFromServer(authCodeResponse, request, validateNonce = true) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponseFromServer, request.correlationId);
      this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
      this.authCodeRequest.code = authCodeResponse.code;
      if (authCodeResponse.cloud_instance_host_name) {
        await invokeAsync(this.authModule.updateAuthority.bind(this.authModule), PerformanceEvents.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, request.correlationId)(authCodeResponse.cloud_instance_host_name, request.correlationId);
      }
      if (validateNonce) {
        authCodeResponse.nonce = request.nonce || void 0;
      }
      authCodeResponse.state = request.state;
      if (authCodeResponse.client_info) {
        this.authCodeRequest.clientInfo = authCodeResponse.client_info;
      } else {
        const ccsCred = this.createCcsCredentials(request);
        if (ccsCred) {
          this.authCodeRequest.ccsCredential = ccsCred;
        }
      }
      const tokenResponse = await invokeAsync(this.authModule.acquireToken.bind(this.authModule), PerformanceEvents.AuthClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(this.authCodeRequest, authCodeResponse);
      return tokenResponse;
    }
    /**
     * Build ccs creds if available
     */
    createCcsCredentials(request) {
      if (request.account) {
        return {
          credential: request.account.homeAccountId,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
      } else if (request.loginHint) {
        return {
          credential: request.loginHint,
          type: CcsCredentialType.UPN
        };
      }
      return null;
    }
  };

  // node_modules/@azure/msal-browser/dist/error/NativeAuthErrorCodes.mjs
  var contentError = "ContentError";
  var userSwitch = "user_switch";

  // node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeStatusCodes.mjs
  var USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED";
  var USER_CANCEL = "USER_CANCEL";
  var NO_NETWORK = "NO_NETWORK";
  var DISABLED = "DISABLED";
  var ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
  var UX_NOT_ALLOWED = "UX_NOT_ALLOWED";

  // node_modules/@azure/msal-browser/dist/error/NativeAuthError.mjs
  var INVALID_METHOD_ERROR = -2147186943;
  var NativeAuthErrorMessages = {
    [userSwitch]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
  };
  var NativeAuthError = class _NativeAuthError extends AuthError {
    constructor(errorCode, description, ext) {
      super(errorCode, description);
      Object.setPrototypeOf(this, _NativeAuthError.prototype);
      this.name = "NativeAuthError";
      this.ext = ext;
    }
  };
  function isFatalNativeAuthError(error) {
    if (error.ext && error.ext.status && error.ext.status === DISABLED) {
      return true;
    }
    if (error.ext && error.ext.error && error.ext.error === INVALID_METHOD_ERROR) {
      return true;
    }
    switch (error.errorCode) {
      case contentError:
        return true;
      default:
        return false;
    }
  }
  function createNativeAuthError(code, description, ext) {
    if (ext && ext.status) {
      switch (ext.status) {
        case ACCOUNT_UNAVAILABLE:
          return createInteractionRequiredAuthError(InteractionRequiredAuthErrorCodes_exports.nativeAccountUnavailable);
        case USER_INTERACTION_REQUIRED:
          return new InteractionRequiredAuthError(code, description);
        case USER_CANCEL:
          return createBrowserAuthError(userCancelled);
        case NO_NETWORK:
          return createBrowserAuthError(noNetworkConnectivity2);
        case UX_NOT_ALLOWED:
          return createInteractionRequiredAuthError(InteractionRequiredAuthErrorCodes_exports.uxNotAllowed);
      }
    }
    return new NativeAuthError(code, NativeAuthErrorMessages[code] || description, ext);
  }

  // node_modules/@azure/msal-browser/dist/interaction_client/SilentCacheClient.mjs
  var SilentCacheClient = class extends StandardInteractionClient {
    /**
     * Returns unexpired tokens from the cache, if available
     * @param silentRequest
     */
    async acquireToken(silentRequest) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentCacheClientAcquireToken, silentRequest.correlationId);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
      const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
        serverTelemetryManager,
        requestAuthority: silentRequest.authority,
        requestAzureCloudOptions: silentRequest.azureCloudOptions,
        account: silentRequest.account
      });
      const silentAuthClient = new SilentFlowClient(clientConfig, this.performanceClient);
      this.logger.verbose("Silent auth client created");
      try {
        const response = await invokeAsync(silentAuthClient.acquireCachedToken.bind(silentAuthClient), PerformanceEvents.SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
        const authResponse = response[0];
        this.performanceClient.addFields({
          fromCache: true
        }, silentRequest.correlationId);
        return authResponse;
      } catch (error) {
        if (error instanceof BrowserAuthError && error.errorCode === cryptoKeyNotFound) {
          this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
        }
        throw error;
      }
    }
    /**
     * API to silenty clear the browser cache.
     * @param logoutRequest
     */
    logout(logoutRequest) {
      this.logger.verbose("logoutRedirect called");
      const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      return this.clearCacheOnLogout(validLogoutRequest.correlationId, validLogoutRequest?.account);
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/PlatformAuthInteractionClient.mjs
  var PlatformAuthInteractionClient = class extends BaseInteractionClient {
    constructor(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId) {
      super(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
      this.apiId = apiId;
      this.accountId = accountId;
      this.platformAuthProvider = provider;
      this.nativeStorageManager = nativeStorageImpl;
      this.silentCacheClient = new SilentCacheClient(config, this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
      const extensionName = this.platformAuthProvider.getExtensionName();
      this.skus = ServerTelemetryManager.makeExtraSkuString({
        libraryName: BrowserConstants.MSAL_SKU,
        libraryVersion: version2,
        extensionName,
        extensionVersion: this.platformAuthProvider.getExtensionVersion()
      });
    }
    /**
     * Adds SKUs to request extra query parameters
     * @param request {PlatformAuthRequest}
     * @private
     */
    addRequestSKUs(request) {
      request.extraParameters = {
        ...request.extraParameters,
        [AADServerParamKeys_exports.X_CLIENT_EXTRA_SKU]: this.skus
      };
    }
    /**
     * Acquire token from native platform via browser extension
     * @param request
     */
    async acquireToken(request, cacheLookupPolicy) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, this.correlationId);
      this.logger.trace("NativeInteractionClient - acquireToken called.");
      const nativeATMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, this.correlationId);
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
      try {
        const nativeRequest = await this.initializeNativeRequest(request);
        try {
          const result = await this.acquireTokensFromCache(this.accountId, nativeRequest);
          nativeATMeasurement.end({
            success: true,
            isNativeBroker: false,
            fromCache: true
          });
          return result;
        } catch (e) {
          if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
            this.logger.info("MSAL internal Cache does not contain tokens, return error as per cache policy");
            nativeATMeasurement.end({
              success: false,
              brokerErrorCode: "cache_request_failed"
            });
            throw e;
          }
          this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call");
        }
        const validatedResponse = await this.platformAuthProvider.sendMessage(nativeRequest);
        return await this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp).then((result) => {
          nativeATMeasurement.end({
            success: true,
            isNativeBroker: true,
            requestId: result.requestId
          });
          serverTelemetryManager.clearNativeBrokerErrorCode();
          return result;
        }).catch((error) => {
          nativeATMeasurement.end({
            success: false,
            errorCode: error.errorCode,
            subErrorCode: error.subError
          });
          throw error;
        });
      } catch (e) {
        if (e instanceof NativeAuthError) {
          serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode);
        }
        nativeATMeasurement.end({
          success: false
        });
        throw e;
      }
    }
    /**
     * Creates silent flow request
     * @param request
     * @param cachedAccount
     * @returns CommonSilentFlowRequest
     */
    createSilentCacheRequest(request, cachedAccount) {
      return {
        authority: request.authority,
        correlationId: this.correlationId,
        scopes: ScopeSet.fromString(request.scope).asArray(),
        account: cachedAccount,
        forceRefresh: false
      };
    }
    /**
     * Fetches the tokens from the cache if un-expired
     * @param nativeAccountId
     * @param request
     * @returns authenticationResult
     */
    async acquireTokensFromCache(nativeAccountId, request) {
      if (!nativeAccountId) {
        this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided");
        throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound);
      }
      const account2 = this.browserStorage.getBaseAccountInfo({
        nativeAccountId
      }, this.correlationId);
      if (!account2) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.noAccountFound);
      }
      try {
        const silentRequest = this.createSilentCacheRequest(request, account2);
        const result = await this.silentCacheClient.acquireToken(silentRequest);
        const fullAccount = {
          ...account2,
          idTokenClaims: result?.idTokenClaims,
          idToken: result?.idToken
        };
        return {
          ...result,
          account: fullAccount
        };
      } catch (e) {
        throw e;
      }
    }
    /**
     * Acquires a token from native platform then redirects to the redirectUri instead of returning the response
     * @param {RedirectRequest} request
     * @param {InProgressPerformanceEvent} rootMeasurement
     */
    async acquireTokenRedirect(request, rootMeasurement) {
      this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
      const { ...remainingParameters } = request;
      delete remainingParameters.onRedirectNavigate;
      const nativeRequest = await this.initializeNativeRequest(remainingParameters);
      try {
        await this.platformAuthProvider.sendMessage(nativeRequest);
      } catch (e) {
        if (e instanceof NativeAuthError) {
          const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
          serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode);
          if (isFatalNativeAuthError(e)) {
            throw e;
          }
        }
      }
      this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
      const navigationOptions = {
        apiId: ApiId.acquireTokenRedirect,
        timeout: this.config.system.redirectNavigationTimeout,
        noHistory: false
      };
      const redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
      rootMeasurement.end({ success: true });
      await this.navigationClient.navigateExternal(redirectUri, navigationOptions);
    }
    /**
     * If the previous page called native platform for a token using redirect APIs, send the same request again and return the response
     * @param performanceClient {IPerformanceClient?}
     * @param correlationId {string?} correlation identifier
     */
    async handleRedirectPromise(performanceClient, correlationId) {
      this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
      if (!this.browserStorage.isInteractionInProgress(true)) {
        this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
        return null;
      }
      const cachedRequest = this.browserStorage.getCachedNativeRequest();
      if (!cachedRequest) {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
        if (performanceClient && correlationId) {
          performanceClient?.addFields({ errorCode: "no_cached_request" }, correlationId);
        }
        return null;
      }
      const { prompt, ...request } = cachedRequest;
      if (prompt) {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.");
      }
      this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
      const reqTimestamp = TimeUtils_exports.nowSeconds();
      try {
        this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
        const response = await this.platformAuthProvider.sendMessage(request);
        const authResult = await this.handleNativeResponse(response, request, reqTimestamp);
        const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
        serverTelemetryManager.clearNativeBrokerErrorCode();
        if (performanceClient && this.correlationId) {
          this.performanceClient.addFields({ isNativeBroker: true }, this.correlationId);
        }
        return authResult;
      } catch (e) {
        throw e;
      }
    }
    /**
     * Logout from native platform via browser extension
     * @param request
     */
    logout() {
      this.logger.trace("NativeInteractionClient - logout called.");
      return Promise.reject("Logout not implemented yet");
    }
    /**
     * Transform response from native platform into AuthenticationResult object which will be returned to the end user
     * @param response
     * @param request
     * @param reqTimestamp
     */
    async handleNativeResponse(response, request, reqTimestamp) {
      this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
      const idTokenClaims = AuthToken_exports.extractTokenClaims(response.id_token, base64Decode);
      const homeAccountIdentifier = this.createHomeAccountIdentifier(response, idTokenClaims);
      const cachedhomeAccountId = this.browserStorage.getAccountInfoFilteredBy({
        nativeAccountId: request.accountId
      }, this.correlationId)?.homeAccountId;
      if (request.extraParameters?.child_client_id && response.account.id !== request.accountId) {
        this.logger.info("handleNativeServerResponse: Double broker flow detected, ignoring accountId mismatch");
      } else if (homeAccountIdentifier !== cachedhomeAccountId && response.account.id !== request.accountId) {
        throw createNativeAuthError(userSwitch);
      }
      const authority = await this.getDiscoveredAuthority({
        requestAuthority: request.authority
      });
      const baseAccount = buildAccountToCache(
        this.browserStorage,
        authority,
        homeAccountIdentifier,
        base64Decode,
        this.correlationId,
        idTokenClaims,
        response.client_info,
        void 0,
        // environment
        idTokenClaims.tid,
        void 0,
        // auth code payload
        response.account.id,
        this.logger
      );
      response.expires_in = Number(response.expires_in);
      const result = await this.generateAuthenticationResult(response, request, idTokenClaims, baseAccount, authority.canonicalAuthority, reqTimestamp);
      await this.cacheAccount(baseAccount, this.correlationId);
      await this.cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, response.access_token, result.tenantId, reqTimestamp);
      return result;
    }
    /**
     * creates an homeAccountIdentifier for the account
     * @param response
     * @param idTokenObj
     * @returns
     */
    createHomeAccountIdentifier(response, idTokenClaims) {
      const homeAccountIdentifier = AccountEntity.generateHomeAccountId(response.client_info || Constants.EMPTY_STRING, AuthorityType.Default, this.logger, this.browserCrypto, idTokenClaims);
      return homeAccountIdentifier;
    }
    /**
     * Helper to generate scopes
     * @param response
     * @param request
     * @returns
     */
    generateScopes(requestScopes, responseScopes) {
      return responseScopes ? ScopeSet.fromString(responseScopes) : ScopeSet.fromString(requestScopes);
    }
    /**
     * If PoP token is requesred, records the PoP token if returned from the WAM, else generates one in the browser
     * @param request
     * @param response
     */
    async generatePopAccessToken(response, request) {
      if (request.tokenType === AuthenticationScheme.POP && request.signPopToken) {
        if (response.shr) {
          this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
          return response.shr;
        }
        const popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
        const shrParameters = {
          resourceRequestMethod: request.resourceRequestMethod,
          resourceRequestUri: request.resourceRequestUri,
          shrClaims: request.shrClaims,
          shrNonce: request.shrNonce
        };
        if (!request.keyId) {
          throw createClientAuthError(ClientAuthErrorCodes_exports.keyIdMissing);
        }
        return popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters);
      } else {
        return response.access_token;
      }
    }
    /**
     * Generates authentication result
     * @param response
     * @param request
     * @param idTokenObj
     * @param accountEntity
     * @param authority
     * @param reqTimestamp
     * @returns
     */
    async generateAuthenticationResult(response, request, idTokenClaims, accountEntity, authority, reqTimestamp) {
      const mats = this.addTelemetryFromNativeResponse(response.properties.MATS);
      const responseScopes = this.generateScopes(request.scope, response.scope);
      const accountProperties = response.account.properties || {};
      const uid = accountProperties["UID"] || idTokenClaims.oid || idTokenClaims.sub || Constants.EMPTY_STRING;
      const tid = accountProperties["TenantId"] || idTokenClaims.tid || Constants.EMPTY_STRING;
      const accountInfo = updateAccountTenantProfileData(
        accountEntity.getAccountInfo(),
        void 0,
        // tenantProfile optional
        idTokenClaims,
        response.id_token
      );
      if (accountInfo.nativeAccountId !== response.account.id) {
        accountInfo.nativeAccountId = response.account.id;
      }
      const responseAccessToken = await this.generatePopAccessToken(response, request);
      const tokenType = request.tokenType === AuthenticationScheme.POP ? AuthenticationScheme.POP : AuthenticationScheme.BEARER;
      const result = {
        authority,
        uniqueId: uid,
        tenantId: tid,
        scopes: responseScopes.asArray(),
        account: accountInfo,
        idToken: response.id_token,
        idTokenClaims,
        accessToken: responseAccessToken,
        fromCache: mats ? this.isResponseFromCache(mats) : false,
        // Request timestamp and NativeResponse expires_in are in seconds, converting to Date for AuthenticationResult
        expiresOn: TimeUtils_exports.toDateFromSeconds(reqTimestamp + response.expires_in),
        tokenType,
        correlationId: this.correlationId,
        state: response.state,
        fromNativeBroker: true
      };
      return result;
    }
    /**
     * cache the account entity in browser storage
     * @param accountEntity
     */
    async cacheAccount(accountEntity, correlationId) {
      await this.browserStorage.setAccount(accountEntity, this.correlationId);
      this.browserStorage.removeAccountContext(accountEntity.getAccountInfo(), correlationId);
    }
    /**
     * Stores the access_token and id_token in inmemory storage
     * @param response
     * @param request
     * @param homeAccountIdentifier
     * @param idTokenObj
     * @param responseAccessToken
     * @param tenantId
     * @param reqTimestamp
     */
    cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, responseAccessToken, tenantId, reqTimestamp) {
      const cachedIdToken = CacheHelpers_exports.createIdTokenEntity(homeAccountIdentifier, request.authority, response.id_token || "", request.clientId, idTokenClaims.tid || "");
      const expiresIn = request.tokenType === AuthenticationScheme.POP ? Constants.SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
      const tokenExpirationSeconds = reqTimestamp + expiresIn;
      const responseScopes = this.generateScopes(response.scope, request.scope);
      const cachedAccessToken = CacheHelpers_exports.createAccessTokenEntity(homeAccountIdentifier, request.authority, responseAccessToken, request.clientId, idTokenClaims.tid || tenantId, responseScopes.printScopes(), tokenExpirationSeconds, 0, base64Decode, void 0, request.tokenType, void 0, request.keyId);
      const nativeCacheRecord = {
        idToken: cachedIdToken,
        accessToken: cachedAccessToken
      };
      return this.nativeStorageManager.saveCacheRecord(nativeCacheRecord, this.correlationId, request.storeInCache);
    }
    getExpiresInValue(tokenType, expiresIn) {
      return tokenType === AuthenticationScheme.POP ? Constants.SHR_NONCE_VALIDITY : (typeof expiresIn === "string" ? parseInt(expiresIn, 10) : expiresIn) || 0;
    }
    addTelemetryFromNativeResponse(matsResponse) {
      const mats = this.getMATSFromResponse(matsResponse);
      if (!mats) {
        return null;
      }
      this.performanceClient.addFields({
        extensionId: this.platformAuthProvider.getExtensionId(),
        extensionVersion: this.platformAuthProvider.getExtensionVersion(),
        matsBrokerVersion: mats.broker_version,
        matsAccountJoinOnStart: mats.account_join_on_start,
        matsAccountJoinOnEnd: mats.account_join_on_end,
        matsDeviceJoin: mats.device_join,
        matsPromptBehavior: mats.prompt_behavior,
        matsApiErrorCode: mats.api_error_code,
        matsUiVisible: mats.ui_visible,
        matsSilentCode: mats.silent_code,
        matsSilentBiSubCode: mats.silent_bi_sub_code,
        matsSilentMessage: mats.silent_message,
        matsSilentStatus: mats.silent_status,
        matsHttpStatus: mats.http_status,
        matsHttpEventCount: mats.http_event_count
      }, this.correlationId);
      return mats;
    }
    /**
     * Gets MATS telemetry from native response
     * @param response
     * @returns
     */
    getMATSFromResponse(matsResponse) {
      if (matsResponse) {
        try {
          return JSON.parse(matsResponse);
        } catch (e) {
          this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
        }
      }
      return null;
    }
    /**
     * Returns whether or not response came from native cache
     * @param response
     * @returns
     */
    isResponseFromCache(mats) {
      if (typeof mats.is_cached === "undefined") {
        this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
        return false;
      }
      return !!mats.is_cached;
    }
    /**
     * Translates developer provided request object into NativeRequest object
     * @param request
     */
    async initializeNativeRequest(request) {
      this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
      const canonicalAuthority = await this.getCanonicalAuthority(request);
      const { scopes, ...remainingProperties } = request;
      const scopeSet = new ScopeSet(scopes || []);
      scopeSet.appendScopes(OIDC_DEFAULT_SCOPES);
      const validatedRequest = {
        ...remainingProperties,
        accountId: this.accountId,
        clientId: this.config.auth.clientId,
        authority: canonicalAuthority.urlString,
        scope: scopeSet.printScopes(),
        redirectUri: this.getRedirectUri(request.redirectUri),
        prompt: this.getPrompt(request.prompt),
        correlationId: this.correlationId,
        tokenType: request.authenticationScheme,
        windowTitleSubstring: document.title,
        extraParameters: {
          ...request.extraQueryParameters,
          ...request.tokenQueryParameters
        },
        extendedExpiryToken: false,
        keyId: request.popKid
      };
      if (validatedRequest.signPopToken && !!request.popKid) {
        throw createBrowserAuthError(invalidPopTokenRequest);
      }
      this.handleExtraBrokerParams(validatedRequest);
      validatedRequest.extraParameters = validatedRequest.extraParameters || {};
      validatedRequest.extraParameters.telemetry = PlatformAuthConstants.MATS_TELEMETRY;
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const shrParameters = {
          resourceRequestUri: request.resourceRequestUri,
          resourceRequestMethod: request.resourceRequestMethod,
          shrClaims: request.shrClaims,
          shrNonce: request.shrNonce
        };
        const popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
        let reqCnfData;
        if (!validatedRequest.keyId) {
          const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, this.logger, this.performanceClient, this.correlationId)(shrParameters, this.logger);
          reqCnfData = generatedReqCnfData.reqCnfString;
          validatedRequest.keyId = generatedReqCnfData.kid;
          validatedRequest.signPopToken = true;
        } else {
          reqCnfData = this.browserCrypto.base64UrlEncode(JSON.stringify({ kid: validatedRequest.keyId }));
          validatedRequest.signPopToken = false;
        }
        validatedRequest.reqCnf = reqCnfData;
      }
      this.addRequestSKUs(validatedRequest);
      return validatedRequest;
    }
    async getCanonicalAuthority(request) {
      const requestAuthority = request.authority || this.config.auth.authority;
      if (request.account) {
        await this.getDiscoveredAuthority({
          requestAuthority,
          requestAzureCloudOptions: request.azureCloudOptions,
          account: request.account
        });
      }
      const canonicalAuthority = new UrlString(requestAuthority);
      canonicalAuthority.validateAsUri();
      return canonicalAuthority;
    }
    getPrompt(prompt) {
      switch (this.apiId) {
        case ApiId.ssoSilent:
        case ApiId.acquireTokenSilent_silentFlow:
          this.logger.trace("initializeNativeRequest: silent request sets prompt to none");
          return PromptValue.NONE;
      }
      if (!prompt) {
        this.logger.trace("initializeNativeRequest: prompt was not provided");
        return void 0;
      }
      switch (prompt) {
        case PromptValue.NONE:
        case PromptValue.CONSENT:
        case PromptValue.LOGIN:
          this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
          return prompt;
        default:
          this.logger.trace(`initializeNativeRequest: prompt = ${prompt} is not compatible with native flow`);
          throw createBrowserAuthError(nativePromptNotSupported);
      }
    }
    /**
     * Handles extra broker request parameters
     * @param request {PlatformAuthRequest}
     * @private
     */
    handleExtraBrokerParams(request) {
      const hasExtraBrokerParams = request.extraParameters && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.BROKER_CLIENT_ID) && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.BROKER_REDIRECT_URI) && request.extraParameters.hasOwnProperty(AADServerParamKeys_exports.CLIENT_ID);
      if (!request.embeddedClientId && !hasExtraBrokerParams) {
        return;
      }
      let child_client_id = "";
      const child_redirect_uri = request.redirectUri;
      if (request.embeddedClientId) {
        request.redirectUri = this.config.auth.redirectUri;
        child_client_id = request.embeddedClientId;
      } else if (request.extraParameters) {
        request.redirectUri = request.extraParameters[AADServerParamKeys_exports.BROKER_REDIRECT_URI];
        child_client_id = request.extraParameters[AADServerParamKeys_exports.CLIENT_ID];
      }
      request.extraParameters = {
        child_client_id,
        child_redirect_uri
      };
      this.performanceClient?.addFields({
        embeddedClientId: child_client_id,
        embeddedRedirectUri: child_redirect_uri
      }, this.correlationId);
    }
  };

  // node_modules/@azure/msal-browser/dist/protocol/Authorize.mjs
  async function getStandardParameters(config, authority, request, logger, performanceClient) {
    const parameters = Authorize_exports.getStandardAuthorizeRequestParameters({ ...config.auth, authority }, request, logger, performanceClient);
    RequestParameterBuilder_exports.addLibraryInfo(parameters, {
      sku: BrowserConstants.MSAL_SKU,
      version: version2,
      os: "",
      cpu: ""
    });
    if (config.auth.protocolMode !== ProtocolMode.OIDC) {
      RequestParameterBuilder_exports.addApplicationTelemetry(parameters, config.telemetry.application);
    }
    if (request.platformBroker) {
      RequestParameterBuilder_exports.addNativeBroker(parameters);
      performanceClient.addFields({
        isPlatformAuthorizeRequest: true
      }, request.correlationId);
      if (request.authenticationScheme === AuthenticationScheme.POP) {
        const cryptoOps = new CryptoOps(logger, performanceClient);
        const popTokenGenerator = new PopTokenGenerator(cryptoOps);
        let reqCnfData;
        if (!request.popKid) {
          const generatedReqCnfData = await invokeAsync(popTokenGenerator.generateCnf.bind(popTokenGenerator), PerformanceEvents.PopTokenGenerateCnf, logger, performanceClient, request.correlationId)(request, logger);
          reqCnfData = generatedReqCnfData.reqCnfString;
        } else {
          reqCnfData = cryptoOps.encodeKid(request.popKid);
        }
        RequestParameterBuilder_exports.addPopToken(parameters, reqCnfData);
      }
    }
    RequestParameterBuilder_exports.instrumentBrokerParams(parameters, request.correlationId, performanceClient);
    return parameters;
  }
  async function getAuthCodeRequestUrl(config, authority, request, logger, performanceClient) {
    if (!request.codeChallenge) {
      throw createClientConfigurationError(ClientConfigurationErrorCodes_exports.pkceParamsMissing);
    }
    const parameters = await invokeAsync(getStandardParameters, PerformanceEvents.GetStandardParams, logger, performanceClient, request.correlationId)(config, authority, request, logger, performanceClient);
    RequestParameterBuilder_exports.addResponseType(parameters, OAuthResponseType.CODE);
    RequestParameterBuilder_exports.addCodeChallengeParams(parameters, request.codeChallenge, Constants.S256_CODE_CHALLENGE_METHOD);
    RequestParameterBuilder_exports.addExtraQueryParameters(parameters, request.extraQueryParameters || {});
    return Authorize_exports.getAuthorizeUrl(authority, parameters, config.auth.encodeExtraQueryParams, request.extraQueryParameters);
  }
  async function getEARForm(frame, config, authority, request, logger, performanceClient) {
    if (!request.earJwk) {
      throw createBrowserAuthError(earJwkEmpty);
    }
    const parameters = await getStandardParameters(config, authority, request, logger, performanceClient);
    RequestParameterBuilder_exports.addResponseType(parameters, OAuthResponseType.IDTOKEN_TOKEN_REFRESHTOKEN);
    RequestParameterBuilder_exports.addEARParameters(parameters, request.earJwk);
    const queryParams = /* @__PURE__ */ new Map();
    RequestParameterBuilder_exports.addExtraQueryParameters(queryParams, request.extraQueryParameters || {});
    const url = Authorize_exports.getAuthorizeUrl(authority, queryParams, config.auth.encodeExtraQueryParams, request.extraQueryParameters);
    return createForm(frame, url, parameters);
  }
  async function getCodeForm(frame, config, authority, request, logger, performanceClient) {
    const parameters = await getStandardParameters(config, authority, request, logger, performanceClient);
    RequestParameterBuilder_exports.addResponseType(parameters, OAuthResponseType.CODE);
    RequestParameterBuilder_exports.addCodeChallengeParams(parameters, request.codeChallenge, request.codeChallengeMethod || Constants.S256_CODE_CHALLENGE_METHOD);
    RequestParameterBuilder_exports.addPostBodyParameters(parameters, request.authorizePostBodyParameters || {});
    const queryParams = /* @__PURE__ */ new Map();
    RequestParameterBuilder_exports.addExtraQueryParameters(queryParams, request.extraQueryParameters || {});
    const url = Authorize_exports.getAuthorizeUrl(authority, queryParams, config.auth.encodeExtraQueryParams, request.extraQueryParameters);
    return createForm(frame, url, parameters);
  }
  function createForm(frame, authorizeUrl, parameters) {
    const form = frame.createElement("form");
    form.method = "post";
    form.action = authorizeUrl;
    parameters.forEach((value, key) => {
      const param = frame.createElement("input");
      param.hidden = true;
      param.name = key;
      param.value = value;
      form.appendChild(param);
    });
    frame.body.appendChild(form);
    return form;
  }
  async function handleResponsePlatformBroker(request, accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
    logger.verbose("Account id found, calling WAM for token");
    if (!platformAuthProvider) {
      throw createBrowserAuthError(nativeConnectionNotEstablished);
    }
    const browserCrypto = new CryptoOps(logger, performanceClient);
    const nativeInteractionClient = new PlatformAuthInteractionClient(config, browserStorage, browserCrypto, logger, eventHandler, config.system.navigationClient, apiId, performanceClient, platformAuthProvider, accountId, nativeStorage, request.correlationId);
    const { userRequestState } = ProtocolUtils.parseRequestState(browserCrypto, request.state);
    return invokeAsync(nativeInteractionClient.acquireToken.bind(nativeInteractionClient), PerformanceEvents.NativeInteractionClientAcquireToken, logger, performanceClient, request.correlationId)({
      ...request,
      state: userRequestState,
      prompt: void 0
      // Server should handle the prompt, ideally native broker can do this part silently
    });
  }
  async function handleResponseCode(request, response, codeVerifier, apiId, config, authClient, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
    ThrottlingUtils.removeThrottle(browserStorage, config.auth.clientId, request);
    if (response.accountId) {
      return invokeAsync(handleResponsePlatformBroker, PerformanceEvents.HandleResponsePlatformBroker, logger, performanceClient, request.correlationId)(request, response.accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider);
    }
    const authCodeRequest = {
      ...request,
      code: response.code || "",
      codeVerifier
    };
    const interactionHandler = new InteractionHandler(authClient, browserStorage, authCodeRequest, logger, performanceClient);
    const result = await invokeAsync(interactionHandler.handleCodeResponse.bind(interactionHandler), PerformanceEvents.HandleCodeResponse, logger, performanceClient, request.correlationId)(response, request);
    return result;
  }
  async function handleResponseEAR(request, response, apiId, config, authority, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider) {
    ThrottlingUtils.removeThrottle(browserStorage, config.auth.clientId, request);
    Authorize_exports.validateAuthorizationResponse(response, request.state);
    if (!response.ear_jwe) {
      throw createBrowserAuthError(earJweEmpty);
    }
    if (!request.earJwk) {
      throw createBrowserAuthError(earJwkEmpty);
    }
    const decryptedData = JSON.parse(await invokeAsync(decryptEarResponse, PerformanceEvents.DecryptEarResponse, logger, performanceClient, request.correlationId)(request.earJwk, response.ear_jwe));
    if (decryptedData.accountId) {
      return invokeAsync(handleResponsePlatformBroker, PerformanceEvents.HandleResponsePlatformBroker, logger, performanceClient, request.correlationId)(request, decryptedData.accountId, apiId, config, browserStorage, nativeStorage, eventHandler, logger, performanceClient, platformAuthProvider);
    }
    const responseHandler = new ResponseHandler(config.auth.clientId, browserStorage, new CryptoOps(logger, performanceClient), logger, null, null, performanceClient);
    responseHandler.validateTokenResponse(decryptedData);
    const additionalData = {
      code: "",
      state: request.state,
      nonce: request.nonce,
      client_info: decryptedData.client_info,
      cloud_graph_host_name: decryptedData.cloud_graph_host_name,
      cloud_instance_host_name: decryptedData.cloud_instance_host_name,
      cloud_instance_name: decryptedData.cloud_instance_name,
      msgraph_host: decryptedData.msgraph_host
    };
    return await invokeAsync(responseHandler.handleServerTokenResponse.bind(responseHandler), PerformanceEvents.HandleServerTokenResponse, logger, performanceClient, request.correlationId)(decryptedData, authority, TimeUtils_exports.nowSeconds(), request, additionalData, void 0, void 0, void 0, void 0);
  }

  // node_modules/@azure/msal-browser/dist/crypto/PkceGenerator.mjs
  var RANDOM_BYTE_ARR_LENGTH = 32;
  async function generatePkceCodes(performanceClient, logger, correlationId) {
    performanceClient.addQueueMeasurement(PerformanceEvents.GeneratePkceCodes, correlationId);
    const codeVerifier = invoke(generateCodeVerifier, PerformanceEvents.GenerateCodeVerifier, logger, performanceClient, correlationId)(performanceClient, logger, correlationId);
    const codeChallenge = await invokeAsync(generateCodeChallengeFromVerifier, PerformanceEvents.GenerateCodeChallengeFromVerifier, logger, performanceClient, correlationId)(codeVerifier, performanceClient, logger, correlationId);
    return {
      verifier: codeVerifier,
      challenge: codeChallenge
    };
  }
  function generateCodeVerifier(performanceClient, logger, correlationId) {
    try {
      const buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
      invoke(getRandomValues, PerformanceEvents.GetRandomValues, logger, performanceClient, correlationId)(buffer);
      const pkceCodeVerifierB64 = urlEncodeArr(buffer);
      return pkceCodeVerifierB64;
    } catch (e) {
      throw createBrowserAuthError(pkceNotCreated);
    }
  }
  async function generateCodeChallengeFromVerifier(pkceCodeVerifier, performanceClient, logger, correlationId) {
    performanceClient.addQueueMeasurement(PerformanceEvents.GenerateCodeChallengeFromVerifier, correlationId);
    try {
      const pkceHashedCodeVerifier = await invokeAsync(sha256Digest, PerformanceEvents.Sha256Digest, logger, performanceClient, correlationId)(pkceCodeVerifier, performanceClient, correlationId);
      return urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier));
    } catch (e) {
      throw createBrowserAuthError(pkceNotCreated);
    }
  }

  // node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthExtensionHandler.mjs
  var PlatformAuthExtensionHandler = class _PlatformAuthExtensionHandler {
    constructor(logger, handshakeTimeoutMs, performanceClient, extensionId) {
      this.logger = logger;
      this.handshakeTimeoutMs = handshakeTimeoutMs;
      this.extensionId = extensionId;
      this.resolvers = /* @__PURE__ */ new Map();
      this.handshakeResolvers = /* @__PURE__ */ new Map();
      this.messageChannel = new MessageChannel();
      this.windowListener = this.onWindowMessage.bind(this);
      this.performanceClient = performanceClient;
      this.handshakeEvent = performanceClient.startMeasurement(PerformanceEvents.NativeMessageHandlerHandshake);
      this.platformAuthType = PlatformAuthConstants.PLATFORM_EXTENSION_PROVIDER;
    }
    /**
     * Sends a given message to the extension and resolves with the extension response
     * @param request
     */
    async sendMessage(request) {
      this.logger.trace(this.platformAuthType + " - sendMessage called.");
      const messageBody = {
        method: NativeExtensionMethod.GetToken,
        request
      };
      const req = {
        channel: PlatformAuthConstants.CHANNEL_ID,
        extensionId: this.extensionId,
        responseId: createNewGuid(),
        body: messageBody
      };
      this.logger.trace(this.platformAuthType + " - Sending request to browser extension");
      this.logger.tracePii(this.platformAuthType + ` - Sending request to browser extension: ${JSON.stringify(req)}`);
      this.messageChannel.port1.postMessage(req);
      const response = await new Promise((resolve, reject) => {
        this.resolvers.set(req.responseId, { resolve, reject });
      });
      const validatedResponse = this.validatePlatformBrokerResponse(response);
      return validatedResponse;
    }
    /**
     * Returns an instance of the MessageHandler that has successfully established a connection with an extension
     * @param {Logger} logger
     * @param {number} handshakeTimeoutMs
     * @param {IPerformanceClient} performanceClient
     * @param {ICrypto} crypto
     */
    static async createProvider(logger, handshakeTimeoutMs, performanceClient) {
      logger.trace("PlatformAuthExtensionHandler - createProvider called.");
      try {
        const preferredProvider = new _PlatformAuthExtensionHandler(logger, handshakeTimeoutMs, performanceClient, PlatformAuthConstants.PREFERRED_EXTENSION_ID);
        await preferredProvider.sendHandshakeRequest();
        return preferredProvider;
      } catch (e) {
        const backupProvider = new _PlatformAuthExtensionHandler(logger, handshakeTimeoutMs, performanceClient);
        await backupProvider.sendHandshakeRequest();
        return backupProvider;
      }
    }
    /**
     * Send handshake request helper.
     */
    async sendHandshakeRequest() {
      this.logger.trace(this.platformAuthType + " - sendHandshakeRequest called.");
      window.addEventListener("message", this.windowListener, false);
      const req = {
        channel: PlatformAuthConstants.CHANNEL_ID,
        extensionId: this.extensionId,
        responseId: createNewGuid(),
        body: {
          method: NativeExtensionMethod.HandshakeRequest
        }
      };
      this.handshakeEvent.add({
        extensionId: this.extensionId,
        extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
      });
      this.messageChannel.port1.onmessage = (event) => {
        this.onChannelMessage(event);
      };
      window.postMessage(req, window.origin, [this.messageChannel.port2]);
      return new Promise((resolve, reject) => {
        this.handshakeResolvers.set(req.responseId, { resolve, reject });
        this.timeoutId = window.setTimeout(() => {
          window.removeEventListener("message", this.windowListener, false);
          this.messageChannel.port1.close();
          this.messageChannel.port2.close();
          this.handshakeEvent.end({
            extensionHandshakeTimedOut: true,
            success: false
          });
          reject(createBrowserAuthError(nativeHandshakeTimeout));
          this.handshakeResolvers.delete(req.responseId);
        }, this.handshakeTimeoutMs);
      });
    }
    /**
     * Invoked when a message is posted to the window. If a handshake request is received it means the extension is not installed.
     * @param event
     */
    onWindowMessage(event) {
      this.logger.trace(this.platformAuthType + " - onWindowMessage called");
      if (event.source !== window) {
        return;
      }
      const request = event.data;
      if (!request.channel || request.channel !== PlatformAuthConstants.CHANNEL_ID) {
        return;
      }
      if (request.extensionId && request.extensionId !== this.extensionId) {
        return;
      }
      if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
        const handshakeResolver = this.handshakeResolvers.get(request.responseId);
        if (!handshakeResolver) {
          this.logger.trace(this.platformAuthType + `.onWindowMessage - resolver can't be found for request ${request.responseId}`);
          return;
        }
        this.logger.verbose(request.extensionId ? `Extension with id: ${request.extensionId} not installed` : "No extension installed");
        clearTimeout(this.timeoutId);
        this.messageChannel.port1.close();
        this.messageChannel.port2.close();
        window.removeEventListener("message", this.windowListener, false);
        this.handshakeEvent.end({
          success: false,
          extensionInstalled: false
        });
        handshakeResolver.reject(createBrowserAuthError(nativeExtensionNotInstalled));
      }
    }
    /**
     * Invoked when a message is received from the extension on the MessageChannel port
     * @param event
     */
    onChannelMessage(event) {
      this.logger.trace(this.platformAuthType + " - onChannelMessage called.");
      const request = event.data;
      const resolver = this.resolvers.get(request.responseId);
      const handshakeResolver = this.handshakeResolvers.get(request.responseId);
      try {
        const method = request.body.method;
        if (method === NativeExtensionMethod.Response) {
          if (!resolver) {
            return;
          }
          const response = request.body.response;
          this.logger.trace(this.platformAuthType + " - Received response from browser extension");
          this.logger.tracePii(this.platformAuthType + ` - Received response from browser extension: ${JSON.stringify(response)}`);
          if (response.status !== "Success") {
            resolver.reject(createNativeAuthError(response.code, response.description, response.ext));
          } else if (response.result) {
            if (response.result["code"] && response.result["description"]) {
              resolver.reject(createNativeAuthError(response.result["code"], response.result["description"], response.result["ext"]));
            } else {
              resolver.resolve(response.result);
            }
          } else {
            throw createAuthError(AuthErrorCodes_exports.unexpectedError, "Event does not contain result.");
          }
          this.resolvers.delete(request.responseId);
        } else if (method === NativeExtensionMethod.HandshakeResponse) {
          if (!handshakeResolver) {
            this.logger.trace(this.platformAuthType + `.onChannelMessage - resolver can't be found for request ${request.responseId}`);
            return;
          }
          clearTimeout(this.timeoutId);
          window.removeEventListener("message", this.windowListener, false);
          this.extensionId = request.extensionId;
          this.extensionVersion = request.body.version;
          this.logger.verbose(this.platformAuthType + ` - Received HandshakeResponse from extension: ${this.extensionId}`);
          this.handshakeEvent.end({
            extensionInstalled: true,
            success: true
          });
          handshakeResolver.resolve();
          this.handshakeResolvers.delete(request.responseId);
        }
      } catch (err) {
        this.logger.error("Error parsing response from WAM Extension");
        this.logger.errorPii(`Error parsing response from WAM Extension: ${err}`);
        this.logger.errorPii(`Unable to parse ${event}`);
        if (resolver) {
          resolver.reject(err);
        } else if (handshakeResolver) {
          handshakeResolver.reject(err);
        }
      }
    }
    /**
     * Validates native platform response before processing
     * @param response
     */
    validatePlatformBrokerResponse(response) {
      if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) {
        return response;
      } else {
        throw createAuthError(AuthErrorCodes_exports.unexpectedError, "Response missing expected properties.");
      }
    }
    /**
     * Returns the Id for the browser extension this handler is communicating with
     * @returns
     */
    getExtensionId() {
      return this.extensionId;
    }
    /**
     * Returns the version for the browser extension this handler is communicating with
     * @returns
     */
    getExtensionVersion() {
      return this.extensionVersion;
    }
    getExtensionName() {
      return this.getExtensionId() === PlatformAuthConstants.PREFERRED_EXTENSION_ID ? "chrome" : this.getExtensionId()?.length ? "unknown" : void 0;
    }
  };

  // node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthDOMHandler.mjs
  var PlatformAuthDOMHandler = class _PlatformAuthDOMHandler {
    constructor(logger, performanceClient, correlationId) {
      this.logger = logger;
      this.performanceClient = performanceClient;
      this.correlationId = correlationId;
      this.platformAuthType = PlatformAuthConstants.PLATFORM_DOM_PROVIDER;
    }
    static async createProvider(logger, performanceClient, correlationId) {
      logger.trace("PlatformAuthDOMHandler: createProvider called");
      if (window.navigator?.platformAuthentication) {
        const supportedContracts = (
          // @ts-ignore
          await window.navigator.platformAuthentication.getSupportedContracts(PlatformAuthConstants.MICROSOFT_ENTRA_BROKERID)
        );
        if (supportedContracts?.includes(PlatformAuthConstants.PLATFORM_DOM_APIS)) {
          logger.trace("Platform auth api available in DOM");
          return new _PlatformAuthDOMHandler(logger, performanceClient, correlationId);
        }
      }
      return void 0;
    }
    /**
     * Returns the Id for the broker extension this handler is communicating with
     * @returns
     */
    getExtensionId() {
      return PlatformAuthConstants.MICROSOFT_ENTRA_BROKERID;
    }
    getExtensionVersion() {
      return "";
    }
    getExtensionName() {
      return PlatformAuthConstants.DOM_API_NAME;
    }
    /**
     * Send token request to platform broker via browser DOM API
     * @param request
     * @returns
     */
    async sendMessage(request) {
      this.logger.trace(this.platformAuthType + " - Sending request to browser DOM API");
      try {
        const platformDOMRequest = this.initializePlatformDOMRequest(request);
        const response = (
          // @ts-ignore
          await window.navigator.platformAuthentication.executeGetToken(platformDOMRequest)
        );
        return this.validatePlatformBrokerResponse(response);
      } catch (e) {
        this.logger.error(this.platformAuthType + " - executeGetToken DOM API error");
        throw e;
      }
    }
    initializePlatformDOMRequest(request) {
      this.logger.trace(this.platformAuthType + " - initializeNativeDOMRequest called");
      const { accountId, clientId, authority, scope, redirectUri, correlationId, state, storeInCache, embeddedClientId, extraParameters, ...remainingProperties } = request;
      const validExtraParameters = this.getDOMExtraParams(remainingProperties);
      const platformDOMRequest = {
        accountId,
        brokerId: this.getExtensionId(),
        authority,
        clientId,
        correlationId: correlationId || this.correlationId,
        extraParameters: { ...extraParameters, ...validExtraParameters },
        isSecurityTokenService: false,
        redirectUri,
        scope,
        state,
        storeInCache,
        embeddedClientId
      };
      return platformDOMRequest;
    }
    validatePlatformBrokerResponse(response) {
      if (response.hasOwnProperty("isSuccess")) {
        if (response.hasOwnProperty("accessToken") && response.hasOwnProperty("idToken") && response.hasOwnProperty("clientInfo") && response.hasOwnProperty("account") && response.hasOwnProperty("scopes") && response.hasOwnProperty("expiresIn")) {
          this.logger.trace(this.platformAuthType + " - platform broker returned successful and valid response");
          return this.convertToPlatformBrokerResponse(response);
        } else if (response.hasOwnProperty("error")) {
          const errorResponse = response;
          if (errorResponse.isSuccess === false && errorResponse.error && errorResponse.error.code) {
            this.logger.trace(this.platformAuthType + " - platform broker returned error response");
            throw createNativeAuthError(errorResponse.error.code, errorResponse.error.description, {
              error: parseInt(errorResponse.error.errorCode),
              protocol_error: errorResponse.error.protocolError,
              status: errorResponse.error.status,
              properties: errorResponse.error.properties
            });
          }
        }
      }
      throw createAuthError(AuthErrorCodes_exports.unexpectedError, "Response missing expected properties.");
    }
    convertToPlatformBrokerResponse(response) {
      this.logger.trace(this.platformAuthType + " - convertToNativeResponse called");
      const nativeResponse = {
        access_token: response.accessToken,
        id_token: response.idToken,
        client_info: response.clientInfo,
        account: response.account,
        expires_in: response.expiresIn,
        scope: response.scopes,
        state: response.state || "",
        properties: response.properties || {},
        extendedLifetimeToken: response.extendedLifetimeToken ?? false,
        shr: response.proofOfPossessionPayload
      };
      return nativeResponse;
    }
    getDOMExtraParams(extraParameters) {
      const stringifiedParams = Object.entries(extraParameters).reduce((record, [key, value]) => {
        record[key] = String(value);
        return record;
      }, {});
      const validExtraParams = {
        ...stringifiedParams
      };
      return validExtraParams;
    }
  };

  // node_modules/@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthProvider.mjs
  async function isPlatformBrokerAvailable(loggerOptions, perfClient, correlationId) {
    const logger = new Logger(loggerOptions || {}, name2, version2);
    logger.trace("isPlatformBrokerAvailable called");
    const performanceClient = perfClient || new StubPerformanceClient();
    if (typeof window === "undefined") {
      logger.trace("Non-browser environment detected, returning false");
      return false;
    }
    return !!await getPlatformAuthProvider(logger, performanceClient, correlationId || createNewGuid());
  }
  async function getPlatformAuthProvider(logger, performanceClient, correlationId, nativeBrokerHandshakeTimeout) {
    logger.trace("getPlatformAuthProvider called", correlationId);
    const enablePlatformBrokerDOMSupport = isDomEnabledForPlatformAuth();
    logger.trace("Has client allowed platform auth via DOM API: " + enablePlatformBrokerDOMSupport);
    let platformAuthProvider;
    try {
      if (enablePlatformBrokerDOMSupport) {
        platformAuthProvider = await PlatformAuthDOMHandler.createProvider(logger, performanceClient, correlationId);
      }
      if (!platformAuthProvider) {
        logger.trace("Platform auth via DOM API not available, checking for extension");
        platformAuthProvider = await PlatformAuthExtensionHandler.createProvider(logger, nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS, performanceClient);
      }
    } catch (e) {
      logger.trace("Platform auth not available", e);
    }
    return platformAuthProvider;
  }
  function isDomEnabledForPlatformAuth() {
    let sessionStorage;
    try {
      sessionStorage = window[BrowserCacheLocation.SessionStorage];
      return sessionStorage?.getItem(PLATFORM_AUTH_DOM_SUPPORT) === "true";
    } catch (e) {
      return false;
    }
  }
  function isPlatformAuthAllowed(config, logger, platformAuthProvider, authenticationScheme) {
    logger.trace("isPlatformAuthAllowed called");
    if (!config.system.allowPlatformBroker) {
      logger.trace("isPlatformAuthAllowed: allowPlatformBroker is not enabled, returning false");
      return false;
    }
    if (!platformAuthProvider) {
      logger.trace("isPlatformAuthAllowed: Platform auth provider is not initialized, returning false");
      return false;
    }
    if (authenticationScheme) {
      switch (authenticationScheme) {
        case AuthenticationScheme.BEARER:
        case AuthenticationScheme.POP:
          logger.trace("isPlatformAuthAllowed: authenticationScheme is supported, returning true");
          return true;
        default:
          logger.trace("isPlatformAuthAllowed: authenticationScheme is not supported, returning false");
          return false;
      }
    }
    return true;
  }

  // node_modules/@azure/msal-browser/dist/interaction_client/PopupClient.mjs
  var PopupClient = class extends StandardInteractionClient {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, platformAuthHandler, correlationId) {
      super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, platformAuthHandler, correlationId);
      this.unloadWindow = this.unloadWindow.bind(this);
      this.nativeStorage = nativeStorageImpl;
      this.eventHandler = eventHandler;
    }
    /**
     * Acquires tokens by opening a popup window to the /authorize endpoint of the authority
     * @param request
     * @param pkceCodes
     */
    acquireToken(request, pkceCodes) {
      let popupParams = void 0;
      try {
        const popupName = this.generatePopupName(request.scopes || OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
        popupParams = {
          popupName,
          popupWindowAttributes: request.popupWindowAttributes || {},
          popupWindowParent: request.popupWindowParent ?? window
        };
        this.performanceClient.addFields({ isAsyncPopup: this.config.system.asyncPopups }, this.correlationId);
        if (this.config.system.asyncPopups) {
          this.logger.verbose("asyncPopups set to true, acquiring token");
          return this.acquireTokenPopupAsync(request, popupParams, pkceCodes);
        } else {
          const validatedRequest = {
            ...request,
            httpMethod: validateRequestMethod(request, this.config.auth.protocolMode)
          };
          this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
          popupParams.popup = this.openSizedPopup("about:blank", popupParams);
          return this.acquireTokenPopupAsync(validatedRequest, popupParams, pkceCodes);
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */
    logout(logoutRequest) {
      try {
        this.logger.verbose("logoutPopup called");
        const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
        const popupParams = {
          popupName: this.generateLogoutPopupName(validLogoutRequest),
          popupWindowAttributes: logoutRequest?.popupWindowAttributes || {},
          popupWindowParent: logoutRequest?.popupWindowParent ?? window
        };
        const authority = logoutRequest && logoutRequest.authority;
        const mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
        if (this.config.system.asyncPopups) {
          this.logger.verbose("asyncPopups set to true");
          return this.logoutPopupAsync(validLogoutRequest, popupParams, authority, mainWindowRedirectUri);
        } else {
          this.logger.verbose("asyncPopup set to false, opening popup");
          popupParams.popup = this.openSizedPopup("about:blank", popupParams);
          return this.logoutPopupAsync(validLogoutRequest, popupParams, authority, mainWindowRedirectUri);
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
    /**
     * Helper which obtains an access_token for your API via opening a popup window in the user's browser
     * @param request
     * @param popupParams
     * @param pkceCodes
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    async acquireTokenPopupAsync(request, popupParams, pkceCodes) {
      this.logger.verbose("acquireTokenPopupAsync called");
      const validRequest = await invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Popup);
      if (popupParams.popup) {
        preconnect(validRequest.authority);
      }
      const isPlatformBroker = isPlatformAuthAllowed(this.config, this.logger, this.platformAuthProvider, request.authenticationScheme);
      validRequest.platformBroker = isPlatformBroker;
      if (this.config.auth.protocolMode === ProtocolMode.EAR) {
        return this.executeEarFlow(validRequest, popupParams);
      } else {
        return this.executeCodeFlow(validRequest, popupParams, pkceCodes);
      }
    }
    /**
     * Executes auth code + PKCE flow
     * @param request
     * @param popupParams
     * @param pkceCodes
     * @returns
     */
    async executeCodeFlow(request, popupParams, pkceCodes) {
      const correlationId = request.correlationId;
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup);
      const pkce = pkceCodes || await invokeAsync(generatePkceCodes, PerformanceEvents.GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
      const popupRequest = {
        ...request,
        codeChallenge: pkce.challenge
      };
      try {
        const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, correlationId)({
          serverTelemetryManager,
          requestAuthority: popupRequest.authority,
          requestAzureCloudOptions: popupRequest.azureCloudOptions,
          requestExtraQueryParameters: popupRequest.extraQueryParameters,
          account: popupRequest.account
        });
        if (popupRequest.httpMethod === HttpMethod.POST) {
          return await this.executeCodeFlowWithPost(popupRequest, popupParams, authClient, pkce.verifier);
        } else {
          const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents.GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)(this.config, authClient.authority, popupRequest, this.logger, this.performanceClient);
          const popupWindow = this.initiateAuthRequest(navigateUrl, popupParams);
          this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
          const responseString = await this.monitorPopupForHash(popupWindow, popupParams.popupWindowParent);
          const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.serverResponseType, this.logger);
          return await invokeAsync(handleResponseCode, PerformanceEvents.HandleResponseCode, this.logger, this.performanceClient, correlationId)(request, serverParams, pkce.verifier, ApiId.acquireTokenPopup, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
        }
      } catch (e) {
        popupParams.popup?.close();
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    }
    /**
     * Executes EAR flow
     * @param request
     */
    async executeEarFlow(request, popupParams) {
      const correlationId = request.correlationId;
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)({
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      const earJwk = await invokeAsync(generateEarKey, PerformanceEvents.GenerateEarKey, this.logger, this.performanceClient, correlationId)();
      const popupRequest = {
        ...request,
        earJwk
      };
      const popupWindow = popupParams.popup || this.openPopup("about:blank", popupParams);
      const form = await getEARForm(popupWindow.document, this.config, discoveredAuthority, popupRequest, this.logger, this.performanceClient);
      form.submit();
      const responseString = await invokeAsync(this.monitorPopupForHash.bind(this), PerformanceEvents.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(popupWindow, popupParams.popupWindowParent);
      const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.serverResponseType, this.logger);
      return invokeAsync(handleResponseEAR, PerformanceEvents.HandleResponseEar, this.logger, this.performanceClient, correlationId)(popupRequest, serverParams, ApiId.acquireTokenPopup, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
    async executeCodeFlowWithPost(request, popupParams, authClient, pkceVerifier) {
      const correlationId = request.correlationId;
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)({
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      const popupWindow = popupParams.popup || this.openPopup("about:blank", popupParams);
      const form = await getCodeForm(popupWindow.document, this.config, discoveredAuthority, request, this.logger, this.performanceClient);
      form.submit();
      const responseString = await invokeAsync(this.monitorPopupForHash.bind(this), PerformanceEvents.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(popupWindow, popupParams.popupWindowParent);
      const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.serverResponseType, this.logger);
      return invokeAsync(handleResponseCode, PerformanceEvents.HandleResponseCode, this.logger, this.performanceClient, correlationId)(request, serverParams, pkceVerifier, ApiId.acquireTokenPopup, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
    /**
     *
     * @param validRequest
     * @param popupName
     * @param requestAuthority
     * @param popup
     * @param mainWindowRedirectUri
     * @param popupWindowAttributes
     */
    async logoutPopupAsync(validRequest, popupParams, requestAuthority, mainWindowRedirectUri) {
      this.logger.verbose("logoutPopupAsync called");
      this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Popup, validRequest);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logoutPopup);
      try {
        await this.clearCacheOnLogout(this.correlationId, validRequest.account);
        const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
          serverTelemetryManager,
          requestAuthority,
          account: validRequest.account || void 0
        });
        try {
          authClient.authority.endSessionEndpoint;
        } catch {
          if (validRequest.account?.homeAccountId && validRequest.postLogoutRedirectUri && authClient.authority.protocolMode === ProtocolMode.OIDC) {
            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
            if (mainWindowRedirectUri) {
              const navigationOptions = {
                apiId: ApiId.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
              };
              const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri());
              await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
            }
            popupParams.popup?.close();
            return;
          }
        }
        const logoutUri = authClient.getLogoutUri(validRequest);
        this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
        const popupWindow = this.openPopup(logoutUri, popupParams);
        this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
        await this.monitorPopupForHash(popupWindow, popupParams.popupWindowParent).catch(() => {
        });
        if (mainWindowRedirectUri) {
          const navigationOptions = {
            apiId: ApiId.logoutPopup,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: false
          };
          const absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, getCurrentUri());
          this.logger.verbose("Redirecting main window to url specified in the request");
          this.logger.verbosePii(`Redirecting main window to: ${absoluteUrl}`);
          await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
        } else {
          this.logger.verbose("No main window navigation requested");
        }
      } catch (e) {
        popupParams.popup?.close();
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Popup, null, e);
        this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
        throw e;
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
    }
    /**
     * Opens a popup window with given request Url.
     * @param requestUrl
     */
    initiateAuthRequest(requestUrl, params) {
      if (requestUrl) {
        this.logger.infoPii(`Navigate to: ${requestUrl}`);
        return this.openPopup(requestUrl, params);
      } else {
        this.logger.error("Navigate url is empty");
        throw createBrowserAuthError(emptyNavigateUri);
      }
    }
    /**
     * Monitors a window until it loads a url with the same origin.
     * @param popupWindow - window that is being monitored
     * @param timeout - timeout for processing hash once popup is redirected back to application
     */
    monitorPopupForHash(popupWindow, popupWindowParent) {
      return new Promise((resolve, reject) => {
        this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        const intervalId = setInterval(() => {
          if (popupWindow.closed) {
            this.logger.error("PopupHandler.monitorPopupForHash - window closed");
            clearInterval(intervalId);
            reject(createBrowserAuthError(userCancelled));
            return;
          }
          let href = "";
          try {
            href = popupWindow.location.href;
          } catch (e) {
          }
          if (!href || href === "about:blank") {
            return;
          }
          clearInterval(intervalId);
          let responseString = "";
          const responseType = this.config.auth.OIDCOptions.serverResponseType;
          if (popupWindow) {
            if (responseType === ServerResponseType.QUERY) {
              responseString = popupWindow.location.search;
            } else {
              responseString = popupWindow.location.hash;
            }
          }
          this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
          resolve(responseString);
        }, this.config.system.pollIntervalMilliseconds);
      }).finally(() => {
        this.cleanPopup(popupWindow, popupWindowParent);
      });
    }
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @param popupWindowAttributes
     * @ignore
     * @hidden
     */
    openPopup(urlNavigate, popupParams) {
      try {
        let popupWindow;
        if (popupParams.popup) {
          popupWindow = popupParams.popup;
          this.logger.verbosePii(`Navigating popup window to: ${urlNavigate}`);
          popupWindow.location.assign(urlNavigate);
        } else if (typeof popupParams.popup === "undefined") {
          this.logger.verbosePii(`Opening popup window to: ${urlNavigate}`);
          popupWindow = this.openSizedPopup(urlNavigate, popupParams);
        }
        if (!popupWindow) {
          throw createBrowserAuthError(emptyWindowError);
        }
        if (popupWindow.focus) {
          popupWindow.focus();
        }
        this.currentWindow = popupWindow;
        popupParams.popupWindowParent.addEventListener("beforeunload", this.unloadWindow);
        return popupWindow;
      } catch (e) {
        this.logger.error("error opening popup " + e.message);
        throw createBrowserAuthError(popupWindowError);
      }
    }
    /**
     * Helper function to set popup window dimensions and position
     * @param urlNavigate
     * @param popupName
     * @param popupWindowAttributes
     * @returns
     */
    openSizedPopup(urlNavigate, { popupName, popupWindowAttributes, popupWindowParent }) {
      const winLeft = popupWindowParent.screenLeft ? popupWindowParent.screenLeft : popupWindowParent.screenX;
      const winTop = popupWindowParent.screenTop ? popupWindowParent.screenTop : popupWindowParent.screenY;
      const winWidth = popupWindowParent.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const winHeight = popupWindowParent.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let width = popupWindowAttributes.popupSize?.width;
      let height = popupWindowAttributes.popupSize?.height;
      let top = popupWindowAttributes.popupPosition?.top;
      let left = popupWindowAttributes.popupPosition?.left;
      if (!width || width < 0 || width > winWidth) {
        this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
        width = BrowserConstants.POPUP_WIDTH;
      }
      if (!height || height < 0 || height > winHeight) {
        this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
        height = BrowserConstants.POPUP_HEIGHT;
      }
      if (!top || top < 0 || top > winHeight) {
        this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
        top = Math.max(0, winHeight / 2 - BrowserConstants.POPUP_HEIGHT / 2 + winTop);
      }
      if (!left || left < 0 || left > winWidth) {
        this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
        left = Math.max(0, winWidth / 2 - BrowserConstants.POPUP_WIDTH / 2 + winLeft);
      }
      return popupWindowParent.open(urlNavigate, popupName, `width=${width}, height=${height}, top=${top}, left=${left}, scrollbars=yes`);
    }
    /**
     * Event callback to unload main window.
     */
    unloadWindow(e) {
      if (this.currentWindow) {
        this.currentWindow.close();
      }
      e.preventDefault();
    }
    /**
     * Closes popup, removes any state vars created during popup calls.
     * @param popupWindow
     */
    cleanPopup(popupWindow, popupWindowParent) {
      popupWindow.close();
      popupWindowParent.removeEventListener("beforeunload", this.unloadWindow);
    }
    /**
     * Generates the name for the popup based on the client id and request
     * @param clientId
     * @param request
     */
    generatePopupName(scopes, authority) {
      return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${scopes.join("-")}.${authority}.${this.correlationId}`;
    }
    /**
     * Generates the name for the popup based on the client id and request for logouts
     * @param clientId
     * @param request
     */
    generateLogoutPopupName(request) {
      const homeAccountId = request.account && request.account.homeAccountId;
      return `${BrowserConstants.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${homeAccountId}.${this.correlationId}`;
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/RedirectClient.mjs
  function getNavigationType() {
    if (typeof window === "undefined" || typeof window.performance === "undefined" || typeof window.performance.getEntriesByType !== "function") {
      return void 0;
    }
    const navigationEntries = window.performance.getEntriesByType("navigation");
    const navigation = navigationEntries.length ? navigationEntries[0] : void 0;
    return navigation?.type;
  }
  var RedirectClient = class extends StandardInteractionClient {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, platformAuthHandler, correlationId) {
      super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, platformAuthHandler, correlationId);
      this.nativeStorage = nativeStorageImpl;
    }
    /**
     * Redirects the page to the /authorize endpoint of the IDP
     * @param request
     */
    async acquireToken(request) {
      const validRequest = await invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, InteractionType.Redirect);
      validRequest.platformBroker = isPlatformAuthAllowed(this.config, this.logger, this.platformAuthProvider, request.authenticationScheme);
      const handleBackButton = (event) => {
        if (event.persisted) {
          this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
          this.browserStorage.resetRequestCache();
          this.eventHandler.emitEvent(EventType.RESTORE_FROM_BFCACHE, InteractionType.Redirect);
        }
      };
      const redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
      this.logger.verbosePii(`Redirect start page: ${redirectStartPage}`);
      this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, redirectStartPage, true);
      window.addEventListener("pageshow", handleBackButton);
      try {
        if (this.config.auth.protocolMode === ProtocolMode.EAR) {
          await this.executeEarFlow(validRequest);
        } else {
          await this.executeCodeFlow(validRequest, request.onRedirectNavigate);
        }
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
        }
        window.removeEventListener("pageshow", handleBackButton);
        throw e;
      }
    }
    /**
     * Executes auth code + PKCE flow
     * @param request
     * @returns
     */
    async executeCodeFlow(request, onRedirectNavigate) {
      const correlationId = request.correlationId;
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect);
      const pkceCodes = await invokeAsync(generatePkceCodes, PerformanceEvents.GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
      const redirectRequest = {
        ...request,
        codeChallenge: pkceCodes.challenge
      };
      this.browserStorage.cacheAuthorizeRequest(redirectRequest, pkceCodes.verifier);
      try {
        if (redirectRequest.httpMethod === HttpMethod.POST) {
          return await this.executeCodeFlowWithPost(redirectRequest);
        } else {
          const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
            serverTelemetryManager,
            requestAuthority: redirectRequest.authority,
            requestAzureCloudOptions: redirectRequest.azureCloudOptions,
            requestExtraQueryParameters: redirectRequest.extraQueryParameters,
            account: redirectRequest.account
          });
          const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents.GetAuthCodeUrl, this.logger, this.performanceClient, request.correlationId)(this.config, authClient.authority, redirectRequest, this.logger, this.performanceClient);
          return await this.initiateAuthRequest(navigateUrl, onRedirectNavigate);
        }
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    }
    /**
     * Executes EAR flow
     * @param request
     */
    async executeEarFlow(request) {
      const correlationId = request.correlationId;
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)({
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      const earJwk = await invokeAsync(generateEarKey, PerformanceEvents.GenerateEarKey, this.logger, this.performanceClient, correlationId)();
      const redirectRequest = {
        ...request,
        earJwk
      };
      this.browserStorage.cacheAuthorizeRequest(redirectRequest);
      const form = await getEARForm(document, this.config, discoveredAuthority, redirectRequest, this.logger, this.performanceClient);
      form.submit();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(createBrowserAuthError(timedOut, "failed_to_redirect"));
        }, this.config.system.redirectNavigationTimeout);
      });
    }
    /**
     * Executes classic Authorization Code flow with a POST request.
     * @param request
     */
    async executeCodeFlowWithPost(request) {
      const correlationId = request.correlationId;
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)({
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      this.browserStorage.cacheAuthorizeRequest(request);
      const form = await getCodeForm(document, this.config, discoveredAuthority, request, this.logger, this.performanceClient);
      form.submit();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(createBrowserAuthError(timedOut, "failed_to_redirect"));
        }, this.config.system.redirectNavigationTimeout);
      });
    }
    /**
     * Checks if navigateToLoginRequestUrl is set, and:
     * - if true, performs logic to cache and navigate
     * - if false, handles hash string and parses response
     * @param hash {string} url hash
     * @param parentMeasurement {InProgressPerformanceEvent} parent measurement
     */
    async handleRedirectPromise(hash = "", request, pkceVerifier, parentMeasurement) {
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise);
      try {
        const [serverParams, responseString] = this.getRedirectResponse(hash || "");
        if (!serverParams) {
          this.logger.info("handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache.");
          this.browserStorage.resetRequestCache();
          if (getNavigationType() !== "back_forward") {
            parentMeasurement.event.errorCode = "no_server_response";
          } else {
            this.logger.verbose("Back navigation event detected. Muting no_server_response error");
          }
          return null;
        }
        const loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || Constants.EMPTY_STRING;
        const loginRequestUrlNormalized = UrlUtils_exports.normalizeUrlForComparison(loginRequestUrl);
        const currentUrlNormalized = UrlUtils_exports.normalizeUrlForComparison(window.location.href);
        if (loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl) {
          this.logger.verbose("Current page is loginRequestUrl, handling response");
          if (loginRequestUrl.indexOf("#") > -1) {
            replaceHash(loginRequestUrl);
          }
          const handleHashResult = await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
          return handleHashResult;
        } else if (!this.config.auth.navigateToLoginRequestUrl) {
          this.logger.verbose("NavigateToLoginRequestUrl set to false, handling response");
          return await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
        } else if (!isInIframe() || this.config.system.allowRedirectInIframe) {
          this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseString, true);
          const navigationOptions = {
            apiId: ApiId.handleRedirectPromise,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: true
          };
          let processHashOnRedirect = true;
          if (!loginRequestUrl || loginRequestUrl === "null") {
            const homepage = getHomepage();
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
            processHashOnRedirect = await this.navigationClient.navigateInternal(homepage, navigationOptions);
          } else {
            this.logger.verbose(`Navigating to loginRequestUrl: ${loginRequestUrl}`);
            processHashOnRedirect = await this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions);
          }
          if (!processHashOnRedirect) {
            return await this.handleResponse(serverParams, request, pkceVerifier, serverTelemetryManager);
          }
        }
        return null;
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    }
    /**
     * Gets the response hash for a redirect request
     * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
     * @param hash
     */
    getRedirectResponse(userProvidedResponse) {
      this.logger.verbose("getRedirectResponseHash called");
      let responseString = userProvidedResponse;
      if (!responseString) {
        if (this.config.auth.OIDCOptions.serverResponseType === ServerResponseType.QUERY) {
          responseString = window.location.search;
        } else {
          responseString = window.location.hash;
        }
      }
      let response = UrlUtils_exports.getDeserializedResponse(responseString);
      if (response) {
        try {
          validateInteractionType(response, this.browserCrypto, InteractionType.Redirect);
        } catch (e) {
          if (e instanceof AuthError) {
            this.logger.error(`Interaction type validation failed due to ${e.errorCode}: ${e.errorMessage}`);
          }
          return [null, ""];
        }
        clearHash(window);
        this.logger.verbose("Hash contains known properties, returning response hash");
        return [response, responseString];
      }
      const cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
      this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
      if (cachedHash) {
        response = UrlUtils_exports.getDeserializedResponse(cachedHash);
        if (response) {
          this.logger.verbose("Hash does not contain known properties, returning cached hash");
          return [response, cachedHash];
        }
      }
      return [null, ""];
    }
    /**
     * Checks if hash exists and handles in window.
     * @param hash
     * @param state
     */
    async handleResponse(serverParams, request, codeVerifier, serverTelemetryManager) {
      const state = serverParams.state;
      if (!state) {
        throw createBrowserAuthError(noStateInHash);
      }
      if (serverParams.ear_jwe) {
        const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, request.correlationId)({
          requestAuthority: request.authority,
          requestAzureCloudOptions: request.azureCloudOptions,
          requestExtraQueryParameters: request.extraQueryParameters,
          account: request.account
        });
        return invokeAsync(handleResponseEAR, PerformanceEvents.HandleResponseEar, this.logger, this.performanceClient, request.correlationId)(request, serverParams, ApiId.acquireTokenRedirect, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
      }
      const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({ serverTelemetryManager, requestAuthority: request.authority });
      return invokeAsync(handleResponseCode, PerformanceEvents.HandleResponseCode, this.logger, this.performanceClient, request.correlationId)(request, serverParams, codeVerifier, ApiId.acquireTokenRedirect, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
    /**
     * Redirects window to given URL.
     * @param urlNavigate
     * @param onRedirectNavigateRequest - onRedirectNavigate callback provided on the request
     */
    async initiateAuthRequest(requestUrl, onRedirectNavigateRequest) {
      this.logger.verbose("RedirectHandler.initiateAuthRequest called");
      if (requestUrl) {
        this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${requestUrl}`);
        const navigationOptions = {
          apiId: ApiId.acquireTokenRedirect,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: false
        };
        const onRedirectNavigate = onRedirectNavigateRequest || this.config.auth.onRedirectNavigate;
        if (typeof onRedirectNavigate === "function") {
          this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
          const navigate = onRedirectNavigate(requestUrl);
          if (navigate !== false) {
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
            await this.navigationClient.navigateExternal(requestUrl, navigationOptions);
            return;
          } else {
            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
            return;
          }
        } else {
          this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
          await this.navigationClient.navigateExternal(requestUrl, navigationOptions);
          return;
        }
      } else {
        this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
        throw createBrowserAuthError(emptyNavigateUri);
      }
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */
    async logout(logoutRequest) {
      this.logger.verbose("logoutRedirect called");
      const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logout);
      try {
        this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
        await this.clearCacheOnLogout(this.correlationId, validLogoutRequest.account);
        const navigationOptions = {
          apiId: ApiId.logout,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: false
        };
        const authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
          serverTelemetryManager,
          requestAuthority: logoutRequest && logoutRequest.authority,
          requestExtraQueryParameters: logoutRequest?.extraQueryParameters,
          account: logoutRequest && logoutRequest.account || void 0
        });
        if (authClient.authority.protocolMode === ProtocolMode.OIDC) {
          try {
            authClient.authority.endSessionEndpoint;
          } catch {
            if (validLogoutRequest.account?.homeAccountId) {
              this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
              return;
            }
          }
        }
        const logoutUri = authClient.getLogoutUri(validLogoutRequest);
        this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
        if (logoutRequest && typeof logoutRequest.onRedirectNavigate === "function") {
          const navigate = logoutRequest.onRedirectNavigate(logoutUri);
          if (navigate !== false) {
            this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
            if (!this.browserStorage.getInteractionInProgress()) {
              this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
            }
            await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
            return;
          } else {
            this.browserStorage.setInteractionInProgress(false);
            this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
          }
        } else {
          if (!this.browserStorage.getInteractionInProgress()) {
            this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
          }
          await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
          return;
        }
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e);
        this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
        throw e;
      }
      this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
    }
    /**
     * Use to get the redirectStartPage either from request or use current window
     * @param requestStartPage
     */
    getRedirectStartPage(requestStartPage) {
      const redirectStartPage = requestStartPage || window.location.href;
      return UrlString.getAbsoluteUrl(redirectStartPage, getCurrentUri());
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_handler/SilentHandler.mjs
  async function initiateCodeRequest(requestUrl, performanceClient, logger, correlationId, navigateFrameWait) {
    performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerInitiateAuthRequest, correlationId);
    if (!requestUrl) {
      logger.info("Navigate url is empty");
      throw createBrowserAuthError(emptyNavigateUri);
    }
    if (navigateFrameWait) {
      return invokeAsync(loadFrame, PerformanceEvents.SilentHandlerLoadFrame, logger, performanceClient, correlationId)(requestUrl, navigateFrameWait, performanceClient, correlationId);
    }
    return invoke(loadFrameSync, PerformanceEvents.SilentHandlerLoadFrameSync, logger, performanceClient, correlationId)(requestUrl);
  }
  async function initiateCodeFlowWithPost(config, authority, request, logger, performanceClient) {
    const frame = createHiddenIframe();
    if (!frame.contentDocument) {
      throw "No document associated with iframe!";
    }
    const form = await getCodeForm(frame.contentDocument, config, authority, request, logger, performanceClient);
    form.submit();
    return frame;
  }
  async function initiateEarRequest(config, authority, request, logger, performanceClient) {
    const frame = createHiddenIframe();
    if (!frame.contentDocument) {
      throw "No document associated with iframe!";
    }
    const form = await getEARForm(frame.contentDocument, config, authority, request, logger, performanceClient);
    form.submit();
    return frame;
  }
  async function monitorIframeForHash(iframe, timeout, pollIntervalMilliseconds, performanceClient, logger, correlationId, responseType) {
    performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerMonitorIframeForHash, correlationId);
    return new Promise((resolve, reject) => {
      if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
        logger.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${timeout}ms) than the default (${DEFAULT_IFRAME_TIMEOUT_MS}ms). This may result in timeouts.`);
      }
      const timeoutId = window.setTimeout(() => {
        window.clearInterval(intervalId);
        reject(createBrowserAuthError(monitorWindowTimeout));
      }, timeout);
      const intervalId = window.setInterval(() => {
        let href = "";
        const contentWindow = iframe.contentWindow;
        try {
          href = contentWindow ? contentWindow.location.href : "";
        } catch (e) {
        }
        if (!href || href === "about:blank") {
          return;
        }
        let responseString = "";
        if (contentWindow) {
          if (responseType === ServerResponseType.QUERY) {
            responseString = contentWindow.location.search;
          } else {
            responseString = contentWindow.location.hash;
          }
        }
        window.clearTimeout(timeoutId);
        window.clearInterval(intervalId);
        resolve(responseString);
      }, pollIntervalMilliseconds);
    }).finally(() => {
      invoke(removeHiddenIframe, PerformanceEvents.RemoveHiddenIframe, logger, performanceClient, correlationId)(iframe);
    });
  }
  function loadFrame(urlNavigate, navigateFrameWait, performanceClient, correlationId) {
    performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerLoadFrame, correlationId);
    return new Promise((resolve, reject) => {
      const frameHandle = createHiddenIframe();
      window.setTimeout(() => {
        if (!frameHandle) {
          reject("Unable to load iframe");
          return;
        }
        frameHandle.src = urlNavigate;
        resolve(frameHandle);
      }, navigateFrameWait);
    });
  }
  function loadFrameSync(urlNavigate) {
    const frameHandle = createHiddenIframe();
    frameHandle.src = urlNavigate;
    return frameHandle;
  }
  function createHiddenIframe() {
    const authFrame = document.createElement("iframe");
    authFrame.className = "msalSilentIframe";
    authFrame.style.visibility = "hidden";
    authFrame.style.position = "absolute";
    authFrame.style.width = authFrame.style.height = "0";
    authFrame.style.border = "0";
    authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
    document.body.appendChild(authFrame);
    return authFrame;
  }
  function removeHiddenIframe(iframe) {
    if (document.body === iframe.parentNode) {
      document.body.removeChild(iframe);
    }
  }

  // node_modules/@azure/msal-browser/dist/interaction_client/SilentIframeClient.mjs
  var SilentIframeClient = class extends StandardInteractionClient {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, platformAuthProvider, correlationId) {
      super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, platformAuthProvider, correlationId);
      this.apiId = apiId;
      this.nativeStorage = nativeStorageImpl;
    }
    /**
     * Acquires a token silently by opening a hidden iframe to the /authorize endpoint with prompt=none or prompt=no_session
     * @param request
     */
    async acquireToken(request) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
      if (!request.loginHint && !request.sid && (!request.account || !request.account.username)) {
        this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
      }
      const inputRequest = { ...request };
      if (inputRequest.prompt) {
        if (inputRequest.prompt !== PromptValue.NONE && inputRequest.prompt !== PromptValue.NO_SESSION) {
          this.logger.warning(`SilentIframeClient. Replacing invalid prompt ${inputRequest.prompt} with ${PromptValue.NONE}`);
          inputRequest.prompt = PromptValue.NONE;
        }
      } else {
        inputRequest.prompt = PromptValue.NONE;
      }
      const silentRequest = await invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(inputRequest, InteractionType.Silent);
      silentRequest.platformBroker = isPlatformAuthAllowed(this.config, this.logger, this.platformAuthProvider, silentRequest.authenticationScheme);
      preconnect(silentRequest.authority);
      if (this.config.auth.protocolMode === ProtocolMode.EAR) {
        return this.executeEarFlow(silentRequest);
      } else {
        return this.executeCodeFlow(silentRequest);
      }
    }
    /**
     * Executes auth code + PKCE flow
     * @param request
     * @returns
     */
    async executeCodeFlow(request) {
      let authClient;
      const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
      try {
        authClient = await invokeAsync(this.createAuthCodeClient.bind(this), PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, request.correlationId)({
          serverTelemetryManager,
          requestAuthority: request.authority,
          requestAzureCloudOptions: request.azureCloudOptions,
          requestExtraQueryParameters: request.extraQueryParameters,
          account: request.account
        });
        return await invokeAsync(this.silentTokenHelper.bind(this), PerformanceEvents.SilentIframeClientTokenHelper, this.logger, this.performanceClient, request.correlationId)(authClient, request);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        if (!authClient || !(e instanceof AuthError) || e.errorCode !== BrowserConstants.INVALID_GRANT_ERROR) {
          throw e;
        }
        this.performanceClient.addFields({
          retryError: e.errorCode
        }, this.correlationId);
        return await invokeAsync(this.silentTokenHelper.bind(this), PerformanceEvents.SilentIframeClientTokenHelper, this.logger, this.performanceClient, this.correlationId)(authClient, request);
      }
    }
    /**
     * Executes EAR flow
     * @param request
     */
    async executeEarFlow(request) {
      const correlationId = request.correlationId;
      const discoveredAuthority = await invokeAsync(this.getDiscoveredAuthority.bind(this), PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, correlationId)({
        requestAuthority: request.authority,
        requestAzureCloudOptions: request.azureCloudOptions,
        requestExtraQueryParameters: request.extraQueryParameters,
        account: request.account
      });
      const earJwk = await invokeAsync(generateEarKey, PerformanceEvents.GenerateEarKey, this.logger, this.performanceClient, correlationId)();
      const silentRequest = {
        ...request,
        earJwk
      };
      const msalFrame = await invokeAsync(initiateEarRequest, PerformanceEvents.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(this.config, discoveredAuthority, silentRequest, this.logger, this.performanceClient);
      const responseType = this.config.auth.OIDCOptions.serverResponseType;
      const responseString = await invokeAsync(monitorIframeForHash, PerformanceEvents.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(msalFrame, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, correlationId, responseType);
      const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, correlationId)(responseString, responseType, this.logger);
      return invokeAsync(handleResponseEAR, PerformanceEvents.HandleResponseEar, this.logger, this.performanceClient, correlationId)(silentRequest, serverParams, this.apiId, this.config, discoveredAuthority, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
    /**
     * Currently Unsupported
     */
    logout() {
      return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
    }
    /**
     * Helper which acquires an authorization code silently using a hidden iframe from given url
     * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
     * @param navigateUrl
     * @param userRequestScopes
     */
    async silentTokenHelper(authClient, request) {
      const correlationId = request.correlationId;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientTokenHelper, correlationId);
      const pkceCodes = await invokeAsync(generatePkceCodes, PerformanceEvents.GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
      const silentRequest = {
        ...request,
        codeChallenge: pkceCodes.challenge
      };
      let msalFrame;
      if (request.httpMethod === HttpMethod.POST) {
        msalFrame = await invokeAsync(initiateCodeFlowWithPost, PerformanceEvents.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(this.config, authClient.authority, silentRequest, this.logger, this.performanceClient);
      } else {
        const navigateUrl = await invokeAsync(getAuthCodeRequestUrl, PerformanceEvents.GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)(this.config, authClient.authority, silentRequest, this.logger, this.performanceClient);
        msalFrame = await invokeAsync(initiateCodeRequest, PerformanceEvents.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(navigateUrl, this.performanceClient, this.logger, correlationId, this.config.system.navigateFrameWait);
      }
      const responseType = this.config.auth.OIDCOptions.serverResponseType;
      const responseString = await invokeAsync(monitorIframeForHash, PerformanceEvents.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(msalFrame, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, correlationId, responseType);
      const serverParams = invoke(deserializeResponse, PerformanceEvents.DeserializeResponse, this.logger, this.performanceClient, correlationId)(responseString, responseType, this.logger);
      return invokeAsync(handleResponseCode, PerformanceEvents.HandleResponseCode, this.logger, this.performanceClient, correlationId)(request, serverParams, pkceCodes.verifier, this.apiId, this.config, authClient, this.browserStorage, this.nativeStorage, this.eventHandler, this.logger, this.performanceClient, this.platformAuthProvider);
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/SilentRefreshClient.mjs
  var SilentRefreshClient = class extends StandardInteractionClient {
    /**
     * Exchanges the refresh token for new tokens
     * @param request
     */
    async acquireToken(request) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, request.correlationId);
      const baseRequest = await invokeAsync(initializeBaseRequest, PerformanceEvents.InitializeBaseRequest, this.logger, this.performanceClient, request.correlationId)(request, this.config, this.performanceClient, this.logger);
      const silentRequest = {
        ...request,
        ...baseRequest
      };
      if (request.redirectUri) {
        silentRequest.redirectUri = this.getRedirectUri(request.redirectUri);
      }
      const serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
      const refreshTokenClient = await this.createRefreshTokenClient({
        serverTelemetryManager,
        authorityUrl: silentRequest.authority,
        azureCloudOptions: silentRequest.azureCloudOptions,
        account: silentRequest.account
      });
      return invokeAsync(refreshTokenClient.acquireTokenByRefreshToken.bind(refreshTokenClient), PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, request.correlationId)(silentRequest).catch((e) => {
        e.setCorrelationId(this.correlationId);
        serverTelemetryManager.cacheFailedRequest(e);
        throw e;
      });
    }
    /**
     * Currently Unsupported
     */
    logout() {
      return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
    }
    /**
     * Creates a Refresh Client with the given authority, or the default authority.
     * @param params {
     *         serverTelemetryManager: ServerTelemetryManager;
     *         authorityUrl?: string;
     *         azureCloudOptions?: AzureCloudOptions;
     *         extraQueryParams?: StringDict;
     *         account?: AccountInfo;
     *        }
     */
    async createRefreshTokenClient(params) {
      const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
        serverTelemetryManager: params.serverTelemetryManager,
        requestAuthority: params.authorityUrl,
        requestAzureCloudOptions: params.azureCloudOptions,
        requestExtraQueryParameters: params.extraQueryParameters,
        account: params.account
      });
      return new RefreshTokenClient(clientConfig, this.performanceClient);
    }
  };

  // node_modules/@azure/msal-browser/dist/cache/TokenCache.mjs
  var TokenCache = class {
    constructor(configuration, storage, logger, cryptoObj) {
      this.isBrowserEnvironment = typeof window !== "undefined";
      this.config = configuration;
      this.storage = storage;
      this.logger = logger;
      this.cryptoObj = cryptoObj;
    }
    // Move getAllAccounts here and cache utility APIs
    /**
     * API to load tokens to msal-browser cache.
     * @param request
     * @param response
     * @param options
     * @returns `AuthenticationResult` for the response that was loaded.
     */
    async loadExternalTokens(request, response, options) {
      if (!this.isBrowserEnvironment) {
        throw createBrowserAuthError(nonBrowserEnvironment);
      }
      const correlationId = request.correlationId || createNewGuid();
      const idTokenClaims = response.id_token ? AuthToken_exports.extractTokenClaims(response.id_token, base64Decode) : void 0;
      const authorityOptions = {
        protocolMode: this.config.auth.protocolMode,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
      const authority = request.authority ? new Authority(Authority.generateAuthority(request.authority, request.azureCloudOptions), this.config.system.networkClient, this.storage, authorityOptions, this.logger, request.correlationId || createNewGuid()) : void 0;
      const cacheRecordAccount = await this.loadAccount(request, options.clientInfo || response.client_info || "", correlationId, idTokenClaims, authority);
      const idToken = await this.loadIdToken(response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, cacheRecordAccount.realm, correlationId);
      const accessToken = await this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, cacheRecordAccount.realm, options, correlationId);
      const refreshToken = await this.loadRefreshToken(response, cacheRecordAccount.homeAccountId, cacheRecordAccount.environment, correlationId);
      return this.generateAuthenticationResult(request, {
        account: cacheRecordAccount,
        idToken,
        accessToken,
        refreshToken
      }, idTokenClaims, authority);
    }
    /**
     * Helper function to load account to msal-browser cache
     * @param idToken
     * @param environment
     * @param clientInfo
     * @param authorityType
     * @param requestHomeAccountId
     * @returns `AccountEntity`
     */
    async loadAccount(request, clientInfo, correlationId, idTokenClaims, authority) {
      this.logger.verbose("TokenCache - loading account");
      if (request.account) {
        const accountEntity = AccountEntity.createFromAccountInfo(request.account);
        await this.storage.setAccount(accountEntity, correlationId);
        return accountEntity;
      } else if (!authority || !clientInfo && !idTokenClaims) {
        this.logger.error("TokenCache - if an account is not provided on the request, authority and either clientInfo or idToken must be provided instead.");
        throw createBrowserAuthError(unableToLoadToken);
      }
      const homeAccountId = AccountEntity.generateHomeAccountId(clientInfo, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
      const claimsTenantId = idTokenClaims?.tid;
      const cachedAccount = buildAccountToCache(
        this.storage,
        authority,
        homeAccountId,
        base64Decode,
        correlationId,
        idTokenClaims,
        clientInfo,
        authority.hostnameAndPort,
        claimsTenantId,
        void 0,
        // authCodePayload
        void 0,
        // nativeAccountId
        this.logger
      );
      await this.storage.setAccount(cachedAccount, correlationId);
      return cachedAccount;
    }
    /**
     * Helper function to load id tokens to msal-browser cache
     * @param idToken
     * @param homeAccountId
     * @param environment
     * @param tenantId
     * @returns `IdTokenEntity`
     */
    async loadIdToken(response, homeAccountId, environment, tenantId, correlationId) {
      if (!response.id_token) {
        this.logger.verbose("TokenCache - no id token found in response");
        return null;
      }
      this.logger.verbose("TokenCache - loading id token");
      const idTokenEntity = CacheHelpers_exports.createIdTokenEntity(homeAccountId, environment, response.id_token, this.config.auth.clientId, tenantId);
      await this.storage.setIdTokenCredential(idTokenEntity, correlationId);
      return idTokenEntity;
    }
    /**
     * Helper function to load access tokens to msal-browser cache
     * @param request
     * @param response
     * @param homeAccountId
     * @param environment
     * @param tenantId
     * @returns `AccessTokenEntity`
     */
    async loadAccessToken(request, response, homeAccountId, environment, tenantId, options, correlationId) {
      if (!response.access_token) {
        this.logger.verbose("TokenCache - no access token found in response");
        return null;
      } else if (!response.expires_in) {
        this.logger.error("TokenCache - no expiration set on the access token. Cannot add it to the cache.");
        return null;
      } else if (!response.scope && (!request.scopes || !request.scopes.length)) {
        this.logger.error("TokenCache - scopes not specified in the request or response. Cannot add token to the cache.");
        return null;
      }
      this.logger.verbose("TokenCache - loading access token");
      const scopes = response.scope ? ScopeSet.fromString(response.scope) : new ScopeSet(request.scopes);
      const expiresOn = options.expiresOn || response.expires_in + TimeUtils_exports.nowSeconds();
      const extendedExpiresOn = options.extendedExpiresOn || (response.ext_expires_in || response.expires_in) + TimeUtils_exports.nowSeconds();
      const accessTokenEntity = CacheHelpers_exports.createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes.printScopes(), expiresOn, extendedExpiresOn, base64Decode);
      await this.storage.setAccessTokenCredential(accessTokenEntity, correlationId);
      return accessTokenEntity;
    }
    /**
     * Helper function to load refresh tokens to msal-browser cache
     * @param request
     * @param response
     * @param homeAccountId
     * @param environment
     * @returns `RefreshTokenEntity`
     */
    async loadRefreshToken(response, homeAccountId, environment, correlationId) {
      if (!response.refresh_token) {
        this.logger.verbose("TokenCache - no refresh token found in response");
        return null;
      }
      this.logger.verbose("TokenCache - loading refresh token");
      const refreshTokenEntity = CacheHelpers_exports.createRefreshTokenEntity(
        homeAccountId,
        environment,
        response.refresh_token,
        this.config.auth.clientId,
        response.foci,
        void 0,
        // userAssertionHash
        response.refresh_token_expires_in
      );
      await this.storage.setRefreshTokenCredential(refreshTokenEntity, correlationId);
      return refreshTokenEntity;
    }
    /**
     * Helper function to generate an `AuthenticationResult` for the result.
     * @param request
     * @param idTokenObj
     * @param cacheRecord
     * @param authority
     * @returns `AuthenticationResult`
     */
    generateAuthenticationResult(request, cacheRecord, idTokenClaims, authority) {
      let accessToken = "";
      let responseScopes = [];
      let expiresOn = null;
      let extExpiresOn;
      if (cacheRecord?.accessToken) {
        accessToken = cacheRecord.accessToken.secret;
        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
        expiresOn = TimeUtils_exports.toDateFromSeconds(cacheRecord.accessToken.expiresOn);
        extExpiresOn = TimeUtils_exports.toDateFromSeconds(cacheRecord.accessToken.extendedExpiresOn);
      }
      const accountEntity = cacheRecord.account;
      return {
        authority: authority ? authority.canonicalAuthority : "",
        uniqueId: cacheRecord.account.localAccountId,
        tenantId: cacheRecord.account.realm,
        scopes: responseScopes,
        account: accountEntity.getAccountInfo(),
        idToken: cacheRecord.idToken?.secret || "",
        idTokenClaims: idTokenClaims || {},
        accessToken,
        fromCache: true,
        expiresOn,
        correlationId: request.correlationId || "",
        requestId: "",
        extExpiresOn,
        familyId: cacheRecord.refreshToken?.familyId || "",
        tokenType: cacheRecord?.accessToken?.tokenType || "",
        state: request.state || "",
        cloudGraphHostName: accountEntity.cloudGraphHostName || "",
        msGraphHost: accountEntity.msGraphHost || "",
        fromNativeBroker: false
      };
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.mjs
  var HybridSpaAuthorizationCodeClient = class extends AuthorizationCodeClient {
    constructor(config) {
      super(config);
      this.includeRedirectUri = false;
    }
  };

  // node_modules/@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.mjs
  var SilentAuthCodeClient = class extends StandardInteractionClient {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, platformAuthProvider, correlationId) {
      super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, platformAuthProvider, correlationId);
      this.apiId = apiId;
    }
    /**
     * Acquires a token silently by redeeming an authorization code against the /token endpoint
     * @param request
     */
    async acquireToken(request) {
      if (!request.code) {
        throw createBrowserAuthError(authCodeRequired);
      }
      const silentRequest = await invokeAsync(this.initializeAuthorizationRequest.bind(this), PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(request, InteractionType.Silent);
      const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
      try {
        const authCodeRequest = {
          ...silentRequest,
          code: request.code
        };
        const clientConfig = await invokeAsync(this.getClientConfiguration.bind(this), PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, request.correlationId)({
          serverTelemetryManager,
          requestAuthority: silentRequest.authority,
          requestAzureCloudOptions: silentRequest.azureCloudOptions,
          requestExtraQueryParameters: silentRequest.extraQueryParameters,
          account: silentRequest.account
        });
        const authClient = new HybridSpaAuthorizationCodeClient(clientConfig);
        this.logger.verbose("Auth code client created");
        const interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
        return await invokeAsync(interactionHandler.handleCodeResponseFromServer.bind(interactionHandler), PerformanceEvents.HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)({
          code: request.code,
          msgraph_host: request.msGraphHost,
          cloud_graph_host_name: request.cloudGraphHostName,
          cloud_instance_host_name: request.cloudInstanceHostName
        }, silentRequest, false);
      } catch (e) {
        if (e instanceof AuthError) {
          e.setCorrelationId(this.correlationId);
          serverTelemetryManager.cacheFailedRequest(e);
        }
        throw e;
      }
    }
    /**
     * Currently Unsupported
     */
    logout() {
      return Promise.reject(createBrowserAuthError(silentLogoutUnsupported));
    }
  };

  // node_modules/@azure/msal-browser/dist/utils/MsalFrameStatsUtils.mjs
  function collectInstanceStats(currentClientId, performanceEvent, logger) {
    const frameInstances = (
      // @ts-ignore
      window.msal?.clientIds || []
    );
    const msalInstanceCount = frameInstances.length;
    const sameClientIdInstanceCount = frameInstances.filter((i) => i === currentClientId).length;
    if (sameClientIdInstanceCount > 1) {
      logger.warning("There is already an instance of MSAL.js in the window with the same client id.");
    }
    performanceEvent.add({
      msalInstanceCount,
      sameClientIdInstanceCount
    });
  }

  // node_modules/@azure/msal-browser/dist/controllers/StandardController.mjs
  function preflightCheck2(initialized, performanceEvent, account2) {
    try {
      preflightCheck(initialized);
    } catch (e) {
      performanceEvent.end({ success: false }, e, account2);
      throw e;
    }
  }
  var StandardController = class _StandardController {
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param configuration Object for the MSAL PublicClientApplication instance
     */
    constructor(operatingContext) {
      this.operatingContext = operatingContext;
      this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
      this.config = operatingContext.getConfig();
      this.initialized = false;
      this.logger = this.operatingContext.getLogger();
      this.networkClient = this.config.system.networkClient;
      this.navigationClient = this.config.system.navigationClient;
      this.redirectResponse = /* @__PURE__ */ new Map();
      this.hybridAuthCodeResponses = /* @__PURE__ */ new Map();
      this.performanceClient = this.config.telemetry.client;
      this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient) : DEFAULT_CRYPTO_IMPLEMENTATION;
      this.eventHandler = new EventHandler(this.logger);
      this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, buildStaticAuthorityOptions(this.config.auth)) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger, this.performanceClient, this.eventHandler);
      const nativeCacheOptions = {
        cacheLocation: BrowserCacheLocation.MemoryStorage,
        cacheRetentionDays: 5,
        temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
        storeAuthStateInCookie: false,
        secureCookies: false,
        cacheMigrationEnabled: false,
        claimsBasedCachingEnabled: false
      };
      this.nativeInternalStorage = new BrowserCacheManager(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler);
      this.tokenCache = new TokenCache(this.config, this.browserStorage, this.logger, this.browserCrypto);
      this.activeSilentTokenRequests = /* @__PURE__ */ new Map();
      this.trackPageVisibility = this.trackPageVisibility.bind(this);
      this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    static async createController(operatingContext, request) {
      const controller = new _StandardController(operatingContext);
      await controller.initialize(request);
      return controller;
    }
    trackPageVisibility(correlationId) {
      if (!correlationId) {
        return;
      }
      this.logger.info("Perf: Visibility change detected");
      this.performanceClient.incrementFields({ visibilityChangeCount: 1 }, correlationId);
    }
    /**
     * Initializer function to perform async startup tasks such as connecting to WAM extension
     * @param request {?InitializeApplicationRequest} correlation id
     */
    async initialize(request, isBroker) {
      this.logger.trace("initialize called");
      if (this.initialized) {
        this.logger.info("initialize has already been called, exiting early.");
        return;
      }
      if (!this.isBrowserEnvironment) {
        this.logger.info("in non-browser environment, exiting early.");
        this.initialized = true;
        this.eventHandler.emitEvent(EventType.INITIALIZE_END);
        return;
      }
      const initCorrelationId = request?.correlationId || this.getRequestCorrelationId();
      const allowPlatformBroker = this.config.system.allowPlatformBroker;
      const initMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.InitializeClientApplication, initCorrelationId);
      this.eventHandler.emitEvent(EventType.INITIALIZE_START);
      if (!isBroker) {
        try {
          this.logMultipleInstances(initMeasurement);
        } catch {
        }
      }
      await invokeAsync(this.browserStorage.initialize.bind(this.browserStorage), PerformanceEvents.InitializeCache, this.logger, this.performanceClient, initCorrelationId)(initCorrelationId);
      if (allowPlatformBroker) {
        try {
          this.platformAuthProvider = await getPlatformAuthProvider(this.logger, this.performanceClient, initCorrelationId, this.config.system.nativeBrokerHandshakeTimeout);
        } catch (e) {
          this.logger.verbose(e);
        }
      }
      if (!this.config.cache.claimsBasedCachingEnabled) {
        this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims");
        invoke(this.browserStorage.clearTokensAndKeysWithClaims.bind(this.browserStorage), PerformanceEvents.ClearTokensAndKeysWithClaims, this.logger, this.performanceClient, initCorrelationId)(initCorrelationId);
      }
      this.config.system.asyncPopups && await this.preGeneratePkceCodes(initCorrelationId);
      this.initialized = true;
      this.eventHandler.emitEvent(EventType.INITIALIZE_END);
      initMeasurement.end({
        allowPlatformBroker,
        success: true
      });
    }
    // #region Redirect Flow
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns Token response or null. If the return value is null, then no auth redirect was detected.
     */
    async handleRedirectPromise(hash) {
      this.logger.verbose("handleRedirectPromise called");
      blockAPICallsBeforeInitialize(this.initialized);
      if (this.isBrowserEnvironment) {
        const redirectResponseKey = hash || "";
        let response = this.redirectResponse.get(redirectResponseKey);
        if (typeof response === "undefined") {
          response = this.handleRedirectPromiseInternal(hash);
          this.redirectResponse.set(redirectResponseKey, response);
          this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
        } else {
          this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
        }
        return response;
      }
      this.logger.verbose("handleRedirectPromise returns null, not browser environment");
      return null;
    }
    /**
     * The internal details of handleRedirectPromise. This is separated out to a helper to allow handleRedirectPromise to memoize requests
     * @param hash
     * @returns
     */
    async handleRedirectPromiseInternal(hash) {
      if (!this.browserStorage.isInteractionInProgress(true)) {
        this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
        return null;
      }
      const interactionType = this.browserStorage.getInteractionInProgress()?.type;
      if (interactionType === INTERACTION_TYPE.SIGNOUT) {
        this.logger.verbose("handleRedirectPromise removing interaction_in_progress flag and returning null after sign-out");
        this.browserStorage.setInteractionInProgress(false);
        return Promise.resolve(null);
      }
      const loggedInAccounts = this.getAllAccounts();
      const platformBrokerRequest = this.browserStorage.getCachedNativeRequest();
      const useNative = platformBrokerRequest && this.platformAuthProvider && !hash;
      let rootMeasurement;
      this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
      let redirectResponse;
      try {
        if (useNative && this.platformAuthProvider) {
          rootMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenRedirect, platformBrokerRequest?.correlationId || "");
          this.logger.trace("handleRedirectPromise - acquiring token from native platform");
          rootMeasurement.add({
            isPlatformBrokerRequest: true
          });
          const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.platformAuthProvider, platformBrokerRequest.accountId, this.nativeInternalStorage, platformBrokerRequest.correlationId);
          redirectResponse = invokeAsync(nativeClient.handleRedirectPromise.bind(nativeClient), PerformanceEvents.HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(this.performanceClient, rootMeasurement.event.correlationId);
        } else {
          const [standardRequest, codeVerifier] = this.browserStorage.getCachedRequest();
          const correlationId = standardRequest.correlationId;
          rootMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenRedirect, correlationId);
          this.logger.trace("handleRedirectPromise - acquiring token from web flow");
          const redirectClient = this.createRedirectClient(correlationId);
          redirectResponse = invokeAsync(redirectClient.handleRedirectPromise.bind(redirectClient), PerformanceEvents.HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(hash, standardRequest, codeVerifier, rootMeasurement);
        }
      } catch (e) {
        this.browserStorage.resetRequestCache();
        throw e;
      }
      return redirectResponse.then((result) => {
        if (result) {
          this.browserStorage.resetRequestCache();
          const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
          if (isLoggingIn) {
            this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
            this.logger.verbose("handleRedirectResponse returned result, login success");
          } else {
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
            this.logger.verbose("handleRedirectResponse returned result, acquire token success");
          }
          rootMeasurement.end({
            success: true
          }, void 0, result.account);
        } else {
          if (rootMeasurement.event.errorCode) {
            rootMeasurement.end({ success: false }, void 0);
          } else {
            rootMeasurement.discard();
          }
        }
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
        return result;
      }).catch((e) => {
        this.browserStorage.resetRequestCache();
        const eventError = e;
        if (loggedInAccounts.length > 0) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, eventError);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, eventError);
        }
        this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
        rootMeasurement.end({
          success: false
        }, eventError);
        throw e;
      });
    }
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    async acquireTokenRedirect(request) {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("acquireTokenRedirect called", correlationId);
      const atrMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPreRedirect, correlationId);
      atrMeasurement.add({
        scenarioId: request.scenarioId
      });
      const onRedirectNavigateCb = request.onRedirectNavigate;
      if (onRedirectNavigateCb) {
        request.onRedirectNavigate = (url) => {
          const navigate = typeof onRedirectNavigateCb === "function" ? onRedirectNavigateCb(url) : void 0;
          atrMeasurement.add({
            navigateCallbackResult: navigate !== false
          });
          atrMeasurement.event = atrMeasurement.end({ success: true }, void 0, request.account) || atrMeasurement.event;
          return navigate;
        };
      } else {
        const configOnRedirectNavigateCb = this.config.auth.onRedirectNavigate;
        this.config.auth.onRedirectNavigate = (url) => {
          const navigate = typeof configOnRedirectNavigateCb === "function" ? configOnRedirectNavigateCb(url) : void 0;
          atrMeasurement.add({
            navigateCallbackResult: navigate !== false
          });
          atrMeasurement.event = atrMeasurement.end({ success: true }, void 0, request.account) || atrMeasurement.event;
          return navigate;
        };
      }
      const isLoggedIn = this.getAllAccounts().length > 0;
      try {
        redirectPreflightCheck(this.initialized, this.config);
        this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNIN);
        if (isLoggedIn) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
        }
        let result;
        if (this.platformAuthProvider && this.canUsePlatformBroker(request)) {
          const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.platformAuthProvider, this.getNativeAccountId(request), this.nativeInternalStorage, correlationId);
          result = nativeClient.acquireTokenRedirect(request, atrMeasurement).catch((e) => {
            atrMeasurement.add({
              brokerErrorName: e.name,
              brokerErrorCode: e.errorCode
            });
            if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
              this.platformAuthProvider = void 0;
              const redirectClient = this.createRedirectClient(correlationId);
              return redirectClient.acquireToken(request);
            } else if (e instanceof InteractionRequiredAuthError) {
              this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              const redirectClient = this.createRedirectClient(correlationId);
              return redirectClient.acquireToken(request);
            }
            throw e;
          });
        } else {
          const redirectClient = this.createRedirectClient(correlationId);
          result = redirectClient.acquireToken(request);
        }
        return await result;
      } catch (e) {
        this.browserStorage.resetRequestCache();
        if (atrMeasurement.event.status === 2) {
          this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenRedirect, correlationId).end({ success: false }, e, request.account);
        } else {
          atrMeasurement.end({ success: false }, e, request.account);
        }
        if (isLoggedIn) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
        }
        throw e;
      }
    }
    // #endregion
    // #region Popup Flow
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    acquireTokenPopup(request) {
      const correlationId = this.getRequestCorrelationId(request);
      const atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, correlationId);
      atPopupMeasurement.add({
        scenarioId: request.scenarioId
      });
      try {
        this.logger.verbose("acquireTokenPopup called", correlationId);
        preflightCheck2(this.initialized, atPopupMeasurement, request.account);
        this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNIN);
      } catch (e) {
        return Promise.reject(e);
      }
      const loggedInAccounts = this.getAllAccounts();
      if (loggedInAccounts.length > 0) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
      } else {
        this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
      }
      let result;
      const pkce = this.getPreGeneratedPkceCodes(correlationId);
      if (this.canUsePlatformBroker(request)) {
        atPopupMeasurement.add({
          isPlatformBrokerRequest: true
        });
        result = this.acquireTokenNative({
          ...request,
          correlationId
        }, ApiId.acquireTokenPopup).then((response) => {
          atPopupMeasurement.end({
            success: true
          }, void 0, response.account);
          return response;
        }).catch((e) => {
          atPopupMeasurement.add({
            brokerErrorName: e.name,
            brokerErrorCode: e.errorCode
          });
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.platformAuthProvider = void 0;
            const popupClient = this.createPopupClient(correlationId);
            return popupClient.acquireToken(request, pkce);
          } else if (e instanceof InteractionRequiredAuthError) {
            this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
            const popupClient = this.createPopupClient(correlationId);
            return popupClient.acquireToken(request, pkce);
          }
          throw e;
        });
      } else {
        const popupClient = this.createPopupClient(correlationId);
        result = popupClient.acquireToken(request, pkce);
      }
      return result.then((result2) => {
        const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
        if (isLoggingIn) {
          this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result2);
        } else {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result2);
        }
        atPopupMeasurement.end({
          success: true,
          accessTokenSize: result2.accessToken.length,
          idTokenSize: result2.idToken.length
        }, void 0, result2.account);
        return result2;
      }).catch((e) => {
        if (loggedInAccounts.length > 0) {
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e);
        } else {
          this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e);
        }
        atPopupMeasurement.end({
          success: false
        }, e, request.account);
        return Promise.reject(e);
      }).finally(async () => {
        this.browserStorage.setInteractionInProgress(false);
        if (this.config.system.asyncPopups) {
          await this.preGeneratePkceCodes(correlationId);
        }
      });
    }
    trackPageVisibilityWithMeasurement() {
      const measurement = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      if (!measurement) {
        return;
      }
      this.logger.info("Perf: Visibility change detected in ", measurement.event.name);
      measurement.increment({
        visibilityChangeCount: 1
      });
    }
    // #endregion
    // #region Silent Flow
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param request {@link SsoSilentRequest}
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    async ssoSilent(request) {
      const correlationId = this.getRequestCorrelationId(request);
      const validRequest = {
        ...request,
        // will be PromptValue.NONE or PromptValue.NO_SESSION
        prompt: request.prompt,
        correlationId
      };
      this.ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, correlationId);
      this.ssoSilentMeasurement?.add({
        scenarioId: request.scenarioId
      });
      preflightCheck2(this.initialized, this.ssoSilentMeasurement, request.account);
      this.ssoSilentMeasurement?.increment({
        visibilityChangeCount: 0
      });
      document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      this.logger.verbose("ssoSilent called", correlationId);
      this.eventHandler.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, validRequest);
      let result;
      if (this.canUsePlatformBroker(validRequest)) {
        this.ssoSilentMeasurement?.add({
          isPlatformBrokerRequest: true
        });
        result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch((e) => {
          this.ssoSilentMeasurement?.add({
            brokerErrorName: e.name,
            brokerErrorCode: e.errorCode
          });
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.platformAuthProvider = void 0;
            const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
            return silentIframeClient.acquireToken(validRequest);
          }
          throw e;
        });
      } else {
        const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
        result = silentIframeClient.acquireToken(validRequest);
      }
      return result.then((response) => {
        this.eventHandler.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, response);
        this.ssoSilentMeasurement?.end({
          success: true,
          accessTokenSize: response.accessToken.length,
          idTokenSize: response.idToken.length
        }, void 0, response.account);
        return response;
      }).catch((e) => {
        this.eventHandler.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e);
        this.ssoSilentMeasurement?.end({
          success: false
        }, e, request.account);
        throw e;
      }).finally(() => {
        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      });
    }
    /**
     * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
     * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
     * This API is not indended for normal authorization code acquisition and redemption.
     *
     * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
     *
     * @param request {@link AuthorizationCodeRequest}
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    async acquireTokenByCode(request) {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.trace("acquireTokenByCode called", correlationId);
      const atbcMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCode, correlationId);
      preflightCheck2(this.initialized, atbcMeasurement);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_START, InteractionType.Silent, request);
      atbcMeasurement.add({ scenarioId: request.scenarioId });
      try {
        if (request.code && request.nativeAccountId) {
          throw createBrowserAuthError(spaCodeAndNativeAccountIdPresent);
        } else if (request.code) {
          const hybridAuthCode = request.code;
          let response = this.hybridAuthCodeResponses.get(hybridAuthCode);
          if (!response) {
            this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
            response = this.acquireTokenByCodeAsync({
              ...request,
              correlationId
            }).then((result) => {
              this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, InteractionType.Silent, result);
              this.hybridAuthCodeResponses.delete(hybridAuthCode);
              atbcMeasurement.end({
                success: true,
                accessTokenSize: result.accessToken.length,
                idTokenSize: result.idToken.length
              }, void 0, result.account);
              return result;
            }).catch((error) => {
              this.hybridAuthCodeResponses.delete(hybridAuthCode);
              this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, error);
              atbcMeasurement.end({
                success: false
              }, error);
              throw error;
            });
            this.hybridAuthCodeResponses.set(hybridAuthCode, response);
          } else {
            this.logger.verbose("Existing acquireTokenByCode request found", correlationId);
            atbcMeasurement.discard();
          }
          return await response;
        } else if (request.nativeAccountId) {
          if (this.canUsePlatformBroker(request, request.nativeAccountId)) {
            atbcMeasurement.add({
              isPlatformBrokerRequest: true
            });
            const result = await this.acquireTokenNative({
              ...request,
              correlationId
            }, ApiId.acquireTokenByCode, request.nativeAccountId).catch((e) => {
              if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
                this.platformAuthProvider = void 0;
              }
              atbcMeasurement.add({
                brokerErrorName: e.name,
                brokerErrorCode: e.errorCode
              });
              throw e;
            });
            atbcMeasurement.end({
              success: true
            }, void 0, result.account);
            return result;
          } else {
            throw createBrowserAuthError(unableToAcquireTokenFromNativePlatform);
          }
        } else {
          throw createBrowserAuthError(authCodeOrNativeAccountIdRequired);
        }
      } catch (e) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, e);
        atbcMeasurement.end({
          success: false
        }, e);
        throw e;
      }
    }
    /**
     * Creates a SilentAuthCodeClient to redeem an authorization code.
     * @param request
     * @returns Result of the operation to redeem the authorization code
     */
    async acquireTokenByCodeAsync(request) {
      this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
      this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCodeAsync, request.correlationId);
      this.acquireTokenByCodeAsyncMeasurement?.increment({
        visibilityChangeCount: 0
      });
      document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      const silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
      const silentTokenResult = await silentAuthCodeClient.acquireToken(request).then((response) => {
        this.acquireTokenByCodeAsyncMeasurement?.end({
          success: true,
          fromCache: response.fromCache
        });
        return response;
      }).catch((tokenRenewalError) => {
        this.acquireTokenByCodeAsyncMeasurement?.end({
          success: false
        }, tokenRenewalError);
        throw tokenRenewalError;
      }).finally(() => {
        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
      });
      return silentTokenResult;
    }
    /**
     * Attempt to acquire an access token from the cache
     * @param silentCacheClient SilentCacheClient
     * @param commonRequest CommonSilentFlowRequest
     * @param silentRequest SilentRequest
     * @returns A promise that, when resolved, returns the access token
     */
    async acquireTokenFromCache(commonRequest, cacheLookupPolicy) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenFromCache, commonRequest.correlationId);
      switch (cacheLookupPolicy) {
        case CacheLookupPolicy.Default:
        case CacheLookupPolicy.AccessToken:
        case CacheLookupPolicy.AccessTokenAndRefreshToken:
          const silentCacheClient = this.createSilentCacheClient(commonRequest.correlationId);
          return invokeAsync(silentCacheClient.acquireToken.bind(silentCacheClient), PerformanceEvents.SilentCacheClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
        default:
          throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
      }
    }
    /**
     * Attempt to acquire an access token via a refresh token
     * @param commonRequest CommonSilentFlowRequest
     * @param cacheLookupPolicy CacheLookupPolicy
     * @returns A promise that, when resolved, returns the access token
     */
    async acquireTokenByRefreshToken(commonRequest, cacheLookupPolicy) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenByRefreshToken, commonRequest.correlationId);
      switch (cacheLookupPolicy) {
        case CacheLookupPolicy.Default:
        case CacheLookupPolicy.AccessTokenAndRefreshToken:
        case CacheLookupPolicy.RefreshToken:
        case CacheLookupPolicy.RefreshTokenAndNetwork:
          const silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
          return invokeAsync(silentRefreshClient.acquireToken.bind(silentRefreshClient), PerformanceEvents.SilentRefreshClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
        default:
          throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
      }
    }
    /**
     * Attempt to acquire an access token via an iframe
     * @param request CommonSilentFlowRequest
     * @returns A promise that, when resolved, returns the access token
     */
    async acquireTokenBySilentIframe(request) {
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenBySilentIframe, request.correlationId);
      const silentIframeClient = this.createSilentIframeClient(request.correlationId);
      return invokeAsync(silentIframeClient.acquireToken.bind(silentIframeClient), PerformanceEvents.SilentIframeClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(request);
    }
    // #endregion
    // #region Logout
    /**
     * Deprecated logout function. Use logoutRedirect or logoutPopup instead
     * @param logoutRequest
     * @deprecated
     */
    async logout(logoutRequest) {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
      return this.logoutRedirect({
        correlationId,
        ...logoutRequest
      });
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */
    async logoutRedirect(logoutRequest) {
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      redirectPreflightCheck(this.initialized, this.config);
      this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
      const redirectClient = this.createRedirectClient(correlationId);
      return redirectClient.logout(logoutRequest);
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */
    logoutPopup(logoutRequest) {
      try {
        const correlationId = this.getRequestCorrelationId(logoutRequest);
        preflightCheck(this.initialized);
        this.browserStorage.setInteractionInProgress(true, INTERACTION_TYPE.SIGNOUT);
        const popupClient = this.createPopupClient(correlationId);
        return popupClient.logout(logoutRequest).finally(() => {
          this.browserStorage.setInteractionInProgress(false);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
    /**
     * Creates a cache interaction client to clear broswer cache.
     * @param logoutRequest
     */
    async clearCache(logoutRequest) {
      if (!this.isBrowserEnvironment) {
        this.logger.info("in non-browser environment, returning early.");
        return;
      }
      const correlationId = this.getRequestCorrelationId(logoutRequest);
      const cacheClient = this.createSilentCacheClient(correlationId);
      return cacheClient.logout(logoutRequest);
    }
    // #endregion
    // #region Account APIs
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */
    getAllAccounts(accountFilter) {
      const correlationId = this.getRequestCorrelationId();
      return getAllAccounts(this.logger, this.browserStorage, this.isBrowserEnvironment, correlationId, accountFilter);
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */
    getAccount(accountFilter) {
      const correlationId = this.getRequestCorrelationId();
      return getAccount(accountFilter, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param username
     * @returns The account object stored in MSAL
     */
    getAccountByUsername(username) {
      const correlationId = this.getRequestCorrelationId();
      return getAccountByUsername(username, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     */
    getAccountByHomeId(homeAccountId) {
      const correlationId = this.getRequestCorrelationId();
      return getAccountByHomeId(homeAccountId, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     */
    getAccountByLocalId(localAccountId) {
      const correlationId = this.getRequestCorrelationId();
      return getAccountByLocalId(localAccountId, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */
    setActiveAccount(account2) {
      const correlationId = this.getRequestCorrelationId();
      setActiveAccount(account2, this.browserStorage, correlationId);
    }
    /**
     * Gets the currently active account
     */
    getActiveAccount() {
      const correlationId = this.getRequestCorrelationId();
      return getActiveAccount(this.browserStorage, correlationId);
    }
    // #endregion
    /**
     * Hydrates the cache with the tokens from an AuthenticationResult
     * @param result
     * @param request
     * @returns
     */
    async hydrateCache(result, request) {
      this.logger.verbose("hydrateCache called");
      const accountEntity = AccountEntity.createFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
      await this.browserStorage.setAccount(accountEntity, result.correlationId);
      if (result.fromNativeBroker) {
        this.logger.verbose("Response was from native broker, storing in-memory");
        return this.nativeInternalStorage.hydrateCache(result, request);
      } else {
        return this.browserStorage.hydrateCache(result, request);
      }
    }
    // #region Helpers
    /**
     * Acquire a token from native device (e.g. WAM)
     * @param request
     */
    async acquireTokenNative(request, apiId, accountId, cacheLookupPolicy) {
      this.logger.trace("acquireTokenNative called");
      if (!this.platformAuthProvider) {
        throw createBrowserAuthError(nativeConnectionNotEstablished);
      }
      const nativeClient = new PlatformAuthInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.platformAuthProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
      return nativeClient.acquireToken(request, cacheLookupPolicy);
    }
    /**
     * Returns boolean indicating if this request can use the platform broker
     * @param request
     */
    canUsePlatformBroker(request, accountId) {
      this.logger.trace("canUsePlatformBroker called");
      if (!this.platformAuthProvider) {
        this.logger.trace("canUsePlatformBroker: platform broker unavilable, returning false");
        return false;
      }
      if (!isPlatformAuthAllowed(this.config, this.logger, this.platformAuthProvider, request.authenticationScheme)) {
        this.logger.trace("canUsePlatformBroker: isBrokerAvailable returned false, returning false");
        return false;
      }
      if (request.prompt) {
        switch (request.prompt) {
          case PromptValue.NONE:
          case PromptValue.CONSENT:
          case PromptValue.LOGIN:
            this.logger.trace("canUsePlatformBroker: prompt is compatible with platform broker flow");
            break;
          default:
            this.logger.trace(`canUsePlatformBroker: prompt = ${request.prompt} is not compatible with platform broker flow, returning false`);
            return false;
        }
      }
      if (!accountId && !this.getNativeAccountId(request)) {
        this.logger.trace("canUsePlatformBroker: nativeAccountId is not available, returning false");
        return false;
      }
      return true;
    }
    /**
     * Get the native accountId from the account
     * @param request
     * @returns
     */
    getNativeAccountId(request) {
      const account2 = request.account || this.getAccount({
        loginHint: request.loginHint,
        sid: request.sid
      }) || this.getActiveAccount();
      return account2 && account2.nativeAccountId || "";
    }
    /**
     * Returns new instance of the Popup Interaction Client
     * @param correlationId
     */
    createPopupClient(correlationId) {
      return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.platformAuthProvider, correlationId);
    }
    /**
     * Returns new instance of the Redirect Interaction Client
     * @param correlationId
     */
    createRedirectClient(correlationId) {
      return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.platformAuthProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Iframe Interaction Client
     * @param correlationId
     */
    createSilentIframeClient(correlationId) {
      return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.platformAuthProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Cache Interaction Client
     */
    createSilentCacheClient(correlationId) {
      return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.platformAuthProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Refresh Interaction Client
     */
    createSilentRefreshClient(correlationId) {
      return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.platformAuthProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent AuthCode Interaction Client
     */
    createSilentAuthCodeClient(correlationId) {
      return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, this.platformAuthProvider, correlationId);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     */
    addEventCallback(callback, eventTypes) {
      return this.eventHandler.addEventCallback(callback, eventTypes);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */
    removeEventCallback(callbackId) {
      this.eventHandler.removeEventCallback(callbackId);
    }
    /**
     * Registers a callback to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */
    addPerformanceCallback(callback) {
      blockNonBrowserEnvironment();
      return this.performanceClient.addPerformanceCallback(callback);
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */
    removePerformanceCallback(callbackId) {
      return this.performanceClient.removePerformanceCallback(callbackId);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     * @deprecated These events will be raised by default and this method will be removed in a future major version.
     */
    enableAccountStorageEvents() {
      if (this.config.cache.cacheLocation !== BrowserCacheLocation.LocalStorage) {
        this.logger.info("Account storage events are only available when cacheLocation is set to localStorage");
        return;
      }
      this.eventHandler.subscribeCrossTab();
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     * @deprecated These events will be raised by default and this method will be removed in a future major version.
     */
    disableAccountStorageEvents() {
      if (this.config.cache.cacheLocation !== BrowserCacheLocation.LocalStorage) {
        this.logger.info("Account storage events are only available when cacheLocation is set to localStorage");
        return;
      }
      this.eventHandler.unsubscribeCrossTab();
    }
    /**
     * Gets the token cache for the application.
     */
    getTokenCache() {
      return this.tokenCache;
    }
    /**
     * Returns the logger instance
     */
    getLogger() {
      return this.logger;
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */
    setLogger(logger) {
      this.logger = logger;
    }
    /**
     * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
     * @param sku
     * @param version
     */
    initializeWrapperLibrary(sku, version3) {
      this.browserStorage.setWrapperMetadata(sku, version3);
    }
    /**
     * Sets navigation client
     * @param navigationClient
     */
    setNavigationClient(navigationClient) {
      this.navigationClient = navigationClient;
    }
    /**
     * Returns the configuration object
     */
    getConfiguration() {
      return this.config;
    }
    /**
     * Returns the performance client
     */
    getPerformanceClient() {
      return this.performanceClient;
    }
    /**
     * Returns the browser env indicator
     */
    isBrowserEnv() {
      return this.isBrowserEnvironment;
    }
    /**
     * Generates a correlation id for a request if none is provided.
     *
     * @protected
     * @param {?Partial<BaseAuthRequest>} [request]
     * @returns {string}
     */
    getRequestCorrelationId(request) {
      if (request?.correlationId) {
        return request.correlationId;
      }
      if (this.isBrowserEnvironment) {
        return createNewGuid();
      }
      return Constants.EMPTY_STRING;
    }
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    async loginRedirect(request) {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("loginRedirect called", correlationId);
      return this.acquireTokenRedirect({
        correlationId,
        ...request || DEFAULT_REQUEST
      });
    }
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    loginPopup(request) {
      const correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("loginPopup called", correlationId);
      return this.acquireTokenPopup({
        correlationId,
        ...request || DEFAULT_REQUEST
      });
    }
    /**
     * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    async acquireTokenSilent(request) {
      const correlationId = this.getRequestCorrelationId(request);
      const atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, correlationId);
      atsMeasurement.add({
        cacheLookupPolicy: request.cacheLookupPolicy,
        scenarioId: request.scenarioId
      });
      preflightCheck2(this.initialized, atsMeasurement, request.account);
      this.logger.verbose("acquireTokenSilent called", correlationId);
      const account2 = request.account || this.getActiveAccount();
      if (!account2) {
        throw createBrowserAuthError(noAccountError);
      }
      return this.acquireTokenSilentDeduped(request, account2, correlationId).then((result) => {
        atsMeasurement.end({
          success: true,
          fromCache: result.fromCache,
          accessTokenSize: result.accessToken.length,
          idTokenSize: result.idToken.length
        }, void 0, result.account);
        return {
          ...result,
          state: request.state,
          correlationId
          // Ensures PWB scenarios can correctly match request to response
        };
      }).catch((error) => {
        if (error instanceof AuthError) {
          error.setCorrelationId(correlationId);
        }
        atsMeasurement.end({
          success: false
        }, error, account2);
        throw error;
      });
    }
    /**
     * Checks if identical request is already in flight and returns reference to the existing promise or fires off a new one if this is the first
     * @param request
     * @param account
     * @param correlationId
     * @returns
     */
    async acquireTokenSilentDeduped(request, account2, correlationId) {
      const thumbprint = getRequestThumbprint(this.config.auth.clientId, {
        ...request,
        authority: request.authority || this.config.auth.authority,
        correlationId
      }, account2.homeAccountId);
      const silentRequestKey = JSON.stringify(thumbprint);
      const inProgressRequest = this.activeSilentTokenRequests.get(silentRequestKey);
      if (typeof inProgressRequest === "undefined") {
        this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
        this.performanceClient.addFields({ deduped: false }, correlationId);
        const activeRequest = invokeAsync(this.acquireTokenSilentAsync.bind(this), PerformanceEvents.AcquireTokenSilentAsync, this.logger, this.performanceClient, correlationId)({
          ...request,
          correlationId
        }, account2);
        this.activeSilentTokenRequests.set(silentRequestKey, activeRequest);
        return activeRequest.finally(() => {
          this.activeSilentTokenRequests.delete(silentRequestKey);
        });
      } else {
        this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
        this.performanceClient.addFields({ deduped: true }, correlationId);
        return inProgressRequest;
      }
    }
    /**
     * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
     * @param {@link (SilentRequest:type)}
     * @param {@link (AccountInfo:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse}
     */
    async acquireTokenSilentAsync(request, account2) {
      const trackPageVisibility = () => this.trackPageVisibility(request.correlationId);
      this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
      if (request.correlationId) {
        this.performanceClient.incrementFields({ visibilityChangeCount: 0 }, request.correlationId);
      }
      document.addEventListener("visibilitychange", trackPageVisibility);
      const silentRequest = await invokeAsync(initializeSilentRequest, PerformanceEvents.InitializeSilentRequest, this.logger, this.performanceClient, request.correlationId)(request, account2, this.config, this.performanceClient, this.logger);
      const cacheLookupPolicy = request.cacheLookupPolicy || CacheLookupPolicy.Default;
      const result = this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy).catch(async (refreshTokenError) => {
        const shouldTryToResolveSilently = checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy);
        if (shouldTryToResolveSilently) {
          if (!this.activeIframeRequest) {
            let _resolve;
            this.activeIframeRequest = [
              new Promise((resolve) => {
                _resolve = resolve;
              }),
              silentRequest.correlationId
            ];
            this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", silentRequest.correlationId);
            return invokeAsync(this.acquireTokenBySilentIframe.bind(this), PerformanceEvents.AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest).then((iframeResult) => {
              _resolve(true);
              return iframeResult;
            }).catch((e) => {
              _resolve(false);
              throw e;
            }).finally(() => {
              this.activeIframeRequest = void 0;
            });
          } else if (cacheLookupPolicy !== CacheLookupPolicy.Skip) {
            const [activePromise, activeCorrelationId] = this.activeIframeRequest;
            this.logger.verbose(`Iframe request is already in progress, awaiting resolution for request with correlationId: ${activeCorrelationId}`, silentRequest.correlationId);
            const awaitConcurrentIframeMeasure = this.performanceClient.startMeasurement(PerformanceEvents.AwaitConcurrentIframe, silentRequest.correlationId);
            awaitConcurrentIframeMeasure.add({
              awaitIframeCorrelationId: activeCorrelationId
            });
            const activePromiseResult = await activePromise;
            awaitConcurrentIframeMeasure.end({
              success: activePromiseResult
            });
            if (activePromiseResult) {
              this.logger.verbose(`Parallel iframe request with correlationId: ${activeCorrelationId} succeeded. Retrying cache and/or RT redemption`, silentRequest.correlationId);
              return this.acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy);
            } else {
              this.logger.info(`Iframe request with correlationId: ${activeCorrelationId} failed. Interaction is required.`);
              throw refreshTokenError;
            }
          } else {
            this.logger.warning("Another iframe request is currently in progress and CacheLookupPolicy is set to Skip. This may result in degraded performance and/or reliability for both calls. Please consider changing the CacheLookupPolicy to take advantage of request queuing and token cache.", silentRequest.correlationId);
            return invokeAsync(this.acquireTokenBySilentIframe.bind(this), PerformanceEvents.AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
          }
        } else {
          throw refreshTokenError;
        }
      });
      return result.then((response) => {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, response);
        this.performanceClient.addFields({
          fromCache: response.fromCache
        }, request.correlationId);
        return response;
      }).catch((tokenRenewalError) => {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError);
        throw tokenRenewalError;
      }).finally(() => {
        document.removeEventListener("visibilitychange", trackPageVisibility);
      });
    }
    /**
     * AcquireTokenSilent without the iframe fallback. This is used to enable the correct fallbacks in cases where there's a potential for multiple silent requests to be made in parallel and prevent those requests from making concurrent iframe requests.
     * @param silentRequest
     * @param cacheLookupPolicy
     * @returns
     */
    async acquireTokenSilentNoIframe(silentRequest, cacheLookupPolicy) {
      if (isPlatformAuthAllowed(this.config, this.logger, this.platformAuthProvider, silentRequest.authenticationScheme) && silentRequest.account.nativeAccountId) {
        this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
        this.performanceClient.addFields({ isPlatformBrokerRequest: true }, silentRequest.correlationId);
        return this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow, silentRequest.account.nativeAccountId, cacheLookupPolicy).catch(async (e) => {
          this.performanceClient.addFields({
            brokerErrorName: e.name,
            brokerErrorCode: e.errorCode
          }, silentRequest.correlationId);
          if (e instanceof NativeAuthError && isFatalNativeAuthError(e)) {
            this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
            this.platformAuthProvider = void 0;
            throw createClientAuthError(ClientAuthErrorCodes_exports.tokenRefreshRequired);
          }
          throw e;
        });
      } else {
        this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
        if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
          this.logger.verbose("acquireTokenSilent - cache lookup policy set to AccessToken, attempting to acquire token from local cache");
        }
        return invokeAsync(this.acquireTokenFromCache.bind(this), PerformanceEvents.AcquireTokenFromCache, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy).catch((cacheError) => {
          if (cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
            throw cacheError;
          }
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, silentRequest);
          return invokeAsync(this.acquireTokenByRefreshToken.bind(this), PerformanceEvents.AcquireTokenByRefreshToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy);
        });
      }
    }
    /**
     * Pre-generates PKCE codes and stores it in local variable
     * @param correlationId
     */
    async preGeneratePkceCodes(correlationId) {
      this.logger.verbose("Generating new PKCE codes");
      this.pkceCode = await invokeAsync(generatePkceCodes, PerformanceEvents.GeneratePkceCodes, this.logger, this.performanceClient, correlationId)(this.performanceClient, this.logger, correlationId);
      return Promise.resolve();
    }
    /**
     * Provides pre-generated PKCE codes, if any
     * @param correlationId
     */
    getPreGeneratedPkceCodes(correlationId) {
      this.logger.verbose("Attempting to pick up pre-generated PKCE codes");
      const res = this.pkceCode ? { ...this.pkceCode } : void 0;
      this.pkceCode = void 0;
      this.logger.verbose(`${res ? "Found" : "Did not find"} pre-generated PKCE codes`);
      this.performanceClient.addFields({ usePreGeneratedPkce: !!res }, correlationId);
      return res;
    }
    logMultipleInstances(performanceEvent) {
      const clientId = this.config.auth.clientId;
      if (!window)
        return;
      window.msal = window.msal || {};
      window.msal.clientIds = window.msal.clientIds || [];
      const clientIds = window.msal.clientIds;
      if (clientIds.length > 0) {
        this.logger.verbose("There is already an instance of MSAL.js in the window.");
      }
      window.msal.clientIds.push(clientId);
      collectInstanceStats(clientId, performanceEvent, this.logger);
    }
  };
  function checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, cacheLookupPolicy) {
    const noInteractionRequired = !(refreshTokenError instanceof InteractionRequiredAuthError && // For refresh token errors, bad_token does not always require interaction (silently resolvable)
    refreshTokenError.subError !== InteractionRequiredAuthErrorCodes_exports.badToken);
    const refreshTokenRefreshRequired = refreshTokenError.errorCode === BrowserConstants.INVALID_GRANT_ERROR || refreshTokenError.errorCode === ClientAuthErrorCodes_exports.tokenRefreshRequired;
    const isSilentlyResolvable = noInteractionRequired && refreshTokenRefreshRequired || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.noTokensFound || refreshTokenError.errorCode === InteractionRequiredAuthErrorCodes_exports.refreshTokenExpired;
    const tryIframeRenewal = iFrameRenewalPolicies.includes(cacheLookupPolicy);
    return isSilentlyResolvable && tryIframeRenewal;
  }

  // node_modules/@azure/msal-browser/dist/naa/BridgeError.mjs
  function isBridgeError(error) {
    return error.status !== void 0;
  }

  // node_modules/@azure/msal-browser/dist/naa/mapping/NestedAppAuthAdapter.mjs
  var NestedAppAuthAdapter = class {
    constructor(clientId, clientCapabilities, crypto, logger) {
      this.clientId = clientId;
      this.clientCapabilities = clientCapabilities;
      this.crypto = crypto;
      this.logger = logger;
    }
    toNaaTokenRequest(request) {
      let extraParams;
      if (request.extraQueryParameters === void 0) {
        extraParams = /* @__PURE__ */ new Map();
      } else {
        extraParams = new Map(Object.entries(request.extraQueryParameters));
      }
      const correlationId = request.correlationId || this.crypto.createNewGuid();
      const claims = RequestParameterBuilder_exports.addClientCapabilitiesToClaims(request.claims, this.clientCapabilities);
      const scopes = request.scopes || OIDC_DEFAULT_SCOPES;
      const tokenRequest = {
        platformBrokerId: request.account?.homeAccountId,
        clientId: this.clientId,
        authority: request.authority,
        scope: scopes.join(" "),
        correlationId,
        claims: !StringUtils.isEmptyObj(claims) ? claims : void 0,
        state: request.state,
        authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER,
        extraParameters: extraParams
      };
      return tokenRequest;
    }
    fromNaaTokenResponse(request, response, reqTimestamp) {
      if (!response.token.id_token || !response.token.access_token) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.nullOrEmptyToken);
      }
      const expiresOn = TimeUtils_exports.toDateFromSeconds(reqTimestamp + (response.token.expires_in || 0));
      const idTokenClaims = AuthToken_exports.extractTokenClaims(response.token.id_token, this.crypto.base64Decode);
      const account2 = this.fromNaaAccountInfo(response.account, response.token.id_token, idTokenClaims);
      const scopes = response.token.scope || request.scope;
      const authenticationResult = {
        authority: response.token.authority || account2.environment,
        uniqueId: account2.localAccountId,
        tenantId: account2.tenantId,
        scopes: scopes.split(" "),
        account: account2,
        idToken: response.token.id_token,
        idTokenClaims,
        accessToken: response.token.access_token,
        fromCache: false,
        expiresOn,
        tokenType: request.authenticationScheme || AuthenticationScheme.BEARER,
        correlationId: request.correlationId,
        extExpiresOn: expiresOn,
        state: request.state
      };
      return authenticationResult;
    }
    /*
     *  export type AccountInfo = {
     *     homeAccountId: string;
     *     environment: string;
     *     tenantId: string;
     *     username: string;
     *     localAccountId: string;
     *     name?: string;
     *     idToken?: string;
     *     idTokenClaims?: TokenClaims & {
     *         [key: string]:
     *             | string
     *             | number
     *             | string[]
     *             | object
     *             | undefined
     *             | unknown;
     *     };
     *     nativeAccountId?: string;
     *     authorityType?: string;
     * };
     */
    fromNaaAccountInfo(fromAccount, idToken, idTokenClaims) {
      const effectiveIdTokenClaims = idTokenClaims || fromAccount.idTokenClaims;
      const localAccountId = fromAccount.localAccountId || effectiveIdTokenClaims?.oid || effectiveIdTokenClaims?.sub || "";
      const tenantId = fromAccount.tenantId || effectiveIdTokenClaims?.tid || "";
      const homeAccountId = fromAccount.homeAccountId || `${localAccountId}.${tenantId}`;
      const username = fromAccount.username || effectiveIdTokenClaims?.preferred_username || "";
      const name3 = fromAccount.name || effectiveIdTokenClaims?.name;
      const loginHint = fromAccount.loginHint || effectiveIdTokenClaims?.login_hint;
      const tenantProfiles = /* @__PURE__ */ new Map();
      const tenantProfile = buildTenantProfile(homeAccountId, localAccountId, tenantId, effectiveIdTokenClaims);
      tenantProfiles.set(tenantId, tenantProfile);
      const account2 = {
        homeAccountId,
        environment: fromAccount.environment,
        tenantId,
        username,
        localAccountId,
        name: name3,
        loginHint,
        idToken,
        idTokenClaims: effectiveIdTokenClaims,
        tenantProfiles
      };
      return account2;
    }
    /**
     *
     * @param error BridgeError
     * @returns AuthError, ClientAuthError, ClientConfigurationError, ServerError, InteractionRequiredError
     */
    fromBridgeError(error) {
      if (isBridgeError(error)) {
        switch (error.status) {
          case BridgeStatusCode.UserCancel:
            return new ClientAuthError(ClientAuthErrorCodes_exports.userCanceled);
          case BridgeStatusCode.NoNetwork:
            return new ClientAuthError(ClientAuthErrorCodes_exports.noNetworkConnectivity);
          case BridgeStatusCode.AccountUnavailable:
            return new ClientAuthError(ClientAuthErrorCodes_exports.noAccountFound);
          case BridgeStatusCode.Disabled:
            return new ClientAuthError(ClientAuthErrorCodes_exports.nestedAppAuthBridgeDisabled);
          case BridgeStatusCode.NestedAppAuthUnavailable:
            return new ClientAuthError(error.code || ClientAuthErrorCodes_exports.nestedAppAuthBridgeDisabled, error.description);
          case BridgeStatusCode.TransientError:
          case BridgeStatusCode.PersistentError:
            return new ServerError(error.code, error.description);
          case BridgeStatusCode.UserInteractionRequired:
            return new InteractionRequiredAuthError(error.code, error.description);
          default:
            return new AuthError(error.code, error.description);
        }
      } else {
        return new AuthError("unknown_error", "An unknown error occurred");
      }
    }
    /**
     * Returns an AuthenticationResult from the given cache items
     *
     * @param account
     * @param idToken
     * @param accessToken
     * @param reqTimestamp
     * @returns
     */
    toAuthenticationResultFromCache(account2, idToken, accessToken, request, correlationId) {
      if (!idToken || !accessToken) {
        throw createClientAuthError(ClientAuthErrorCodes_exports.nullOrEmptyToken);
      }
      const idTokenClaims = AuthToken_exports.extractTokenClaims(idToken.secret, this.crypto.base64Decode);
      const scopes = accessToken.target || request.scopes.join(" ");
      const authenticationResult = {
        authority: accessToken.environment || account2.environment,
        uniqueId: account2.localAccountId,
        tenantId: account2.tenantId,
        scopes: scopes.split(" "),
        account: account2,
        idToken: idToken.secret,
        idTokenClaims: idTokenClaims || {},
        accessToken: accessToken.secret,
        fromCache: true,
        expiresOn: TimeUtils_exports.toDateFromSeconds(accessToken.expiresOn),
        extExpiresOn: TimeUtils_exports.toDateFromSeconds(accessToken.extendedExpiresOn),
        tokenType: request.authenticationScheme || AuthenticationScheme.BEARER,
        correlationId,
        state: request.state
      };
      return authenticationResult;
    }
  };

  // node_modules/@azure/msal-browser/dist/error/NestedAppAuthError.mjs
  var NestedAppAuthErrorMessage = {
    unsupportedMethod: {
      code: "unsupported_method",
      desc: "This method is not supported in nested app environment."
    }
  };
  var NestedAppAuthError = class _NestedAppAuthError extends AuthError {
    constructor(errorCode, errorMessage) {
      super(errorCode, errorMessage);
      Object.setPrototypeOf(this, _NestedAppAuthError.prototype);
      this.name = "NestedAppAuthError";
    }
    static createUnsupportedError() {
      return new _NestedAppAuthError(NestedAppAuthErrorMessage.unsupportedMethod.code, NestedAppAuthErrorMessage.unsupportedMethod.desc);
    }
  };

  // node_modules/@azure/msal-browser/dist/controllers/NestedAppAuthController.mjs
  var NestedAppAuthController = class _NestedAppAuthController {
    constructor(operatingContext) {
      this.operatingContext = operatingContext;
      const proxy = this.operatingContext.getBridgeProxy();
      if (proxy !== void 0) {
        this.bridgeProxy = proxy;
      } else {
        throw new Error("unexpected: bridgeProxy is undefined");
      }
      this.config = operatingContext.getConfig();
      this.logger = this.operatingContext.getLogger();
      this.performanceClient = this.config.telemetry.client;
      this.browserCrypto = operatingContext.isBrowserEnvironment() ? new CryptoOps(this.logger, this.performanceClient, true) : DEFAULT_CRYPTO_IMPLEMENTATION;
      this.eventHandler = new EventHandler(this.logger);
      this.browserStorage = this.operatingContext.isBrowserEnvironment() ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, buildStaticAuthorityOptions(this.config.auth)) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger, this.performanceClient, this.eventHandler);
      this.nestedAppAuthAdapter = new NestedAppAuthAdapter(this.config.auth.clientId, this.config.auth.clientCapabilities, this.browserCrypto, this.logger);
      const accountContext = this.bridgeProxy.getAccountContext();
      this.currentAccountContext = accountContext ? accountContext : null;
    }
    /**
     * Factory function to create a new instance of NestedAppAuthController
     * @param operatingContext
     * @returns Promise<IController>
     */
    static async createController(operatingContext) {
      const controller = new _NestedAppAuthController(operatingContext);
      return Promise.resolve(controller);
    }
    /**
     * Specific implementation of initialize function for NestedAppAuthController
     * @returns
     */
    async initialize(request, isBroker) {
      const initCorrelationId = request?.correlationId || createNewGuid();
      await this.browserStorage.initialize(initCorrelationId);
      return Promise.resolve();
    }
    /**
     * Validate the incoming request and add correlationId if not present
     * @param request
     * @returns
     */
    ensureValidRequest(request) {
      if (request?.correlationId) {
        return request;
      }
      return {
        ...request,
        correlationId: this.browserCrypto.createNewGuid()
      };
    }
    /**
     * Internal implementation of acquireTokenInteractive flow
     * @param request
     * @returns
     */
    async acquireTokenInteractive(request) {
      const validRequest = this.ensureValidRequest(request);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, validRequest);
      const atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, validRequest.correlationId);
      atPopupMeasurement.add({ nestedAppAuthRequest: true });
      try {
        const naaRequest = this.nestedAppAuthAdapter.toNaaTokenRequest(validRequest);
        const reqTimestamp = TimeUtils_exports.nowSeconds();
        const response = await this.bridgeProxy.getTokenInteractive(naaRequest);
        const result = {
          ...this.nestedAppAuthAdapter.fromNaaTokenResponse(naaRequest, response, reqTimestamp)
        };
        try {
          await this.hydrateCache(result, request);
        } catch (error) {
          this.logger.warningPii(`Failed to hydrate cache. Error: ${error}`, validRequest.correlationId);
        }
        this.currentAccountContext = {
          homeAccountId: result.account.homeAccountId,
          environment: result.account.environment,
          tenantId: result.account.tenantId
        };
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result);
        atPopupMeasurement.add({
          accessTokenSize: result.accessToken.length,
          idTokenSize: result.idToken.length
        });
        atPopupMeasurement.end({
          success: true,
          requestId: result.requestId
        }, void 0, result.account);
        return result;
      } catch (e) {
        const error = e instanceof AuthError ? e : this.nestedAppAuthAdapter.fromBridgeError(e);
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e);
        atPopupMeasurement.end({
          success: false
        }, e, request.account);
        throw error;
      }
    }
    /**
     * Internal implementation of acquireTokenSilent flow
     * @param request
     * @returns
     */
    async acquireTokenSilentInternal(request) {
      const validRequest = this.ensureValidRequest(request);
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, validRequest);
      const result = await this.acquireTokenFromCache(validRequest);
      if (result) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, result);
        return result;
      }
      const ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, validRequest.correlationId);
      ssoSilentMeasurement.increment({
        visibilityChangeCount: 0
      });
      ssoSilentMeasurement.add({
        nestedAppAuthRequest: true
      });
      try {
        const naaRequest = this.nestedAppAuthAdapter.toNaaTokenRequest(validRequest);
        naaRequest.forceRefresh = validRequest.forceRefresh;
        const reqTimestamp = TimeUtils_exports.nowSeconds();
        const response = await this.bridgeProxy.getTokenSilent(naaRequest);
        const result2 = this.nestedAppAuthAdapter.fromNaaTokenResponse(naaRequest, response, reqTimestamp);
        try {
          await this.hydrateCache(result2, request);
        } catch (error) {
          this.logger.warningPii(`Failed to hydrate cache. Error: ${error}`, validRequest.correlationId);
        }
        this.currentAccountContext = {
          homeAccountId: result2.account.homeAccountId,
          environment: result2.account.environment,
          tenantId: result2.account.tenantId
        };
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, result2);
        ssoSilentMeasurement?.add({
          accessTokenSize: result2.accessToken.length,
          idTokenSize: result2.idToken.length
        });
        ssoSilentMeasurement?.end({
          success: true,
          requestId: result2.requestId
        }, void 0, result2.account);
        return result2;
      } catch (e) {
        const error = e instanceof AuthError ? e : this.nestedAppAuthAdapter.fromBridgeError(e);
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, e);
        ssoSilentMeasurement?.end({
          success: false
        }, e, request.account);
        throw error;
      }
    }
    /**
     * acquires tokens from cache
     * @param request
     * @returns
     */
    async acquireTokenFromCache(request) {
      const atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, request.correlationId);
      atsMeasurement?.add({
        nestedAppAuthRequest: true
      });
      if (request.claims) {
        this.logger.verbose("Claims are present in the request, skipping cache lookup");
        return null;
      }
      if (request.forceRefresh) {
        this.logger.verbose("forceRefresh is set to true, skipping cache lookup");
        return null;
      }
      let result = null;
      if (!request.cacheLookupPolicy) {
        request.cacheLookupPolicy = CacheLookupPolicy.Default;
      }
      switch (request.cacheLookupPolicy) {
        case CacheLookupPolicy.Default:
        case CacheLookupPolicy.AccessToken:
        case CacheLookupPolicy.AccessTokenAndRefreshToken:
          result = await this.acquireTokenFromCacheInternal(request);
          break;
        default:
          return null;
      }
      if (result) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, result);
        atsMeasurement.add({
          accessTokenSize: result.accessToken.length,
          idTokenSize: result.idToken.length
        });
        atsMeasurement.end({
          success: true
        }, void 0, result.account);
        return result;
      }
      this.logger.warning("Cached tokens are not found for the account, proceeding with silent token request.");
      this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null);
      atsMeasurement.end({
        success: false
      }, void 0, request.account);
      return null;
    }
    /**
     *
     * @param request
     * @returns
     */
    async acquireTokenFromCacheInternal(request) {
      const accountContext = this.bridgeProxy.getAccountContext() || this.currentAccountContext;
      let currentAccount = null;
      const correlationId = request.correlationId || this.browserCrypto.createNewGuid();
      if (accountContext) {
        currentAccount = getAccount(accountContext, this.logger, this.browserStorage, correlationId);
      }
      if (!currentAccount) {
        this.logger.verbose("No active account found, falling back to the host");
        return Promise.resolve(null);
      }
      this.logger.verbose("active account found, attempting to acquire token silently");
      const authRequest = {
        ...request,
        correlationId: request.correlationId || this.browserCrypto.createNewGuid(),
        authority: request.authority || currentAccount.environment,
        scopes: request.scopes?.length ? request.scopes : [...OIDC_DEFAULT_SCOPES]
      };
      const tokenKeys = this.browserStorage.getTokenKeys();
      const cachedAccessToken = this.browserStorage.getAccessToken(currentAccount, authRequest, tokenKeys, currentAccount.tenantId);
      if (!cachedAccessToken) {
        this.logger.verbose("No cached access token found");
        return Promise.resolve(null);
      } else if (TimeUtils_exports.wasClockTurnedBack(cachedAccessToken.cachedAt) || TimeUtils_exports.isTokenExpired(cachedAccessToken.expiresOn, this.config.system.tokenRenewalOffsetSeconds)) {
        this.logger.verbose("Cached access token has expired");
        return Promise.resolve(null);
      }
      const cachedIdToken = this.browserStorage.getIdToken(currentAccount, authRequest.correlationId, tokenKeys, currentAccount.tenantId, this.performanceClient);
      if (!cachedIdToken) {
        this.logger.verbose("No cached id token found");
        return Promise.resolve(null);
      }
      return this.nestedAppAuthAdapter.toAuthenticationResultFromCache(currentAccount, cachedIdToken, cachedAccessToken, authRequest, authRequest.correlationId);
    }
    /**
     * acquireTokenPopup flow implementation
     * @param request
     * @returns
     */
    async acquireTokenPopup(request) {
      return this.acquireTokenInteractive(request);
    }
    /**
     * acquireTokenRedirect flow is not supported in nested app auth
     * @param request
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    acquireTokenRedirect(request) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    /**
     * acquireTokenSilent flow implementation
     * @param silentRequest
     * @returns
     */
    async acquireTokenSilent(silentRequest) {
      return this.acquireTokenSilentInternal(silentRequest);
    }
    /**
     * Hybrid flow is not currently supported in nested app auth
     * @param request
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    acquireTokenByCode(request) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    /**
     * acquireTokenNative flow is not currently supported in nested app auth
     * @param request
     * @param apiId
     * @param accountId
     */
    acquireTokenNative(request, apiId, accountId) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    /**
     * acquireTokenByRefreshToken flow is not currently supported in nested app auth
     * @param commonRequest
     * @param silentRequest
     */
    acquireTokenByRefreshToken(commonRequest, silentRequest) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    /**
     * Adds event callbacks to array
     * @param callback
     * @param eventTypes
     */
    addEventCallback(callback, eventTypes) {
      return this.eventHandler.addEventCallback(callback, eventTypes);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */
    removeEventCallback(callbackId) {
      this.eventHandler.removeEventCallback(callbackId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addPerformanceCallback(callback) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removePerformanceCallback(callbackId) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    enableAccountStorageEvents() {
      throw NestedAppAuthError.createUnsupportedError();
    }
    disableAccountStorageEvents() {
      throw NestedAppAuthError.createUnsupportedError();
    }
    // #region Account APIs
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */
    getAllAccounts(accountFilter) {
      const correlationId = this.browserCrypto.createNewGuid();
      return getAllAccounts(this.logger, this.browserStorage, this.isBrowserEnv(), correlationId, accountFilter);
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */
    getAccount(accountFilter) {
      const correlationId = this.browserCrypto.createNewGuid();
      return getAccount(accountFilter, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param username
     * @returns The account object stored in MSAL
     */
    getAccountByUsername(username) {
      const correlationId = this.browserCrypto.createNewGuid();
      return getAccountByUsername(username, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     */
    getAccountByHomeId(homeAccountId) {
      const correlationId = this.browserCrypto.createNewGuid();
      return getAccountByHomeId(homeAccountId, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     */
    getAccountByLocalId(localAccountId) {
      const correlationId = this.browserCrypto.createNewGuid();
      return getAccountByLocalId(localAccountId, this.logger, this.browserStorage, correlationId);
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */
    setActiveAccount(account2) {
      const correlationId = this.browserCrypto.createNewGuid();
      return setActiveAccount(account2, this.browserStorage, correlationId);
    }
    /**
     * Gets the currently active account
     */
    getActiveAccount() {
      const correlationId = this.browserCrypto.createNewGuid();
      return getActiveAccount(this.browserStorage, correlationId);
    }
    // #endregion
    handleRedirectPromise(hash) {
      return Promise.resolve(null);
    }
    loginPopup(request) {
      return this.acquireTokenInteractive(request || DEFAULT_REQUEST);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRedirect(request) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout(logoutRequest) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    logoutRedirect(logoutRequest) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    logoutPopup(logoutRequest) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    ssoSilent(request) {
      return this.acquireTokenSilentInternal(request);
    }
    getTokenCache() {
      throw NestedAppAuthError.createUnsupportedError();
    }
    /**
     * Returns the logger instance
     */
    getLogger() {
      return this.logger;
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */
    setLogger(logger) {
      this.logger = logger;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initializeWrapperLibrary(sku, version3) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setNavigationClient(navigationClient) {
      this.logger.warning("setNavigationClient is not supported in nested app auth");
    }
    getConfiguration() {
      return this.config;
    }
    isBrowserEnv() {
      return this.operatingContext.isBrowserEnvironment();
    }
    getBrowserCrypto() {
      return this.browserCrypto;
    }
    getPerformanceClient() {
      throw NestedAppAuthError.createUnsupportedError();
    }
    getRedirectResponse() {
      throw NestedAppAuthError.createUnsupportedError();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async clearCache(logoutRequest) {
      throw NestedAppAuthError.createUnsupportedError();
    }
    async hydrateCache(result, request) {
      this.logger.verbose("hydrateCache called");
      const accountEntity = AccountEntity.createFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
      await this.browserStorage.setAccount(accountEntity, result.correlationId);
      return this.browserStorage.hydrateCache(result, request);
    }
  };

  // node_modules/@azure/msal-browser/dist/controllers/ControllerFactory.mjs
  async function createV3Controller(config, request) {
    const standard = new StandardOperatingContext(config);
    await standard.initialize();
    return StandardController.createController(standard, request);
  }
  async function createController(config) {
    const standard = new StandardOperatingContext(config);
    const nestedApp = new NestedAppOperatingContext(config);
    const operatingContexts = [standard.initialize(), nestedApp.initialize()];
    await Promise.all(operatingContexts);
    if (nestedApp.isAvailable() && config.auth.supportsNestedAppAuth) {
      return NestedAppAuthController.createController(nestedApp);
    } else if (standard.isAvailable()) {
      return StandardController.createController(standard);
    } else {
      return null;
    }
  }

  // node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs
  var PublicClientApplication = class _PublicClientApplication {
    /**
     * Creates StandardController and passes it to the PublicClientApplication
     *
     * @param configuration {Configuration}
     */
    static async createPublicClientApplication(configuration) {
      const controller = await createV3Controller(configuration);
      const pca2 = new _PublicClientApplication(configuration, controller);
      return pca2;
    }
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param configuration Object for the MSAL PublicClientApplication instance
     * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
     */
    constructor(configuration, controller) {
      this.isBroker = false;
      this.controller = controller || new StandardController(new StandardOperatingContext(configuration));
    }
    /**
     * Initializer function to perform async startup tasks such as connecting to WAM extension
     * @param request {?InitializeApplicationRequest}
     */
    async initialize(request) {
      return this.controller.initialize(request, this.isBroker);
    }
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    async acquireTokenPopup(request) {
      return this.controller.acquireTokenPopup(request);
    }
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    acquireTokenRedirect(request) {
      return this.controller.acquireTokenRedirect(request);
    }
    /**
     * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
     */
    acquireTokenSilent(silentRequest) {
      return this.controller.acquireTokenSilent(silentRequest);
    }
    /**
     * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
     * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
     * This API is not indended for normal authorization code acquisition and redemption.
     *
     * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
     *
     * @param request {@link AuthorizationCodeRequest}
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    acquireTokenByCode(request) {
      return this.controller.acquireTokenByCode(request);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     * @param eventTypes
     */
    addEventCallback(callback, eventTypes) {
      return this.controller.addEventCallback(callback, eventTypes);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */
    removeEventCallback(callbackId) {
      return this.controller.removeEventCallback(callbackId);
    }
    /**
     * Registers a callback to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */
    addPerformanceCallback(callback) {
      return this.controller.addPerformanceCallback(callback);
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */
    removePerformanceCallback(callbackId) {
      return this.controller.removePerformanceCallback(callbackId);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */
    enableAccountStorageEvents() {
      this.controller.enableAccountStorageEvents();
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */
    disableAccountStorageEvents() {
      this.controller.disableAccountStorageEvents();
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */
    getAccount(accountFilter) {
      return this.controller.getAccount(accountFilter);
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByHomeId(homeAccountId) {
      return this.controller.getAccountByHomeId(homeAccountId);
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByLocalId(localId) {
      return this.controller.getAccountByLocalId(localId);
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param userName
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByUsername(userName) {
      return this.controller.getAccountByUsername(userName);
    }
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */
    getAllAccounts(accountFilter) {
      return this.controller.getAllAccounts(accountFilter);
    }
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns Token response or null. If the return value is null, then no auth redirect was detected.
     */
    handleRedirectPromise(hash) {
      return this.controller.handleRedirectPromise(hash);
    }
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    loginPopup(request) {
      return this.controller.loginPopup(request);
    }
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    loginRedirect(request) {
      return this.controller.loginRedirect(request);
    }
    /**
     * Deprecated logout function. Use logoutRedirect or logoutPopup instead
     * @param logoutRequest
     * @deprecated
     */
    logout(logoutRequest) {
      return this.controller.logout(logoutRequest);
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */
    logoutRedirect(logoutRequest) {
      return this.controller.logoutRedirect(logoutRequest);
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */
    logoutPopup(logoutRequest) {
      return this.controller.logoutPopup(logoutRequest);
    }
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param request {@link SsoSilentRequest}
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    ssoSilent(request) {
      return this.controller.ssoSilent(request);
    }
    /**
     * Gets the token cache for the application.
     */
    getTokenCache() {
      return this.controller.getTokenCache();
    }
    /**
     * Returns the logger instance
     */
    getLogger() {
      return this.controller.getLogger();
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */
    setLogger(logger) {
      this.controller.setLogger(logger);
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */
    setActiveAccount(account2) {
      this.controller.setActiveAccount(account2);
    }
    /**
     * Gets the currently active account
     */
    getActiveAccount() {
      return this.controller.getActiveAccount();
    }
    /**
     * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
     * @param sku
     * @param version
     */
    initializeWrapperLibrary(sku, version3) {
      return this.controller.initializeWrapperLibrary(sku, version3);
    }
    /**
     * Sets navigation client
     * @param navigationClient
     */
    setNavigationClient(navigationClient) {
      this.controller.setNavigationClient(navigationClient);
    }
    /**
     * Returns the configuration object
     * @internal
     */
    getConfiguration() {
      return this.controller.getConfiguration();
    }
    /**
     * Hydrates cache with the tokens and account in the AuthenticationResult object
     * @param result
     * @param request - The request object that was used to obtain the AuthenticationResult
     * @returns
     */
    async hydrateCache(result, request) {
      return this.controller.hydrateCache(result, request);
    }
    /**
     * Clears tokens and account from the browser cache.
     * @param logoutRequest
     */
    clearCache(logoutRequest) {
      return this.controller.clearCache(logoutRequest);
    }
  };
  async function createNestablePublicClientApplication(configuration) {
    const nestedAppAuth = new NestedAppOperatingContext(configuration);
    await nestedAppAuth.initialize();
    if (nestedAppAuth.isAvailable()) {
      const controller = new NestedAppAuthController(nestedAppAuth);
      const nestablePCA = new PublicClientApplication(configuration, controller);
      await nestablePCA.initialize();
      return nestablePCA;
    }
    return createStandardPublicClientApplication(configuration);
  }
  async function createStandardPublicClientApplication(configuration) {
    const pca2 = new PublicClientApplication(configuration);
    await pca2.initialize();
    return pca2;
  }

  // node_modules/@azure/msal-browser/dist/controllers/UnknownOperatingContextController.mjs
  var UnknownOperatingContextController = class {
    constructor(operatingContext) {
      this.initialized = false;
      this.operatingContext = operatingContext;
      this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
      this.config = operatingContext.getConfig();
      this.logger = operatingContext.getLogger();
      this.performanceClient = this.config.telemetry.client;
      this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient) : DEFAULT_CRYPTO_IMPLEMENTATION;
      this.eventHandler = new EventHandler(this.logger);
      this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, this.performanceClient, this.eventHandler, void 0) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger, this.performanceClient, this.eventHandler);
    }
    getBrowserStorage() {
      return this.browserStorage;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccount(accountFilter) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccountByHomeId(homeAccountId) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccountByLocalId(localAccountId) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccountByUsername(username) {
      return null;
    }
    getAllAccounts() {
      return [];
    }
    initialize() {
      this.initialized = true;
      return Promise.resolve();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    acquireTokenPopup(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    acquireTokenRedirect(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return Promise.resolve();
    }
    acquireTokenSilent(silentRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    acquireTokenByCode(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    acquireTokenNative(request, apiId, accountId) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    acquireTokenByRefreshToken(commonRequest, silentRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    addEventCallback(callback, eventTypes) {
      return null;
    }
    removeEventCallback(callbackId) {
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addPerformanceCallback(callback) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return "";
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removePerformanceCallback(callbackId) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return true;
    }
    enableAccountStorageEvents() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    disableAccountStorageEvents() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    handleRedirectPromise(hash) {
      blockAPICallsBeforeInitialize(this.initialized);
      return Promise.resolve(null);
    }
    loginPopup(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRedirect(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout(logoutRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    logoutRedirect(logoutRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    logoutPopup(logoutRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    ssoSilent(request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    getTokenCache() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    getLogger() {
      return this.logger;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLogger(logger) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveAccount(account2) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    getActiveAccount() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initializeWrapperLibrary(sku, version3) {
      this.browserStorage.setWrapperMetadata(sku, version3);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setNavigationClient(navigationClient) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    getConfiguration() {
      return this.config;
    }
    isBrowserEnv() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return true;
    }
    getBrowserCrypto() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    getPerformanceClient() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    getRedirectResponse() {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
      return {};
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async clearCache(logoutRequest) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async hydrateCache(result, request) {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment();
    }
  };

  // node_modules/@azure/msal-browser/dist/operatingcontext/UnknownOperatingContext.mjs
  var UnknownOperatingContext = class _UnknownOperatingContext extends BaseOperatingContext {
    /**
     * Returns the unique identifier for this operating context
     * @returns string
     */
    getId() {
      return _UnknownOperatingContext.ID;
    }
    /**
     * Return the module name.  Intended for use with import() to enable dynamic import
     * of the implementation associated with this operating context
     * @returns
     */
    getModuleName() {
      return _UnknownOperatingContext.MODULE_NAME;
    }
    /**
     * Checks whether the operating context is available.
     * Confirms that the code is running a browser rather.  This is required.
     * @returns Promise<boolean> indicating whether this operating context is currently available.
     */
    async initialize() {
      return true;
    }
  };
  UnknownOperatingContext.MODULE_NAME = "";
  UnknownOperatingContext.ID = "UnknownOperatingContext";

  // node_modules/@azure/msal-browser/dist/app/PublicClientNext.mjs
  var PublicClientNext = class _PublicClientNext {
    static async createPublicClientApplication(configuration) {
      const controller = await createController(configuration);
      let pca2;
      if (controller !== null) {
        pca2 = new _PublicClientNext(configuration, controller);
      } else {
        pca2 = new _PublicClientNext(configuration);
      }
      return pca2;
    }
    /**
     * @constructor
     * Constructor for the PublicClientNext used to instantiate the PublicClientNext object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param configuration Object for the MSAL PublicClientApplication instance
     * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
     */
    constructor(configuration, controller) {
      this.configuration = configuration;
      if (controller) {
        this.controller = controller;
      } else {
        const operatingContext = new UnknownOperatingContext(configuration);
        this.controller = new UnknownOperatingContextController(operatingContext);
      }
    }
    /**
     * Initializer function to perform async startup tasks such as connecting to WAM extension
     */
    async initialize() {
      if (this.controller instanceof UnknownOperatingContextController) {
        const result = await createController(this.configuration);
        if (result !== null) {
          this.controller = result;
        }
        return this.controller.initialize();
      }
      return Promise.resolve();
    }
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    async acquireTokenPopup(request) {
      return this.controller.acquireTokenPopup(request);
    }
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    acquireTokenRedirect(request) {
      return this.controller.acquireTokenRedirect(request);
    }
    /**
     * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
     */
    acquireTokenSilent(silentRequest) {
      return this.controller.acquireTokenSilent(silentRequest);
    }
    /**
     * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
     * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
     * This API is not indended for normal authorization code acquisition and redemption.
     *
     * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
     *
     * @param request {@link AuthorizationCodeRequest}
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    acquireTokenByCode(request) {
      return this.controller.acquireTokenByCode(request);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     */
    addEventCallback(callback, eventTypes) {
      return this.controller.addEventCallback(callback, eventTypes);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */
    removeEventCallback(callbackId) {
      return this.controller.removeEventCallback(callbackId);
    }
    /**
     * Registers a callback to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */
    addPerformanceCallback(callback) {
      return this.controller.addPerformanceCallback(callback);
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */
    removePerformanceCallback(callbackId) {
      return this.controller.removePerformanceCallback(callbackId);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */
    enableAccountStorageEvents() {
      this.controller.enableAccountStorageEvents();
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */
    disableAccountStorageEvents() {
      this.controller.disableAccountStorageEvents();
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */
    getAccount(accountFilter) {
      return this.controller.getAccount(accountFilter);
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByHomeId(homeAccountId) {
      return this.controller.getAccountByHomeId(homeAccountId);
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByLocalId(localId) {
      return this.controller.getAccountByLocalId(localId);
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param userName
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */
    getAccountByUsername(userName) {
      return this.controller.getAccountByUsername(userName);
    }
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */
    getAllAccounts(accountFilter) {
      return this.controller.getAllAccounts(accountFilter);
    }
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns Token response or null. If the return value is null, then no auth redirect was detected.
     */
    handleRedirectPromise(hash) {
      return this.controller.handleRedirectPromise(hash);
    }
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    loginPopup(request) {
      return this.controller.loginPopup(request);
    }
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */
    loginRedirect(request) {
      return this.controller.loginRedirect(request);
    }
    /**
     * Deprecated logout function. Use logoutRedirect or logoutPopup instead
     * @param logoutRequest
     * @deprecated
     */
    logout(logoutRequest) {
      return this.controller.logout(logoutRequest);
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */
    logoutRedirect(logoutRequest) {
      return this.controller.logoutRedirect(logoutRequest);
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */
    logoutPopup(logoutRequest) {
      return this.controller.logoutPopup(logoutRequest);
    }
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param request {@link SsoSilentRequest}
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */
    ssoSilent(request) {
      return this.controller.ssoSilent(request);
    }
    /**
     * Gets the token cache for the application.
     */
    getTokenCache() {
      return this.controller.getTokenCache();
    }
    /**
     * Returns the logger instance
     */
    getLogger() {
      return this.controller.getLogger();
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */
    setLogger(logger) {
      this.controller.setLogger(logger);
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */
    setActiveAccount(account2) {
      this.controller.setActiveAccount(account2);
    }
    /**
     * Gets the currently active account
     */
    getActiveAccount() {
      return this.controller.getActiveAccount();
    }
    /**
     * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
     * @param sku
     * @param version
     */
    initializeWrapperLibrary(sku, version3) {
      return this.controller.initializeWrapperLibrary(sku, version3);
    }
    /**
     * Sets navigation client
     * @param navigationClient
     */
    setNavigationClient(navigationClient) {
      this.controller.setNavigationClient(navigationClient);
    }
    /**
     * Returns the configuration object
     * @internal
     */
    getConfiguration() {
      return this.controller.getConfiguration();
    }
    /**
     * Hydrates cache with the tokens and account in the AuthenticationResult object
     * @param result
     * @param request - The request object that was used to obtain the AuthenticationResult
     * @returns
     */
    async hydrateCache(result, request) {
      return this.controller.hydrateCache(result, request);
    }
    /**
     * Clears tokens and account from the browser cache.
     * @param logoutRequest
     */
    clearCache(logoutRequest) {
      return this.controller.clearCache(logoutRequest);
    }
  };

  // node_modules/@azure/msal-browser/dist/app/IPublicClientApplication.mjs
  var stubbedPublicClientApplication = {
    initialize: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    acquireTokenPopup: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    acquireTokenRedirect: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    acquireTokenSilent: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    acquireTokenByCode: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    getAllAccounts: () => {
      return [];
    },
    getAccount: () => {
      return null;
    },
    getAccountByHomeId: () => {
      return null;
    },
    getAccountByUsername: () => {
      return null;
    },
    getAccountByLocalId: () => {
      return null;
    },
    handleRedirectPromise: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    loginPopup: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    loginRedirect: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    logout: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    logoutRedirect: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    logoutPopup: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    ssoSilent: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    addEventCallback: () => {
      return null;
    },
    removeEventCallback: () => {
      return;
    },
    addPerformanceCallback: () => {
      return "";
    },
    removePerformanceCallback: () => {
      return false;
    },
    enableAccountStorageEvents: () => {
      return;
    },
    disableAccountStorageEvents: () => {
      return;
    },
    getTokenCache: () => {
      throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
    },
    getLogger: () => {
      throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
    },
    setLogger: () => {
      return;
    },
    setActiveAccount: () => {
      return;
    },
    getActiveAccount: () => {
      return null;
    },
    initializeWrapperLibrary: () => {
      return;
    },
    setNavigationClient: () => {
      return;
    },
    getConfiguration: () => {
      throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
    },
    hydrateCache: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    },
    clearCache: () => {
      return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
    }
  };

  // node_modules/@azure/msal-browser/dist/event/EventMessage.mjs
  var EventMessageUtils = class {
    /**
     * Gets interaction status from event message
     * @param message
     * @param currentStatus
     */
    static getInteractionStatusFromEvent(message, currentStatus) {
      switch (message.eventType) {
        case EventType.LOGIN_START:
          return InteractionStatus.Login;
        case EventType.SSO_SILENT_START:
          return InteractionStatus.SsoSilent;
        case EventType.ACQUIRE_TOKEN_START:
          if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
            return InteractionStatus.AcquireToken;
          }
          break;
        case EventType.HANDLE_REDIRECT_START:
          return InteractionStatus.HandleRedirect;
        case EventType.LOGOUT_START:
          return InteractionStatus.Logout;
        case EventType.SSO_SILENT_SUCCESS:
        case EventType.SSO_SILENT_FAILURE:
          if (currentStatus && currentStatus !== InteractionStatus.SsoSilent) {
            break;
          }
          return InteractionStatus.None;
        case EventType.LOGOUT_END:
          if (currentStatus && currentStatus !== InteractionStatus.Logout) {
            break;
          }
          return InteractionStatus.None;
        case EventType.HANDLE_REDIRECT_END:
          if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
            break;
          }
          return InteractionStatus.None;
        case EventType.LOGIN_SUCCESS:
        case EventType.LOGIN_FAILURE:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_FAILURE:
        case EventType.RESTORE_FROM_BFCACHE:
          if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
            if (currentStatus && currentStatus !== InteractionStatus.Login && currentStatus !== InteractionStatus.AcquireToken) {
              break;
            }
            return InteractionStatus.None;
          }
          break;
      }
      return null;
    }
  };

  // node_modules/@azure/msal-browser/dist/crypto/SignedHttpRequest.mjs
  var SignedHttpRequest = class {
    constructor(shrParameters, shrOptions) {
      const loggerOptions = shrOptions && shrOptions.loggerOptions || {};
      this.logger = new Logger(loggerOptions, name2, version2);
      this.cryptoOps = new CryptoOps(this.logger);
      this.popTokenGenerator = new PopTokenGenerator(this.cryptoOps);
      this.shrParameters = shrParameters;
    }
    /**
     * Generates and caches a keypair for the given request options.
     * @returns Public key digest, which should be sent to the token issuer.
     */
    async generatePublicKeyThumbprint() {
      const { kid } = await this.popTokenGenerator.generateKid(this.shrParameters);
      return kid;
    }
    /**
     * Generates a signed http request for the given payload with the given key.
     * @param payload Payload to sign (e.g. access token)
     * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
     * @param claims Additional claims to include/override in the signed JWT
     * @returns Pop token signed with the corresponding private key
     */
    async signRequest(payload, publicKeyThumbprint, claims) {
      return this.popTokenGenerator.signPayload(payload, publicKeyThumbprint, this.shrParameters, claims);
    }
    /**
     * Removes cached keys from browser for given public key thumbprint
     * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
     * @returns If keys are properly deleted
     */
    async removeKeys(publicKeyThumbprint) {
      return this.cryptoOps.removeTokenBindingKey(publicKeyThumbprint).then(() => true).catch((error) => {
        if (error instanceof ClientAuthError && error.errorCode === ClientAuthErrorCodes_exports.bindingKeyNotRemoved) {
          return false;
        }
        throw error;
      });
    }
  };

  // node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.mjs
  function getPerfMeasurementModule() {
    let sessionStorage;
    try {
      sessionStorage = window[BrowserCacheLocation.SessionStorage];
      const perfEnabled = sessionStorage?.getItem(BROWSER_PERF_ENABLED_KEY);
      if (Number(perfEnabled) === 1) {
        return Promise.resolve().then(() => (init_BrowserPerformanceMeasurement(), BrowserPerformanceMeasurement_exports));
      }
    } catch (e) {
    }
    return void 0;
  }
  function supportsBrowserPerformanceNow() {
    return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.now === "function";
  }
  function getPerfDurationMs(startTime) {
    if (!startTime || !supportsBrowserPerformanceNow()) {
      return void 0;
    }
    return Math.round(window.performance.now() - startTime);
  }
  var BrowserPerformanceClient = class extends PerformanceClient {
    constructor(configuration, intFields, abbreviations) {
      super(configuration.auth.clientId, configuration.auth.authority || `${Constants.DEFAULT_AUTHORITY}`, new Logger(configuration.system?.loggerOptions || {}, name2, version2), name2, version2, configuration.telemetry?.application || {
        appName: "",
        appVersion: ""
      }, intFields, abbreviations);
    }
    generateId() {
      return createNewGuid();
    }
    getPageVisibility() {
      return document.visibilityState?.toString() || null;
    }
    deleteIncompleteSubMeasurements(inProgressEvent) {
      void getPerfMeasurementModule()?.then((module) => {
        const rootEvent = this.eventsByCorrelationId.get(inProgressEvent.event.correlationId);
        const isRootEvent = rootEvent && rootEvent.eventId === inProgressEvent.event.eventId;
        const incompleteMeasurements = [];
        if (isRootEvent && rootEvent?.incompleteSubMeasurements) {
          rootEvent.incompleteSubMeasurements.forEach((subMeasurement) => {
            incompleteMeasurements.push({ ...subMeasurement });
          });
        }
        module.BrowserPerformanceMeasurement.flushMeasurements(inProgressEvent.event.correlationId, incompleteMeasurements);
      });
    }
    /**
     * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
     * Also captures browser page visibilityState.
     *
     * @param {PerformanceEvents} measureName
     * @param {?string} [correlationId]
     * @returns {((event?: Partial<PerformanceEvent>) => PerformanceEvent| null)}
     */
    startMeasurement(measureName, correlationId) {
      const startPageVisibility = this.getPageVisibility();
      const inProgressEvent = super.startMeasurement(measureName, correlationId);
      const startTime = supportsBrowserPerformanceNow() ? window.performance.now() : void 0;
      const browserMeasurement = getPerfMeasurementModule()?.then((module) => {
        return new module.BrowserPerformanceMeasurement(measureName, inProgressEvent.event.correlationId);
      });
      void browserMeasurement?.then((measurement) => measurement.startMeasurement());
      return {
        ...inProgressEvent,
        end: (event, error, account2) => {
          const res = inProgressEvent.end({
            ...event,
            startPageVisibility,
            endPageVisibility: this.getPageVisibility(),
            durationMs: getPerfDurationMs(startTime)
          }, error, account2);
          void browserMeasurement?.then((measurement) => measurement.endMeasurement());
          this.deleteIncompleteSubMeasurements(inProgressEvent);
          return res;
        },
        discard: () => {
          inProgressEvent.discard();
          void browserMeasurement?.then((measurement) => measurement.flushMeasurement());
          this.deleteIncompleteSubMeasurements(inProgressEvent);
        }
      };
    }
    /**
     * Adds pre-queue time to preQueueTimeByCorrelationId map.
     * @param {PerformanceEvents} eventName
     * @param {?string} correlationId
     * @returns
     */
    setPreQueueTime(eventName, correlationId) {
      if (!supportsBrowserPerformanceNow()) {
        this.logger.trace(`BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for ${eventName}`);
        return;
      }
      if (!correlationId) {
        this.logger.trace(`BrowserPerformanceClient: correlationId for ${eventName} not provided, unable to set telemetry queue time`);
        return;
      }
      const preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
      if (preQueueEvent) {
        this.logger.trace(`BrowserPerformanceClient: Incomplete pre-queue ${preQueueEvent.name} found`, correlationId);
        this.addQueueMeasurement(preQueueEvent.name, correlationId, void 0, true);
      }
      this.preQueueTimeByCorrelationId.set(correlationId, {
        name: eventName,
        time: window.performance.now()
      });
    }
    /**
     * Calculates and adds queue time measurement for given performance event.
     *
     * @param {PerformanceEvents} eventName
     * @param {?string} correlationId
     * @param {?number} queueTime
     * @param {?boolean} manuallyCompleted - indicator for manually completed queue measurements
     * @returns
     */
    addQueueMeasurement(eventName, correlationId, queueTime, manuallyCompleted) {
      if (!supportsBrowserPerformanceNow()) {
        this.logger.trace(`BrowserPerformanceClient: window performance API not available, unable to add queue measurement for ${eventName}`);
        return;
      }
      if (!correlationId) {
        this.logger.trace(`BrowserPerformanceClient: correlationId for ${eventName} not provided, unable to add queue measurement`);
        return;
      }
      const preQueueTime = super.getPreQueueTime(eventName, correlationId);
      if (!preQueueTime) {
        return;
      }
      const currentTime = window.performance.now();
      const resQueueTime = queueTime || super.calculateQueuedTime(preQueueTime, currentTime);
      return super.addQueueMeasurement(eventName, correlationId, resQueueTime, manuallyCompleted);
    }
  };

  // node_modules/@azure/msal-browser/dist/index.mjs
  init_BrowserPerformanceMeasurement();

  // src/auth/msalConfig.ts
  var msalConfig = {
    auth: {
      clientId: "d2d5f6e0-734b-4016-b590-8af18cabbae4",
      authority: "https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c",
      redirectUri: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      navigateToLoginRequestUrl: true
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false
    },
    system: {
      allowRedirectInIframe: true
      // istotne dla osadzenia jako web part (iframe)
    }
  };
  var graphScopes = [
    "openid",
    "profile",
    "offline_access",
    "User.Read",
    // Ujednolicone – pełny dostęp jak w Flutter:
    "Files.ReadWrite.All",
    "Sites.ReadWrite.All"
    // (Opcjonalnie dodaj 'Sites.Read.All' jeśli naprawdę potrzebne – zwykle nadmiarowe przy ReadWrite.All)
  ];
  var loginRequest = { scopes: graphScopes };

  // src/services/sharepointUpload.ts
  var AAD = {
    tenantId: "4d6f1a92-7238-45ba-8f35-a8278259662c",
    // ujednolicone z konfiguracją Flutter
    authority: "https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c",
    oauth2: {
      authorizeV2: "https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c/oauth2/v2.0/authorize",
      tokenV2: "https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c/oauth2/v2.0/token"
    },
    // Identyfikator aplikacji (klienta) z widoku "Protokoły"
    clientId: "d2d5f6e0-734b-4016-b590-8af18cabbae4",
    // Punkt końcowy Graph
    graphBase: "https://graph.microsoft.com",
    // Z "Uwidocznij interfejs API" (Application ID URI) – informacyjnie
    appIdUri: "api://d2d5f6e0-734b-4016-b590-8af18cabbae4"
  };
  var DEFAULT_SP = {
    hostname: "klimatimeco.sharepoint.com",
    sitePath: "sites/Klimatimecosp.zo.o",
    libraryName: "Protokoly",
    defaultFolderPath: ""
    // opcjonalnie ustaw np. '2025-09' albo 'Protokoły'
  };
  function makeUploadOptions(partial) {
    return {
      hostname: partial.hostname ?? DEFAULT_SP.hostname,
      sitePath: partial.sitePath ?? DEFAULT_SP.sitePath,
      libraryName: partial.libraryName ?? DEFAULT_SP.libraryName,
      folderPath: partial.folderPath ?? DEFAULT_SP.defaultFolderPath,
      filename: partial.filename,
      file: partial.file,
      metadata: partial.metadata
    };
  }
  var pca = null;
  var account = null;
  function getPca() {
    if (!pca) pca = new PublicClientApplication(msalConfig);
    return pca;
  }
  var _pcaInitPromise = null;
  async function initPcaOnce() {
    const inst = getPca();
    if (typeof inst.initialize !== "function") return;
    if (!_pcaInitPromise) {
      _pcaInitPromise = inst.initialize().catch((err) => {
        _pcaInitPromise = null;
        throw err;
      });
    }
    await _pcaInitPromise;
  }
  function patchMsalAutoInitPrototype() {
    const cls = PublicClientApplication;
    const proto = cls?.prototype;
    if (!proto || proto.__spupPatched) return;
    const ensure = async function() {
      if (typeof this.initialize === "function") {
        this.__spupInitPromise ||= this.initialize();
        await this.__spupInitPromise;
      }
    };
    const wrap = (name3) => {
      const orig = proto[name3];
      if (typeof orig !== "function") return;
      proto[name3] = async function(...args) {
        await ensure.call(this);
        return orig.apply(this, args);
      };
    };
    ["handleRedirectPromise", "loginPopup", "loginRedirect", "acquireTokenSilent", "acquireTokenPopup", "acquireTokenRedirect", "getAllAccounts"].forEach(wrap);
    proto.__spupPatched = true;
  }
  if (typeof window !== "undefined") {
    window.msal = window.msal || dist_exports;
    patchMsalAutoInitPrototype();
  }
  async function processRedirectOnce() {
    try {
      const p = getPca();
      await initPcaOnce();
      const result = await p.handleRedirectPromise();
      if (result?.account) account = result.account;
    } catch {
    }
  }
  var _redirectProcessed = false;
  async function ensureLogin() {
    await initPcaOnce();
    if (!_redirectProcessed) {
      _redirectProcessed = true;
      await processRedirectOnce();
    }
    const inst = getPca();
    if (account) return;
    const existing = inst.getAllAccounts();
    if (existing.length) {
      account = existing[0];
      try {
        await inst.acquireTokenSilent({ account, scopes: loginRequest.scopes });
        return;
      } catch {
      }
    }
    const inIframe = window.self !== window.top;
    try {
      const resp = await inst.loginPopup(loginRequest);
      account = resp.account;
    } catch (e) {
      if (inIframe || e instanceof InteractionRequiredAuthError || String(e?.message || e).includes("popup") || String(e?.errorMessage || "").includes("blocked")) {
        await inst.loginRedirect(loginRequest);
        return;
      }
      throw e;
    }
  }
  async function getToken(scopes = loginRequest.scopes) {
    await ensureLogin();
    const inst = getPca();
    if (!account) {
      const accs = inst.getAllAccounts();
      if (accs.length) account = accs[0];
    }
    if (!account) throw new Error("Brak konta (nie uko\u0144czono logowania).");
    try {
      const resp = await inst.acquireTokenSilent({ account, scopes });
      return resp.accessToken;
    } catch {
      try {
        const resp = await inst.acquireTokenPopup({ account, scopes });
        return resp.accessToken;
      } catch {
        await inst.acquireTokenRedirect({ account, scopes });
        throw new Error("Redirect token flow \u2013 pon\xF3w \u017C\u0105danie po powrocie.");
      }
    }
  }
  async function getSiteId(accessToken, hostname, sitePath) {
    const suff = sitePath ? `:/${sitePath}` : "";
    const url = `${AAD.graphBase}/v1.0/sites/${hostname}${suff}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!res.ok) throw new Error(`Failed to resolve site: ${res.status} ${await res.text()}`);
    const data = await res.json();
    return data.id;
  }
  async function getDriveId(accessToken, siteId, driveName) {
    const res = await fetch(`${AAD.graphBase}/v1.0/sites/${siteId}/drives`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!res.ok) throw new Error(`Failed to list drives: ${res.status} ${await res.text()}`);
    const data = await res.json();
    const drives = data.value;
    const drive = drives.find((d) => d.name === driveName);
    if (!drive) {
      const available = drives.map((d) => d.name).join(", ");
      throw new Error(`Drive (library) not found: ${driveName}. Available: ${available}`);
    }
    return drive.id;
  }
  async function ensureFolderPath(accessToken, driveId, folderPath) {
    const clean = (folderPath || "").replace(/^\/+|\/+$/g, "");
    if (!clean) return { parentId: "root", fullPath: "" };
    const segments = clean.split("/").filter(Boolean);
    let parentId = "root";
    let currentPath = "";
    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
      let itemRes = await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(currentPath)}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      if (itemRes.status === 404) {
        const createUrl = parentId === "root" ? `${AAD.graphBase}/v1.0/drives/${driveId}/root/children` : `${AAD.graphBase}/v1.0/drives/${driveId}/items/${parentId}/children`;
        const createRes = await fetch(createUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: segment,
            folder: {},
            "@microsoft.graph.conflictBehavior": "replace"
          })
        });
        if (!createRes.ok) throw new Error(`Failed to create folder '${segment}': ${createRes.status} ${await createRes.text()}`);
        const created = await createRes.json();
        parentId = created.id;
      } else if (itemRes.ok) {
        const item = await itemRes.json();
        parentId = item.id;
        if (!item.folder) throw new Error(`Path segment '${segment}' exists and is not a folder`);
      } else {
        throw new Error(`Failed to get folder '${currentPath}': ${itemRes.status} ${await itemRes.text()}`);
      }
    }
    return { parentId, fullPath: clean };
  }
  async function simpleUpload(accessToken, driveId, folderPath, filename, file) {
    const path = folderPath ? `${folderPath}/${filename}` : filename;
    const url = `${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(path)}:/content`;
    const res = await fetch(url, { method: "PUT", headers: { Authorization: `Bearer ${accessToken}` }, body: file });
    if (!res.ok) throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
    return res.json();
  }
  async function chunkedUpload(accessToken, driveId, folderPath, filename, file) {
    const path = folderPath ? `${folderPath}/${filename}` : filename;
    const sessionRes = await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(path)}:/createUploadSession`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ item: { "@microsoft.graph.conflictBehavior": "replace", name: filename } })
    });
    if (!sessionRes.ok) throw new Error(`Create upload session failed: ${sessionRes.status} ${await sessionRes.text()}`);
    const { uploadUrl } = await sessionRes.json();
    const chunkSize = 5 * 1024 * 1024;
    const total = file.size;
    let start = 0;
    let lastResp = null;
    while (start < total) {
      const end = Math.min(start + chunkSize, total);
      const chunk = file.slice(start, end);
      const res = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Length": String(chunk.size),
          "Content-Range": `bytes ${start}-${end - 1}/${total}`
        },
        body: chunk
      });
      if (!(res.status === 202 || res.status === 201 || res.status === 200)) {
        throw new Error(`Chunk upload failed: ${res.status} ${await res.text()}`);
      }
      lastResp = await res.json().catch(() => null);
      start = end;
    }
    return lastResp;
  }
  async function uploadProtocolPdf(opts) {
    const token = await getToken();
    const siteId = await getSiteId(token, opts.hostname, opts.sitePath || "");
    const driveId = await getDriveId(token, siteId, opts.libraryName);
    const { fullPath } = await ensureFolderPath(token, driveId, opts.folderPath);
    const useChunked = opts.file.size > 4 * 1024 * 1024;
    const item = useChunked ? await chunkedUpload(token, driveId, fullPath, opts.filename, opts.file) : await simpleUpload(token, driveId, fullPath, opts.filename, opts.file);
    if (opts.metadata && item?.id) {
      await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/items/${item.id}/listItem/fields`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(opts.metadata)
      });
    }
    return { webUrl: item.webUrl, itemId: item.id };
  }
  async function uploadProtocolPdfDefault(file, filename, opts) {
    const upOpts = makeUploadOptions({
      filename,
      file,
      folderPath: opts?.folderPath,
      metadata: opts?.metadata,
      hostname: opts?.hostname,
      sitePath: opts?.sitePath,
      libraryName: opts?.libraryName
    });
    return uploadProtocolPdf(upOpts);
  }
  async function testSharePointAccess() {
    const token = await getToken();
    const siteId = await getSiteId(token, DEFAULT_SP.hostname, DEFAULT_SP.sitePath);
    const res = await fetch(`${AAD.graphBase}/v1.0/sites/${siteId}/drives`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error(`Failed to list drives: ${res.status} ${await res.text()}`);
    const data = await res.json();
    const drives = data.value.map((d) => ({ id: d.id, name: d.name, webUrl: d.webUrl }));
    const def = drives.find((d) => d.name === DEFAULT_SP.libraryName);
    return { siteId, drives, defaultDrive: def };
  }
  async function ensureM365Ready() {
    await ensureLogin();
    try {
      const info = await testSharePointAccess();
      return info;
    } catch (e) {
      throw e;
    }
  }
  function attachGlobal(reason) {
    if (typeof window === "undefined") return;
    const api = {
      AAD,
      DEFAULT_SP,
      ensureLogin,
      ensureM365Ready,
      uploadProtocolPdf,
      uploadProtocolPdfDefault,
      makeUploadOptions,
      testSharePointAccess,
      rebind: () => attachGlobal("manual")
    };
    window.SPUP = { ...window.SPUP || {}, ...api, __attachedAt: (/* @__PURE__ */ new Date()).toISOString(), __reason: reason };
    initPcaOnce().catch((err) => console.warn("[SPUP] MSAL initialize() failed (will retry on demand):", err));
    if (!("__silent" in window.SPUP)) {
      console.info("[SPUP] attached (reason=" + reason + ")", window.SPUP);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachGlobal("domcontentloaded"));
  } else {
    attachGlobal("immediate");
  }
  window.addEventListener("SPUP:rebind", () => attachGlobal("event:rebind"));
})();
/*! Bundled license information:

@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.mjs:
@azure/msal-browser/dist/error/BrowserAuthErrorCodes.mjs:
@azure/msal-browser/dist/error/BrowserAuthError.mjs:
@azure/msal-browser/dist/utils/BrowserConstants.mjs:
@azure/msal-browser/dist/encode/Base64Encode.mjs:
@azure/msal-browser/dist/encode/Base64Decode.mjs:
@azure/msal-browser/dist/crypto/BrowserCrypto.mjs:
@azure/msal-browser/dist/error/BrowserConfigurationAuthErrorCodes.mjs:
@azure/msal-browser/dist/error/BrowserConfigurationAuthError.mjs:
@azure/msal-browser/dist/utils/BrowserUtils.mjs:
@azure/msal-browser/dist/navigation/NavigationClient.mjs:
@azure/msal-browser/dist/network/FetchClient.mjs:
@azure/msal-browser/dist/config/Configuration.mjs:
@azure/msal-browser/dist/packageMetadata.mjs:
@azure/msal-browser/dist/cache/CacheKeys.mjs:
@azure/msal-browser/dist/operatingcontext/BaseOperatingContext.mjs:
@azure/msal-browser/dist/naa/BridgeStatusCode.mjs:
@azure/msal-browser/dist/naa/BridgeProxy.mjs:
@azure/msal-browser/dist/operatingcontext/NestedAppOperatingContext.mjs:
@azure/msal-browser/dist/operatingcontext/StandardOperatingContext.mjs:
@azure/msal-browser/dist/cache/DatabaseStorage.mjs:
@azure/msal-browser/dist/cache/MemoryStorage.mjs:
@azure/msal-browser/dist/cache/AsyncMemoryStorage.mjs:
@azure/msal-browser/dist/crypto/CryptoOps.mjs:
@azure/msal-browser/dist/cache/CookieStorage.mjs:
@azure/msal-browser/dist/cache/CacheHelpers.mjs:
@azure/msal-browser/dist/cache/EncryptedData.mjs:
@azure/msal-browser/dist/cache/LocalStorage.mjs:
@azure/msal-browser/dist/cache/SessionStorage.mjs:
@azure/msal-browser/dist/event/EventType.mjs:
@azure/msal-browser/dist/utils/Helpers.mjs:
@azure/msal-browser/dist/cache/BrowserCacheManager.mjs:
@azure/msal-browser/dist/cache/AccountManager.mjs:
@azure/msal-browser/dist/event/EventHandler.mjs:
@azure/msal-browser/dist/interaction_client/BaseInteractionClient.mjs:
@azure/msal-browser/dist/request/RequestHelpers.mjs:
@azure/msal-browser/dist/interaction_client/StandardInteractionClient.mjs:
@azure/msal-browser/dist/utils/BrowserProtocolUtils.mjs:
@azure/msal-browser/dist/response/ResponseHandler.mjs:
@azure/msal-browser/dist/interaction_handler/InteractionHandler.mjs:
@azure/msal-browser/dist/error/NativeAuthErrorCodes.mjs:
@azure/msal-browser/dist/broker/nativeBroker/NativeStatusCodes.mjs:
@azure/msal-browser/dist/error/NativeAuthError.mjs:
@azure/msal-browser/dist/interaction_client/SilentCacheClient.mjs:
@azure/msal-browser/dist/interaction_client/PlatformAuthInteractionClient.mjs:
@azure/msal-browser/dist/protocol/Authorize.mjs:
@azure/msal-browser/dist/crypto/PkceGenerator.mjs:
@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthExtensionHandler.mjs:
@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthDOMHandler.mjs:
@azure/msal-browser/dist/broker/nativeBroker/PlatformAuthProvider.mjs:
@azure/msal-browser/dist/interaction_client/PopupClient.mjs:
@azure/msal-browser/dist/interaction_client/RedirectClient.mjs:
@azure/msal-browser/dist/interaction_handler/SilentHandler.mjs:
@azure/msal-browser/dist/interaction_client/SilentIframeClient.mjs:
@azure/msal-browser/dist/interaction_client/SilentRefreshClient.mjs:
@azure/msal-browser/dist/cache/TokenCache.mjs:
@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.mjs:
@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.mjs:
@azure/msal-browser/dist/utils/MsalFrameStatsUtils.mjs:
@azure/msal-browser/dist/controllers/StandardController.mjs:
@azure/msal-browser/dist/naa/BridgeError.mjs:
@azure/msal-browser/dist/naa/mapping/NestedAppAuthAdapter.mjs:
@azure/msal-browser/dist/error/NestedAppAuthError.mjs:
@azure/msal-browser/dist/controllers/NestedAppAuthController.mjs:
@azure/msal-browser/dist/controllers/ControllerFactory.mjs:
@azure/msal-browser/dist/app/PublicClientApplication.mjs:
@azure/msal-browser/dist/controllers/UnknownOperatingContextController.mjs:
@azure/msal-browser/dist/operatingcontext/UnknownOperatingContext.mjs:
@azure/msal-browser/dist/app/PublicClientNext.mjs:
@azure/msal-browser/dist/app/IPublicClientApplication.mjs:
@azure/msal-browser/dist/event/EventMessage.mjs:
@azure/msal-browser/dist/crypto/SignedHttpRequest.mjs:
@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.mjs:
@azure/msal-browser/dist/index.mjs:
  (*! @azure/msal-browser v4.24.0 2025-09-24 *)

@azure/msal-common/dist/utils/Constants.mjs:
@azure/msal-common/dist/error/AuthErrorCodes.mjs:
@azure/msal-common/dist/error/AuthError.mjs:
@azure/msal-common/dist/error/ClientAuthErrorCodes.mjs:
@azure/msal-common/dist/error/ClientAuthError.mjs:
@azure/msal-common/dist/crypto/ICrypto.mjs:
@azure/msal-common/dist/logger/Logger.mjs:
@azure/msal-common/dist/packageMetadata.mjs:
@azure/msal-common/dist/authority/AuthorityOptions.mjs:
@azure/msal-common/dist/error/ClientConfigurationErrorCodes.mjs:
@azure/msal-common/dist/error/ClientConfigurationError.mjs:
@azure/msal-common/dist/utils/StringUtils.mjs:
@azure/msal-common/dist/request/ScopeSet.mjs:
@azure/msal-common/dist/account/AccountInfo.mjs:
@azure/msal-common/dist/account/AuthToken.mjs:
@azure/msal-common/dist/utils/UrlUtils.mjs:
@azure/msal-common/dist/url/UrlString.mjs:
@azure/msal-common/dist/authority/AuthorityMetadata.mjs:
@azure/msal-common/dist/error/CacheErrorCodes.mjs:
@azure/msal-common/dist/error/CacheError.mjs:
@azure/msal-common/dist/cache/CacheManager.mjs:
@azure/msal-common/dist/authority/ProtocolMode.mjs:
@azure/msal-common/dist/telemetry/performance/PerformanceEvent.mjs:
@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.mjs:
@azure/msal-common/dist/config/ClientConfiguration.mjs:
@azure/msal-common/dist/account/CcsCredential.mjs:
@azure/msal-common/dist/account/ClientInfo.mjs:
@azure/msal-common/dist/constants/AADServerParamKeys.mjs:
@azure/msal-common/dist/request/RequestParameterBuilder.mjs:
@azure/msal-common/dist/authority/AuthorityType.mjs:
@azure/msal-common/dist/authority/OpenIdConfigResponse.mjs:
@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.mjs:
@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.mjs:
@azure/msal-common/dist/utils/FunctionWrappers.mjs:
@azure/msal-common/dist/authority/RegionDiscovery.mjs:
@azure/msal-common/dist/utils/TimeUtils.mjs:
@azure/msal-common/dist/cache/utils/CacheHelpers.mjs:
@azure/msal-common/dist/authority/Authority.mjs:
@azure/msal-common/dist/authority/AuthorityFactory.mjs:
@azure/msal-common/dist/error/ServerError.mjs:
@azure/msal-common/dist/network/RequestThumbprint.mjs:
@azure/msal-common/dist/network/ThrottlingUtils.mjs:
@azure/msal-common/dist/error/NetworkError.mjs:
@azure/msal-common/dist/client/BaseClient.mjs:
@azure/msal-common/dist/account/TokenClaims.mjs:
@azure/msal-common/dist/cache/entities/AccountEntity.mjs:
@azure/msal-common/dist/error/InteractionRequiredAuthErrorCodes.mjs:
@azure/msal-common/dist/error/InteractionRequiredAuthError.mjs:
@azure/msal-common/dist/utils/ProtocolUtils.mjs:
@azure/msal-common/dist/crypto/PopTokenGenerator.mjs:
@azure/msal-common/dist/cache/persistence/TokenCacheContext.mjs:
@azure/msal-common/dist/response/ResponseHandler.mjs:
@azure/msal-common/dist/utils/ClientAssertionUtils.mjs:
@azure/msal-common/dist/client/AuthorizationCodeClient.mjs:
@azure/msal-common/dist/client/RefreshTokenClient.mjs:
@azure/msal-common/dist/client/SilentFlowClient.mjs:
@azure/msal-common/dist/network/INetworkModule.mjs:
@azure/msal-common/dist/protocol/Authorize.mjs:
@azure/msal-common/dist/request/AuthenticationHeaderParser.mjs:
@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.mjs:
@azure/msal-common/dist/error/JoseHeaderErrorCodes.mjs:
@azure/msal-common/dist/error/JoseHeaderError.mjs:
@azure/msal-common/dist/crypto/JoseHeader.mjs:
@azure/msal-common/dist/telemetry/performance/PerformanceClient.mjs:
@azure/msal-common/dist/index-browser.mjs:
  (*! @azure/msal-common v15.13.0 2025-09-24 *)
*/
