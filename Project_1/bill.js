
var billForm = document.getElementById('billForm');
billForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var units = parseFloat(document.getElementById('units').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var out = document.getElementById('billout');

  if (isNaN(units) || isNaN(rate) || units < 0 || rate < 0) {
    out.innerHTML = 'Please enter valid non-negative numbers.';
    return;
  }

  var total = Math.round(units * rate * 100) / 100;
  out.innerHTML = 'Total payable: ' + total;
});
