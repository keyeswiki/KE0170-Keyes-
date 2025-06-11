/*
  迷你履带坦克机器人
  课程 2.2
  呼吸灯
  http://www.keyes-robot.com
*/

int ledPin = 9;    // 定义LED为数字口9

void setup() {
  pinMode(ledPin, OUTPUT);    // 初始化LED为输出模式
}

void loop() {
  for (int value = 0; value < 255; value = value + 1) {
    analogWrite(ledPin, value);    // led变亮
    delay(30);                     // 延迟30ms
  }

  for (int value = 255; value > 0; value = value - 1) {
    analogWrite(ledPin, value);    // led变暗
    delay(30);                     // 延迟30ms
  }
}
