function methodNotAllowed(req,res,next){
    next({
        status: 405,
        message: "Method not allowed."
    })
}

module.exports = {methodNotAllowed}