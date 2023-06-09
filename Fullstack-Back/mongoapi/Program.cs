using Fullstack.Models;
using Fullstack.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors( options => 
    options.AddPolicy("AllowLocalHost", policy => {
        policy.WithOrigins("http://localhost:5501", "http://127.0.0.1:5501/", "http://localhost:5500", "http://127.0.0.1:5500", 
            "https://64604bacfe86343760d4fd72--atividade-fullstack.netlify.app/", "https://64605a1a0c7e9636e12811fb--atividade-fullstack.netlify.app/", "http://localhost:7096", "http://localhost:5107",
            "http://localhost:3000/", "https://localhost:19006/", "http://localhost:19006/", "http://192.168.0.105/", "http://192.168.0.103/")
        .SetIsOriginAllowed(isOriginAllowed: _ => true)
        .AllowAnyHeader().AllowAnyMethod();
    })
);

builder.Services.Configure<TarefaDatabaseSettings>
    (builder.Configuration.GetSection("DevNetStoreDatabase"));

builder.Services.AddSingleton<TarefaServices>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowLocalHost");

app.UseAuthorization();

app.MapControllers();

app.Run();
