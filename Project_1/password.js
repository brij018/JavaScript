
var formPwd = document.getElementById('pwdForm');
formPwd.addEventListener('submit', function(e) {
  e.preventDefault();

  var stored = '0987654';
  var oldP = document.getElementById('old').value;
  var newP = document.getElementById('new').value;
  var out = document.getElementById('show');

  if (oldP !== stored) {
    out.innerHTML = 'Old password does not match.';
    return;
  }

  if (newP.length < 6) {
    out.innerHTML = 'New password must be at least 6 characters long.';
    return;
  }

  if (newP === stored) {
    out.innerHTML = 'New password cannot be same as old password.';
    return;
  }

  out.innerHTML = 'Password updated successfully.';
});
