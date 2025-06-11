/*
  迷你履带坦克机器人
  课程 5.1
  超声波传感器
  http://www.keyes-robot.com
*/
int trigPin = 12;    // Trig引脚接D12
int echoPin = 13;    // Echo引脚接D13
long duration, cm, inches;
void setup()
{
  //启动串口监视器
  Serial.begin (9600);
  //定义引脚输入输出模式
  pinMode(trigPin, OUTPUT);//trigPin设置为输出
  pinMode(echoPin, INPUT);//echoPin设置为输入
}
void loop() 
{
  // 拉低2us
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);  //给trigPin至少10us以触发
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // 计算echopin高电平时间
  duration = pulseIn(echoPin, HIGH);
  // 转换为距离
  cm = (duration / 2) / 29.1;   
  inches = (duration / 2) / 74; 
  Serial.print(inches);
  Serial.print("in, ");
  Serial.print(cm);
  Serial.print("cm");
  Serial.println();
  delay(200);
}
