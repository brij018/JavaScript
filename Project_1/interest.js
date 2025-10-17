
var intForm = document.getElementById('intForm');
intForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var p = parseFloat(document.getElementById('principal').value);
  var r = parseFloat(document.getElementById('rate').value);
  var t = parseFloat(document.getElementById('years').value);
  var out = document.getElementById('out');

  if (isNaN(p) || isNaN(r) || isNaN(t) || p < 0 || r < 0 || t < 0) {
    out.innerHTML = 'Please enter valid non-negative numbers.';
    return;
  }

  var interest = (p * r * t) / 100;
  interest = Math.round(interest * 100) / 100;
  var total = Math.round((p + interest) * 100) / 100;

  out.innerHTML = 'Interest: ' + interest + ' — Total: ' + total;
});
