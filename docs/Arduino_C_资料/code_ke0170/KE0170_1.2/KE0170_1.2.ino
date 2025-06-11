/*
  迷你履带坦克机器人
  课程 1.2
  LED闪烁
  http://www.keyes-robot.com
*/
void setup()
{
  pinMode(9, OUTPUT);// 初始化数字口9为输出模式
}
void loop() // 无限循环
{
  digitalWrite(9, HIGH); // 设置数字口输出高电平，打开LED
  delay(100); // 等待0.1秒
  digitalWrite(9, LOW); // 设置数字口输出低电平，关闭LED
  delay(100); // 等待0.1秒
}
