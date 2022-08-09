module.exports = (api_key) =>
    (req, res, next) => {
        const authHeader = req.get('apikey');
        if (authHeader === api_key) {
            next();
        } else {
            res.status(401).send({
                message: 'Unauthorized'
            });
        }
    };
