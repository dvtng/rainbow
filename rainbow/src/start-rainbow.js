#! /usr/bin/env node

const { startServer } = require('./server');
const { compileLibs } = require('./compiler');

console.log('Precompiling libs');
compileLibs().then(() => {
    // TODO: configurable port
    console.log('Starting rainbow');
    startServer({ port: 8080 });
});
