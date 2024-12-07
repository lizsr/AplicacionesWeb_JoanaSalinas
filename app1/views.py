from django.shortcuts import render

# Create your views here.

from django.views.generic import CreateView,UpdateView,DeleteView,DetailView,TemplateView
from .models import Productos
from makeup.forms import ProductoForm
from django.urls import reverse_lazy
from django.shortcuts import render, redirect


class ProductoCreateView(CreateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'crear_producto.html'
    success_url = reverse_lazy('index')  

class ProductoUpdateView(UpdateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'editar_producto.html'
    success_url = reverse_lazy('index') 

class ProductoDeleteView(DeleteView):
    model = Producto
    form_class = ProductoForm
    template_name = 'eliminar_producto.html'
    success_url = reverse_lazy('index')  

class ProductoDetailView(DetailView):
    model = Producto
    template_name = 'ver_producto.html'
    context_object_name = 'producto' 

class IndexView(TemplateView):
    template_name = 'index.html'


def login_view(request):
    # Si el usuario está autenticado, redirige al inicio
    if request.user.is_authenticated:
        return redirect('index.html')  # Redirige a la página principal (ajusta 'home' si es necesario)

    if request.method == 'POST':
        # Aquí no verificamos el usuario, solo redirigimos al índice.
        return redirect('home')  # Redirige a la página principal

    return render(request, 'index.html')
