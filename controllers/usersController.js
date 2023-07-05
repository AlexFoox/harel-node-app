const addSymbol = async (req, res, next) => {
    try {
        console.log("controller addSymbol req: ", req)
        console.log("controller addSymbol res: ", res)
        res.send("added valid symbol");

        // const userSymbol = new UserSymbol(req.db);
        // await userSymbol.add({
        //     userId: req.user.id,
        //     symbol: req.body.symbol,
        // });
        //res.redirect('/dashboard');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    addSymbol
}
