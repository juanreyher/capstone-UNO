export const errorHandler = (err, req, res, next)  =>{
    let response = {
        success: false,
        error: {
            code: err.status || 500,
            message: err.message || "Internal Server Error"
        }
    }

    if(err.status === 404) {
        response.error.code = 404;
        response.error.message = "The requested resource was not found";
    }

    if(err.status === 400) {
        response.error.code = 400;
        response.error.message = "Bad Request";
    }
    
    if(err.status === 401) {
        response.error.code = 401;
        response.error.message = "Unauthorized";
    }

    if(err.status === 403) {
        response.error.code = 403;
        response.error.message = "Forbidden";
    }

    if(err.status === 409) {
        response.error.code = 409;
        response.error.message = "Conflict: Resource already exists";
    }

    res.status(response.error.code).json(response);

}