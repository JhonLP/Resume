from django.contrib import admin
from models import Categoria, Proyecto, Herramienta

# Register your models here.

class ProyectoAdmin(admin.ModelAdmin):
	list_display = ('id','nombre','categoria',)
	list_filter = ('categoria',)
	list_editable = ('nombre',)
	raw_id_fields = ('categoria',)

class ProyectoInline(admin.ModelAdmin):
	model = Proyecto
	extra = 1
	

class CategoriaAdmin(admin.ModelAdmin):
	inlines = [ProyectoInline]

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Proyecto, ProyectoAdmin)