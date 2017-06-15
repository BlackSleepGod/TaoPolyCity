<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/14 0014
 * Time: 上午 9:36
 */
header('content-type:text/json;charset=utf-8');

$username=$_GET['username'];
$password=$_GET['password'];

if(file_exists('../JSON/persen.json')){
    $arr=json_decode(file_get_contents('../JSON/persen.json'));
}else{
    die(json_encode(array('content'=>'用户不存在')));
}
$a=false;
foreach($arr as $item){
    if($item->username==$username&&$item->password==$password){
        $a=true;
        die(json_encode(array('content'=>'登录成功')));
    }else if($item->username==$username){
        die(json_encode(array('content'=>'密码错误')));
    }
}

if($a==false){
    echo json_encode(array('content'=>'用户不存在'));
}