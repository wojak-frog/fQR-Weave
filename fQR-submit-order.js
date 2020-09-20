document.getElementById('submit-order').addEventListener("click", function(){
    const arweave = Arweave.init();
    arweave.network.getInfo().then(console.log);

    var obj = setInterval(async ()=>{
      clearInterval(obj)


    let transactionA = await arweave.createTransaction({
    data: document.getElementById('product').value
  }, key);

  transactionA.addTag(document.getElementById('price').value);
  await arweave.transactions.sign(transactionA, key);
  const response = await arweave.transactions.post(transactionA);

  console.log(response.status);

   console.log('product ID: ',transactionA.id);

   await arweave.transactions.getData(String(transactionA.id), {decode: true, string: true}).then(data => document.getElementById('prdct_id').innerHTML = ('product id: ', transactionA.id))
  } );

  });