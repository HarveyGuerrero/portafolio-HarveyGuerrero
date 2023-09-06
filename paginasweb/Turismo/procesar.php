<?php
$host="localhost";
$user ="id19448162_root";
$pass="H@75578039g$";
$db="id19448162_datos";

//funcion para poder conectar la   base de datos.
$con=mysqli_connect($host, $user, $pass, $db) or die("problemas al conectar");
mysqli_select_db($con, $db) or die("problemas al conectar la base de datos");

//usando las variables en la funcion para poder conectar la   base de datos.
$usuario=$_POST["usuario"];
$email=$_POST["email"];
$mensaje=$_POST["mensaje"];


//sentencias de sql
$sql ="INSERT INTO data VALUES ('$usuario','$email','$mensaje')";

//ejecutamos la sentencia sql
$ejecutar = mysqli_query($con, $sql);

//verificando el envio
if(!$ejecutar){
    echo("hubo un error");
}
else{
    echo ("<script>alert('gracias poor su mensaje');
    window.location.href=('index.html');
    </script>");
}
?>
