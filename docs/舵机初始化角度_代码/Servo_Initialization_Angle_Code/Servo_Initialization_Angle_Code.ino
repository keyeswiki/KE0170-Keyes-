/*
  舵机初始化角度_代码
  http://www.keyes-robot.com
*/

const int ServoPin = 10; // 定义舵机连接的引脚

void ServoControl(int servoAngle) {
    double thisAngle = map(servoAngle, 0, 180, 500, 2500); // 等比例角度值范围转换高电平持续时间范围
    unsigned char i = 50; // 50Hz 每秒的周期次数（周期/秒）即1S 50 个周期，每个周期20ms
    while (i--) {
        digitalWrite(ServoPin, HIGH); // 舵机处于高电平状态
        delayMicroseconds(thisAngle); // 高电平时间
        digitalWrite(ServoPin, LOW);  // 舵机处于低电平状态
        delayMicroseconds(20000 - thisAngle); // 每个周期20ms减去高电平持续时间
    }
}

void setup() {
    pinMode(ServoPin, OUTPUT); // 设置ServoPin为输出模式
    digitalWrite(ServoPin, LOW); // 先保证拉低
    ServoControl(0); // 舵机角度为0°
    delay(500);
    ServoControl(180); // 舵机角度为180°
    delay(500);
    ServoControl(90); // 舵机角度为90°
    delay(500);
}

void loop() {

}

