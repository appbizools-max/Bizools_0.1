<?php
include "db.php";

header("Content-Type: application/json");

$uploadDir = "../uploads/"; // folder must exist

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}
// ✅ DELETE BLOG

if (isset($_GET['delete'])) {

    $id = $_GET['delete'];

    // First get image path (optional but best)
    $res = mysqli_query($conn, "SELECT image FROM blogs WHERE id='$id'");
    $row = mysqli_fetch_assoc($res);

    if ($row) {
        $filePath = "../" . $row['image'];

        // Delete image file also
        if (file_exists($filePath)) {
            unlink($filePath);
        }
    }

    // Delete from DB
    mysqli_query($conn, "DELETE FROM blogs WHERE id='$id'");

    echo json_encode(["status" => "deleted"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $title = $_POST['title'];
    $content = $_POST['content'];
    $content = html_entity_decode($content);

    $imageName = time() . "_" . basename($_FILES["image"]["name"]);
    $targetFile = $uploadDir . $imageName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {

        $imagePath = "uploads/" . $imageName;

        $stmt = $conn->prepare("INSERT INTO blogs (title, content, image, date) VALUES (?, ?, ?, NOW())");
        $stmt->bind_param("sss", $title, $content, $imagePath);
        $stmt->execute();

        echo json_encode(["status" => "success"]);

    } else {
        echo json_encode(["status" => "error", "message" => "Upload failed"]);
    }
}
?>