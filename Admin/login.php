<?php
session_start();

// Simulate admin credentials
$adminEmail = "admin@example.com";
$adminPassword = "admin123";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email and password match admin credentials
    if ($email === $adminEmail && $password === $adminPassword) {
        // Successful login, redirect to admin panel
        $_SESSION['admin'] = true;
        header("Location: dashboard.php");
        exit;
    } else {
        // Invalid credentials, redirect back to login page with error
        $error = "Invalid credentials. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .login-container {
            width: 350px;
            margin: 100px auto;
            background-color: #fff;
            padding: 40px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #333;
        }

        input[type="email"],
        input[type="password"] {
            width: 100%;
            margin-bottom: 20px;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        button[type="submit"] {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 5px;
            background-color: #FFA500;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button[type="submit"]:hover {
            background-color: #FF8C00;
        }

        .error-message {
            color: red;
            margin-bottom: 20px;
            text-align: center;
        }

        .custom-image {
            display: block;
            margin: auto;
            width: 100%;
            max-width: 200px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <img src="images/logo3.jpeg" alt="Custom Image" class="custom-image">
        <h2><i class="fas fa-lock"></i> Admin Login</h2>
        <?php if(isset($error)) { ?>
            <p class="error-message"><?php echo $error; ?></p>
        <?php } ?>
        <form id="login-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit"><i class="fas fa-sign-in-alt"></i> Login</button>
        </form>
    </div>
</body>
</html>
