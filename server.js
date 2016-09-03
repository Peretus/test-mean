// 'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('hello this is server and I am alive!');
});

app.listen(3000);
console.log('Listening on port 3000...');
// /*
// var cl = console.log;
// console.log = function(){
//   console.trace();
//   cl.apply(console,arguments);
// };
// */

// process.env.NODE_CONFIG_DIR = './config/env';

// // Requires meanio .
// var mean = require('meanio');
// var cluster = require('cluster');
// var deferred = require('q').defer();


// // Code to run if we're in the master process or if we are not in debug mode/ running tests

// if ((cluster.isMaster) &&
//   (process.execArgv.indexOf('--debug') < 0) &&
//   (process.env.NODE_ENV!=='test') && (process.env.NODE_ENV!=='development') &&
//   (process.execArgv.indexOf('--singleProcess')<0)) {
// //if (cluster.isMaster) {

//     console.log('for real!');
//     // Count the machine's CPUs
//     var cpuCount = process.env.CPU_COUNT || require('os').cpus().length;

//     // Create a worker for each CPU
//     for (var i = 0; i < cpuCount; i += 1) {
//         console.log ('forking ',i);
//         cluster.fork();
//     }

//     // Listen for dying workers
//     cluster.on('exit', function (worker) {
//         // Replace the dead worker, we're not sentimental
//         console.log('Worker ' + worker.id + ' died :(');
//         cluster.fork();

//     });

// // Code to run if we're in a worker process
// } else {

//     var workerId = 0;
//     if (!cluster.isMaster)
//     {
//         workerId = cluster.worker.id;
//     }
// // Creates and serves mean application
//     mean.serve({ workerid: workerId /* more options placeholder*/ }, function (app) {
//       var config = app.getConfig();
//       var port = config.https && config.https.port ? config.https.port : config.http.port;
//       console.log('Mean app started on port ' + port + ' (' + process.env.NODE_ENV + ') cluster.worker.id:', workerId);

//       deferred.resolve(app);
//     });
// }

// module.exports = deferred.promise;
