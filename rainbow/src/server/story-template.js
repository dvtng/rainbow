module.exports = storyUrl => `
<!doctype>
<html>
    <head>
        <style>
            body {
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="/libs.js"></script>
        <script src="${storyUrl}"></script>
        <script src="/runner.js"></script>
    </body>
</html>
`;
