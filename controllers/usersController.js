const UserSymbol = require('../../course-app/models/mysql/user-symbol');

const addSymbol = async (req, res, next) => {
    try {
        console.log(`added valid symbol ${req.body.symbol}`)
        const userSymbol = new UserSymbol(req.pool);
        await userSymbol.create({
            userId: 123,
            symbol: req.body.symbol
        });
        res.send(`added valid symbol ${req.body.symbol}`);
    } catch (err) {
        console.log(`added NOT valid symbol ${req.body.symbol}  ERROR ${err.message}`)
        next(err);
    }
}

module.exports = {
    addSymbol
}
