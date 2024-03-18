//no_no_no_mr.robocotik_you_don't_hochesh_to_use_gotovii_codik
//you_have_to_napisat_the_code_sam



const xhr=new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.send();
xhr.onload=()=>console.log(xhr.response);