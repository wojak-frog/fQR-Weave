document.getElementById('search').addEventListener("click", function(){
       
        const arweave = Arweave.init();
        
          
        var obj = setInterval(async ()=>{
        clearInterval(obj)
        
        let verifiedWalletsArray = [];
        const address = 'MtgIRVxVRaooHlL3vHE4Bu875vtnDelgJzwrZ7WnDyo'
        let res = await arweave.wallets.getLastTransactionID(address)
        
        arweave.transactions.getData(res, {decode:true, string:true}).then(data => {
        verifiedWalletsArray = (data.split(' '));

          getVrfdAdrs();
        })
    
        function getVrfdAdrs() {

          console.log(verifiedWalletsArray)

          let obj2 = setInterval(async ()=>{
          clearInterval(obj2)

          let tx = arweave.transactions.get(String(document.getElementById('product').value)).then(hash => {
            console.log(hash)
            if ( (verifiedWalletsArray.find(owner => owner === hash['owner'])) ) {
              window.open(`https://arweave.net/${document.getElementById("product").value}`)
            } else {alert('invalid hash ID')}

            })
           });
        }   
    
      }) })
