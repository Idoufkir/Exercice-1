module.exports = (api_key) =>
    (req, res, next) => {
        const authHeader = req.get('Authorization');
        if (authHeader === api_key) {
            next();
        } else {
            res.status(401).send({
                message: 'Unauthorized'
            });
        }
    };
