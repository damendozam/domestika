function catchForm(e)
{
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var date = document.querySelector('#date').value;
    var msm = document.querySelector('#msm');
    var queryReturn = '<h1>'+ name +'</h1>';
    msm.innerHTML = queryReturn;
}
var sub = document.querySelector('#formHtml');
sub.addEventListener("submit",catchForm);
