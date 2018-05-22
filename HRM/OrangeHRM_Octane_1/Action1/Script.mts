'Open Application

SystemUtil.Run "http://10.56.166.231/orangehrm/symfony/web/index.php/auth/login"
''SystemUtil.Run "iexplore.exe", "http://opensource.demo.orangehrmlive.com/index.php/auth/login",,"open"

wait 5

'Login

Browser("Browser").Page("Page").WebEdit("txtUsername").Set "admin" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page").WebEdit("txtPassword").SetSecure "5afbd5a62af5d42d7e07e63a569be19aeb12aac0ebbe" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").WebButton("LOGIN").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN")_;_script infofile_;_ZIP::ssf3.xml_;_

'Create 

Browser("Browser").Page("Page").Link("PIM").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 2").Link("PIM")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Employee List").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 3").Link("Employee List")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").WebButton("Add").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 4").WebButton("Add")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").WebEdit("firstName").Set "test" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebEdit("firstName")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").WebEdit("lastName").Set "user" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebEdit("lastName")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").WebCheckBox("chkLogin").Set "ON" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebCheckBox("chkLogin")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Page").WebEdit("user_name").Set "test.user" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebEdit("user name")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").WebEdit("user_password").SetSecure "5afbab8c16961ec94d88a36f1d22" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebEdit("user password")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").WebEdit("re_password").SetSecure "5afbab979ec42111f3135367b08b" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebEdit("re password")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").WebButton("Save")_;_script infofile_;_ZIP::ssf15.xml_;_

'Delete

Browser("Browser").Page("Page").Link("PIM").Click
Browser("Browser").Page("Page").Link("Employee List").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 5").Link("Employee List")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").WebCheckBox("chkSelectAll").Set "ON" @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 4").WebCheckBox("chkSelectAll")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").WebButton("Delete").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 4").WebButton("Delete")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").WebButton("Ok").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 4").WebButton("Ok")_;_script infofile_;_ZIP::ssf19.xml_;_

'Logout

Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM 3").Link("Logout")_;_script infofile_;_ZIP::ssf20.xml_;_
 @@ hightlight id_;_131102_;_script infofile_;_ZIP::ssf5.xml_;_
