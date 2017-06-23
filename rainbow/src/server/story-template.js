module.exports = ({ storyFile }) => `
<!doctype>
<html>
    <head></head>
    <body>
        <div id="root"></div>
        <script src="/libs.js"></script>
        <script src="/story-file/${encodeURI(storyFile)}"></script>
        <script src="/runner.js"></script>
    </body>
</html>
`;
