public class Venta
{
    public int IdVenta { get; set; }
    public int? IdPersona { get; set; }
    public decimal? Total { get; set; }
    public DateTime FechaCreacion { get; set; }

    // Relaciones
    public Persona Persona { get; set; }
    public List<DetalleVenta> DetallesVenta { get; set; }
}
