
var gForm = document.getElementById('gradeForm');
gForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var val = parseFloat(document.getElementById('marks').value);
  var out = document.getElementById('result');

  if (isNaN(val) || val < 0 || val > 100) {
    out.innerHTML = 'Enter a valid percentage between 0 and 100.';
    return;
  }

  var grade;
  if (val >= 90) {
    grade = 'A+';
  } else if (val >= 80) {
    grade = 'A';
  } else if (val >= 70) {
    grade = 'B';
  } else if (val >= 50) {
    grade = 'C';
  } else {
    grade = 'Fail';
  }

  out.innerHTML = 'Your Grade: ' + grade;
});
