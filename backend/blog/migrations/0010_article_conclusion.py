# Generated by Django 4.2.16 on 2024-09-19 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_remove_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='conclusion',
            field=models.TextField(blank=True, null=True),
        ),
    ]
