/*
  迷你履带坦克机器人
  课程 3.2
  光敏电阻
  http://www.keyes-robot.com
*/
int ledPin = 9; //定义LED管脚为数字口9
int left_light = 0; //定义左边传感器的变量
int right_light = 0; //定义右边传感器的变量
void setup() {
  Serial.begin(9600);//设置波特率为9600
  pinMode(ledPin, OUTPUT); //设置LED管脚为输出模式
}

void loop() {
  left_light = analogRead(A1); //左边光敏传感器接A1
  right_light = analogRead(A2); //右边光敏传感器接A2
  Serial.print("left_light:");   //打印左边光线模拟值
  Serial.print(left_light);
  Serial.print("  right_light:");   //打印右边光线模拟值
  Serial.println(right_light);
  if (left_light < 300 || right_light < 300) { //其中一个模拟值低于300
    digitalWrite(ledPin, HIGH); //点亮LED
  }
  else {
    digitalWrite(ledPin, LOW); //LED熄灭
  }

}
