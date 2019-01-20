<?php
    // Mail chupitos
    error_reporting(-1);
    ini_set("display_errors", "On");
    set_error_handler("var_dump");

    header("Access-Control-Allow-Origin: *");

    $postData = file_get_contents("php://input");
    $array = json_decode($postData);
    // printf($array);
    // echo $array;
    $subject = "Barra Móvil";
    $to = "tomasg88@gmail.com";
    $headers = "From: " . $array->email;

    if (strcmp($array->subject, "barraMovil") == 0) {
        $name = "Nombre: " . $array->name . "\n";
        $phone = "Telefono: " . $array->phone . "\n";
        $email = "Email: " . $array->email . "\n";
        $guests = "Invitados: " . $array->guests . "\n";
        $location = "Ubicacion: " . $array->location . "\n";
        $comment = "Comentario: " . $array->comment . "\n";
        $message = $name . "\n" . $phone . "\n" . $email . "\n" . $guests . "\n" . $location . "\n" . $comment;

    } else {

        $name = "Nombre: " . $array->name . "\n";
        $phone = "Telefono: " . $array->phone . "\n";
        $email = "Email: " . $array->email . "\n";
        $question = "Consulta: " . $array->question . "\n";
        $birthday = "Cumpleaños: " . $array->birthday . "\n";
        $comment = "Comentario: " . $array->comment . "\n";
        $message = $name . "\n" . $phone . "\n" . $email . "\n" . $question . "\n" . $birthday . "\n" . $comment;
    }

    if (mail($to, $subject, $message, $headers)) {
        echo "SUCCESS";
    } else {
        echo "ERROR";
    }

?>
