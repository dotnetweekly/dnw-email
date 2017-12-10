const BaseAutoBindedClass = require('../helpers/base.autobind');
const ResponseManager = require('../handlers/response');
const UnauthorizedError = require('../error/unauthorized');

class BaseController extends BaseAutoBindedClass {
	constructor() {
		super();

		if (new.target === BaseController) {
			throw new TypeError('Cannot construct BaseController instances directly');
		}
		this._responseManager = ResponseManager;
	}

	getAll(req, res) {}

	get(req, res) {}

	create(req, res) {}

	update(req, res) {}

	remove(req, res) {}
}

module.exports = BaseController;
