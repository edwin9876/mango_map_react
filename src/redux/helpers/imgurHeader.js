function imgurHeader() {
    if (process.env.REACT_APP_IMGUR_CLIENT_ID) {
        return { 'Authorization': `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`};
    } else {
        return {};
    }
}


module.exports = imgurHeader