<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if a file was uploaded
    if (isset($_FILES['media'])) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['media']['name']);

        // Check if the file is an allowed type (image/video)
        $allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'video/webm'];
        if (in_array($_FILES['media']['type'], $allowedTypes)) {
            if (move_uploaded_file($_FILES['media']['tmp_name'], $uploadFile)) {
                // Return the URL of the uploaded file
                echo json_encode(['success' => true, 'mediaUrl' => $uploadFile]);
            } else {
                echo json_encode(['success' => false, 'message' => 'Failed to upload file.']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid file type.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No file uploaded.']);
    }
}
?>
