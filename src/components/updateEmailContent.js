const path = require('path');
const fs = require('fs-extra');

class UpdateEmailContent {
	constructor(token) {
    this.token = token;
	}

	getTmpl() {
		return  fs.readFileSync(path.resolve(__dirname, '../../template/updateEmailContent.html'), 'utf-8');
	}
	generate(token = "") {
		let linkTmpl = this.getTmpl();
    linkTmpl = linkTmpl.replace(/(\${ACTIVATE_TOKEN})/gim, this.token);
		return linkTmpl;
	}
}

module.exports = UpdateEmailContent;
