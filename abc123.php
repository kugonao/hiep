<?php
echo "<h2>SERVER CHECK</h2>";
echo "PHP Version: " . phpversion() . "<br><br>";

if (extension_loaded('mysqli')) {
    echo "MYSQLI: ENABLED<br>";
    } else {
        echo "MYSQLI: DISABLED<br>";
        }

        if (extension_loaded('pdo_mysql')) {
            echo "PDO MYSQL: ENABLED<br>";
            } else {
                echo "PDO MYSQL: DISABLED<br>";
                }
                ?>