# ARweave-fQR
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
 Using arweave's blockweave concept, each fQR code represent a data transaction. From the generator UI, the user inputs his product's information (in pre-defined fields): string and integers, the output is a `string` :


`let transaction = await arweave.createTransaction( {data: metadata.toString()}, key);`

`metadata` holds the product's information provided by the user. After that, the verified user ID (VID) is attached to the transaction by the `addTag()` method:

`transaction.addTag(VID);`

Then the transaction is signed and broadcasted (posted) in the blockchain by the verified wallet.

in the last step, the QR Code generator transform the transaction ID string into a 2D QR code.
