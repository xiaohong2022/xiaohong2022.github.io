/* Box3ToolBox GetVersion Function By XiaoHongXela */
document.getVersions = function (type){
    var data = {
        "edit": "0.1.6",
        "play": "0.1.1",
    };
    try{
        return({
            v: "v"+data[type],
            d: new Date().valueOf()
        });
    } catch (e) {
        return e;
    };
};
