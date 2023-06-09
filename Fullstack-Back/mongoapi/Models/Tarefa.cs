using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;


namespace Fullstack.Models
{
    [BsonIgnoreExtraElements]
    public class Tarefa
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Titulo")]
        public string? Titulo { get; set; }
        [BsonElement("Descricao")]
        public string? Descricao { get; set; }
        public DateTime DataTermino { get; set; }
    }

}