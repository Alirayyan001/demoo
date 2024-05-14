<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #fff; /* White background */
        }

        .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            margin: 50px auto;
            background-color: #ffe5b4; /* Light orange background */
            padding: 20px;
            border-radius: 10px; /* Slightly rounded corners */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333; /* Dark gray text color */
        }

        .metrics {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            flex-wrap: wrap; /* Allow metrics to wrap on smaller screens */
        }

        .metric {
            flex: 1;
            margin: 10px;
            padding: 20px;
            background-color: #fff; /* White background */
            border-radius: 10px; /* Slightly rounded corners */
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease; /* Smooth transition */
        }

        .metric:hover {
            transform: translateY(-5px); /* Lift on hover */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .metric h3 {
            margin-top: 0;
            color: #333; /* Dark gray text color */
        }

        .action-btn {
            padding: 10px 20px;
            background-color: #ffa500; /* Orange button color */
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background-color 0.3s ease; /* Smooth transition */
            width: 200px; /* Fixed width for all action buttons */
        }


        .action-btn:hover {
            background-color: #ff8c00; /* Darker orange on hover */
        }

        .e-mechanic-picture {
            display: block;
            width: 200px; /* Set the width of the image */
            height: auto;
            border-radius: 10px; /* Slightly rounded corners */
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <img src="images/logo2.jpeg" alt="E-Mechanic Picture" class="e-mechanic-picture">
        <h2>Admin Dashboard</h2>
        <div class="metrics">
            <div class="metric">
                <h3>User Management</h3>
                <a href="user_management.php" class="action-btn">Manage Users</a>
            </div>
            <div class="metric">
                <h3>Report Management</h3>
                <a href="report_management.php" class="action-btn">Manage Reports</a>
            </div>
            <div class="metric">
                <h3>Service Provider Management</h3>
                <a href="service_provider_management.php" class="action-btn">Manage Service Providers</a>
            </div>
            <div class="metric">
                <h3>Logout</h3>
                <a href="logout.php" class="action-btn">Logout</a>
            </div>
        </div>
    </div>
</body>
</html>
