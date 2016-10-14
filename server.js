var fun = function(name)
{
    var server_name = 'server' + name;
    var peer = new Peer(server_name, {host: 'localhost', port: 9000});

    var string = (new Array(10*1024*1024)).join("" + i);

    peer.on('connection', function(conn)
    {
        conn.on('data', function(data)
        {
            console.log('.');
            setTimeout(function()
            {
                conn.send(string);
            }, 0);
        });
        
        setTimeout(function()
        {
            conn.send(string);
        }, 1000);
    });
}

for(var i=0; i<10; i++)
{
    fun(i);
}

console.log("RUNNING");
