<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@kepprabath.com";  // Titan professional email
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = nl2br(htmlspecialchars($_POST['message']));

    // Attractive HTML email body
    $htmlContent = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color:#333; }
            .container { padding:20px; border:1px solid #ddd; border-radius:8px; background:#f9f9f9; }
            h2 { color:#0066cc; }
            p { font-size:14px; line-height:1.6; }
            a { color:#0066cc; text-decoration:none; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>🎉 Congratulations! You’ve received a new enquiry.</h2>
<h4> Powered by: Viral Ads Media, your trusted Marketing Agency. </h4>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong><br>{$message}</p>
            <hr>
            <p style='font-size:13px;color:#555;'>You can reply directly to this email or <a href='mailto:{$email}'>contact {$name}</a>.</p>
        </div>
    </body>
    </html>
    ";

    // Email headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: {$name} <{$email}>" . "\r\n";

    // Send email
    if (mail($to, "Website Contact: " . $subject, $htmlContent, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent successfully.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.'); window.location.href='contact.html';</script>";
    }
}
?>
