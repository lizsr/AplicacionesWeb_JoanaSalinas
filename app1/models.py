from django.db import models

# Create your models here.

class Usuarios(models.Model):
    usuario = models.AutoField(primary_key=True)
    password=models.CharField(max_length=0)
    direccion=models.CharField(max_length=100)
    telefono=models.IntegerField(max_length=100)
    

    def __str__(self):
        return self.usuario
    
#Tabla Productos
class Productos(models.Model):
    cod_producto = models.IntegerField(primary_key=True)
    nombre = models.TextField(max_length=40)
    descripcion = models.CharField(max_length=100)
    referencia = models.CharField(max_length=8)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    stock = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre