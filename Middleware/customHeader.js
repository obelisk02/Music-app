const customHeader = (req,res,next) => {
    try {
        const apiKey = req.headers.api_key
        console.log(apiKey);
        if (apiKey == "Login") {
        next();
        }

        else { 
            res.status(403)
            res.send({error: "API key no correcta"})
            console.log("api mala");
            }
    } catch (e) {
        res.status(403)
        res.send({error: "Error en custom header"})
        console.log("api mala");
    }
}

module.exports = customHeader