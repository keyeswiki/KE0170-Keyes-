/*
  迷你履带坦克机器人
  课程 4.1
  伺服舵机
  http://www.keyes-robot.com
*/

#define servoPin 10  //舵机引脚接D10
int pos; //舵机的角度变量
int pulsewidth; //舵机的脉宽变量
void setup()
{
  pinMode(servoPin, OUTPUT);  //舵机引脚设置为输出
  procedure(0); //设置舵机的角度为0度
}
void loop()
{
  for (pos = 0; pos <= 180; pos += 1)
  { // 从0到180度，以1°为一步
    procedure(pos);              // 转动到pos角度位置
    delay(15);                   //控制舵机转动的速度
  }
  for (pos = 180; pos >= 0; pos -= 1)
  { // 从180到0度，以1°为一步
    procedure(pos);              // 转动到pos角度位置
    delay(15);
  }
}
//控制舵机的函数
void procedure(int myangle) 
{
  pulsewidth = myangle * 11 + 500;  //计算出脉宽值
  digitalWrite(servoPin, HIGH);
  delayMicroseconds(pulsewidth);   //高电平持续的时间，就是脉宽
  digitalWrite(servoPin, LOW);
  delay((20 - pulsewidth / 1000));  //周期是20ms，所以低电平持续剩下的时间
}
