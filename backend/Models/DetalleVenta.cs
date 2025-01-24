public class DetalleVenta
{
    public int IdDetalleVenta { get; set; }
    public int? IdVenta { get; set; }
    public int? IdProducto { get; set; }
    public int? Cantidad { get; set; }
    public decimal? Total { get; set; }

    // Relaciones
    public Venta Venta { get; set; }
    public Producto Producto { get; set; }
}
