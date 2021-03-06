/**
 * Created by Administrator on 2015/11/24.
 */

ftitAppModule.factory('Posts', function ($http) {
        var Posts = function () {
                 this.items = [];
               this.busy = false;
              this.after = '';
             this.page = 0;
            };
   
        Posts.prototype.nextPage = function () {
                 if (this.busy) return;
              this.busy = true;
      
               var url = "http://192.168.3.95:7002/api/post/nextpage?id=" + this.page + "&callback=JSON_CALLBACK";
              $http.jsonp(url).success(function (data) {
                      var items = data;
                     for (var i = 0; i < items.length; i++) {
                              this.items.push(items[i]);
                        }
                       this.after = "t3_" + this.items[this.items.length - 1].id;
                      this.busy = false;
                      this.page += 1;
                  }.bind(this));
            };
   
        return Posts;
     });