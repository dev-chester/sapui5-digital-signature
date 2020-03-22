sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.apptech.signature.controller.MainView", {
    onInit: function() {
   sap.m.MessageToast.show("TEST");

},  onMyFucntion: function() {


 // window.open('/sig/index.html','_blank');



  //var oFrame = sap.ui.getCore().byId("container-signature---idAppControl--my_iframe"); //Get Hold of iframe
//var oAttributes = oFrame._xContent.attributes; //iframe Attributes


//sap.m.MessageToast.show(localStorage.getItem("lastname"));
//alert(localStorage.getItem("lastname"));
//var oCanvas = sap.ui.getCore().byId("container-signature---idAppControl--my_iframe"); 
window.open('/sig/index.html','example', 'width=560,height=340,toolbar=0,menubar=0,location=0');
//window.open('/sig/index.html', "_blank", "toolbar=1, scrollbars=1, resizable=1, width=" + 1015 + ", height=" + 800);
},
  onGetFunction: function() {





var dataimage = this.getView().byId("myData").setValue(localStorage.getItem("lastname"));
localStorage.clear();
},

  });
});
