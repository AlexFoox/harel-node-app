const UserSymbol = require('../../course-app/models/mysql/user-symbol');

const dashboard = async (req, res, next) => {
    try {
        const userSymbol = new UserSymbol(req.pool);
        const userSymbols = await userSymbol.getForUser({userId: 123});
        res.render('dashboard', {
            username: 'shlomo',
            userSymbols,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = dashboard;
  

