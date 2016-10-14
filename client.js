var peer = new Peer('client', {key: 's92zgm2v12lnmi'});

var conn = peer.connect('server');
conn.on('data', function(data)
{
    console.log(data);
});

console.log("RUNNING");
