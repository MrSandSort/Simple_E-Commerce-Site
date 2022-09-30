
	
   //ExternaL Javascript for Form Validation to check whether the fields are left vacant or not ...
   function validateForm()
			{
				var Name = document.forms["ContactsForms"]["name"].value;
				var email = document.forms["ContactsForms"]["email"].value;
				var messages = document.forms["ContactsForms"]["message"].value;

				//alert(messageDetails);
				
				if (Name == "" ||  email== "" || messages == "") 
				{
					alert("Vacant Fields Detected...Please fill the form!!");// alert messages is sent for vacant posts
				}

				else
				{
					alert("Thank you for your feedback!!!")// alert message is sent for proper feedbacks
				}
			}

