$(function() {
    function FanspeedViewModel(parameters) {
        var self = this;

        self.fanspeedViewModel = parameters[0];

        self.speed = ko.observable();
        self.speed("N/A")

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin != "fanspeed") {
                return;
            }

            self.speed(data.speed)
            console.log("FanspeedViewModel: fanspeed "+data.speed);
        };
    }


    OCTOPRINT_VIEWMODELS.push([
        FanspeedViewModel,
        [],
        ["#NavbarFanspeed"]
    ]);

});
