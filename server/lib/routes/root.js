module.exports = [{
    method: 'POST',
    path: '/',
    handler: (request, response) => {
        console.log('post')
        return {}
    },
    config: {
        auth: {
            strategies: ['jwt'],
            payload: 'required'
        }
    }
}]