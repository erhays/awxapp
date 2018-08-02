import Head from '../components/Head'
import Nav from '../components/Nav'

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">
      {children}
    </div>

    <style jsx global>{`
      @font-face {
        font-family: 'SF UI Display';
        src: url('./fonts/sf-ui-display-thin.eot');
        src: url('./fonts/sf-ui-display-thin.eot?#iefix') format('embedded-opentype'),
             url('./fonts/sf-ui-display-thin.woff2') format('woff2'),
             url('./fonts/sf-ui-display-thin.woff') format('woff'),
             url('./fonts/sf-ui-display-thin.ttf') format('truetype'),
             url('./fonts/sf-ui-display-thin.svg#san_francisco_displaythin') format('svg');
        font-weight: 300;
        font-style: normal;

      }

      @font-face {
        font-family: 'SF UI';
        src: url('./fonts/sf-ui-text-regular.eot');
        src: url('./fonts/sf-ui-text-regular.eot?#iefix') format('embedded-opentype'),
             url('./fonts/sf-ui-text-regular.woff2') format('woff2'),
             url('./fonts/sf-ui-text-regular.woff') format('woff'),
             url('./fonts/sf-ui-text-regular.ttf') format('truetype'),
             url('./fonts/sf-ui-text-regular.svg#san_francisco_textregular') format('svg');
        font-weight: normal;
        font-style: normal;

      }

      article, aside, footer, header, hgroup, main, nav, section {
        display: block;
      }

      body {
        font-family: 'Zilla Slab', Helvetica, sans-serif;
        line-height: 1;
        font-size: 18px;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .util__flex {
        display: flex;
      }

      .util__flex-col {
        flex: 0 0 auto;
      }

      .util__flex-eq {
        flex: 1;
      }

      .util__container {
        max-width: 75rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
      }

      #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    `}</style>
  </div>
)