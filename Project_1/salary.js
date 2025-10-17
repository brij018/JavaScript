
var form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  var basic = parseFloat(document.getElementById('basicSalary').value);
  var hra = parseFloat(document.getElementById('hra').value);
  var da = parseFloat(document.getElementById('da').value);
  var ta = parseFloat(document.getElementById('ta').value);

  if (isNaN(basic) || basic <= 0) {
    document.getElementById('grossSalary').innerHTML = 'Please enter a valid basic salary.';
    return;
  }

  if (isNaN(hra)) { hra = 0; }
  if (isNaN(da)) { da = 0; }
  if (isNaN(ta)) { ta = 0; }

  var gross = basic * (1 + (hra + da + ta) / 100);
  gross = Math.round(gross * 100) / 100;

  document.getElementById('grossSalary').innerHTML = 'Gross Salary: ' + gross;
});
