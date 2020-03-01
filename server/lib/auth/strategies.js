module.exports = [
    {
        name: 'jwt',
        scheme: 'jwt',
        options: {
            key: 'NeverShareYourSecret',
            // defining our own validate function lets us do something
            // useful/custom with the decodedToken before reply(ing)
            validate: (decoded, request) => true,
            verifyOptions: { algorithms: ['HS256'] }, // only allow HS256 algorithm
            attemptToExtractTokenInPayload: true,
            // using yar as a session cache to store tokens, see: https://github.com/hapijs/yar
            customExtractionFunc: request => {

                console.log('post()');

                if (request.auth && request.auth.token) {
                    request.yar.set('token', request.auth.token)
                    return request.auth.token;
                }
                const token = request.yar.get('token');
                if (token) {
                    return token;
                }
            }
        }
    }
]