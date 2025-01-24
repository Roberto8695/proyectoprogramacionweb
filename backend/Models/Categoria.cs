public class Categoria
{
    public int IdCategoria { get; set; }
    public string Nombre { get; set; }
    public DateTime FechaCreacion { get; set; }
    
    public ICollection<Producto> Productos { get; set; }  // Relación con productos
}
