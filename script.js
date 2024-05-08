function loadData(){
    var load = new XMLHttpRequest();
    load.open('GET','http://localhost:5500/index.html',true);
    load.onreadystatechange = function(){
        if(load.readyState === 4 && load.status === 200){
            var response = load.responseText;
            document.getElementById('data').innerHTML= response;
        }else if(load.readyState=== 4){
            alert('failed to load data.');
        }
    };
     load.send("loaded");
}