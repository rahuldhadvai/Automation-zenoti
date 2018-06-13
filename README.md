# Automation-zenoti
The project was created for Android Team at zenoti to Automate their Application Build Process(App development) 

This project requires XAMPP/WAMP to be installed first on your system to store the JSON's and retrieve them.

Step 1: Install XAMPP on your machine in C:\ drive (or at any place)  
  
step 2: Then create a new folder called 'project' in c:\xampp\htdocs\
  
step 3: place all the files inside the 'project' folder  
  
step 4: In browser paste this URL http://localhost/phpmyadmin/ , Click on User Accounts tab and click 'Add new user' give username as 'root' and leave the password empty and click 'GO' at the right bottom , user will be created.  
  
     (If your browser is displaying message like "HTTP Error 404. The requested resource is not found." then it might be due to the conflicts of port number, to resolve this, just change the port number in apache settings of XAMPP )  
       
 step 5:  Click on Databases tab and create a new Database as 'myDB'. 

step 6:  now to create a table to store our JSON's just run this php file in browser http://localhost/project/create_table.php it will display a message as "Table 'app_jsons' created successfully."

  Thats it !!  your backend has been setup.

  Now in browser paste this URL http://localhost/project/Automation.html , you can see the main page to edit the configuration of the app.

    
After editing the configuration click 'Generate JSON' on the top of the webpage, the JSON string along with latest version number and last modified date will be stored in the local data base  
  
 Now to view All your JSON's click "View All JSON Files' button on the navigation bar at the top of web page. there you can view or download the JSON strings created by the user. 
