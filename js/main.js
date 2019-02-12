$(document).ready(function(){
    $('#searchUser').on('keyup',function(e){
       console.log(e.target.value); 
       let userName = e.target.value;
    //Ajax request 
        $.ajax({
            url:"https://api.github.com/users/"+userName,
            data : {
               client_id : '',
               client_secret : ''    
        },
            success : function(result){
               $("#profile").html(`
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${result.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
<div class="col-md-3">
<img style="width:100%" class="thumbnail" src="${result.avatar_url}">
<a  class="btn btn-info" target="-blank" href="${result.html_url}">View Profile </a></div>
<div class="col-md-9"> 
<span class="label label-default">Public repos : ${result.public_repos}  </span>
<span class="label label-info">Public gists : ${result.public_gists} </span>
<span class="label label-primary"> Followers : ${result.followers}  </span>
<span class="label label-success"> Following : ${result.following}  </span>
<br/><br/>
<ul class="list-group"> 
  <li class="list-group-item">Myself : ${result.bio} </li>
  <li class="list-group-item">Company : ${result.company} </li>
  <li class="list-group-item">Website/blog : ${result.blog}</li>
  <li class="list-group-item">Location : ${result.location}</li>
  <li class="list-group-item">Member since : ${result.created_at}</li>
</ul>
</div>

</div>
  </div>
</div>`);
            }
        })
//loads content directly as JSON/raw format        
     //   $("#profile").load("https://api.github.com/users/"+userName)
    });
})
