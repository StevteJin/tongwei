
  /* global MapVision */
  var view3d = new MapVision.View3d({
    id: 'mapvision3d',
    url: 'http://192.168.0.165:9901',
    projectId: '5nbmjsdljf785208',
    token: 'rt2d645ty3eadaed32268mdta6'
});
export const Common = {
    openClick() {
        view3d.Open();
        setTimeout(function(){
            SetResolution('mapvision3d', view3d);
        },500)

    },
    flyto(code){
         console.log(code)
         view3d.FlyToObjectById(code, false);
    },btn2Click() {
        // 过滤 对象  prefix 对象名称前缀   ，path 路径前缀
        let paramers = {
            prefix: 'M,0,1,2,3,4,5,6,7,8,9',
            path: '',
            speedroute: 10
        };
        // paramers = {
        // 	prefix: '',
        // 	path: '',
        // 	speedroute: 10
        // }
        // debugger
        view3d.SetParameters(paramers);
        view3d.SetMouseCallback(res => {
            let strObj = JSON.stringify(res);
            console.log(strObj);
            // localStorage.setItem('duix',res.gid);
            view3d.FlyToObjectById(res.gid, false);
            var data = {
                switchName: 'hdasjdha',
                Personnel: res,
            }
            window.parent.postMessage(data, '*');
            // alert(strObj);
        });
    },
    SetResolution(options) {
            if (view3d) {
                var divObj = document.getElementById(options);
                if (!divObj) {
                    // alert("error");
                    return;
                }
                var width = divObj.clientWidth;
                var height = divObj.clientHeight;
                view3d.SetResolution(width, height);
            }
        }

    
   

}
//设置屏幕
function SetResolution(options, view3d) {
        if (view3d) {
            var divObj = document.getElementById(options);
            if (!divObj) {
                // alert("error");
                return;
            }
            var width = divObj.clientWidth;
            var height = divObj.clientHeight;
            view3d.SetResolution(width, height);
        }
    }