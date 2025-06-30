/*
  迷你履带坦克机器人
  课程 4.2
  伺服舵机
  http://www.keyes-robot.com
*/

#include <Servo.h>
Servo myservo;  // 创建舵机类实例

int pos = 0;    //角度变量
void setup()
{
  myservo.attach(10);  //舵机接数字口10
}
void loop()
{
  for (pos = 0; pos <= 180; pos += 1)
  { // 从0到180
    // in steps of 1 degree
    myservo.write(pos);              // 转动到pos角度
    delay(15);                       // 等待15ms  以控制舵机转动速度
  }
  for (pos = 180; pos >= 0; pos -= 1)
  { // 从180到0
    myservo.write(pos);              // 转动到pos角度
    delay(15);                       // 等待15ms  以控制舵机转动速度
  }
}
