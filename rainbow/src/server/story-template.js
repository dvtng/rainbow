module.exports = ({ storyPort }) => `
<!doctype>
<html>
    <head></head>
    <body>
        <div id="root"></div>
        <script src="/libs.js"></script>
        <script src="//localhost:${storyPort}/story.js"></script>
        <script src="/runner.js"></script>
    </body>
</html>
`;
