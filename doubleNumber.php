<?php
function main(array $args) : array {
    $originalNumber = $args["originalNumber"] ?? 0;
    $number = $args["number"] ?? 0;
    $doubled = $number * 2;
    return ["originalNumber" => $originalNumber, "number" => $doubled];
}
