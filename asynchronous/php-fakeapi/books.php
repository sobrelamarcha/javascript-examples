<?php

function getBookInfo($id)
{
    $result = '';

    switch ($id) {
        case 'alice-in-wonderland':
            $result = '
            {
                "title":"alice in wonderland",
                "pages":300
            }
            ';
            break;

        case 'the-never-ending-story':
            $result = '
            {
                "title":"the never ending story",
                "pages":600
            }
            ';
            break;

        default:
            $result = '
            {
                "error": "the book does not exist"
            }
            ';
            break;
    }

    return $result;
}

// -----------------------------------------------------------------------

$id = $_GET['id'];

echo getBookInfo($id);
