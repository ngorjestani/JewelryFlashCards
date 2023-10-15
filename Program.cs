using Microsoft.AspNetCore.HttpLogging;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add swagger documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpLogging(logging =>
{
    logging.LoggingFields = HttpLoggingFields.All;
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    // Serve static files front ClientApp/dist 
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "ClientApp", "dist")),
        RequestPath = ""
    });

    app.MapFallback(async context =>
    {
        context.Response.ContentType = "text/html";
        await context.Response.SendFileAsync(Path.Combine(builder.Environment.ContentRootPath, "ClientApp", "dist", "index.html"));
    });
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    var swaggerBasePath = "api";
    
    app.UseSwagger(x => x.RouteTemplate = $"{swaggerBasePath}/swagger/{{documentName}}/swagger.json");
    app.UseSwaggerUI(x =>
    {
        x.SwaggerEndpoint($"../swagger/v1/swagger.json", "JewelryFlashCards");
        x.RoutePrefix = $"{swaggerBasePath}/swagger";
    });
}

app.UseHttpLogging();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
