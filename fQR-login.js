let key;

	document.getElementById('import').onclick = function() {
	var files = document.getElementById('selectFiles').files;
  console.log(files);
  if (files.length <= 0) {
    return false;
  }
  
  var fr = new FileReader();



  
  fr.onload = function (e) { 
  
    var result = JSON.parse(e.target.result);
    console.log(result)
    console.log(typeof result)
    var formatted = JSON.stringify(result, null, 2);
	key = result;
	
  }
  
  fr.readAsText(files.item(0));
 
  };

    	document.getElementById("login").addEventListener("click", function(){


    	const arweave = Arweave.init();
    	arweave.network.getInfo().then(console.log);
    	var obj = setInterval(async ()=>{
    	clearInterval(obj)
    	arweave.wallets.jwkToAddress(key).then((address) => {
      console.log('public address: ',address);

  });

      
	});

