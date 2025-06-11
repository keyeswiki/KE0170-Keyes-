/*
  迷你履带坦克机器人
  课程 3.1
  光敏电阻
  http://www.keyes-robot.com
*/
int light;  //定义变量light
void setup() {
  Serial.begin(9600);//设置波特率为9600
}

void loop() {
  light = analogRead(A1); //读取到的模拟值赋给light变量
  Serial.print("light:");   //打印光线模拟值
  Serial.println(light);
  delay(100);  //延时100ms
}
