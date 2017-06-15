<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 5:20
 */
header('content-type:text/json;charset=utf-8');

$username=$_GET['username'];
$password=$_GET['password'];

if(!file_exists('../JSON/persen.json')){
    $persenArr=array();
}else{
    $persenArr=json_decode(file_get_contents('../JSON/persen.json'));
}
class Persen{
    public $username;
    public $password;
}
$persen=new Persen();
$persen->username=$username;
$persen->password=$password;

$a=false;
foreach($persenArr as $item){
    if($item->username==$username){
        $a=true;
        die(json_encode(array('content'=>'用户名存在')));
    }
}

if($a==false){
    array_push($persenArr,$persen);
}
if(file_put_contents('../JSON/persen.json',json_encode($persenArr))){
    echo json_encode(array('content'=>'注册成功'));
}else{
    echo json_encode(array('content'=>'数据保存失败'));
}