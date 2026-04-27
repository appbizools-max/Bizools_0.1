<?php
include "db.php";

header("Content-Type: application/json");

$result = $conn->query("SELECT * FROM blogs ORDER BY id DESC");

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = [

        "id" => $row["id"],
        "slug" => $row["slug"],
        "title" => $row["title"],
        "content" => $row["content"],
        "image" => $row["image"], // IMPORTANT
        "date" => $row["date"]
    ];
}

echo json_encode($data);
?>