# Generated by Django 3.1.6 on 2022-04-24 08:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=90, verbose_name='Title (*)')),
                ('body', models.TextField(blank=True, verbose_name='Body')),
                ('status', models.CharField(blank=True, choices=[('d', 'Draft'), ('p', 'Published')], default='S', max_length=1, null=True, verbose_name='Status(*)')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='Create Date')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to=settings.AUTH_USER_MODEL, verbose_name='Author')),
            ],
            options={
                'verbose_name': 'Article',
                'verbose_name_plural': 'Articles',
                'ordering': ['-create_date'],
            },
        ),
    ]
