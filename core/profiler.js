function profiler(req, res, next) {
    const start = new Date();
    res.on('finish', () => {
        const end = new Date();
        const elapsed = end - start;
        console.log(`Request took ${elapsed} ms`);
    });
    
    next();
}
  
module.exports = profiler;