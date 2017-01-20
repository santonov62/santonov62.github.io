var onesignal = require('node-opensignal-api');
var onesignal_client = onesignal.createClient();
 
var restApiKey = 'OWQ4N2I3NjUtZmU2Mi00NWViLThlODUtMzIzZDAyYmIyZDYz';
var params = {
    app_id: 'cc015a89-8134-4df2-a060-320ccbc157d6',
    contents: {
        'en': 'Notification body'
    },
    included_segments: ['Active Users']
};
onesignal_client.notifications.create(restApiKey, params, function (err, response) {
    if (err) {
    	console.log('Encountered error', err);
  	} else {
    	console.log(response);
  	}
});