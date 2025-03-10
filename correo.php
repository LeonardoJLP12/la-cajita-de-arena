<?php
    $destinatario = "lacajitadearenademisspatty@gmail.com";

    // Capturar datos del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

    // Verificar que los campos no estén vacíos
    if(empty($nombre) || empty($email) || empty($mensaje)) {
        echo "<script>alert('Por favor, completa todos los campos.'); window.history.back();</script>";
        exit();
    }

    // Construir el asunto y el cuerpo del mensaje
    $asunto = "Nuevo mensaje de contacto de $nombre";
    $mensajeCompleto = "Nombre: $nombre\n";
    $mensajeCompleto .= "Correo: $email\n\n";
    $mensajeCompleto .= "Mensaje:\n$mensaje\n";

    // Configurar los encabezados
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if(mail($destinatario, $asunto, $mensajeCompleto, $headers)) {
        echo "<script>alert('Correo enviado exitosamente.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el correo. Inténtalo de nuevo más tarde.'); window.history.back();</script>";
    }
?>
