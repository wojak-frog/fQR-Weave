# fQR Weave
a new QR code based on ARweave blockchain to replace and solve the trustless 3rd parties (Retailers): https://fqrweave.tech

<h1>What is Arweave blockchain?</h1>
<p>Arweave is an information technology company that specializes in data storage, blockchain, and serverless web. It features a software platform thet offers unparalleled levels of data replication and security for users and financial inc</p>

<h1>fQR Weave Alpha Release</h1>
<p>In the current version (alpha release), both fQR Generator and fQR Reader are available for testing. In the further versions, fQR Generator will be custom for each
product's owner (user) only:</p>
<ul>
  <li> <a href="https://hjyckowqnnzrgirl3sqwz65youx2t75fsaojrea2odcjos5xjf3q.arweave.net/OnAlOtBrcxMiK9yhbPu4dS-p_6WQHJiQGnDEl0u3SXc">fQR Generator</a> </li>
  <li> <a href="https://ahuakhbrcivsfiiwvukizwxihgtm7voycntibfrtog2a53oeajba.arweave.net/AegFHDESKyKhFq0UjNroOabP1dgTZoCWM3G0Du3EAkI">fQR Reader</a> </li>
</ul>

 <h3>fQR Generator:</h3>
 Using arweave's blockweave concept, each fQR code represent a data transaction. From the generator UI, the user inputs his product's information (in pre-defined fields): string and integers, the output is a string :


`let transaction = await arweave.createTransaction( {data: metadata.toString()}, key);`

`metadata` holds the product's information provided by the user. After that, the verified user ID (VID) is attached to the transaction by the `addTag()` method:

`transaction.addTag(VID);`

Then the transaction is signed and broadcasted (posted) in the blockchain by the verified wallet.

in the last step, the QR Code generator transform the transaction ID string into a 2D QR code:

  <center><img src="https://i.ibb.co/P4jJbyL/fqr-tx.png" alt="fqr-tx" border="0"></center><br>

<h3>fQR Reader:</h3>
The scanner concept is simple in the alpha release. the fQR code is scanned using the <a href="https://github.com/wojak-frog/ARweave-fQR/blob/master/fqrReader/bundle.js">QR code reader</a>, then the transaction ID data are decoded manually by the user:

  `await arweave.transactions.getData( String(document.getElementById("product").value ), {decode: true, string: true}).then( function(data) {document.getElementById('tx_data').innerHTML = data} )`
  
The destroying functionality will be implemented in the next version, which overrides generated transactions with fQR Weave "destroying transactions".

<h3>Try it out:</h3>
<ul>
  <li>First you need to create an arweave wallet with AR balance. <a href="https://www.arweave.org/wallet">Tap here to claim a token</a></li>
  <li>Login with your wallet at <a href="https://chko2ym6yzz34hzmtt6mycaozsese5cgqkhwbupw7xillsm5qm4a.arweave.net/EdTtYZ7Gc74fLJz8zAgOzIkidEaCj2DR9v3Qtcmdgzg">fQR Generator</a> and generate your first fQR !</li>
  

<h2>Useful Links:</h2>

  <h3>Learn more about:</h3>
  <ul>
    <li><a href="https://l33wlywrm5ainklcefljurvcbxamf5o2cujqgfda5xzi2powi3ga.arweave.net/Xvdl4tFnQIapYiFWmkaiDcDC9doVEwMUYO3yjT3WRsw">fQR Weave project</a></li>
    <li><a href="https://hjyckowqnnzrgirl3sqwz65youx2t75fsaojrea2odcjos5xjf3q.arweave.net/OnAlOtBrcxMiK9yhbPu4dS-p_6WQHJiQGnDEl0u3SXc">fQR Generator<a></li>
    <li><a href="https://ahuakhbrcivsfiiwvukizwxihgtm7voycntibfrtog2a53oeajba.arweave.net/AegFHDESKyKhFq0UjNroOabP1dgTZoCWM3G0Du3EAkI">fQR Reader</a></li>
  </ul>
  
  <h3>fQR Weave listings:</h3>
  <ul>
  <li><a href="https://mtfvznw2pwxykoicvxpoe7ao5rp4nhaueueux2bbe4klxankdhra.arweave.net/ZMtcttp9r4U5Aq3e4nwO7F_GnBQlCUvoIScUu4GqGeI/#">Arweave Apps</a></li>
  <li><a href="https://community.xyz/#k_YRh48Ex8SKU5MOnYcgNhTZBFNiJ1Kx1Ouv_mV5dD8"></a>Community.XYZ</li>
  </ul>
  
  <h3>Social media links:</h3>
  <ul>
  <li><a href="https://twitter.com/Fqr_Weave">Twitter</a></li>
  <li><a href="https://discord.com/invite/pcdGGs">Discord</a></li>
  <li><a href="https://t.me/fqr_weave">Telegram</a></li>
  </ul>
  
  <h1>License:</h1>
  MIT license
  @ copyright 2020 fQR Weave
  
