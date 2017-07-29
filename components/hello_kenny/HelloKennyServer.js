var PageComponent = require("ds.base/PageComponent");

var HelloKennyServer = PageComponent.create({
	data: function(attributes, vars) {
		return new StatusResponse('good', {
			message: "Hello Kenny"
		});
	},
	
	type: "HelloKennyServer"
});

module.exports = HelloKennyServer;