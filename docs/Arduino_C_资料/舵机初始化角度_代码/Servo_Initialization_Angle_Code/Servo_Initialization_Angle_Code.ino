/*
  舵机初始化角度_代码
  http://www.keyes-robot.com
*/

#include <Servo.h>
Servo myservo;  // 创建舵机类实例

void setup()
{
  myservo.attach(10);  //舵机接数字口10
  myservo.write(0);  // 转动到0角度
  delay(500); 
  myservo.write(180);  // 转动到180角度
  delay(500); 
  myservo.write(90);  // 转动到90角度
  delay(500); 
}

void loop(){

}


