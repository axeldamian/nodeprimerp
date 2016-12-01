var fs = require('fs');

if (fs.existsSync(process.argv[2])) {
    // Do something
}

// Or

fs.exists( process.argv[2] , function(exists) {
    if (exists) {
        // Do something
    }
});