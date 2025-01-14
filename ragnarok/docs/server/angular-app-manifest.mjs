
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 4919, hash: '7ab7220a239e6dab793eaca56c83a3085675b85a86badcafdbd54ff8eac12a6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'dd4c3e8a76aa9d608e757e5c5d8c3a4f24df3dedb0938ca1bfb687fc475e2d20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19073, hash: '966195c76d7e2fdcfe1347fd2eff65ebe7af415c71c192c70b96892ba746ab1a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
