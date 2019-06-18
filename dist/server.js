"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

async function main() {
    const app = new (0, _app2.default)();
    await app.listen();
}

/** Inicia o servidor */
main();