
    <?php 
       $linki = new mysqli("localhost", "root", "", "censo");
       $linki->query("SET CHARACTER SET utf8");
       if (mysqli_connect_errno()) {
          die("No se puede conectar a la base de datos:" . mysqli_connect_error());
       }


    $wsqli="select * from cliente ";
    $result = $linki->query($wsqli);
    if($linki->errno) die($linki->error);
        $x = array();
        while( $value = $result->fetch_array(MYSQLI_ASSOC)){
            array_push($x,  $value);

        }

        echo json_encode($x);

?>
