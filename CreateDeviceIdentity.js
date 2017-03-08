'use strict';

var iothub = require('azure-iothub');

var connectionString = 'HostName=iottraining1.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=bnGNNbn9Db+VHQk0HMAPgcOz3MuDw3qgKGY0mFRWx7g=';

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = new iothub.Device(null);
device.deviceId = 'myFirstNodeDevice';
registry.create(device, function (err, deviceInfo, res) {
    if (err) {
        registry.get(device.deviceId, printDeviceInfo);
    }
    if (deviceInfo) {
        printDeviceInfo(err, deviceInfo, res)
    }
});

function printDeviceInfo(err, deviceInfo, res) {
    if (deviceInfo) {
        console.log('Device ID: ' + deviceInfo.deviceId);
        console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
    }
}

//Device ID: myFirstNodeDevice
//Device key: vsaPXJ4l+n4xNC7mHB2BkRMHgzov/8ILEQ1V3WF6S0c=
