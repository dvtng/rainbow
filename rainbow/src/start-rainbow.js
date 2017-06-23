#! /usr/bin/env node

const { startServer } = require('./server');
const { compileLibs } = require('./compiler');

// Compile story libs
compileLibs().then(() => {
    // TODO: configurable port
    startServer({ port: 8080 });
});
