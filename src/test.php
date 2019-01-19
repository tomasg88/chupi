<?php
$to = 'tomasg88@gmail.com';
$subject = 'Hello from XAMPP!';
$message = 'This is a test';
$headers = "From: sarlanga@sarasasa.com.ar\r\n";
if (mail($to, $subject, $message, $headers)) {
   echo "SUCCESS";
} else {
   echo "ERROR";
}
?>
