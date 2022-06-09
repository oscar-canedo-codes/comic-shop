const cloudinary = require('cloudinary').v2

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: 'oscar-canedo-codes', 
        api_key: '831338318718981', 
        api_secret: 'tD4N4oVFvey9dmBsNGLHrYx10Ak' 
    })
}

module.exports = { configCloudinary };