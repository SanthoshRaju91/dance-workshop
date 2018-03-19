export const config = {
    expireTime: '30d',
    secrets: {
        JWT_SECRET: 'secret'
    },
    db: {
        url: 'mongodb://localhost:27017/dance'
    }    
}