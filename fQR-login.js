let key;

	document.getElementById('import').onclick = function() {
	var files = document.getElementById('selectFiles').files;
  console.log(files);
  if (files.length <= 0) {
    return false;
  }
  
  var fr = new FileReader();



  
  fr.onload = function(e) { 
  // console.log(typeof e.target.result);
    var result = JSON.parse(e.target.result);
    console.log(result)
    console.log(typeof result)
    var formatted = JSON.stringify(result, null, 2);
		// document.getElementById('result').value = formatted;
		// console.log(formatted)
		// return formatted

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

      // submit a test product transaction
	   let transactionP = await arweave.createTransaction({
     data: 'product test \n offer: sale 7%'
  }, key);

	   transactionP.addTag('free shipping', 'no coupons');
	   await arweave.transactions.sign(transactionP, key);
	   const response = await arweave.transactions.post(transactionP);

	   console.log(response.status);

	   console.log('product ID: ',transactionP.id);

	   await arweave.transactions.getData(String(transactionP.id), {decode: true, string: true}).then(data => console.log('product data: ', data))
	});



  })
