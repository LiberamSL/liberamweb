<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $to = 'joan@liberam.es';
  $subject = "FC - {$_POST['email']}";
  $message = "Nombre: {$_POST['name']}\nCorreo electrónico: {$_POST['email']}\nMensaje:\n{$_POST['mensaje']}\nEscribe desde:\n{$_POST['lugar']}";
  $headers = "From: {$_POST['email']}\r\n" .
             "Reply-To: {$_POST['email']}\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);
  
}
 /* header('Location: gracias.html'); // redirecciona a una página de agradecimiento
} else {
  header('Location: index.html'); // redirecciona a la página principal si se accede directamente a este archivo
} */

?>
