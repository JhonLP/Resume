from django.db import models

# Create your models here.
class Categoria(models.Model):
	nombre = models.CharField(max_length = 50)

	def __unicode__(self):
		return self.nombre

class Proyecto(models.Model):
	nombre = models.CharField(max_length = 100)
	descripcion = models.CharField(max_length = 240)
	description = models.CharField(max_length = 240)
	fecha = models.CharField(max_length = 12)
	categoria = models.ForeignKey(Categoria)
	url = models.URLField(null=True)

	def __unicode__(self):
		return self.nombre

class Herramienta(models.Model):
	nombre = models.CharField(max_length = 100)
	descripcion = models.CharField(max_length = 240)
	description = models.CharField(max_length = 240)
	url = models.URLField(null=True)

	def __unicode__(self):
		return self.nombre