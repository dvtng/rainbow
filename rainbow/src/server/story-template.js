module.exports = storyUrl => `
<!doctype>
<html>
    <head></head>
    <body>
        <div id="root"></div>
        <script src="/libs.js"></script>
        <script src="${storyUrl}"></script>
        <script src="/runner.js"></script>
    </body>
</html>
`;
