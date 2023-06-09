using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Fullstack.Models;

namespace Fullstack.Services
{
    public class TarefaServices
    {
        private readonly IMongoCollection<Tarefa> _tarefaCollection;

        public TarefaServices(IOptions<TarefaDatabaseSettings> tarefaServices)
        {

            var mongoClient = new MongoClient(tarefaServices.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tarefaServices.Value.DatabaseName);

            _tarefaCollection = mongoDatabase.GetCollection<Tarefa>(tarefaServices.Value.TarefaCollectionName); 
        }

        public async Task<List<Tarefa>> GetAsync() =>
            await _tarefaCollection.Find(x => true)
                .ToListAsync();
            
        public async Task<Tarefa> GetAsync(string id) =>
            await _tarefaCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync ( Tarefa tarefa) =>
            await _tarefaCollection.InsertOneAsync(tarefa);

        public async Task UpdateAsync ( string id, Tarefa tarefa) =>
            await _tarefaCollection.ReplaceOneAsync(x => x.Id == id, tarefa);

        public async Task RemoveAsync(Tarefa tarefa) =>
            await _tarefaCollection.DeleteOneAsync(x => x.Id == tarefa.Id);

            
    }
}