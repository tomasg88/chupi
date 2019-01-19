<?php
header('Access-Control-Allow-Origin: *');
if(isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["telefono"]) ){
$to = "tomasg88@gmail.com";
$subject = "Mensaje Enviado";
$contenido .= "Nombre: ".$_POST["nombre"]."\n";
$contenido .= "Email: ".$_POST["email"]."\n\n";
$contenido .= "Telefono: ".$_POST["telefono"]."\n\n";
$contenido .= "Consulta: ".$_POST["consulta"]."\n";
$contenido .= "Cumple: ".$_POST["cumple"]."\n\n";
$contenido .= "Comentario: ".$_POST["comentario"]."\n\n";
$header = "From: franquicias@barchupitos.com\nReply-To:".$_POST["email"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";
if(mail($to, $subject, $contenido ,$header)){
echo "<body style='margin:0; background:linear-gradient(#21082F, #434E86); font-family:True North; font-size:40px; color:#fff;'><link rel='stylesheet' type='text/css' href='chupitos.css'> <!-- by LeviHernan --> <div style='width:100%; height:100%; background:url(media/fondo%20celeste%20claro.png); display: flex; justify-content: center; align-items: center; margin:auto;'>Mail enviado.</div><a href='chupitos.html' style='position:absolute; bottom:43%; left:5px'><img src='media/arrowl.png' height='80px'></a></body>";
}
}
?>
