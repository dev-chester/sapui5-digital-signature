sap.ui.define([
  "sap/ui/test/Opa5",
  "com/apptech/signature/test/integration/arrangements/Startup",
  "com/apptech/signature/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
