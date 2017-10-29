using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

//https://www.youtube.com/watch?v=R3UJjSAH6bM

namespace KnowtShareCore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services

            services.AddSignalR();
            services.AddCors(options => {
                options.AddPolicy("allowAny", x => {
                    x.AllowAnyHeader();
                    x.AllowAnyMethod();
                    x.AllowAnyOrigin();
                });
            });

            // Inject an implementation of ISwaggerProvider with defaulted settings applied
            //services.AddSwaggerGen();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseFileServer();


            app.UseCors("allowAny");

            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("chathub");
                routes.MapHub<ShapeHub>("shapehub");
            });

            //https://github.com/domaindrivendev/Ahoy
            // Enable middleware to serve generated Swagger as a JSON endpoint
            //app.UseSwagger();

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            //app.UseSwaggerUI(options => {
            //    //options.DocExpansion
            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
