$(function() {
    function FanspeedViewModel(parameters) {
        var self = this;

        self.fanspeedViewModel = parameters[0];

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin != "fanspeed") {
                return;
            }

            console.log("FanspeedViewModel: fanspeed "+data.speed);
            $("#NavbarFanspeed").text(data.speed);
        };
    }


    OCTOPRINT_VIEWMODELS.push([
        FanspeedViewModel,
        [],
        ["#NavbarFanspeed"]
    ]);

});
