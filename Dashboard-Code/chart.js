function init() {
    d3.json("data1.json").then(function(data){
        console.log(data);
    });
};

init();
