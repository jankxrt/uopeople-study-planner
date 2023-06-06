// the name of the file where we will store the data
$filename = 'data.txt';

// get the data from the form
$data1 = $_POST['course-input'];
$data2 = $_POST['grade-input'];

// prepare the data for writing to the file
$dataToWrite = $data1 . ', ' . $data2 . PHP_EOL;

// append the data to the file
file_put_contents($filename, $dataToWrite, FILE_APPEND);
