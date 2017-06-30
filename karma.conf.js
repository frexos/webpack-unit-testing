module.exports = (config) => {
    const tests = 'tests/*.test.js';
    const path = require('path');

    process.env.BABEL_ENV = 'karma';

    config.set({
        frameworks: ['mocha'],

        files: [
            {
                pattern: tests,
            },
        ],

        preprocessors: {
            [tests]: ['webpack'],
        },

        singleRun: true,

        browsers: ['PhantomJS'],

        webpack: require('./webpack.parts').loadJavaScript({
            include: path.join(__dirname, 'tests'),
        }),

        reporters: ['coverage'],

        coverageReporter: {
            dir: 'build',
            reporters: [
                { type: 'html' },
                { type: 'lcov' },
            ],
        },
    });
};
