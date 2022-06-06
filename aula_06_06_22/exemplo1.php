<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="barchart_material" style="width: 900px; height: 500px;"></div> 

    <?php
            $dados = [40, 35, 60, 20, 21];
            $dados2 = [60, 50, 72, 12, 38];
            $mes = ['jan', 'fev', 'mar', 'abr', 'mai'];
            $tam = count($dados);

        ?>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript">
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Meses', 'Morros tomados', 'Armas furtadas'],

            <?php 
                for($i = 0; $i < $tam; $i++){
                    ?>
                        ['<?= $mes[$i]; ?>',  <?= $dados[$i]; ?>, <?= $dados2[$i]; ?>],
                    <?php                
                }
            ?>
            ]);


            var options = {
            chart: {
                title: 'Gráfico do Morro',
            },
            bars: 'horizontal' // Required for Material Bar Charts.
            };

            var chart = new google.charts.Bar(document.getElementById('barchart_material'));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
        </script>
</body>
</html>