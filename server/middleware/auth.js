function auth(req, res, next) {
    try {
        console.log(req.cookies);
    } catch(err) {
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;