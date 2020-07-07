 
      <?php
      
      require '../lib/PHPMailer-master/src/Exception.php';
      require '../lib/PHPMailer-master/src/PHPMailer.php';
      require '../lib/PHPMailer-master/src/SMTP.php'; 
            
      use PHPMailer\PHPMailer\PHPMailer;
      use PHPMailer\PHPMailer\SMTP;
      use PHPMailer\PHPMailer\Exception;
    
          $mensaje = $_POST['mensaje'];
          $name = $_POST['name'];
          $email = $_POST['email'];
          $subject = $_POST['subject'];
     
      try {
            $mail = new PHPMailer;          
            $mail->IsSMTP(); // enable SMTP
          //  $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
            $mail->SMTPAuth = true; // authentication enabled
            $mail->SMTPOptions = array(
              'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
              )
            );          
            $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
            $mail->Host = "smtp.gmail.com";
            $mail->Port = 465; // or 587
            $mail->IsHTML(true);
            $mail->Username = "armushik2404@gmail.com";
            $mail->Password = "Glyukoza10";
            $mail->SetFrom("armushik2404@gmail.com",$email); 
            $mail->Subject = utf8_decode( $subject);
            $mail->Body = $name. $mensaje ;           
            // $mail->AddAddress($datosUsuario->email);
            $mail->AddAddress("armine.manukyan@dataleanmakers.es");
            
            if(!$mail->Send()) {
              echo "Mailer Error: " . $mail->ErrorInfo;
            } else {
              echo " ";
            }    
          } catch(PDOException $exception){  
            // redireccionar('/clientes');
            return $exception->getMessage();                                 
           } 

        //    redireccionar('/crm');
?>