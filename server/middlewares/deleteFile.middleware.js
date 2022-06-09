const cloudinary = require('cloudinary').v2

// PASS URL TO DELETE FROM CLOUDINARY

const deleteImgCloudinary = (imgUrl) => {
    const imgSplit = imgUrl.split('/')
    const nameSplit = imgSplit[imgSplit.length - 1].split('.')
    const folderSplit = imgSplit[imgSplit.length - 2]
    const public_id = `${folderSplit}/${nameSplit[0]}`;
    cloudinary.uploader.destroy(public_id, () => {
        console.log('Image deleted in cloudinary')
    })
}

module.exports = { deleteImgCloudinary }