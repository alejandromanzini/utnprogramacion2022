var moment = require("moment");
moment.locale ("es");
console.log("Naci hace ya " + moment("22/10/1986", "DD/MM/YYYY").fromNow());
