var urlObj={"desktop": "m.13322.com",
    "development": "m.1332255.com",
    "production": window.location.host
}
var server_ip = urlObj["production"].split("m.")[1]?urlObj["production"]:'m.13322.com'; 
var apkDownloadUrlPrefix = "http://m.13322.com/fileServer/apk/download/";
//国际版下载相关
var downUrl="http://"+server_ip;
var enChannel="17e23dcf30474f9d39a1ff2b288a46b8";//英文国际版本
var thChannel="ac29b9091b95bcea065fc30bb1d3f8b6";//泰国官方版本
var inChannel="b11d33eda7b336e554484b27c712a0de";//印尼官方版本
var koChannel="30c9a04ec9ee7d4ccebdec8396a3f049";//韩国官方版本
var viChannel="9bf99a4ee4d28a13c174939804a40638";//越南官方版本