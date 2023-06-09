using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;
using Fullstack.Models;
using Fullstack.Services;


namespace Fullstack.Controller
{
    [Route("[controller]")]
    [ApiController]
    public class TarefasController : ControllerBase
    {
        private readonly TarefaServices _tarefaServices;

        public TarefasController(TarefaServices tarefaServices)
        {
            _tarefaServices = tarefaServices;
        }

        [HttpGet]
        public async Task<List<Tarefa>> GetTarefas() =>
            await _tarefaServices.GetAsync();

        [HttpPost]
        public async Task<Tarefa> PostTarefa(Tarefa tarefa)
        {
            await _tarefaServices.CreateAsync(tarefa);

            return tarefa;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Tarefa>> DeleteTarefa(string id)
        {
            try
            {
                // Executar a lógica para excluir a tarefa com base no ID
                var tarefa = await _tarefaServices.GetAsync(id); // Obter a tarefa pelo ID

                if (tarefa == null)
                {
                    return NotFound(); // Retorna 404 se a tarefa não existir
                }

                await _tarefaServices.RemoveAsync(tarefa);

                return NoContent(); // Retorna 204 (sem conteúdo) para indicar que a tarefa foi removida com sucesso
            }
            catch (FormatException)
            {
                return BadRequest(); // Retorna 400 se o formato do ID for inválido
            }
            catch (Exception)
            {
                return StatusCode(500); // Retorna 500 se ocorrer algum erro durante o processo de exclusão
            }
        }

    }
}
