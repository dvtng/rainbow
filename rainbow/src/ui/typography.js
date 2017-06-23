import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
        font-family: 'Lily Script One';
        font-style: normal;
        font-weight: 400;
        src: local('Lily Script One'),
             local('LilyScriptOne-Regular'),
             url('/lily-script-one/LilyScriptOne-Regular.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
    }
`;

export default styled.div`
    font-family: sans-serif;
    font-size: 18px;
`;
