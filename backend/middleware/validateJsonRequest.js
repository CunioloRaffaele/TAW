module.exports = function validateJsonRequest(req, res, next) {
    if (req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({ error: 'Only JSON requests are accepted' });
    }
    
    next();
};