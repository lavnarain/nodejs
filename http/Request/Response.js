function parseJSON(req, res, next) {
    if (req.headers['content-type'] == 'application/json') {
    // Load all the data
    var readData = '';
    req.on('readable', function () {
    readData += req.read();
    });
    // Try to parse
    req.on('end', function () {
    try {
    req.body = JSON.parse(readData);
    }
    catch (e) { }
    next();
    })
    }
    else {
    next();
    }
    }