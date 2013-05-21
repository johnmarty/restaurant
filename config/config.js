module.exports = function(){
	var devConfig = {
            			server: {
            				port: 3000
            			},
            			database: {
            				restaurant: {
            					dbname: "restaurant",
	            				url: "http://127.0.0.1",
	            				port: "5984",        				
		            			auth: {
		            				user: "restaurantAdmin",
		            				pass: "secretRestaurantPassword"
		            			}
            				}
            			}
        			},
        prodConfig = {
            			server: {
            				port: 3000
            			},
            			database: {
            				restaurant: {
            					dbname: "restaurant",
	            				url: "https://nodejitsudb1532852894.iriscouch.com",
	            				port: "6984",        				
		            			auth: {
		            				user: "restaurantAdmin",
		            				pass: "secretRestaurantPassword"
		            			}
            				}
            			}
        			};
    switch(process.env.NODE_ENV){
        case 'development':
            return devConfig;
        case 'production':
            return prodConfig;
        default:
            return devConfig;
    }
};