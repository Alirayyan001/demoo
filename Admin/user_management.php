<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION['admin'])) {
    header("Location: index.php");
    exit;
}

// Dummy user data
$users = array(
    array("id" => "", "name" => "", "email" => "", "status" => ""),    // Add more user data here...
);

// Dummy function to block/unblock user
function blockUser($userId) {
    // Add logic to block user in the database
}

function unblockUser($userId) {
    // Add logic to unblock user in the database
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['block'])) {
        blockUser($_POST['block']);
    }
    if (isset($_POST['unblock'])) {
        unblockUser($_POST['unblock']);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .user-container {
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

    <div class="user-container">
        <h2>User Management</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <?php foreach ($users as $user) { ?>
                <tr>
                    <td><?php echo $user['id']; ?></td>
                    <td><?php echo $user['name']; ?></td>
                    <td><?php echo $user['email']; ?></td>
                    <td class="<?php echo $user['status'] == 'Blocked' ? 'blocked' : 'status'; ?>"><?php echo $user['status']; ?></td>
                    <td>
                        <?php if ($user['status'] == 'Active') { ?>
                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                <input type="hidden" name="block" value="<?php echo $user['id']; ?>">
                                <button type="submit" class="action-btn block-btn">Block</button>
                            </form>
                        <?php } elseif ($user['status'] == 'Blocked') { ?>
                            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                                <input type="hidden" name="unblock" value="<?php echo $user['id']; ?>">
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
