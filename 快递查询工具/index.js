$(() => {
  $(".btn").on("click", () => {
    let type = $("#type").val();
    let postid = $("#postid").val();
    const url = "http://localhost:3002/query";
    const data = {
      type,
      postid
    };
    $.ajax({
      url,
      type: "get",
      dataType: "json",
      data: data,
      success: function(data) {
        if (data.message === "ok") {
          let http = "<ul>";
          data.data.map(item => {
            http += `<li>
               <p>开始时间:${item.time}结束时间:${item.ftime}</p>
               <p>${item.context}</p>
           </li>`;
          });
          http += "</ul>";
          $(".nullcontent").hide();
          $(".full").html(http);
        }else{
          const err = `<h3 class='nullcontent' style="color: red">${data.message}</h3>`;
          $(".full").html(err);
        }
      }
    });
  });
});
