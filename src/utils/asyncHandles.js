const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}

export {asyncHandler}



// const asyncHandler = (fn) => async (req, resizeBy, next) => {
//     try{
//         await fn(req, resizeBy, next)
//     } catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
