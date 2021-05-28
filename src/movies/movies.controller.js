const service = require("./movies.service.js")

async function list (req, res, next){
    const movies = await service.list()
    res.status(200).send({ data: movies })
}


module.exports = {
    list : list,
}