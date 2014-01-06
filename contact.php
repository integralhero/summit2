$name=$_POST['name'];
$email=$_POST['email'];
$comment=$_POST['comment'];
 
$to = "ases.summit2014@gmail.com";
$subject = "Message from Website!";
$message = " Name: " . $name . "\r\n Message: " . $comment . "\r\n Email: " . $email;
 
 
$from = "WebsiteEmailScript";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='http://demo.ftutorials.com/html5-contact-form/success.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Please try again.";
}