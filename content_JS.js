
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/*function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}  */


function applyButton_bg_colourChanges(){
var x = document.getElementById("hex_btn_bg").value;

if(x != '')
{
if(x.length !=6)
alert("Please check the Hex Code");
else
document.getElementById("payment_button").style.backgroundColor = x;
}
else{
document.getElementById("payment_button").style.backgroundColor = document.getElementById("button_bg_color").value;
}

}  

function apply_header_color_changes(){
var x = document.getElementById("hex_nav_bg").value;

if(x != '')
{
if(x.length !=6)
alert("Please check the Hex Code");
else
document.getElementById("header_div").style.backgroundColor = x;
}
else{
document.getElementById("header_div").style.backgroundColor = document.getElementById("nav_bg_color").value;
}

}   

function applyButton_fg_colourChanges(){

var x = document.getElementById("hex_btn_fg").value;

if(x != '')
{
if(x.length !=6)
alert("Please check the Hex Code");
else
document.getElementById("payment_button").style.backgroundColor = x;
}
else{
document.getElementById("payment_button").style.color = document.getElementById("button_foreground_color").value;
}
	
}

function appname_font_edit(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("app_name").style.fontFamily = listValue;
}

function insertImageInputs(){
var n = document.getElementById("no_of_images").value;
var p = parseInt(n);
var i,text="";
for(i=0;i<p;i++){
text +=  'Enter the URL for Image '+(i+1)+' : <input type="text" size="55" id="image_url'+(i+1)+'" placeholder="url '+(i+1)+'"> </br></br>';
}
document.getElementById("no_images_div").innerHTML = text;
}

function payment_checked(yorn){
if(yorn == "disable")
document.getElementById("payment_button").style.display = "none";
else if(yorn == "enable")
document.getElementById("payment_button").style.display = "block";
}

function loyalty_checked(yorn){
if(yorn == "disable")
document.getElementById("loyalty").style.display = "none";
else if(yorn == "enable")
document.getElementById("loyalty").style.display = "block";
}

function genericFunc(view,id)
{
document.getElementById(id).innerHTML = view.value;
}

function generateJSON(){


// colour configurations
var nav_bg_color;
var x = document.getElementById("hex_nav_bg").value;
if(x != '')
	nav_bg_color = x;
else
	nav_bg_color = document.getElementById("nav_bg_color").value;




var nav_foreground_color;
var y = document.getElementById("hex_nav_fg").value;
if(y != '')
	nav_foreground_color = y;
else
	nav_foreground_color = document.getElementById("nav_foreground_color").value;

var button_bg_color;
var z = document.getElementById("hex_btn_bg").value;
if(z != '')
	button_bg_color = z;
else
	button_bg_color = document.getElementById("button_bg_color").value;


var button_foreground_color;
var a = document.getElementById("hex_btn_bg").value;
if(a != '')
	button_foreground_color = a;
else
	button_foreground_color = document.getElementById("button_foreground_color").value;

var link_color;
var b = document.getElementById("hex_link_color").value;
if(b != '')
	link_color = b;
else
	link_color = document.getElementById("link_color").value;


//StringConfigurations




var tag_line = document.getElementById("tagLine_edited").value;
var center_label = document.getElementById("centerLabel_edited").value;
var addOn_label = document.getElementById("addOnLabel_edited").value;
var cancellation_policy = document.getElementById("cancellationPolicy_edited").value;
var account_name = document.getElementById("appname_edited").value;
var about_us = document.getElementById("aboutUs_edited").value;
var app_name = document.getElementById("appname_edited").value;


// EnvironmentConfigurations

var base_url = document.getElementById("base_url").value;
var client_id = document.getElementById("client_id").value;
var access_key = document.getElementById("access_key").value;
var organization_id = document.getElementById("organization_id").value;
var login_app_id = document.getElementById("login_app_id").value;
var login_app_secret = document.getElementById("login_app_secret").value;
var web_url = document.getElementById("web_url").value;


//FeatureConfigurations

var font_option = document.getElementById("font_option").value;

var apple_pay = document.getElementsByName('card_feature');
var gender = document.getElementsByName('gender_feature');
var mixpanel = document.getElementsByName('mixpanel_feature');
var enable_ada = document.getElementsByName('ada_feature');
var ignore_otp = document.getElementsByName('Ignore_otp_feature');
var enable_cancel_appt = document.getElementsByName('cancel_appt_feature');



var apple_pay_yorn,gender_yorn,mixpanel_yorn,enable_ada_yorn,ignore_otp_yorn,enable_cancel_appt_yorn;

for(var i = 0; i < apple_pay.length; i++){
    if(apple_pay[i].checked){
        apple_pay_yorn = apple_pay[i].value;
    }
	 if(gender[i].checked){
        gender_yorn = gender[i].value;
    }
	 if(mixpanel[i].checked){
        mixpanel_yorn = mixpanel[i].value;
    }
	 if(enable_ada[i].checked){
        enable_ada_yorn = enable_ada[i].value;
    }
	 if(ignore_otp[i].checked){
        ignore_otp_yorn = ignore_otp[i].value;
    }
	 if(enable_cancel_appt[i].checked){
        enable_cancel_appt_yorn = enable_cancel_appt[i].value;
    }
}


// BrandingImagesAndroid

var logo_icon = document.getElementById("logo_icon").value;
var nav_drawer_icon = document.getElementById("nav_drawer_icon").value;
var login_icon = document.getElementById("login_icon").value;
var launcher_icons = document.getElementById("launcher_icons").value;




// AccessKeysAndroid

var google_maps_keys = document.getElementById("google_maps_keys").value;
var localytics_key = document.getElementById("localytics_key").value;
var newrelic_key = document.getElementById("newrelic_key").value;
var zenoti_mixpanel_key = document.getElementById("zenoti_mixpanel_key").value;
var mixpanel_key = document.getElementById("mixpanel_key").value;


// MetaDataAndroid

var app_versioncode = document.getElementById("app_versioncode").value;
var app_versionname = document.getElementById("app_versionname").value;
var appId = document.getElementById("appId").value;
var mixpanel_key = document.getElementById("mixpanel_key").value;
var google_key = document.getElementById("google_key").value;


var custom_app = { "cma_json": {
	
		"ColorConfigurations": { //From Customer or Designer   
		
					"nav_bg_color": nav_bg_color,
					"nav_foreground_color": nav_foreground_color,
    				"button_bg_color": button_bg_color,
					"button_foreground_color": button_foreground_color,
					"link_color": link_color
        },
		
		"StringConfigurations": { //From Customer
			"tag_line": tag_line, //heading
			"center_label": center_label,
			"addOn_label": addOn_label,
			"cancellation_policy": cancellation_policy,
			"account_name": account_name, //app name
			"about-us": about_us
        },
		
		"EnvironmentConfigurations": { // From backend team, Need to insert these keys in the database with organisation details.    // text 
		
			"base_url": base_url,
			"client_id": client_id,
			"access_key": access_key,
			"organization_id": organization_id,
			"login_app_id": login_app_id,
			"login_app_secret": login_app_secret,
			"web_url": web_url
		},
	
		"FeatureConfigurations": { // From POC  // properties 

			"gender_selection": gender_yorn,
			"mixpanel": mixpanel_yorn,
			"enable_ada": enable_ada_yorn,
			"ignore_otp": ignore_otp_yorn,
			"enable_apple_pay": apple_pay_yorn,
			"enable_cancel_appt": enable_cancel_appt_yorn
		},
		
		"BrandingImagesiOS": { // From POC or designer
		
			"AppIcon": "URL",// - 1024 x 1024
			"splashLogo": "URL",// - 504 × 375
			"authLogo": "URL"// - 327 × 231
		},
		
		 "BrandingImagesAndroid": { // From POC or designer
		 
			"logo_icon": logo_icon,
			"nav_drawer_icon": nav_drawer_icon,
			"login_icon": login_icon,
			"launcher_icons": launcher_icons
		},
		
		"MetaDataiOS": { // From Developer // new tab
		
			"apple_id": "1208364960",
			"app_identifier": "com.zenoti.massageheightsabc",
			"display_name": "Massge Heights",
			"dev_portal_team_id": "929Q8AE934",
			"team_id": "899547",
			"team_name": "Soham Online Solutions Pvt Ltd",
			"version_number": "1.0.0",
			"beta_app_description": "Using this app you can book appointments with Massage Heights",
			"changelog": "Bug fixes",
			"skip_submission": "Yes",
			"username": "ganesht@zenoti.com",
			"beta_app_feedback_email": "ganesht@zenoti.com"
		},
		
		"AccessKeysiOS": { // From Developer  // new tab
			"google_maps_keys": "AIzaSyBquMyj1IKFc05K33fJZOS6BxFXGhTtsp0",
			"localytics_key": "AIzaSyBquMyj1IKFc05K33fJZOS6BxFXGhTtsp0",
			"newrelic_key":  "AIzaSyBquMyj1IKFc05K33fJZOS6BxFXGhTtsp0",
			"zenoti_mixpanel_key": "AIzaSyBquMyj1IKFc05K33fJZOS6BxFXGhTtsp0",
			"mixpanel_key": "AIzaSyBquMyj1IKFc05K33fJZOS6BxFXGhTtsp0"
		},
		
		"AccessKeysAndroid": { // From Developer

			"google_maps_keys": google_maps_keys,
			"localytics_key": localytics_key,
			"newrelic_key":  newrelic_key,
			"zenoti_mixpanel_key": zenoti_mixpanel_key,
			"mixpanel_key": mixpanel_key
		
		},

		"MetaDataAndroid": { // From Developer
			"app_versioncode": app_versioncode,
			"app_versionname": app_versionname,
			"appId": appId,
			"mixpanel_key": mixpanel_key,
			"google_key": google_key
		},
		
				
} };
	
var custom_app_json = JSON.stringify(custom_app);	



$.ajax({
type: "POST",
url: "http://localhost:8080/project/one.php",
data: {"app_name":app_name,"app_json":custom_app_json},
cache: false,
success: function(data) {
alert(data);

},
error: function(err) {
alert(err);
}
}); 
/* var database = firebase.database().ref().child("zenoti").child("Automation").child(app_name);

database.once('value',function(snapshot){
	
	if(snapshot.exists())
	{
	    database.once('value',function(snapshot){
	    var version_list = Object.keys(snapshot.val());
		var last_version =  version_list[version_list.length-1];
		last_version = parseInt(last_version);
		var latest_version = last_version + 1;
		database.child(latest_version).set(custom_app_json);
		alert("JSON is created and Updated Successfully !!!!");

});
		
	}
	else
	{
		database.child(1).set(custom_app_json);
		alert("JSON is created and Updated Successfully !!!!");
	}
});  */


} 