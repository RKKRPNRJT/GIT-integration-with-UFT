Browser("title:=OrangeHRM - Internet Explorer").Page("title:=OrangeHRM").WebEdit("xpath:=//INPUT[@id=""txtUsername""]").Set "admin"
Browser("title:=OrangeHRM - Internet Explorer").Page("title:=OrangeHRM").WebEdit("xpath:=//INPUT[@id=""txtPassword""]").Set "admin1234"
Browser("title:=OrangeHRM - Internet Explorer").Page("title:=OrangeHRM").WebButton("xpath:=//INPUT[@id=""btnLogin""]").Click
