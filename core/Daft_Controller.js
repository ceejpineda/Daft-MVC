class Daft_Controller {
    constructor() {
      this.data = {};
    }
  
    static async profiler(req, res, next) {
      let profile = {
        timeElapsed: 0,
        http_request: req.method,
        URI: req.originalUrl,
        memoryUsage: `${process.memoryUsage().heapUsed} bytes`,
        data: JSON.stringify(req.body),
        timeStart: new Date(),
      };
  
      const start = new Date();
  
      res.on('finish', () => {
        const end = new Date();
        const elapsed = end - start;
        profile.timeElapsed = `${elapsed} ms`;
        res.locals.profiler = profile; // Add profiler data to response locals
      });
  
      await next();
    }
  }


    function appendToBody(res, data) {
        const sendResponse = res.send;
        const header = `<p style="font-weight: bold">Daft Profiler</p>`;
        const URIString = `<div style="width: 90%; outline: 1px solid red;">
                                  <p style:"font-size: 12px; text-decoration: underline;">URI String:</p>
                                  <p>${data.URI}</p>
                              </div>`;
        const HTTPMethod = `<div style="width: 90%; outline: 1px solid red;">
                                  <p style:"font-size: 12px; text-decoration: underline;">HTTP Method:</p>
                                  <p>${data.http_request}</p>
                              </div>`;
        const MemoryUsage = `<div style="width: 90%; outline: 1px solid red;">
                                  <p style:"font-size: 12px; text-decoration: underline;">Memory Usage:</p>
                                  <p>${data.memoryUsage}</p>
                              </div>`;
        const TotalTime = `<div style="width: 90%; outline: 1px solid red;">
                                  <p style:"font-size: 12px; text-decoration: underline;">Total Time:</p>
                                  <p>${data.timeElapsed}</p>
                              </div>`;
        const PostData = `<div style="width: 90%; outline: 1px solid red;">
                                  <p style:"font-size: 12px; text-decoration: underline;">Get/Post Data:</p>
                                  <p>${data.data}</p>
                              </div>`;
        const profilerDiv = `<div style="height: auto; width: 100vw; outline: 3px solid gray; text-align:center; display:flex; justify-content: center; align-items:center; flex-direction: column; margin-top: 2vh; padding: 3vh; gap: 10px;">
                              ${header}
                              ${URIString}
                              ${MemoryUsage}
                              ${TotalTime}
                              ${HTTPMethod}
                              ${PostData}
                              </div>`;
      
        res.send = function (body) {
          body += profilerDiv;
          sendResponse.call(res, body);
        };
}

module.exports = Daft_Controller;