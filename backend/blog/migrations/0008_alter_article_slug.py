# Generated by Django 4.2.16 on 2024-09-19 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_article_five_section_article_fourth_section'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='slug',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
