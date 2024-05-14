<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION['admin'])) {
    header("Location: index.php");
    exit;
}

// Dummy report data
$reports = array(
    array("id" => 1, "user" => "John Doe", "description" => "Inappropriate content", "status" => "Pending"),
    array("id" => 2, "user" => "Jane Smith", "description" => "Spamming", "status" => "Resolved"),
    // Add more report data here...
);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report Management</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .report-container {
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

        .pending {
            color: orange;
        }

        .resolved {
            color: green;
        }

        .action-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
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

    <div class="report-container">
        <h2>Report Management</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>User</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
            <?php foreach ($reports as $report) { ?>
                <tr>
                    <td><?php echo $report['id']; ?></td>
                    <td><?php echo $report['user']; ?></td>
                    <td><?php echo $report['description']; ?></td>
                    <td class="<?php echo strtolower($report['status']); ?>"><?php echo $report['status']; ?></td>
                </tr>
            <?php } ?>
        </table>
    </div>
</body>
</html>
