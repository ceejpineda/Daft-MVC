const Daft_Model = require("../Daft_Model");

async function profiler(req, res, next) {
    const lastQuery = await Daft_Model.getLastQuery();
    const queryTime = await Daft_Model.getQueryTime();
    const profile = {
        timeElapsed: queryTime,
        http_request: req.method,
        URI: req.originalUrl,
        memoryUsage: `${process.memoryUsage().heapUsed / 1024} kbs`,
        data: JSON.stringify(req.body),
        lastQuery: lastQuery,
        session: JSON.stringify(req.session),
    };
    console.log(profile);
    appendToBody(res, profile);
    next();
}

function appendToBody(res, data) {
    const sendResponse = res.send;
    const header = `<p style="font-weight: bold">Daft Profiler</p>`;
    const URIString = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                              <p style="font-size: 12px; text-decoration: underline;">URI String:</p>
                              <p>${data.URI}</p>
                          </div>`;
    const HTTPMethod = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                              <p style="font-size: 12px; text-decoration: underline;">HTTP Method:</p>
                              <p>${data.http_request}</p>
                          </div>`;
    const MemoryUsage = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                              <p style="font-size: 12px; text-decoration: underline;">Memory Usage:</p>
                              <p>${data.memoryUsage}</p>
                          </div>`;
    const TotalTime = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                              <p style="font-size: 12px; text-decoration: underline;">Total Time:</p>
                              <p>${data.timeElapsed}</p>
                          </div>`;
    const PostData = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                              <p style="font-size: 12px; text-decoration: underline;">Get/Post Data:</p>
                              <p>${data.data}</p>
                          </div>`;
    const SQLran = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                          <p style="font-size: 12px; text-decoration: underline;">SQL Query:</p>
                          <p>${data.lastQuery}</p>
                      </div>`;
    const Session = `<div style="width: 90%; padding: 10px; margin-top: 10px; background-color: #F5F5F5; border-radius: 5px; box-shadow: 2px 2px 5px #888888;">
                      <p style="font-size: 12px; text-decoration: underline;">Session Data:</p>
                      <p>${data.session}</p>
                  </div>`;
    const profilerDiv = `<div style="display: flex; align-items:center; justify-content:center;">
                            <div style="height: auto; width: 90vw; border: 3px solid #336699; text-align:center; display:flex; justify-content: center; align-items:center; flex-direction: column; margin-top: 2vh; padding: 3vh; gap: 10px; background-color: #F8F8F8;">
                            ${header}
                            ${URIString}
                            ${MemoryUsage}
                            ${HTTPMethod}
                            ${PostData}
                            ${Session}
                            ${SQLran}
                            ${TotalTime}
                            </div>
                        </div>`;
  
    res.send = function (body) {
        body += profilerDiv;
        sendResponse.call(res, body);
    };
}
  
module.exports = profiler;