var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   console.log(JSON.parse(GET.responseText));
  }
};
xhttp.open("GET", "http://192.168.10.82:8081/crdrdr/crdincmg", true);
xhttp.send();