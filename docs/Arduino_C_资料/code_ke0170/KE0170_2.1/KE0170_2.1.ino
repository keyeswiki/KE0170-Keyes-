/*
  迷你履带坦克机器人
  课程 2.1
  呼吸灯
  http://www.keyes-robot.com
*/

int ledPin = 9;    // 定义LED为数字口9
int value;

void setup() {
  pinMode(ledPin, OUTPUT);    // 初始化LED为输出模式
}

void loop() {
  for (value = 0; value < 255; value = value + 1) {
    analogWrite(ledPin, value);    // led变亮
    delay(5);                      // 延迟5ms
  }

  for (value = 255; value > 0; value = value - 1) {
    analogWrite(ledPin, value);    // led变暗
    delay(5);                      // 延迟5ms
  }
}
