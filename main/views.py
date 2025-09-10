from django.shortcuts import render

def show_main(request):
    context = {
        'app_name': 'Saturn Sports Station (SSS)',
        'name': 'Delila Isrina Aroyo',
        'class': 'PBP A'
    }

    return render(request, "main.html", context)