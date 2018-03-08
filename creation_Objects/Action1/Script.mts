
SystemUtil.Run "iexplore.exe", "http://opensource.demo.orangehrmlive.com/index.php/auth/login",,"open"
Browser("CreationTime:=0").Sync
Wait 1,1
set oBrowser = Description.Create
oBrowser("micclass").Value = "Browser"
oBrowser("name").value = "OrangeHRM"

Set oPage = Description.Create
oPage("micclass").Value = "Page"
oPage("title").Value = "OrangeHRM" 

Set oUsernameEdit = Description.Create
oUsernameEdit("micclass").Value = "WebEdit"
oUserNameEdit("name").Value = "txtUserName"

Set OPasswordEdit = Description.Create
OPasswordEdit("micclas").Value = "WebEdit"
OPasswordEdit("name").Value = "txtPassword"

Set oWebButton = Description.Create
oWebButton("micclass").value = "WebButton"
oWebButton("name").value = "LOGIN"
oWebButton("type").Value ="submit"

msgbox oUsernameEdit.Count,vbokonly,"UserName"
msgbox OPasswordEdit.Count,vbokonly,"Password"
msgbox OWebButton.Count,vbokonly,"Login"

Browser(oBrowser).Page(oPage).Webedit(OUsernameEdit).Set "Hello123"
Browser(oBrowser).Page(oPage).Webedit(OPasswordEdit).Set "Hello1234"
msgbox Browser(oBrowser).Page(oPage).WebButton(oWebButton).GetROProperty("name")



Set OUserNameEdit = Nothing
Set OPasswordEdit = Nothing
Set OWebButton = Nothing
Set OPage = Nothing
Set OBrowser = Nothing

