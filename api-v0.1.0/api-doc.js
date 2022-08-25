const apiDoc = {
    swagger: '2.0',
    basePath: '/',
    info: {
      title: 'Temelio API',
      version: '0.1.0'
    },
    definitions: {
      nonprofitemail: {
        type: 'object',
        properties: {
          email: {
            description: 'The email of a nonprofit',
            type: 'string'
          }
        },
        required: ['email']
      },
      nonprofitname: {
        type: 'object',
        properties: {
          name: {
            description: 'The name of a nonprofit',
            type: 'string'
          }
        },
        required: ['name']
      },
      nonprofitaddress: {
        type: 'object',
        properties: {
          address: {
            description: 'The address of a nonprofit',
            type: 'string'
          }
        },
        required: ['address']
      }
    },
    paths: {}
  };
  
 module.exports = apiDoc;