<script>
      function showApiText() {
        // Initialize Object
        let xhr = new XMLHttpRequest();

        // Set the params and method
        xhr.open(
          "GET",
          "https://recipesapi.herokuapp.com/api/v2/categories",
          true
        );
        // on successful load show data on webpage
        xhr.onload = function () {
          if ((this.status = 200)) {
            let content = "";
            let data = JSON.parse(this.responseText);
            for (let id in data) {
              content += `<div>
                            <img src='${data[id].imageUrl}' width="50" height="50">
                            <h5>Name = ${data[id].title}</h5>
                        </div>`;
            }
            document.getElementById("content").innerHTML = content;
          }
        };
        // Send the request
        xhr.send();
      }
    </script>
