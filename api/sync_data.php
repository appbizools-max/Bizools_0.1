<?php
include "db.php";

header("Content-Type: application/json");

/* =========================
   GET → FETCH DATA
========================= */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $leads = mysqli_fetch_all(mysqli_query($conn, "SELECT * FROM leads"), MYSQLI_ASSOC);
    $projects = mysqli_fetch_all(mysqli_query($conn, "SELECT * FROM projects"), MYSQLI_ASSOC);
    $delivered = mysqli_fetch_all(mysqli_query($conn, "SELECT * FROM delivered"), MYSQLI_ASSOC);

    echo json_encode([
        "leads" => $leads,
        "projects" => $projects,
        "delivered" => $delivered
    ]);

    exit;
}

/* =========================
   POST → SAVE DATA
========================= */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = file_get_contents("php://input");

    // DEBUG FILE (check incoming data)
    file_put_contents("debug.json", $input);

    $data = json_decode($input, true);

    // validate JSON
    if (!$data) {
        echo json_encode([
            "status" => "error",
            "message" => "Invalid JSON"
        ]);
        exit;
    }

    /* =========================
       CLEAR OLD DATA
    ========================= */
    mysqli_query($conn, "DELETE FROM leads");
    mysqli_query($conn, "DELETE FROM projects");
    mysqli_query($conn, "DELETE FROM delivered");

    /* =========================
       INSERT LEADS
    ========================= */
    if (!empty($data['leads'])) {
        foreach ($data['leads'] as $l) {

            $id = $l['id'] ?? 0;
            $name = $l['name'] ?? '';
            $phone = $l['phone'] ?? '';
            $service = $l['service'] ?? '';
            $source = $l['source'] ?? '';
            $status = $l['status'] ?? '';
            $date = $l['date'] ?? '';

            mysqli_query($conn, "INSERT INTO leads 
            (id, name, phone, service, source, status, date)
            VALUES 
            ('$id','$name','$phone','$service','$source','$status','$date')");
        }
    }

    /* =========================
       INSERT PROJECTS
    ========================= */
    if (!empty($data['projects'])) {
        foreach ($data['projects'] as $p) {

            $id = $p['id'] ?? 0;
            $name = $p['name'] ?? '';
            $client = $p['client'] ?? '';
            $value = $p['value'] ?? '';
            $progress = $p['progress'] ?? 0;

            mysqli_query($conn, "INSERT INTO projects 
            (id, name, client, value, progress)
            VALUES 
            ('$id','$name','$client','$value','$progress')");
        }
    }

    /* =========================
       INSERT DELIVERED
    ========================= */
    if (!empty($data['delivered'])) {
        foreach ($data['delivered'] as $d) {

            $id = $d['id'] ?? 0;
            $name = $d['name'] ?? '';
            $client = $d['client'] ?? '';
            $value = $d['value'] ?? '';
            $date = $d['date'] ?? '';

            mysqli_query($conn, "INSERT INTO delivered 
            (id, name, client, value, date)
            VALUES 
            ('$id','$name','$client','$value','$date')");
        }
    }

    echo json_encode([
        "status" => "success",
        "message" => "Data synced successfully"
    ]);

    exit;
}

/* =========================
   INVALID METHOD
========================= */
echo json_encode([
    "status" => "error",
    "message" => "Invalid request"
]);