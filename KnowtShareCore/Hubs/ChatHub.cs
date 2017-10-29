using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using System.IO;
using Newtonsoft.Json;

// https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
// https://damienbod.com/2017/09/12/getting-started-with-signalr-using-asp-net-core-and-angular/
// https://blog.3d-logic.com/2017/09/18/the-signalr-for-asp-net-core-javascript-client-part-1-web-applications/


namespace KnowtShareCore
{

    //https://github.com/aspnet/SignalR/tree/dev/samples/SocialWeather
    //public class JsonStreamFormatter<T> : IStreamFormatter<T>
    //{
    //    private JsonSerializer _serializer = new JsonSerializer();

    //    public async Task<T> ReadAsync(Stream stream)
    //    {
    //        var reader = new JsonTextReader(new StreamReader(stream));
    //        // REVIEW: Task.Run()
    //        return await Task.Run(() => _serializer.Deserialize<T>(reader));
    //    }

    //    public Task WriteAsync(T value, Stream stream)
    //    {
    //        var writer = new JsonTextWriter(new StreamWriter(stream));
    //        _serializer.Serialize(writer, value);
    //        writer.Flush();
    //        return Task.FromResult(0);
    //    }
    //}

    public class ChatHub : Hub
    {

        public Task SayHello()
        {
            return Clients.All.InvokeAsync("hello");
        }

        public Task Send(object message)
        {
            return Clients.All.InvokeAsync("Send", message);
        }

        public Task SendFrom(string sender, string message)
        {
            // Call the broadcastMessage method to update clients.
            return Clients.All.InvokeAsync("ReceiveFrom", sender, message);
        }


        public Task Broadcast(string channel, object message)
        {
            return Clients.All.InvokeAsync(channel, message);
        }
    }
}
