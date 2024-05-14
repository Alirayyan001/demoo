<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION['admin'])) {
    header("Location: index.php");
    exit;
}

// Dummy service provider data
$serviceProviders = array(
    array("id" => 1, "name" => "John's Garage", "email" => "john@example.com", "charges" => "$50", "status" => "Active"),
    array("id" => 2, "name" => "Sarah's Auto Shop", "email" => "sarah@example.com", "charges" => "$60", "status" => "Blocked"),
    // Add more service provider data here...
);

// Dummy function to block/unblock service provider
function blockServiceProvider($providerId) {
    // Add logic to block service provider in the database
}

function unblockServiceProvider($providerId) {
    // Add logic to unblock service provider in the database
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['block'])) {
        blockServiceProvider($_POST['block']);
    }
    if (isset($_POST['unblock'])) {
        unblockServiceProvider($_POST['unblock']);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Provider Management</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .service-provider-container {
            width: 80%;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .status {
            font-weight: bold;
            color: green;
        }

        .blocked {
            color: red;
        }

        .action-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .block-btn {
            background-color: red;
            color: #fff;
        }

        .unblock-btn {
            background-color: green;
            color: #fff;
        }

        .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #ffa500; /* Light orange color */
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- Back button -->
    <button class="back-button" onclick="window.location.href='dashboard.php'">&#8678;</button>

    <div class="service-provider-container">
        <h2>Service Provider Management</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Charges</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <?php foreach ($serviceProviders as $provider) { ?>
                <tr>
                    <td><?php echo $provider['id']; ?></td>
                    <td><?php echo $provider['name']; ?></td>
                    <td><?php echo $provider['email']; ?></td>
                    <td><?php echo $provider['charges']; ?></td>
                    <td class="<?php echo $provider['status'] == 'Blocked' ? 'blocked' : 'status'; ?>"><?php echo $provider['status']; ?></td>
                    <td>
                        <?php if ($provider['status'] == 'Active') { ?>
                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                <input type="hidden" name="block" value="<?php echo $provider['id']; ?>">
                                <button type="submit" class="action-btn block-btn">Block</button>
                            </form>
                        <?php } elseif ($provider['status'] == 'Blocked') { ?>
                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                <input type="hidden" name="unblock" value="<?php echo $provider['id']; ?>">
                                <button type="submit" class="action-btn unblock-btn">Unblock</button>
                            </form>
                        <?php } ?>
                    </td>
                </tr>
            <?php } ?>
        </table>
    </div>
</body>
</html>
