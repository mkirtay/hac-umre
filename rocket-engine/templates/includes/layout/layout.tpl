<!DOCTYPE html>
<html lang="tr" dir="ltr">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="description" content="">


    <title>{% if title %}{{ title }} .:. {% endif %} Sıfır Proje</title>

    <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon"/>
    <link rel="stylesheet" href="../assets/styles/sifir-proje.min.css">


</head>

<body>
<div class="page-wrap">

    <header id="masthead" class="page-header">
        {% block header %}
            {% include "includes/components/header/header.tpl" %}
        {% endblock %}
    </header>

    <main id="content" class="page-main flexible-row posiTop">
        <div class="content">
            {% block content %}{% endblock %}
        </div>
    </main>

</div>
    <script src="../assets/scripts/sifir-proje.lib.min.js"></script>
    <script src="../assets/scripts/sifir-proje.min.js"></script>
</body>
</html>
