from django import forms
from .models import Producto 

# Formulario ProductoForm
class ProductoForm(forms.ModelForm):
    class Meta:
        model = Productos
        fields = ('nombre', 'descripcion', 'referencia', 'precio', 'stock')