using Microsoft.EntityFrameworkCore;

public class TiendaDbContext : DbContext
{
    public TiendaDbContext(DbContextOptions<TiendaDbContext> options) : base(options) { }

    public DbSet<Categoria> Categorias { get; set; }
    public DbSet<DetalleVenta> DetallesVenta { get; set; }
    public DbSet<Persona> Personas { get; set; }
    public DbSet<Producto> Productos { get; set; }
    public DbSet<Venta> Ventas { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Relación de uno a muchos entre Venta y DetalleVenta
        modelBuilder.Entity<DetalleVenta>()
            .HasOne(d => d.Venta)
            .WithMany(v => v.DetallesVenta)
            .HasForeignKey(d => d.IdVenta);

        // Relación de uno a muchos entre Producto y Categoria
        modelBuilder.Entity<Producto>()
            .HasOne(p => p.Categoria)
            .WithMany()
            .HasForeignKey(p => p.IdCategoria);

        // Relación de uno a muchos entre Venta y Persona
        modelBuilder.Entity<Venta>()
            .HasOne(v => v.Persona)
            .WithMany()
            .HasForeignKey(v => v.IdPersona);
    }
}
