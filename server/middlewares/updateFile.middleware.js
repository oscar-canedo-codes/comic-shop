// HANDLE FORM DATA FOR UPLOADS
const multer = require('multer');

// IMPORT
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// STORAGE CONFIG -> IMG FOLDER : ALLOWED FORMATS
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'comics',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
    }
})

const upload = multer({ storage });

module.exports = upload;